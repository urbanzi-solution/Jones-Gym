// /src/app/demo/page.js
import { query } from '@/lib/db'

export default async function DemoPage() {
  // Fetch data from Neon
  const result = await query('SELECT * FROM user_data')
  const data = result.rows

  // Log to server console (visible in terminal)
  console.log('Server-side data:', data)

  return (
    <div>
      <h1>User Data in the page</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.phone_no}
          </li>
        ))}
      </ul>
    </div>

    
  )
}