module.exports = {

"[project]/.next-internal/server/app/api/upload_profile_picture/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@aws-sdk/client-s3", () => require("@aws-sdk/client-s3"));

module.exports = mod;
}}),
"[project]/src/app/api/upload_profile_picture/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src\app\api\upload_profile_picture\route.js
__turbopack_context__.s({
    "POST": (()=>POST),
    "config": (()=>config)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
;
const config = {
    api: {
        bodyParser: false
    }
};
async function POST(request) {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.startsWith('multipart/form-data')) {
        return new Response(JSON.stringify({
            error: 'Unsupported content type'
        }), {
            status: 415
        });
    }
    try {
        const formData = await request.formData();
        const gymId = formData.get('gym_id');
        const file = formData.get('profilePicture');
        const category = formData.get('category'); // Add category field
        if (!gymId) {
            return new Response(JSON.stringify({
                error: 'gym_id is required'
            }), {
                status: 400
            });
        }
        if (!file || typeof file === 'string') {
            return new Response(JSON.stringify({
                error: 'profilePicture is required'
            }), {
                status: 400
            });
        }
        // Validate category (optional but recommended)
        const validCategories = [
            'user',
            'trainer',
            'equipment',
            'classes'
        ];
        const selectedCategory = category && validCategories.includes(category) ? category : 'users';
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const s3 = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["S3Client"]({
            region: 'auto',
            endpoint: process.env.R2_ENDPOINT,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
            }
        });
        // Create organized key with category prefix
        const fileExtension = file.name ? file.name.split('.').pop() : 'jpg';
        const timestamp = Date.now();
        const objectKey = `${selectedCategory}/${gymId}.${fileExtension}`;
        const uploadResult = await s3.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["PutObjectCommand"]({
            Bucket: process.env.R2_BUCKET,
            Key: objectKey,
            Body: fileBuffer,
            ContentType: file.type || 'application/octet-stream'
        }));
        return new Response(JSON.stringify({
            success: true,
            key: objectKey,
            category: selectedCategory,
            uploadResult
        }), {
            status: 200
        });
    } catch (err) {
        return new Response(JSON.stringify({
            error: 'Upload failed: ' + err.message
        }), {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__07192d55._.js.map