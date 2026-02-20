import React, { useState, useRef, useEffect } from 'react'
import { usePurple } from './context/PurpleContext'

export default function TextBox() {
  const {
    showMsgBox,
    setShowMsgBox,
    msgBoxText,
    starDetail,
  } = usePurple()

  /* ===== CONFIG ===== */
  const PADDING = 12

  const getBoxSize = () => {
    const width = Math.min(400, window.innerWidth - PADDING * 2)
    const height = Math.min(280, window.innerHeight - PADDING * 2)
    return { width, height }
  }

  const [{ boxWidth, boxHeight }, setBoxSize] = useState(() => {
    const { width, height } = getBoxSize()
    return { boxWidth: width, boxHeight: height }
  })

  /* ===== POSITION ===== */
  const [position, setPosition] = useState(() => {
    const { width, height } = getBoxSize()
    return {
      x: Math.max(PADDING, (window.innerWidth - width) / 2),
      y: Math.max(PADDING, (window.innerHeight - height) / 2),
    }
  })

  /* ===== DRAG STATE ===== */
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  /* ===== CENTER & RESIZE ON SCREEN CHANGE ===== */
  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getBoxSize()
      setBoxSize({ boxWidth: width, boxHeight: height })

      setPosition(prev => ({
        x: Math.min(
          window.innerWidth - width - PADDING,
          Math.max(PADDING, prev.x)
        ),
        y: Math.min(
          window.innerHeight - height - PADDING,
          Math.max(PADDING, prev.y)
        ),
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* ===== DRAG HANDLERS ===== */
  const startDrag = (clientX, clientY) => {
    dragging.current = true
    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    }
  }

  const onMove = (clientX, clientY) => {
    if (!dragging.current) return

    const newX = clientX - offset.current.x
    const newY = clientY - offset.current.y

    setPosition({
      x: Math.min(
        window.innerWidth - boxWidth - PADDING,
        Math.max(PADDING, newX)
      ),
      y: Math.min(
        window.innerHeight - boxHeight - PADDING,
        Math.max(PADDING, newY)
      ),
    })
  }

  const stopDrag = () => {
    dragging.current = false
  }

  /* ===== MOUSE ===== */
  const onMouseDown = e => startDrag(e.clientX, e.clientY)
  const onMouseMove = e => onMove(e.clientX, e.clientY)

  /* ===== TOUCH ===== */
  const onTouchStart = e => {
    const t = e.touches[0]
    startDrag(t.clientX, t.clientY)
  }

  const onTouchMove = e => {
    const t = e.touches[0]
    onMove(t.clientX, t.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stopDrag)
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', stopDrag)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stopDrag)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', stopDrag)
    }
  }, [position, boxWidth, boxHeight])

  if (!showMsgBox) return null

  /* ===== RENDER ===== */
  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: boxWidth,
        height: boxHeight,
        zIndex: 9999,
      }}
      className="bg-white dark:bg-black text-black dark:text-white
                 border border-gray-400 rounded shadow-lg flex flex-col"
    >
      {/* HEADER (DRAG HANDLE) */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        className="cursor-move px-3 py-1 bg-gray-200 dark:bg-gray-800
                   font-bold text-sm select-none flex justify-between"
      >
        <span>Details</span>
        <button
          onClick={() => setShowMsgBox(false)}
          className="text-red-500"
        >
          ✕
        </button>
      </div>

      {/* CONTENT (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto px-3 py-2 text-sm whitespace-pre-wrap">
        <p>{msgBoxText}</p>
        <p className="mt-2">{starDetail}</p>
      </div>

      {/* FOOTER (FIXED OK BUTTON) */}
      {/* <div className="p-2 flex justify-end border-t border-gray-300">
        <button
          onClick={() => setShowMsgBox(false)}
          className="px-4 py-1 bg-blue-500 text-white rounded"
        >
          OK
        </button>
      </div> */}
    </div>
  )
}
