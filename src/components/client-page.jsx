// /src/app/demo/client-page.jsx
'use client'

import { useEffect } from 'react'

export default function DemoClientPage() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/demo')
        const data = await response.json()
        console.log('Client-side data:', data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    
    fetchData()
  }, [])

  return (
    <div>
      <h1>Check your browser console for data</h1>
      <p>Open developer tools (F12) to see the logged data</p>
    </div>
  )
}