import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fait apparaître en douceur les éléments .reveal quand ils entrent dans l'écran.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const items = document.querySelectorAll('.reveal:not(.in)')
    const show = (el) => {
      el.classList.add('in')
      setTimeout(() => el.classList.add('done'), 1300)
    }
    if (!('IntersectionObserver' in window)) { items.forEach(show); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
