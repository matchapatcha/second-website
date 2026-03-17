import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H, particles, animId

    const PARTICLE_COUNT = 80
    const CONNECT_DIST = 140
    const RGB = '235, 235, 235'

    const rand = (min, max) => min + Math.random() * (max - min)

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const init = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.25, 0.25), vy: rand(-0.25, 0.25),
        r: rand(1, 2.5),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            ctx.strokeStyle = `rgba(${RGB}, ${(1 - dist / CONNECT_DIST) * 0.25})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach(p => {
        ctx.fillStyle = `rgba(${RGB}, 0.55)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })
      animId = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => {
      particles.forEach(p => {
        p.vx += (e.clientX - W / 2) * 0.00012
        p.vy += (e.clientY - H / 2) * 0.00012
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 0.6) { p.vx = (p.vx / speed) * 0.6; p.vy = (p.vy / speed) * 0.6 }
      })
    }

    const onResize = () => { resize(); init() }

    resize(); init(); draw()
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>
        <p className={styles.sub}>big idiot</p>
        <h1 className={styles.title}>matchapatcha<span className="accent">.</span></h1>
      </div>
      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  )
}
