module.exports = {

"[project]/.next-internal/server/app/api/members/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/members/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    let client;
    try {
        const data = await request.json();
        const { gym_id, full_name, gender, weight, dob, about, location, phone, whatsapp, join_date, membership_plans = [] } = data;
        // console.log("🚀 Received data from frontend:", data);
        // Get database client
        client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClient"])();
        // Begin transaction
        await client.query('BEGIN');
        // Insert into user_data
        const query = `
      INSERT INTO user_data (
        user_id,
        name,
        gender,
        weight,
        date_of_birth,
        about,
        location,
        phone_no,
        whatsapp_no,
        joining_date
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
        const values = [
            gym_id,
            full_name,
            gender,
            weight,
            dob,
            about,
            location,
            phone,
            whatsapp,
            join_date
        ];
        const result = await client.query(query, values);
        // Insert membership plans if any
        if (membership_plans.length > 0) {
            const planInsertQuery = `
        INSERT INTO membership_plans (
          user_id, plan_name, bill_no, amount, discount, balance, trans_type, trainer, date, exp_date
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `;
            for (const plan of membership_plans){
                const { plan_name, amount, discount, balance, transaction_type, bill_no, trainer, join_date: planJoinDate, expiry_date } = plan;
                const parsedAmount = parseInt(amount);
                const parsedDiscount = parseInt(discount);
                const parsedBalance = parseInt(balance);
                await client.query(planInsertQuery, [
                    gym_id,
                    plan_name || null,
                    bill_no || null,
                    isNaN(parsedAmount) ? null : parsedAmount,
                    isNaN(parsedDiscount) ? null : parsedDiscount,
                    isNaN(parsedBalance) ? null : parsedBalance,
                    transaction_type || null,
                    trainer || null,
                    planJoinDate || join_date || null,
                    expiry_date || null
                ]);
            }
        }
        // Commit transaction
        await client.query('COMMIT');
        return new Response(JSON.stringify({
            message: 'Member added successfully',
            data: result.rows[0]
        }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        if (client) {
            await client.query('ROLLBACK');
        }
        console.error('Error adding member:', error);
        return new Response(JSON.stringify({
            error: 'Failed to add member',
            details: error.message
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
async function GET(request) {
    const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClient"])();
    try {
        // Fetch plan names from plans table
        const plansQuery = 'SELECT plan_name, duration, amount FROM plans WHERE status = $1';
        const plansResult = await client.query(plansQuery, [
            'active'
        ]);
        const plans = plansResult.rows.map((row)=>({
                plan_name: row.plan_name,
                duration: row.duration,
                amount: row.amount
            }));
        // console.log(plans);
        // Fetch trainer id and name from trainers table
        const trainersQuery = 'SELECT trainer_id, name FROM trainers';
        const trainersResult = await client.query(trainersQuery);
        const trainers = trainersResult.rows.map((row)=>({
                trainer_id: row.trainer_id,
                name: row.name
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            plansResult,
            plans,
            trainers
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    } finally{
    // await client.end();
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__4da1d713._.js.map