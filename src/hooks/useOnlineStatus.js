import { useEffect, useState } from "react"

export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    function handleStatusChange() {
      setOnline(navigator.onLine)
    }

    window.addEventListener("online", handleStatusChange)
    window.addEventListener("offline", handleStatusChange)

    return () => {
      window.removeEventListener("online", handleStatusChange)
      window.removeEventListener("offline", handleStatusChange)
    }
  }, [])

  return { online, setOnline }
}
