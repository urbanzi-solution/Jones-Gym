module.exports = {

"[project]/.next-internal/server/app/api/add_staff/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/db.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getClient": (()=>getClient),
    "query": (()=>query)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
;
// Create a Neon serverless client
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(process.env.NEON_DATABASE_URL, {
    // Optional: Configure fetch options for the Neon driver
    fetchOptions: {
        cache: 'no-store'
    }
});
async function query(text, params = []) {
    try {
        const result = await sql.query(text, params);
        // Return result in a pg-compatible format
        return {
            rows: result
        };
    } catch (err) {
        console.error('Database query error:', err.message);
        throw err;
    }
}
async function getClient() {
    // Neon driver doesn't use traditional connections, so return a client-like object
    return {
        query: async (text, params = [])=>{
            try {
                const result = await sql.query(text, params);
                return {
                    rows: result
                };
            } catch (err) {
                console.error('Database query error:', err.message);
                throw err;
            }
        },
        release: ()=>{
        // No-op since Neon driver doesn't use connection pooling
        }
    };
}
}}),
"[project]/src/app/api/add_staff/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src\app\api\add_staff\route.js
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
;
async function POST(request) {
    let client;
    try {
        // Parse JSON data from the request body
        const data = await request.json();
        const gymID = data.gymID;
        const fullName = data.fullName;
        const gender = data.gender;
        const dob = data.dob || null;
        const location = data.location;
        const phone = data.phone;
        const whatsapp = data.whatsapp || null;
        const joiningdate = data.joiningdate || null;
        console.log("Staff data received:", data);
        // Validate required fields
        if (!gymID || !fullName || !gender || !location || !phone) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Missing required fields: gymID, fullName, gender, location, and phone are required'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Get database client
        client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClient"])();
        // Check if trainer_id already exists
        const checkQuery = `SELECT trainer_id FROM trainers WHERE trainer_id = $1`;
        const checkResult = await client.query(checkQuery, [
            gymID
        ]);
        if (checkResult.rows.length > 0) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Trainer with this Gym ID already exists'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        // Insert staff data into database
        const query = `
      INSERT INTO trainers (
        trainer_id, name, gender, date_of_birth, location, 
        phone_no, whatsapp_number, joining_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING trainer_id
    `;
        const values = [
            gymID,
            fullName,
            gender,
            dob,
            location,
            phone,
            whatsapp,
            joiningdate
        ];
        const result = await client.query(query, values);
        console.log("Staff member added successfully with ID:", result.rows[0].trainer_id);
        return new Response(JSON.stringify({
            success: true,
            trainer_id: result.rows[0].trainer_id,
            message: 'Staff member added successfully'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error adding staff:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to add staff member',
            error: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } finally{
        if (client) {
            await client.release();
        }
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ecd9ea84._.js.map