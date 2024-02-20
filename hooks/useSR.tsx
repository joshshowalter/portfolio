import { MutableRefObject, useEffect } from 'react'

export const useSR = (ref: MutableRefObject<any>) => {
  useEffect(() => {
    const animate = async () => {
      if (ref.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(ref.current, {
          delay: 500,
          duration: 750,
          distance: '30px',
        })
      }
    }
    animate()
  }, [])
}
