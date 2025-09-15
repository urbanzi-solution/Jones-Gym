(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Remarks_form.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Remarks_form.jsx
__turbopack_context__.s({
    "default": (()=>RemarksForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RemarksForm({ user_id, onSave, onCancel }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [remarks, setRemarks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemarksForm.useEffect": ()=>{
            if (user_id) {
                setName(user_id);
            }
        }
    }["RemarksForm.useEffect"], [
        user_id
    ]);
    const handleCancel = ()=>{
        if (onCancel) {
            onCancel();
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/add_Remark', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: name,
                    description: remarks
                })
            });
            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || 'Failed to add remark');
            }
            if (onSave) onSave({
                name,
                remarks
            });
        } catch (err) {
            setError(err.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "User ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        placeholder: "Enter user ID",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        disabled: isSubmitting,
                        maxLength: 10
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Remarks_form.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "Remarks"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 4,
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        placeholder: "Enter remarks",
                        value: remarks,
                        onChange: (e)=>setRemarks(e.target.value),
                        disabled: isSubmitting,
                        maxLength: 50
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Remarks_form.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Remarks_form.jsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCancel,
                        className: "w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition",
                        disabled: isSubmitting,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-[#FFDD4A] text-black font-bold py-3 rounded-lg hover:bg-[#ffd700] transition",
                        disabled: isSubmitting,
                        children: isSubmitting ? 'Saving...' : 'Save Remarks'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Remarks_form.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Remarks_form.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Remarks_form.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(RemarksForm, "IEN60o83AlEWXLbFKo8ponTZqRY=");
_c = RemarksForm;
var _c;
__turbopack_context__.k.register(_c, "RemarksForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Blacklist_form.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Blacklist_form.jsx
__turbopack_context__.s({
    "default": (()=>BlacklistForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BlacklistForm({ user_id, onSave, onCancel }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlacklistForm.useEffect": ()=>{
            if (user_id) {
                setName(user_id);
            }
        }
    }["BlacklistForm.useEffect"], [
        user_id
    ]);
    const handleCancel = ()=>{
        if (onCancel) {
            onCancel();
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/add_blacklist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: name,
                    description: reason
                })
            });
            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || 'Failed to add blacklist entry');
            }
            if (onSave) onSave({
                name,
                reason
            });
        } catch (err) {
            setError(err.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "User ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        placeholder: "Enter user ID",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Blacklist_form.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "Reason"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 4,
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        placeholder: "Enter reason",
                        value: reason,
                        onChange: (e)=>setReason(e.target.value),
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Blacklist_form.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Blacklist_form.jsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCancel,
                        className: "w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition",
                        disabled: isSubmitting,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-[#FFDD4A] text-black font-bold py-3 rounded-lg hover:bg-[#ffd700] transition",
                        disabled: isSubmitting,
                        children: isSubmitting ? 'Adding...' : 'Add To Blacklist'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blacklist_form.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Blacklist_form.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Blacklist_form.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(BlacklistForm, "IIHLey3+ywmtdmn84xuOmkrmIuI=");
_c = BlacklistForm;
var _c;
__turbopack_context__.k.register(_c, "BlacklistForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/edit_user_data.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/edit_user_data.jsx
__turbopack_context__.s({
    "default": (()=>EditUserData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EditUserData({ member, onCancel }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveSuccess, setSaveSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const convertDate = (dateString)=>{
        if (!dateString) return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    // Initialize state with member data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user_id: member?.user_id || "",
        name: member?.name || "",
        gender: member?.gender || "",
        date_of_birth: convertDate(member?.date_of_birth) || "",
        location: member?.location || "",
        phone_no: member?.phone_no || "",
        whatsapp_no: member?.whatsapp_no || "",
        joining_date: convertDate(member?.joining_date) || "",
        reason: member?.reason || ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleCancel = ()=>{
        if (onCancel) {
            onCancel();
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSaving(true);
        setError(null);
        try {
            const response = await fetch('/api/edit_user_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    user_id: member.user_id
                })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || 'Failed to update user data');
            }
            // Show success message with countdown
            setSaveSuccess(true);
            setCountdown(3);
            // Countdown timer
            const countdownInterval = setInterval(()=>{
                setCountdown((prev)=>{
                    if (prev <= 1) {
                        clearInterval(countdownInterval);
                        router.push(`/member-profile?member_id=${member.user_id}`);
                        if (onCancel) {
                            onCancel();
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } catch (err) {
            setError(err.message);
            setIsSaving(false); // Only set to false on error
        }
    // Don't set isSaving to false on success to prevent UI flickering during redirect
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "User ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "user_id",
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-gray-400",
                        value: formData.user_id,
                        readOnly: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        value: formData.name,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-2",
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "gender",
                        className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                        value: formData.gender,
                        onChange: handleChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: formData.gender
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_user_data.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "male",
                                children: "Male"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_user_data.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "female",
                                children: "Female"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_user_data.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "other",
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_user_data.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            [
                'date_of_birth',
                'joining_date'
            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-300 mb-2",
                            children: field.split('_').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit_user_data.jsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            name: field,
                            className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                            value: formData[field],
                            onChange: handleChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit_user_data.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, field, true, {
                    fileName: "[project]/src/components/edit_user_data.jsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)),
            [
                'location',
                'phone_no',
                'whatsapp_no'
            ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-300 mb-2",
                            children: field.split('_').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit_user_data.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: field.includes('phone') ? 'tel' : 'text',
                            name: field,
                            className: "w-full p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-white",
                            value: formData[field],
                            onChange: handleChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/edit_user_data.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, field, true, {
                    fileName: "[project]/src/components/edit_user_data.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 p-3 bg-red-500/10 rounded-lg",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            saveSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-green-500 p-3 bg-green-500/10 rounded-lg",
                children: "User data updated successfully! Redirecting..."
            }, void 0, false, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 179,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCancel,
                        className: "w-full border border-gray-500 text-white rounded-lg py-3 hover:bg-[#1a1a1a] transition",
                        disabled: isSaving || saveSuccess,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: `w-full ${isSaving || saveSuccess ? 'bg-[#FFDD4A]/80' : 'bg-[#FFDD4A] hover:bg-[#ffd700]'} text-black font-bold py-3 rounded-lg transition`,
                        disabled: isSaving || saveSuccess,
                        children: saveSuccess ? "Redirecting..." : isSaving ? "Saving..." : "Update User Data"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_user_data.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_user_data.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/edit_user_data.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(EditUserData, "UvEITtaTLy4xyQrvBUKz0y0DKYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EditUserData;
var _c;
__turbopack_context__.k.register(_c, "EditUserData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AddProfilePic.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const AddProfilePic = ({ member_id, onSubmit, onCancel })=>{
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        setSelectedFile(file);
        setError("");
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>setPreviewUrl(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null);
        }
    };
    const handleRemoveFile = ()=>{
        setSelectedFile(null);
        setPreviewUrl(null);
        setError("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        if (!selectedFile) return;
        setUploading(true);
        try {
            // Get the file extension
            const ext = selectedFile.name.split('.').pop();
            const newFileName = `${member_id}.${ext}`;
            // Create a new File object with the new name
            const renamedFile = new File([
                selectedFile
            ], newFileName, {
                type: selectedFile.type
            });
            // Prepare FormData to send to API
            const formData = new FormData();
            formData.append("profilePicture", renamedFile);
            formData.append("gym_id", member_id); // or another gym_id if needed, here using member_id per your context
            // Optionally add a category (if the backend expects it)
            // formData.append("category", "user");
            // Send to your API route
            const response = await fetch("/api/upload_profile_picture", {
                method: "POST",
                body: formData
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Upload failed.");
            }
            // If onSubmit exists, call handler with the result
            if (onSubmit) await onSubmit(result);
            setUploading(false);
            handleRemoveFile();
        } catch (err) {
            setError(err?.message || "Failed to upload. Please try again.");
            setUploading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-1 text-gray-300",
                        children: "Upload Profile Picture *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddProfilePic.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#3E3A3D] rounded-lg cursor-pointer bg-[#232024] hover:bg-[#2E2A2D]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center pt-5 pb-6",
                                    children: selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 mb-2 text-green-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddProfilePic.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-green-400 text-center",
                                                children: selectedFile.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: [
                                                    "(",
                                                    (selectedFile.size / 1024 / 1024).toFixed(2),
                                                    " MB)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            previewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: previewUrl,
                                                alt: "profile preview",
                                                className: "mt-2 w-16 h-16 object-cover rounded-full border-2 border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 98,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 mb-2 text-gray-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddProfilePic.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400",
                                                children: "Click to upload image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddProfilePic.jsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddProfilePic.jsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    name: "profilePicture",
                                    className: "hidden",
                                    accept: "image/*",
                                    onChange: handleFileChange,
                                    ref: fileInputRef,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddProfilePic.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddProfilePic.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddProfilePic.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleRemoveFile,
                        className: "mt-2 text-sm text-red-400 hover:text-red-300",
                        disabled: uploading,
                        children: "Remove file"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddProfilePic.jsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddProfilePic.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        disabled: uploading,
                        className: "px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddProfilePic.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !selectedFile || uploading,
                        className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
                        children: uploading ? "Uploading..." : "Submit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddProfilePic.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddProfilePic.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-red-500 text-center",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/AddProfilePic.jsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AddProfilePic.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(AddProfilePic, "Fxzb7v6Oo+EcqVwOZPwCOFH/fy4=");
_c = AddProfilePic;
const __TURBOPACK__default__export__ = AddProfilePic;
var _c;
__turbopack_context__.k.register(_c, "AddProfilePic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Inpage_header_3dot.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Inpage_header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/sl/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Remarks_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Remarks_form.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Blacklist_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Blacklist_form.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit_user_data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/edit_user_data.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddProfilePic$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddProfilePic.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Inpage_header({ title, member_id, member }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showOptions, setShowOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remarksShow, setRemarksShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blacklistShow, setBlacklistShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editUserDataShow, setEditUserDataShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ShowAddPic, setShowAddPic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [AddMembershipShow, setAddMembershipShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleOptions = ()=>setShowOptions(!showOptions);
    const openAddMembership = ()=>{
        setAddMembershipShow(true);
        setRemarksShow(false);
        setBlacklistShow(false);
        setEditUserDataShow(false);
        setShowOptions(false);
        setShowAddPic(false);
    };
    const openRemarks = ()=>{
        setRemarksShow(true);
        setAddMembershipShow(false);
        setBlacklistShow(false);
        setEditUserDataShow(false);
        setShowOptions(false);
        setShowAddPic(false);
    };
    const openBlacklist = ()=>{
        setBlacklistShow(true);
        setAddMembershipShow(false);
        setRemarksShow(false);
        setEditUserDataShow(false);
        setShowOptions(false);
        setShowAddPic(false);
    };
    const openEditUserData = ()=>{
        setEditUserDataShow(true);
        setAddMembershipShow(false);
        setRemarksShow(false);
        setBlacklistShow(false);
        setShowOptions(false);
        setShowAddPic(false);
    };
    const openAddPic = ()=>{
        setShowAddPic(true);
        setRemarksShow(false);
        setAddMembershipShow(false);
        setBlacklistShow(false);
        setEditUserDataShow(false);
        setShowOptions(false);
    };
    const closeAllModals = ()=>{
        setAddMembershipShow(false);
        setRemarksShow(false);
        setBlacklistShow(false);
        setEditUserDataShow(false);
    };
    // Individual close functions for better control
    const closeEditUserData = ()=>{
        setEditUserDataShow(false);
    };
    const closeRemarks = ()=>{
        setRemarksShow(false);
        setShowAddPic(false);
    };
    const closeBlacklist = ()=>{
        setBlacklistShow(false);
    };
    const deleteProfilePicHandler = async ()=>{
        try {
            const exts = [
                'png',
                'jpg',
                'jpeg'
            ];
            let deleted = false;
            for (const ext of exts){
                const res = await fetch(`/api/deleteProfilePic?member_id=${member_id}&ext=${ext}`, {
                    method: 'DELETE'
                });
                if (res.ok) {
                    alert('Profile picture deleted successfully.');
                    deleted = true;
                    break;
                }
            }
            if (!deleted) alert('Profile picture not found for deletion.');
        } catch (e) {
            alert('Failed to delete profile picture.');
            console.error(e);
        }
    };
    const deleteUserHandler = async ()=>{
        // Get user details for confirmation
        const userName = member?.name || member?.username || 'Unknown User';
        const userEmail = member?.email || '';
        const userPhone = member?.phone || '';
        // Create detailed confirmation message
        let confirmMessage = `⚠️ DELETE USER CONFIRMATION ⚠️\n\n`;
        confirmMessage += `You are about to permanently delete:\n`;
        confirmMessage += `• User ID: ${member_id}\n`;
        confirmMessage += `• Name: ${userName}\n`;
        if (userEmail) {
            confirmMessage += `• Email: ${userEmail}\n`;
        }
        if (userPhone) {
            confirmMessage += `• Phone: ${userPhone}\n`;
        }
        confirmMessage += `\n🚨 WARNING: This action cannot be undone!\n`;
        confirmMessage += `All user data, profile information, and associated records will be permanently deleted.\n\n`;
        confirmMessage += `Are you absolutely sure you want to proceed?`;
        // Show detailed confirmation dialog
        const confirmed = window.confirm(confirmMessage);
        if (!confirmed) {
            return;
        }
        try {
            const response = await fetch('/api/delete_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: member_id
                })
            });
            const result = await response.json();
            if (response.ok) {
                // Show detailed success message
                let successMessage = `✅ USER DELETED SUCCESSFULLY\n\n`;
                successMessage += `The following user has been permanently deleted:\n`;
                successMessage += `• User ID: ${member_id}\n`;
                successMessage += `• Name: ${userName}\n`;
                if (userEmail) {
                    successMessage += `• Email: ${userEmail}\n`;
                }
                successMessage += `\nAll associated data has been removed from the system.`;
                alert(successMessage);
                // Navigate back to the previous page or home after successful deletion
                router.back();
            } else {
                // Show detailed error message
                let errorMessage = `❌ DELETION FAILED\n\n`;
                errorMessage += `Failed to delete user:\n`;
                errorMessage += `• User ID: ${member_id}\n`;
                errorMessage += `• Name: ${userName}\n\n`;
                errorMessage += `Error: ${result.error || 'Unknown error occurred'}\n\n`;
                errorMessage += `Please try again or contact system administrator.`;
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            // Show detailed network error message
            let networkErrorMessage = `🔌 CONNECTION ERROR\n\n`;
            networkErrorMessage += `Failed to delete user due to network error:\n`;
            networkErrorMessage += `• User ID: ${member_id}\n`;
            networkErrorMessage += `• Name: ${userName}\n\n`;
            networkErrorMessage += `Please check your internet connection and try again.\n`;
            networkErrorMessage += `If the problem persists, contact system administrator.`;
            alert(networkErrorMessage);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuUndo2"], {
                    onClick: ()=>router.back(),
                    className: "text-[#FFDD4A]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center w-full",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleOptions,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlOptionsVertical"], {
                    className: "text-[#ffffff]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            showOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full right-2 z-50 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center md:w-1/2 border border-[#6e6e6e]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4 border-b pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-medium md:text-2xl",
                                children: "Options"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: toggleOptions,
                                className: "cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 flex flex-col p-3 text-sm md:text-xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openEditUserData,
                                className: "bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Edit Data"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openBlacklist,
                                className: "bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Blacklist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openRemarks,
                                className: "bg-[#232024] p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Remarks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openAddPic,
                                className: "bg-blue-500 p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Add Profile Pic"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: deleteProfilePicHandler,
                                className: "bg-red-500 p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Delete Profile Pic"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: deleteUserHandler,
                                className: "bg-red-500 p-3 rounded-2xl hover:border border-[#FFDD4A]",
                                children: "Delete User"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            ShowAddPic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full text-center max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: closeRemarks,
                                className: "cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 261,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 md:p-6 text-sm md:text-base",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddProfilePic$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                member_id: member_id,
                                onSubmit: closeRemarks,
                                onCancel: closeRemarks
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 258,
                columnNumber: 9
            }, this),
            remarksShow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: closeRemarks,
                                className: "cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 md:p-6 text-sm md:text-base",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Remarks_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user_id: member_id,
                                onSave: closeRemarks,
                                onCancel: closeRemarks
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 278,
                columnNumber: 9
            }, this),
            blacklistShow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: closeBlacklist,
                                className: "cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 md:p-6 text-sm md:text-base",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Blacklist_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                user_id: member_id,
                                onSave: (data)=>{
                                    console.log("Blacklisted:", data);
                                    closeBlacklist();
                                },
                                onCancel: closeBlacklist
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            editUserDataShow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-[#0a0a0a]/80 flex justify-center items-center overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-2xl bg-[#0a0a0a] border border-[#6e6e6e] rounded-xl overflow-hidden flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 bg-[#0a0a0a] p-4 border-b border-[#6e6e6e] flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                onClick: closeEditUserData,
                                className: "cursor-pointer text-gray-400 hover:text-white hover:scale-90 transition-transform",
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 md:p-6 text-sm md:text-base",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit_user_data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                member: member,
                                user_id: member_id,
                                onSave: (data)=>{
                                    console.log("User Data Edited:", data);
                                    closeEditUserData();
                                },
                                onCancel: closeEditUserData
                            }, void 0, false, {
                                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                                lineNumber: 333,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 332,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                    lineNumber: 324,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header_3dot.jsx",
                lineNumber: 323,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Inpage_header_3dot.jsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(Inpage_header, "uYtzrAFt5wEHjB88NIEsecn79Uk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Inpage_header;
var _c;
__turbopack_context__.k.register(_c, "Inpage_header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Renew_form.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Renew_form.jsx
__turbopack_context__.s({
    "default": (()=>RenewalFormSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RenewalFormSection({ user_id, membershipPlans, onCancel }) {
    _s();
    console.log(membershipPlans);
    const today = new Date().toISOString().split('T')[0];
    const currentDate = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        bill_no: '',
        plan: '',
        days: '',
        amount: '',
        totalAmount: '',
        discount: '',
        balance: 0,
        transaction_type: '',
        trainer_id: '',
        renew_date: today,
        expiry_date: ''
    });
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trainers, setTrainers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Fetch plans and trainers data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenewalFormSection.useEffect": ()=>{
            const fetchData = {
                "RenewalFormSection.useEffect.fetchData": async ()=>{
                    try {
                        const plansResponse = await fetch('/api/fetch_plans');
                        if (!plansResponse.ok) throw new Error('Failed to fetch plans');
                        const plansData = await plansResponse.json();
                        setPlans(plansData);
                        const trainersResponse = await fetch('/api/fetch_trainers');
                        if (!trainersResponse.ok) throw new Error('Failed to fetch trainers');
                        const trainersData = await trainersResponse.json();
                        setTrainers(trainersData);
                    } catch (err) {
                        setError(err.message);
                    }
                }
            }["RenewalFormSection.useEffect.fetchData"];
            fetchData();
        }
    }["RenewalFormSection.useEffect"], []);
    // Update amount, expiry_date, and balance when plan changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenewalFormSection.useEffect": ()=>{
            if (formData.plan) {
                const selectedPlan = plans.find({
                    "RenewalFormSection.useEffect.selectedPlan": (plan)=>plan.name === formData.plan
                }["RenewalFormSection.useEffect.selectedPlan"]);
                if (selectedPlan) {
                    const renewDate = new Date(formData.renew_date);
                    const expiryDate = new Date(currentDate);
                    const days = parseInt(formData.days) || parseInt(selectedPlan.duration);
                    expiryDate.setDate(expiryDate.getDate() + parseInt(selectedPlan.duration));
                    const expiryDateFormatted = expiryDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
                    setFormData({
                        "RenewalFormSection.useEffect": (prev)=>{
                            const totalAmount = selectedPlan.amount;
                            const balance = 0;
                            return {
                                ...prev,
                                days: prev.days || selectedPlan.duration,
                                totalAmount,
                                expiry_date: expiryDateFormatted,
                                balance: balance.toFixed(2)
                            };
                        }
                    }["RenewalFormSection.useEffect"]);
                }
            }
        }
    }["RenewalFormSection.useEffect"], [
        formData.plan,
        plans
    ]);
    // Handle form changes
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>{
            const newData = {
                ...prev,
                [name]: value
            };
            const totalAmount = parseFloat(newData.totalAmount) || 0;
            const discount = parseFloat(newData.discount) || 0;
            const amount = parseFloat(newData.amount) || 0;
            const days = parseInt(newData.days) || 0;
            if (name === 'totalAmount' || name === 'amount' || name === 'discount') {
                newData.balance = Math.max(0, totalAmount - (amount + discount)).toFixed(2);
            }
            // Always calculate expiry_date if days or renew_date changes
            if (name === 'days' || name === 'renew_date') {
                if (days > 0) {
                    const renewDate = new Date(newData.renew_date || today);
                    const expiryDate = new Date(renewDate);
                    expiryDate.setDate(expiryDate.getDate() + days);
                    newData.expiry_date = expiryDate.toISOString().split('T')[0];
                } else {
                    newData.expiry_date = '';
                }
            }
            return newData;
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        setSuccess(null);
        try {
            const currentDate = new Date();
            const currentDateString = currentDate.toISOString().split('T')[0];
            // Check if the selected plan exists in membershipPlans
            const selectedPlan = membershipPlans.find((plan)=>plan.plan_name === formData.plan);
            if (selectedPlan && selectedPlan.exp_date) {
                const expiryDate = new Date(selectedPlan.exp_date);
                if (expiryDate > currentDate) {
                    // Calculate remaining days
                    const timeDifference = expiryDate - currentDate;
                    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                    setError(`Sorry, the plan already exists and will expire on ${expiryDate.toLocaleDateString()} (${remainingDays} days remaining)`);
                    return;
                }
            }
            const dataToSubmit = {
                user_id,
                plan_name: formData.plan,
                bill_no: formData.bill_no,
                amount: formData.amount ? parseFloat(formData.amount) : null,
                discount: formData.discount ? parseFloat(formData.discount) : null,
                balance: formData.balance ? parseFloat(formData.balance) : null,
                trans_type: formData.transaction_type,
                trainer_id: formData.trainer_id,
                date: currentDateString,
                exp_date: formData.expiry_date
            };
            console.log("🚀 Sending data to backend:", dataToSubmit);
            const response = await fetch('/api/renew-membership', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSubmit)
            });
            if (!response.ok) {
                throw new Error('Failed to submit renewal data');
            }
            const result = await response.json();
            setSuccess('Renewal saved successfully!');
            setFormData({
                bill_no: '',
                plan: '',
                amount: '',
                discount: '',
                balance: 0,
                transaction_type: '',
                trainer_id: '',
                expiry_date: ''
            });
            router.refresh();
        } catch (err) {
            setError(err.message);
        }
    };
    const handleCancel = ()=>{
        // Reset form data to initial state
        setFormData({
            bill_no: '',
            plan: '',
            days: '',
            amount: '',
            totalAmount: '',
            discount: '',
            balance: 0,
            transaction_type: '',
            trainer_id: '',
            expiry_date: ''
        });
        // Clear any error or success messages
        setError(null);
        setSuccess(null);
        // Close the component by calling the onCancel prop
        if (onCancel) {
            onCancel();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 border-t pt-6 border-[#3E3A3D]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium mb-4 text-gray-300",
                children: "Renew Membership"
            }, void 0, false, {
                fileName: "[project]/src/components/Renew_form.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Renew_form.jsx",
                lineNumber: 207,
                columnNumber: 17
            }, this),
            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-500 mb-4",
                children: success
            }, void 0, false, {
                fileName: "[project]/src/components/Renew_form.jsx",
                lineNumber: 208,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "bill_no",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Bill No *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "bill_no",
                                                name: "bill_no",
                                                value: formData.bill_no,
                                                onChange: handleChange,
                                                placeholder: "Enter bill number",
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-plan",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Plan *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "renewal-plan",
                                                name: "plan",
                                                value: formData.plan,
                                                onChange: handleChange,
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 242,
                                                        columnNumber: 17
                                                    }, this),
                                                    plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: plan.name,
                                                            children: [
                                                                plan.name,
                                                                " (₹",
                                                                plan.amount,
                                                                ")"
                                                            ]
                                                        }, plan.id, true, {
                                                            fileName: "[project]/src/components/Renew_form.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-days",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Enter the days *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "days",
                                                name: "days",
                                                value: formData.days,
                                                onChange: handleChange,
                                                placeholder: "Enter the days",
                                                min: "0",
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-totalAmount",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Total Amount *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "totalAmount",
                                                name: "totalAmount",
                                                value: formData.totalAmount,
                                                onChange: handleChange,
                                                placeholder: "Enter total amount",
                                                min: "0",
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-amount",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Amount (₹) *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "renewal-amount",
                                                name: "amount",
                                                value: formData.amount,
                                                onChange: handleChange,
                                                placeholder: "Enter amount",
                                                min: "0",
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Renew_form.jsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-discount",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Discount (₹) *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "renewal-discount",
                                                name: "discount",
                                                value: formData.discount,
                                                onChange: handleChange,
                                                placeholder: "Enter discount",
                                                min: "0",
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D]",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renewal-balance",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Balance (₹) *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                id: "renewal-balance",
                                                name: "balance",
                                                value: formData.balance,
                                                readOnly: true,
                                                className: "p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "transaction_type",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Transaction Type *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "transaction_type",
                                                name: "transaction_type",
                                                value: formData.transaction_type,
                                                onChange: handleChange,
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 351,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GPay",
                                                        children: "GPay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 352,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cash",
                                                        children: "Cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Credit Card",
                                                        children: "Credit Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 354,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bank Transfer",
                                                        children: "Bank Transfer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 356,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 343,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "trainer_name",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Trainer for the Member"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "trainer_name",
                                                name: "trainer_id",
                                                value: formData.trainer_id,
                                                onChange: handleChange,
                                                className: "p-4 w-full bg-[#232024] rounded-lg border border-[#3E3A3D] appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Trainer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Renew_form.jsx",
                                                        lineNumber: 371,
                                                        columnNumber: 17
                                                    }, this),
                                                    trainers.map((trainer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: trainer.trainer_id,
                                                            children: trainer.name
                                                        }, trainer.trainer_id, false, {
                                                            fileName: "[project]/src/components/Renew_form.jsx",
                                                            lineNumber: 373,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "renew_date",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Renew Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                id: "renew_date",
                                                name: "renew_date",
                                                value: formData.renew_date,
                                                onChange: handleChange,
                                                className: "p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "expiry_date",
                                                className: "block text-sm font-medium mb-1 text-gray-300",
                                                children: "Expiry Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                id: "expiry_date",
                                                name: "expiry_date",
                                                value: formData.expiry_date,
                                                readOnly: true,
                                                className: "p-4 w-full bg-[#2E2A2D] rounded-lg border border-[#3E3A3D] cursor-not-allowed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Renew_form.jsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Renew_form.jsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Renew_form.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Renew_form.jsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-4 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCancel,
                                className: "px-6 py-2.5 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Renew_form.jsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                children: "Save Renewal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Renew_form.jsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Renew_form.jsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Renew_form.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 xl:h-10"
            }, void 0, false, {
                fileName: "[project]/src/components/Renew_form.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Renew_form.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(RenewalFormSection, "flUjJu73DpUuWdl221+Ck+J1IlE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RenewalFormSection;
var _c;
__turbopack_context__.k.register(_c, "RenewalFormSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Balance_form.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Balance_form.jsx
__turbopack_context__.s({
    "default": (()=>Balance_form)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Balance_form({ user_id, membershipPlans, onCancel, username }) {
    _s();
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(membershipPlans?.[0]?.plan_name || '');
    const [newAmountReceived, setNewAmountReceived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        amountPaid: membershipPlans?.[0]?.amount || 0,
        discount: membershipPlans?.[0]?.discount || 0,
        bill_no: membershipPlans?.[0]?.bill_no || '',
        new_bill_no: membershipPlans?.[0]?.new_bill_no || '',
        trainer: membershipPlans?.[0]?.trainer || '',
        balance: membershipPlans?.[0]?.balance || 0
    });
    const [transactionsData, setTransactionsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        text: '',
        type: ''
    });
    const [trainers, setTrainers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Calculate balance using transaction data if available, otherwise use form balance
    const balance = Math.max(0, (formData.balance || 0) - (newAmountReceived || 0));
    const totalAmountReceived = (formData.amountPaid || 0) + (newAmountReceived || 0);
    // Fetch transactions data from API using URL parameters
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Balance_form.useEffect": ()=>{
            const fetchTransactions = {
                "Balance_form.useEffect.fetchTransactions": async ()=>{
                    try {
                        const response = await fetch(`/api/fetch_transactions?user_id=${encodeURIComponent(user_id)}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (response.ok) {
                            const response_data = await response.json();
                            const transactions = response_data.data || [];
                            setTransactionsData(transactions);
                            console.log("Fetched transactions:", transactions);
                        } else {
                            throw new Error('Failed to fetch transactions');
                        }
                    } catch (error) {
                        console.error('Error fetching transactions:', error);
                        setMessage({
                            text: 'Failed to load transaction data. Please try again.',
                            type: 'error'
                        });
                    }
                }
            }["Balance_form.useEffect.fetchTransactions"];
            if (user_id) {
                fetchTransactions();
            }
        }
    }["Balance_form.useEffect"], [
        user_id
    ]);
    // Fetch trainers from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Balance_form.useEffect": ()=>{
            const fetchTrainers = {
                "Balance_form.useEffect.fetchTrainers": async ()=>{
                    try {
                        const response = await fetch('/api/fetch_trainers', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                        if (response.ok) {
                            const data = await response.json();
                            setTrainers(data);
                            console.log("Fetched trainers:", data);
                        } else {
                            throw new Error('Failed to fetch trainers');
                        }
                    } catch (error) {
                        console.error('Error fetching trainers:', error);
                        setMessage({
                            text: 'Failed to load trainers. Please try again.',
                            type: 'error'
                        });
                    }
                }
            }["Balance_form.useEffect.fetchTrainers"];
            fetchTrainers();
        }
    }["Balance_form.useEffect"], []);
    // Update form data when selected plan changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Balance_form.useEffect": ()=>{
            // Get the base plan data from membershipPlans
            const plan = membershipPlans?.find({
                "Balance_form.useEffect": (p)=>p.plan_name === selectedPlan
            }["Balance_form.useEffect"]) || membershipPlans?.[0] || {};
            // Update form with base plan data - ensure all values have defaults
            let updatedFormData = {
                amountPaid: plan.amount || 0,
                discount: plan.discount || 0,
                bill_no: plan.bill_no || '',
                new_bill_no: plan.new_bill_no || '',
                trainer: plan.trainer || '',
                balance: plan.balance || 0
            };
            // If transactions are available, find the latest transaction matching the bill_no
            if (transactionsData.length > 0 && selectedPlan && updatedFormData.bill_no) {
                const matchingTransactions = transactionsData.filter({
                    "Balance_form.useEffect.matchingTransactions": (transaction)=>transaction.old_bill === updatedFormData.bill_no && transaction.user_id === user_id && transaction.plan_name === selectedPlan
                }["Balance_form.useEffect.matchingTransactions"]);
                if (matchingTransactions.length > 0) {
                    // Find the latest transaction by created_at timestamp
                    const latestTransaction = matchingTransactions.reduce({
                        "Balance_form.useEffect.latestTransaction": (latest, current)=>{
                            const latestDate = new Date(latest.created_at);
                            const currentDate = new Date(current.created_at);
                            return currentDate > latestDate ? current : latest;
                        }
                    }["Balance_form.useEffect.latestTransaction"]);
                    console.log("Latest transaction matching bill_no:", updatedFormData.bill_no, latestTransaction);
                    // Update form with the latest transaction data - ensure all values have defaults
                    updatedFormData = {
                        amountPaid: latestTransaction.amount || 0,
                        discount: updatedFormData.discount || 0,
                        bill_no: latestTransaction.old_bill || updatedFormData.bill_no || '',
                        new_bill_no: updatedFormData.new_bill_no || '',
                        trainer: latestTransaction.trainer || updatedFormData.trainer || '',
                        balance: latestTransaction.balance || 0
                    };
                }
            }
            setFormData(updatedFormData);
            setNewAmountReceived(0);
            setMessage({
                text: '',
                type: ''
            });
        }
    }["Balance_form.useEffect"], [
        selectedPlan,
        transactionsData,
        membershipPlans,
        user_id
    ]);
    const handlePlanChange = (e)=>{
        setSelectedPlan(e.target.value);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const numValue = name === 'bill_no' || name === 'new_bill_no' || name === 'trainer' ? value : parseFloat(value) || 0;
        if (name === 'newAmountReceived') {
            setNewAmountReceived(numValue);
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: numValue
                }));
        }
        setMessage({
            text: '',
            type: ''
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({
            text: '',
            type: ''
        });
        try {
            const response = await fetch('/api/edit_amount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id,
                    selectedPlan,
                    bill_no: formData.bill_no,
                    new_bill_no: formData.new_bill_no,
                    totalAmountReceived,
                    amountPaid: formData.amountPaid,
                    discount: formData.discount,
                    balance,
                    trainer: formData.trainer,
                    newAmountReceived
                })
            });
            if (response.ok) {
                setMessage({
                    text: 'Balance updated successfully!',
                    type: 'success'
                });
                setTimeout(()=>{
                    window.location.href = `/member-profile?member_id=${user_id}`;
                }, 1000);
            } else {
                throw new Error('Failed to update balance');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({
                text: 'Failed to update balance. Please try again.',
                type: 'error'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancel = ()=>{
        // Reset to original values - same logic as useEffect with proper defaults
        const plan = membershipPlans?.find((p)=>p.plan_name === selectedPlan) || membershipPlans?.[0] || {};
        let resetFormData = {
            amountPaid: plan.amount || 0,
            discount: plan.discount || 0,
            bill_no: plan.bill_no || '',
            new_bill_no: plan.new_bill_no || '',
            trainer: plan.trainer || '',
            balance: plan.balance || 0
        };
        // Update with latest transaction data if available
        if (transactionsData.length > 0 && resetFormData.bill_no) {
            const matchingTransactions = transactionsData.filter((transaction)=>transaction.old_bill === resetFormData.bill_no && transaction.user_id === user_id && transaction.plan_name === selectedPlan);
            if (matchingTransactions.length > 0) {
                const latestTransaction = matchingTransactions.reduce((latest, current)=>{
                    const latestDate = new Date(latest.created_at);
                    const currentDate = new Date(current.created_at);
                    return currentDate > latestDate ? current : latest;
                });
                // Ensure all values have defaults
                resetFormData = {
                    amountPaid: latestTransaction.amount || 0,
                    discount: resetFormData.discount || 0,
                    bill_no: latestTransaction.old_bill || resetFormData.bill_no || '',
                    new_bill_no: resetFormData.new_bill_no || '',
                    trainer: latestTransaction.trainer || resetFormData.trainer || '',
                    balance: latestTransaction.balance || 0
                };
            }
        }
        setFormData(resetFormData);
        setNewAmountReceived(0);
        setMessage({
            text: '',
            type: ''
        });
        if (onCancel) {
            onCancel();
        }
    };
    const handleWriteOff = async ()=>{
        const confirmMessage = `Are you sure you want to write off the balance for:\n\nPlan: ${selectedPlan}\nUser: ${username || 'N/A'}\nUser ID: ${user_id}\n\nThis will set the balance to ₹0 and cannot be undone.`;
        if (window.confirm(confirmMessage)) {
            setIsSubmitting(true);
            setMessage({
                text: '',
                type: ''
            });
            try {
                const response = await fetch('/api/write0ff', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id,
                        selectedPlan,
                        username: username || ''
                    })
                });
                if (response.ok) {
                    setMessage({
                        text: 'Balance has been written off successfully!',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        window.location.href = `/member-profile?member_id=${user_id}`;
                    }, 1000);
                } else {
                    throw new Error('Failed to write off balance');
                }
            } catch (error) {
                console.error('Error writing off balance:', error);
                setMessage({
                    text: 'Failed to write off balance. Please try again.',
                    type: 'error'
                });
            } finally{
                setIsSubmitting(false);
            }
        }
    };
    // Validate membershipPlans
    if (!membershipPlans || membershipPlans.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 sm:p-6 text-gray-300",
            children: "No membership plans available."
        }, void 0, false, {
            fileName: "[project]/src/components/Balance_form.jsx",
            lineNumber: 279,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 sm:p-6 border-t border-[#3E3A3D]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-300",
                children: "Edit Balance/Add Payment"
            }, void 0, false, {
                fileName: "[project]/src/components/Balance_form.jsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mb-4 p-3 rounded-lg text-sm sm:text-base ${message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`,
                children: message.text
            }, void 0, false, {
                fileName: "[project]/src/components/Balance_form.jsx",
                lineNumber: 287,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1 text-gray-400",
                                children: "Select the plan"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPlan,
                                onChange: handlePlanChange,
                                className: "w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base",
                                children: membershipPlans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: plan.plan_name,
                                        children: plan.plan_name
                                    }, `${plan.plan_name}-${index}`, false, {
                                        fileName: "[project]/src/components/Balance_form.jsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "bill_no",
                                className: "block text-sm font-medium mb-1 text-gray-300",
                                children: "Bill Number*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "bill_no",
                                name: "bill_no",
                                value: formData.bill_no || '',
                                onChange: handleChange,
                                placeholder: "Enter bill number",
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base",
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "new_bill_no",
                                className: "block text-sm font-medium mb-1 text-gray-300",
                                children: "New Bill Number*"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "new_bill_no",
                                name: "new_bill_no",
                                value: formData.new_bill_no || '',
                                onChange: handleChange,
                                placeholder: "Enter new bill number",
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1 text-gray-400",
                                children: "Select the trainer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "trainer",
                                value: formData.trainer || '',
                                onChange: handleChange,
                                className: "w-full p-2 sm:p-3 bg-[#2E2A2D] border border-[#3E3A3D] rounded-lg text-sm sm:text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select a trainer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Balance_form.jsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this),
                                    trainers.map((trainer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: trainer.trainer_id,
                                            children: [
                                                trainer.trainer_id,
                                                " - ",
                                                trainer.name
                                            ]
                                        }, `trainer-${index}-${trainer.trainer_id}`, true, {
                                            fileName: "[project]/src/components/Balance_form.jsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "amountPaid",
                                className: "block text-sm font-medium mb-1 text-gray-300",
                                children: "Amount Already Received (₹) *"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: "amountPaid",
                                name: "amountPaid",
                                value: formData.amountPaid || 0,
                                onChange: handleChange,
                                placeholder: "Enter amount paid",
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base",
                                required: true,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1 text-gray-400",
                                children: "Total Amount Received (₹)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: totalAmountReceived,
                                readOnly: true,
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "discount",
                                className: "block text-sm font-medium mb-1 text-gray-300",
                                children: "Discount (₹)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: "discount",
                                name: "discount",
                                placeholder: "Enter discount",
                                value: formData.discount || 0,
                                onChange: handleChange,
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1 text-gray-400",
                                children: "Balance Amount (₹)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: balance,
                                readOnly: true,
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "newAmountReceived",
                                className: "block text-sm font-medium mb-1 text-gray-300",
                                children: "New Amount Received (₹)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                id: "newAmountReceived",
                                name: "newAmountReceived",
                                value: newAmountReceived,
                                onChange: handleChange,
                                placeholder: "Enter new amount received",
                                className: "w-full p-2 sm:p-3 bg-[#232024] border border-[#3E3A3D] rounded-lg text-sm sm:text-base"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-2 sm:order-1 flex justify-center sm:justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleWriteOff,
                                    disabled: isSubmitting,
                                    className: `w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`,
                                    children: "Write Off"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Balance_form.jsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-1 sm:order-2 flex flex-col sm:flex-row gap-2 sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCancel,
                                        className: "w-full sm:w-auto px-4 py-2 border border-[#3E3A3D] rounded-lg text-gray-300 hover:bg-[#2E2A2D] transition-colors text-sm sm:text-base",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Balance_form.jsx",
                                        lineNumber: 449,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: `w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`,
                                        children: isSubmitting ? 'Saving...' : 'Save Changes'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Balance_form.jsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Balance_form.jsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Balance_form.jsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Balance_form.jsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 xl:h-10"
            }, void 0, false, {
                fileName: "[project]/src/components/Balance_form.jsx",
                lineNumber: 468,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Balance_form.jsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
_s(Balance_form, "/L/7RLXedy5FodS9Ab5CtoejJ0g=");
_c = Balance_form;
var _c;
__turbopack_context__.k.register(_c, "Balance_form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MemberProfileAvatar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MemberProfileAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MemberProfileAvatar({ member }) {
    _s();
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!member.user_id || imgError) {
        // Show SVG avatar if no user_id or load error
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                width: "100%",
                height: "100%",
                fill: "currentColor",
                className: "text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "8",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberProfileAvatar.jsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 14c-5 0-8 2.5-8 4v2h16v-2c0-1.5-3-4-8-4z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MemberProfileAvatar.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MemberProfileAvatar.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MemberProfileAvatar.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        loading: "lazy",
        className: "object-cover w-full h-full rounded-lg aspect-[3/4] md:max-h-80 lg:max-h-150",
        src: `/api/fetch_user_images?user_id=${member.user_id}`,
        alt: member.name || "Member",
        onError: ()=>setImgError(true)
    }, void 0, false, {
        fileName: "[project]/src/components/MemberProfileAvatar.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(MemberProfileAvatar, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c = MemberProfileAvatar;
var _c;
__turbopack_context__.k.register(_c, "MemberProfileAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/memberlist_profile.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\memberlist_profile.jsx
__turbopack_context__.s({
    "default": (()=>MemberlistProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Renew_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Renew_form.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gr/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Balance_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Balance_form.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemberProfileAvatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MemberProfileAvatar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MemberlistProfile({ member }) {
    _s();
    const [renewBox, setRenewBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [balanceBox, setBalanceBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [membershipPlans, setMembershipPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    console.log("membershipPlans", membershipPlans);
    const toggleRenewBox = ()=>{
        setRenewBox(!renewBox);
        if (balanceBox) setBalanceBox(false);
    };
    const toggleBalanceBox = ()=>{
        setBalanceBox(!balanceBox);
        if (renewBox) setRenewBox(false);
    };
    // Fetch membership plans
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberlistProfile.useEffect": ()=>{
            const fetchMembershipPlans = {
                "MemberlistProfile.useEffect.fetchMembershipPlans": async ()=>{
                    try {
                        const response = await fetch('/api/fetch_membership_plans');
                        if (!response.ok) {
                            throw new Error('Failed to fetch membership plans');
                        }
                        const result = await response.json();
                        // console.log("fetched data", result);
                        if (result.success && result.data) {
                            const userPlans = result.data.filter({
                                "MemberlistProfile.useEffect.fetchMembershipPlans.userPlans": (plan)=>plan.user_id === member.user_id
                            }["MemberlistProfile.useEffect.fetchMembershipPlans.userPlans"]);
                            // console.log("filtered user plans", userPlans);
                            setMembershipPlans(userPlans);
                        } else {
                            console.error('API returned unsuccessful response:', result);
                            setMembershipPlans([]);
                        }
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching membership plans:', error);
                        setMembershipPlans([]);
                        setLoading(false);
                    }
                }
            }["MemberlistProfile.useEffect.fetchMembershipPlans"];
            fetchMembershipPlans();
        }
    }["MemberlistProfile.useEffect"], [
        member.user_id
    ]);
    // Get plan names - using useMemo to optimize
    const planNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemberlistProfile.useMemo[planNames]": ()=>{
            return membershipPlans.length > 0 ? membershipPlans.map({
                "MemberlistProfile.useMemo[planNames]": (plan)=>plan.plan_name
            }["MemberlistProfile.useMemo[planNames]"]).join(', ') : 'No Plan Existing';
        }
    }["MemberlistProfile.useMemo[planNames]"], [
        membershipPlans
    ]);
    // console.log("planNames", planNames);
    // Calculate expiration details for each plan using useMemo
    const planExpirations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemberlistProfile.useMemo[planExpirations]": ()=>{
            if (membershipPlans.length > 0) {
                return membershipPlans.map({
                    "MemberlistProfile.useMemo[planExpirations]": (plan)=>{
                        const expiryDate = new Date(plan.exp_date);
                        const today = new Date();
                        // Calculate days until expiry
                        const daysUntilExpiry = Math.max(0, Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24)));
                        // Format expiry date
                        const formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        }).split('/').join('-');
                        return {
                            planName: plan.plan_name,
                            daysUntilExpiry,
                            formattedExpiry,
                            isExpired: expiryDate < today
                        };
                    }
                }["MemberlistProfile.useMemo[planExpirations]"]);
            } else if (!loading) {
                // Fallback for when no plans are found
                const joiningDate = new Date(member.joining_date);
                const expiryDate = new Date(joiningDate);
                expiryDate.setFullYear(joiningDate.getFullYear() + 1);
                const today = new Date();
                const daysUntilExpiry = Math.max(0, Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24)));
                const formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }).split('/').join('-');
                return [
                    {
                        planName: 'No Plans Taken',
                        daysUntilExpiry,
                        formattedExpiry,
                        isExpired: expiryDate < today
                    }
                ];
            }
            return [];
        }
    }["MemberlistProfile.useMemo[planExpirations]"], [
        membershipPlans,
        member.joining_date,
        loading
    ]);
    // Determine overall expiration status and count expired plans for the button
    const { daysUntilExpiry, isExpired, formattedExpiry, expiredPlansCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MemberlistProfile.useMemo": ()=>{
            if (planExpirations.length > 0) {
                // Count expired plans that are less than 60 days old
                const expiredPlansCount = planExpirations.filter({
                    "MemberlistProfile.useMemo": (plan)=>{
                        if (!plan.isExpired) return false;
                        const expiryDate = new Date(plan.formattedExpiry.split('-').reverse().join('-'));
                        const currentDate = new Date();
                        const diffTime = currentDate - expiryDate;
                        const diffDays = diffTime / (1000 * 60 * 60 * 24);
                        return diffDays < 60;
                    }
                }["MemberlistProfile.useMemo"]).length;
                const latestPlan = planExpirations.reduce({
                    "MemberlistProfile.useMemo.latestPlan": (latest, plan)=>{
                        const planDate = new Date(plan.formattedExpiry.split('-').reverse().join('-'));
                        return !latest || planDate > new Date(latest.formattedExpiry.split('-').reverse().join('-')) ? plan : latest;
                    }
                }["MemberlistProfile.useMemo.latestPlan"], null);
                return {
                    daysUntilExpiry: latestPlan.daysUntilExpiry,
                    isExpired: expiredPlansCount > 0,
                    formattedExpiry: latestPlan.formattedExpiry,
                    expiredPlansCount
                };
            }
            return {
                daysUntilExpiry: 0,
                isExpired: true,
                formattedExpiry: 'N/A',
                expiredPlansCount: 1
            };
        }
    }["MemberlistProfile.useMemo"], [
        planExpirations
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative grid grid-cols-1 md:grid-cols-2 p-4 md:p-6 lg:p-10 gap-4 md:gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MemberProfileAvatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        member: member
                    }, void 0, false, {
                        fileName: "[project]/src/components/memberlist_profile.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-medium text-sm md:text-lg",
                                children: member.user_id
                            }, void 0, false, {
                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-bold text-lg md:text-2xl",
                                children: member.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/memberlist_profile.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/memberlist_profile.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col text-center justify-center gap-4 md:gap-6 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            // onClick={toggleBalanceBox}
                            className: `w-full ${isExpired ? 'bg-red-500' : 'bg-[#71CA35]'} flex gap-2 justify-center items-center rounded-lg text-black font-semibold px-4 py-2 text-xl md:text-3xl md:py-4`,
                            children: [
                                isExpired ? `${expiredPlansCount} Plan${expiredPlansCount > 1 ? 's' : ''} Expired` : 'Not Expired',
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegCheckCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/memberlist_profile.jsx",
                                    lineNumber: 173,
                                    columnNumber: 114
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/memberlist_profile.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/memberlist_profile.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#FFDD4A] text-black px-4 py-2 rounded-lg gap-2 flex flex-col items-center md:py-4",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold md:text-2xl",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/memberlist_profile.jsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this) : planExpirations.filter((plan)=>!plan.isExpired).length > 0 ? planExpirations.filter((plan)=>!plan.isExpired).map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-lg font-semibold",
                                children: [
                                    plan.planName,
                                    " - ",
                                    plan.daysUntilExpiry,
                                    " Days Remaining, Expires ",
                                    plan.formattedExpiry
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                lineNumber: 188,
                                columnNumber: 19
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm md:text-lg font-semibold",
                            children: "No plans"
                        }, void 0, false, {
                            fileName: "[project]/src/components/memberlist_profile.jsx",
                            lineNumber: 193,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/memberlist_profile.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleRenewBox,
                                        className: "w-full bg-[#2B2E32] px-4 py-2 font-semibold rounded-lg text-[#FFDD4A] border-2 border-[#FFDD4A] md:py-4 md:text-2xl",
                                        children: "Renew Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/memberlist_profile.jsx",
                                        lineNumber: 203,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleBalanceBox,
                                        className: "w-full bg-[#2B2E32] px-4 py-2 font-semibold rounded-lg text-[#FFDD4A] border-2 border-[#FFDD4A] md:py-4 md:text-2xl",
                                        children: "Add Transactions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/memberlist_profile.jsx",
                                        lineNumber: 209,
                                        columnNumber: 11
                                    }, this),
                                    balanceBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                                    onClick: toggleBalanceBox,
                                                    className: "cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white",
                                                    size: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/memberlist_profile.jsx",
                                                    lineNumber: 220,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Balance_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                user_id: member.user_id,
                                                membershipPlans: membershipPlans,
                                                onCancel: toggleBalanceBox
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/memberlist_profile.jsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                lineNumber: 202,
                                columnNumber: 9
                            }, this),
                            renewBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full left-0 right-0 z-50 mt-4 bg-[#0a0a0a] rounded-xl shadow-lg p-4 md:p-8 text-center border border-[#6e6e6e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end items-center mb-4 pb-2 border-b border-[#6e6e6e]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gr$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrClose"], {
                                            onClick: toggleRenewBox,
                                            className: "cursor-pointer hover:scale-90 transition-transform text-gray-400 hover:text-white",
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/memberlist_profile.jsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/memberlist_profile.jsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Renew_form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        user_id: member.user_id,
                                        membershipPlans: membershipPlans,
                                        onCancel: toggleRenewBox
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/memberlist_profile.jsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/memberlist_profile.jsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/memberlist_profile.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/memberlist_profile.jsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/memberlist_profile.jsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(MemberlistProfile, "2RxAJGIsmsaUIiggsn2RbV2E0pk=");
_c = MemberlistProfile;
var _c;
__turbopack_context__.k.register(_c, "MemberlistProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Members_profile2.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Members_profile2.jsx
__turbopack_context__.s({
    "default": (()=>Members_profile2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Members_profile2({ member }) {
    _s();
    // console.log(member);
    // Format joining date
    const formattedJoiningDate = new Date(member.joining_date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).split('/').join('-');
    // State for remark and blacklist status
    const [remark, setRemark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('No Remarks');
    const [blacklistStatus, setBlacklistStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Not Black-listed');
    // Fetch remark and blacklist data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Members_profile2.useEffect": ()=>{
            const fetchData = {
                "Members_profile2.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch('/api/fetch_remark_blcklist');
                        if (!response.ok) {
                            throw new Error('Failed to fetch data');
                        }
                        const data = await response.json();
                        // Find the data for the current member
                        const memberData = data.find({
                            "Members_profile2.useEffect.fetchData.memberData": (item)=>item.userId === member.user_id
                        }["Members_profile2.useEffect.fetchData.memberData"]);
                        if (memberData) {
                            setRemark(memberData.remark || 'No Remarks');
                            setBlacklistStatus(memberData.blacklistDescription ? 'Black-listed' : 'Not Black-listed');
                        }
                    } catch (error) {
                        console.error('Error fetching remark and blacklist data:', error);
                    }
                }
            }["Members_profile2.useEffect.fetchData"];
            fetchData();
        }
    }["Members_profile2.useEffect"], [
        member.user_id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 md:mb-10 text-sm md:text-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: remark === 'No Remarks' ? 'text-white' : 'text-yellow-600',
                        children: [
                            "Note: ",
                            remark
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: blacklistStatus === 'Black-listed' ? 'text-red-600' : 'text-green-600',
                        children: [
                            "Blacklist Status: ",
                            blacklistStatus
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Members_profile2.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 md:gap-8 md:text-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#FFDD4A] font-semibold",
                                children: "J.D"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 56,
                                columnNumber: 51
                            }, this),
                            " ",
                            formattedJoiningDate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWeightHanging"], {
                                className: "text-[#FFDD4A]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 57,
                                columnNumber: 51
                            }, this),
                            " ",
                            member.weight
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLocationDot"], {
                                className: "text-[#FFDD4A]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 58,
                                columnNumber: 51
                            }, this),
                            " ",
                            member.location
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#FFDD4A] font-semibold",
                                children: " Description "
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 59,
                                columnNumber: 51
                            }, this),
                            member.about
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiWhatsapp"], {
                                className: "text-[#FFDD4A]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 60,
                                columnNumber: 51
                            }, this),
                            " ",
                            member.whatsapp_no
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "flex gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {
                                className: "text-[#FFDD4A]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 61,
                                columnNumber: 51
                            }, this),
                            " ",
                            member.phone_no
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Members_profile2.jsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:text-2xl mt-10 md:mt-15",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center",
                        href: `https://wa.me/${member.whatsapp_no}`,
                        children: [
                            "WhatsApp ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsWhatsapp"], {}, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 69,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "bg-[#2B2E32] px-4 py-3 md:py-6 rounded-lg text-center flex items-center gap-2 justify-center",
                        href: `tel:${member.phone_no}`,
                        children: [
                            "Call ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhoneAlt"], {}, void 0, false, {
                                fileName: "[project]/src/components/Members_profile2.jsx",
                                lineNumber: 75,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Members_profile2.jsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Members_profile2.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Members_profile2.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Members_profile2, "WUZhFXHtjPmFkhpRW47VluzsUqI=");
_c = Members_profile2;
var _c;
__turbopack_context__.k.register(_c, "Members_profile2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Inpage_header.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Inpage_header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Inpage_header({ title, onExport }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex text-2xl md:text-4xl p-4 md:p-6 lg:p-10 justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    router.back();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuUndo2"], {
                    className: "text-[#FFDD4A]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-center w-full font-bold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                onClick: (e)=>{
                    e.preventDefault();
                    window.print();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiExport"], {
                    className: "text-[#FFDD4A]"
                }, void 0, false, {
                    fileName: "[project]/src/components/Inpage_header.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Inpage_header.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Inpage_header.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Inpage_header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Inpage_header;
var _c;
__turbopack_context__.k.register(_c, "Inpage_header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Recent_transations.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src\components\Report_Rencent_transation.jsx
__turbopack_context__.s({
    "default": (()=>Recent_transations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Inpage_header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Recent_transations() {
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Recent_transations.useEffect": ()=>{
            const fetchTransactions = {
                "Recent_transations.useEffect.fetchTransactions": async ()=>{
                    try {
                        // Fetch membership plans data
                        const membershipResponse = await fetch('/api/fetch_membership_plans');
                        const membershipData = await membershipResponse.json();
                        // Fetch transactions data
                        const transactionsResponse = await fetch('/api/fetch_transactions');
                        const transactionsData = await transactionsResponse.json();
                        console.log("transactionsData....", transactionsResponse);
                        // Combine both datasets
                        const combinedData = [
                            ...membershipData.data || [],
                            ...transactionsData.data || []
                        ];
                        // Sort by created_at or date (whichever exists) and take last 10
                        const sortedTransactions = combinedData.sort({
                            "Recent_transations.useEffect.fetchTransactions.sortedTransactions": (a, b)=>{
                                const dateA = new Date(a.created_at || a.date);
                                const dateB = new Date(b.created_at || b.date);
                                return dateB - dateA;
                            }
                        }["Recent_transations.useEffect.fetchTransactions.sortedTransactions"]).slice(0, 10);
                        setTransactions(sortedTransactions);
                    } catch (error) {
                        console.error('Error fetching transactions:', error);
                    }
                }
            }["Recent_transations.useEffect.fetchTransactions"];
            fetchTransactions();
        }
    }["Recent_transations.useEffect"], []);
    const exportToExcel = ()=>{
        const data = transactions.map((transaction)=>({
                'Bill No': transaction.bill_no || "N/A",
                'Name': transaction.name || "N/A",
                'Plan': transaction.plan_name || "N/A",
                'Payment Method': transaction.trans_type || "N/A",
                'Amount': transaction.amount || "N/A",
                'Balance': transaction.balance || "N/A",
                'Date': transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A"
            }));
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Transactions");
        // Set column widths
        worksheet['!cols'] = [
            {
                wch: 10
            },
            {
                wch: 20
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 10
            },
            {
                wch: 10
            },
            {
                wch: 15
            } // Date
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"])(workbook, "Recent_Transactions.xlsx");
    };
    // Function to render the appropriate icon based on trans_type
    const getTransactionIcon = (transType)=>{
        switch(transType){
            case 'GPay':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGooglePay"], {
                    className: "size-8 md:size-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 86,
                    columnNumber: 16
                }, this);
            case 'Cash':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineCash"], {
                    className: "size-8 md:size-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 88,
                    columnNumber: 16
                }, this);
            case 'Credit Card':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiCreditCard1"], {
                    className: "size-8 md:size-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 90,
                    columnNumber: 16
                }, this);
            case 'Bank Transfer':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPiggyBank"], {
                    className: "size-8 md:size-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 92,
                    columnNumber: 16
                }, this);
            case 'Other':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg md:text-xl",
                    children: "Other"
                }, void 0, false, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onExport: exportToExcel
            }, void 0, false, {
                fileName: "[project]/src/components/Recent_transations.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center text-lg md:text-xl font-semibold lg:text-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Recent Transactions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recent_transations.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/report-transations",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRight"], {}, void 0, false, {
                            fileName: "[project]/src/components/Recent_transations.jsx",
                            lineNumber: 108,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Recent_transations.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Recent_transations.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            transactions.map((transaction, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center bg-[#181818] px-4 py-2 rounded-lg my-5 md:px-8 md:py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-center md:gap-5",
                            children: [
                                getTransactionIcon(transaction.trans_type),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:text-xl ml-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: transaction.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recent_transations.jsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: transaction.plan_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recent_transations.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: transaction.bill_no
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Recent_transations.jsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Recent_transations.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Recent_transations.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#71CA35] md:text-xl",
                            children: transaction.amount
                        }, void 0, false, {
                            fileName: "[project]/src/components/Recent_transations.jsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#B30000] md:text-xl",
                            children: transaction.balance
                        }, void 0, false, {
                            fileName: "[project]/src/components/Recent_transations.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/Recent_transations.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Recent_transations.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(Recent_transations, "tSC852gg/pAfbHr6jYEePbawnUU=");
_c = Recent_transations;
var _c;
__turbopack_context__.k.register(_c, "Recent_transations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_580f4421._.js.map