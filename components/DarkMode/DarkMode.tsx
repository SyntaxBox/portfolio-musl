import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
function DarkModeButton() {

 const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

    useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
            <DarkModeSwitch checked={theme=== "dark"} onChange={() => setTheme(theme=== "light"? "dark":"light")} size={22} sunColor="#374151" />

 
  );
}

export default DarkModeButton;