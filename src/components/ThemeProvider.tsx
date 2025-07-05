
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeTransition = {
  x: number
  y: number
  active: boolean
  nextTheme: Theme | null
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  triggerThemeTransition: (x: number, y: number, nextTheme: Theme) => void
  themeTransition: ThemeTransition
  transitionActive: boolean
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  triggerThemeTransition: () => null,
  themeTransition: { x: 0, y: 0, active: false, nextTheme: null },
  transitionActive: false,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  const [themeTransition, setThemeTransition] = useState<ThemeTransition>({ x: 0, y: 0, active: false, nextTheme: null })
  const [transitionActive, setTransitionActive] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])

  const triggerThemeTransition = (x: number, y: number, nextTheme: Theme) => {
    setThemeTransition({ x, y, active: true, nextTheme })
    setTransitionActive(true)
    setTimeout(() => {
      setTheme(nextTheme)
      localStorage.setItem(storageKey, nextTheme)
    }, 350)
    setTimeout(() => {
      setThemeTransition({ x: 0, y: 0, active: false, nextTheme: null })
      setTransitionActive(false)
    }, 700)
  }

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    triggerThemeTransition,
    themeTransition,
    transitionActive,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
