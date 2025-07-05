
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, triggerThemeTransition } = useTheme()
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      triggerThemeTransition(x, y, theme === "light" ? "dark" : "light")
    }
  }

  return (
    <Button
      ref={btnRef}
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
