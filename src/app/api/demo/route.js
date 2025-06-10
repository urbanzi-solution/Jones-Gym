// // /src/app/api/demo/route.js
// import { query } from '@/lib/db'

// export async function GET() {
//   try {
//     const result = await query('SELECT * FROM demo')
//     return Response.json(result.rows)
//   } catch (error) {
//     return Response.json(
//       { error: error.message },
//       { status: 500 }
//     )
//   }
// }