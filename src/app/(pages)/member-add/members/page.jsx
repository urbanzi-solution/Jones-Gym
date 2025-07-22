// /src/app/members/page.js
import { query } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function MembersPage() {
  const { rows } = await query('SELECT * FROM user_data')
  
  return (
    <div>
      <h1>Members</h1>
      <ul>
        {rows.map(member => (
          <li key={member.id}>
            {member.name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  )
}