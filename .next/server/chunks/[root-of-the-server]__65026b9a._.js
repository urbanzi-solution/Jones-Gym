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
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[project]/src/app/api/upload_profile_picture/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST),
    "config": (()=>config)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$busboy$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/busboy/lib/index.js [app-route] (ecmascript)"); // import all to access .default
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
;
;
;
const config = {
    api: {
        bodyParser: false
    }
};
// Helper to convert Web ReadableStream to Node.js Readable stream
function webStreamToNodeStream(webStream) {
    const reader = webStream.getReader();
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"]({
        async read () {
            try {
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        this.push(null);
                        break;
                    }
                    this.push(Buffer.from(value));
                }
            } catch (error) {
                this.destroy(error);
            }
        }
    });
}
async function POST(req) {
    return new Promise((resolve)=>{
        // Use busboy default export as constructor
        const BusboyConstructor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$busboy$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        const busboy = new BusboyConstructor({
            headers: Object.fromEntries(req.headers)
        });
        let gymId = null;
        let fileBuffers = [];
        let fileMimeType = null;
        busboy.on('field', (fieldname, val)=>{
            if (fieldname === 'gym_id') {
                gymId = val;
            }
        });
        busboy.on('file', (fieldname, fileStream, filename, encoding, mimetype)=>{
            if (fieldname === 'profilePicture') {
                fileMimeType = mimetype;
                fileStream.on('data', (data)=>{
                    fileBuffers.push(data);
                });
                fileStream.on('error', (err)=>{
                    resolve(new Response(JSON.stringify({
                        error: 'File stream error: ' + err.message
                    }), {
                        status: 500
                    }));
                });
            } else {
                fileStream.resume();
            }
        });
        busboy.on('error', (err)=>{
            resolve(new Response(JSON.stringify({
                error: 'Form parsing error: ' + err.message
            }), {
                status: 500
            }));
        });
        busboy.on('finish', async ()=>{
            if (!gymId) {
                return resolve(new Response(JSON.stringify({
                    error: 'gym_id is required'
                }), {
                    status: 400
                }));
            }
            if (fileBuffers.length === 0) {
                return resolve(new Response(JSON.stringify({
                    error: 'profilePicture file is required'
                }), {
                    status: 400
                }));
            }
            const fileData = Buffer.concat(fileBuffers);
            const s3 = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["S3Client"]({
                region: 'auto',
                endpoint: process.env.R2_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.R2_ACCESS_KEY_ID,
                    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
                }
            });
            try {
                await s3.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["PutObjectCommand"]({
                    Bucket: process.env.R2_BUCKET,
                    Key: gymId,
                    Body: fileData,
                    ContentType: fileMimeType || 'application/octet-stream'
                }));
                resolve(new Response(JSON.stringify({
                    success: true,
                    key: gymId
                }), {
                    status: 200
                }));
            } catch (uploadError) {
                resolve(new Response(JSON.stringify({
                    error: 'Upload failed: ' + uploadError.message
                }), {
                    status: 500
                }));
            }
        });
        // Convert Web ReadableStream to Node.js Readable and pipe to busboy
        const nodeStream = webStreamToNodeStream(req.body);
        nodeStream.pipe(busboy);
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__65026b9a._.js.map