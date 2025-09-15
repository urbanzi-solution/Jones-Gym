module.exports = {

"[project]/.next-internal/server/app/api/edit_amount/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/api/edit_amount/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { user_id, selectedPlan, bill_no, new_bill_no, totalAmountReceived, newAmountReceived, discount, balance, trainer, transaction_type } = await request.json();
        console.log("✅ Received data from client:", {
            user_id,
            selectedPlan,
            bill_no,
            new_bill_no,
            totalAmountReceived,
            newAmountReceived,
            discount,
            balance,
            trainer,
            transaction_type
        });
        // Validate input data
        if (!user_id || !selectedPlan || !bill_no || !new_bill_no || totalAmountReceived == null || newAmountReceived == null || discount == null || balance == null || trainer == null) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClient"])();
        try {
            // Start a transaction to ensure both operations succeed or fail together
            await client.query('BEGIN');
            // Update existing record in membership_plans table
            const updateQueryText = `
        UPDATE membership_plans 
        SET 
          discount = $1,
          trainer = $5
        WHERE user_id = $2 AND plan_name = $3 AND bill_no = $4
        RETURNING *;
      `;
            const updateValues = [
                discount,
                user_id,
                selectedPlan,
                bill_no,
                trainer
            ];
            const updateResult = await client.query(updateQueryText, updateValues);
            if (updateResult.rowCount === 0) {
                await client.query('ROLLBACK');
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'No matching record found to update'
                }, {
                    status: 404
                });
            }
            const insertQueryText = `
        INSERT INTO transactions (user_id, old_bill, bill_no, plan_name, amount, balance, date, trans_type)
        VALUES ($1, $2, $3, $4, $5, $6, CURRENT_DATE, $7)
        RETURNING *;
      `;
            const insertValues = [
                user_id,
                bill_no,
                new_bill_no,
                selectedPlan,
                newAmountReceived,
                balance,
                transaction_type // $7 - transaction_type
            ];
            const insertResult = await client.query(insertQueryText, insertValues);
            // Commit the transaction
            await client.query('COMMIT');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Balance updated and transaction recorded successfully',
                membershipData: updateResult.rows[0],
                transactionData: insertResult.rows[0]
            }, {
                status: 200
            });
        } catch (queryError) {
            // Rollback the transaction on error
            await client.query('ROLLBACK');
            throw queryError;
        } finally{
        // await client.end();
        }
    } catch (error) {
        console.error('Error updating balance and recording transaction:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__df50e613._.js.map