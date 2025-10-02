"use client"

import { useEffect } from "react"

export function CursorSpotlight() {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const spotlight = document.querySelector(".cursor-spotlight::before") as HTMLElement
      if (spotlight) {
        spotlight.style.left = e.clientX + "px"
        spotlight.style.top = e.clientY + "px"
      }
    }

    // Create a custom cursor element
    const cursor = document.createElement("div")
    cursor.className =
      "fixed pointer-events-none z-[9999] w-10 h-10 rounded-full transition-opacity duration-200 opacity-0"
    cursor.style.transform = "translate(-50%, -50%)"
    cursor.style.background = "radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 30%, transparent 70%)"
    document.body.appendChild(cursor)

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    const showCursor = () => {
      cursor.style.opacity = "1"
    }

    const hideCursor = () => {
      cursor.style.opacity = "0"
    }

    // Update cursor style based on theme
    const updateCursorTheme = () => {
      const isDark = document.documentElement.classList.contains("dark")
      cursor.style.background = isDark
        ? "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, transparent 70%)"
        : "radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 30%, transparent 70%)"
    }

    // Initial theme setup
    updateCursorTheme()

    // Listen for theme changes
    const observer = new MutationObserver(updateCursorTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseenter", showCursor)
    document.addEventListener("mouseleave", hideCursor)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseenter", showCursor)
      document.removeEventListener("mouseleave", hideCursor)
      observer.disconnect()
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return null
}
