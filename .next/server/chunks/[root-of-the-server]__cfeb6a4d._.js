module.exports = {

"[project]/.next-internal/server/app/api/fetch_staff_attendance/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/fetch_staff_attendance/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src\app\api\fetch_staff_attendance\route.js
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const trainer_id = searchParams.get('trainer_id');
        const year = searchParams.get('year');
        const month = searchParams.get('month');
        if (!trainer_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'trainer_id is required'
            }, {
                status: 400
            });
        }
        const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClient"])();
        let query = 'SELECT * FROM staff_attendance WHERE trainer_id = $1';
        let params = [
            trainer_id
        ];
        // Add date filtering if year and month are provided
        if (year && month) {
            const paddedMonth = month.toString().padStart(2, '0');
            const startDate = `${year}-${paddedMonth}-01`;
            // Calculate last day of the month
            const lastDay = new Date(year, month, 0).getDate();
            const endDate = `${year}-${paddedMonth}-${lastDay}`;
            query += ' AND date >= $2 AND date <= $3';
            params.push(startDate, endDate);
        }
        query += ' ORDER BY date ASC';
        const { rows } = await client.query(query, params);
        const attendanceRecords = rows.map((row, index)=>({
                id: index + 1,
                trainer_id: row.trainer_id,
                date: row.date,
                day: new Date(row.date).getDate(),
                month: new Date(row.date).getMonth() + 1,
                year: new Date(row.date).getFullYear(),
                mrng_from: row.mrng_from,
                mrng_to: row.mrng_to,
                mrng_status: row.mrng_status,
                evng_from: row.evng_from,
                evng_to: row.evng_to,
                evng_status: row.evng_status,
                formatted_date: new Date(row.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: attendanceRecords,
            total_records: attendanceRecords.length,
            trainer_id: trainer_id
        });
    } catch (error) {
        console.error('Error fetching staff attendance:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__cfeb6a4d._.js.map