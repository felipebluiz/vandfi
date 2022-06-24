import React, { useState, useEffect, useRef } from 'react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { IconButton } from '../IconButton'

import { Container } from './styles'

interface CarouselProps {
  children: React.ReactNode
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carousel = useRef() as React.MutableRefObject<HTMLDivElement>
  const [showSlideLeft, setShowSlideLeft] = useState(false)
  const [showSlideRight, setShowSlideRight] = useState(true)
  const { width } = useWindowDimensions()

  const onScroll = () => {
    if (carousel.current.scrollLeft === 0) {
      setShowSlideLeft(false)
    } else {
      setShowSlideLeft(true)
    }

    if (
      carousel.current.scrollWidth - carousel.current.offsetWidth ===
      carousel.current.scrollLeft
    ) {
      setShowSlideRight(false)
    } else {
      setShowSlideRight(true)
    }
  }

  const slideLeft = () => {
    const scrollWidth =
      width >= 768
        ? ((25 * carousel.current.offsetWidth) / 100 + 3) * 4
        : carousel.current.offsetWidth + 15

    carousel.current.scrollBy({
      top: 0,
      left: -scrollWidth,
      behavior: 'smooth'
    })
  }

  const slideRight = () => {
    const scrollWidth =
      width >= 768
        ? ((25 * carousel.current.offsetWidth) / 100 + 3) * 4
        : carousel.current.offsetWidth + 15

    carousel.current.scrollBy({
      top: 0,
      left: +scrollWidth,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    let isDown = false
    let isDragged = false
    let startX = 0
    let scrollLeft = 0

    const preventClick = (e: MouseEvent) => {
      e.preventDefault()
      e.stopImmediatePropagation()
    }

    carousel.current.addEventListener('mousedown', e => {
      isDown = true
      startX = e.pageX - carousel.current.offsetLeft
      scrollLeft = carousel.current.scrollLeft
    })

    carousel.current.addEventListener('mouseleave', () => {
      isDown = false
    })

    carousel.current.addEventListener('mouseup', () => {
      isDown = false

      const elements = document.getElementsByClassName('card-item')

      if (isDragged) {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLDivElement

          element.addEventListener('click', preventClick)
        }
      } else {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as HTMLDivElement

          element.removeEventListener('click', preventClick)
        }
      }

      isDragged = false
    })

    carousel.current.addEventListener('mousemove', e => {
      if (!isDown) return

      isDragged = true

      e.preventDefault()

      const x = e.pageX - carousel.current.offsetLeft
      const walk = x - startX

      carousel.current.scrollLeft = scrollLeft - walk
    })
  })

  return (
    <Container>
      {showSlideLeft && (
        <IconButton
          icon={faAngleLeft}
          variant="primary"
          size="md"
          className="carousel-icon left"
          onClick={slideLeft}
        />
      )}
      <div ref={carousel} onScroll={onScroll} className="items">
        {children}
      </div>
      {showSlideRight && (
        <IconButton
          icon={faAngleRight}
          variant="primary"
          size="md"
          className="carousel-icon right"
          onClick={slideRight}
        />
      )}
    </Container>
  )
}
