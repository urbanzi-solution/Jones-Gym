(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/edit_profile_transaction_data.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditTransactionData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function EditTransactionData({ transaction, onSave, onCancel }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user_id: '',
        bill_no: '',
        plan_name: '',
        date: '',
        amount: 0,
        discount: 0,
        balance: 0,
        trans_type: ''
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditTransactionData.useEffect": ()=>{
            if (transaction) {
                setFormData({
                    user_id: transaction.user_id || '',
                    bill_no: transaction.bill_no || '',
                    plan_name: transaction.plan_name || '',
                    date: transaction.date ? new Date(transaction.date).toISOString().split('T')[0] : '',
                    amount: transaction.amount || 0,
                    discount: transaction.discount || 0,
                    balance: transaction.balance || 0,
                    trans_type: transaction.trans_type || ''
                });
            }
        }
    }["EditTransactionData.useEffect"], [
        transaction
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>{
            const newValue = name === 'amount' || name === 'discount' ? parseFloat(value) || 0 : value;
            const newFormData = {
                ...prev,
                [name]: newValue
            };
            if (name === 'amount' || name === 'discount') {
                const prevAmount = prev.amount || 0;
                const prevDiscount = prev.discount || 0;
                const prevBalance = prev.balance !== undefined ? prev.balance : initialData.originalBalance;
                if (name === 'amount') {
                    const amountChange = newValue - prevAmount;
                    newFormData.balance = prevBalance - amountChange; // Increase amount → decrease balance
                } else if (name === 'discount') {
                    const discountChange = newValue - prevDiscount;
                    newFormData.balance = prevBalance - discountChange; // Increase discount → decrease balance
                }
            }
            return newFormData;
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/edit_trans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const { error } = await response.json();
                throw new Error(error || 'Failed to update transaction');
            }
            if (onSave) onSave(formData);
        } catch (err) {
            setError(err.message);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "Edit Transaction"
            }, void 0, false, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "User ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "user_id",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.user_id,
                        onChange: handleChange,
                        disabled: isSubmitting,
                        readOnly: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Bill Number"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "bill_no",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.bill_no,
                        onChange: handleChange,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Plan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "plan_name",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.plan_name,
                        onChange: handleChange,
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "date",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.date,
                        onChange: handleChange,
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Amount"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "amount",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.amount,
                        onChange: handleChange,
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Discount"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "discount",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.discount,
                        onChange: handleChange,
                        disabled: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Balance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "balance",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white bg-opacity-50",
                        value: formData.balance,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-gray-300 mb-1",
                        children: "Transaction Type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "trans_type",
                        className: "w-full p-2 bg-[#232024] border border-[#3E3A3D] rounded text-white",
                        value: formData.trans_type,
                        onChange: handleChange,
                        disabled: isSubmitting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select Transaction Type"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "GPay",
                                children: "GPay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Cash",
                                children: "Cash"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Credit Card",
                                children: "Credit Card"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Bank Transfer",
                                children: "Bank Transfer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Other",
                                children: "Other"
                            }, void 0, false, {
                                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 200,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "flex-1 border border-gray-500 text-white rounded py-2 hover:bg-[#1a1a1a]",
                        disabled: isSubmitting,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "flex-1 bg-[#FFDD4A] text-black font-bold py-2 rounded hover:bg-[#ffd700]",
                        disabled: isSubmitting,
                        children: isSubmitting ? 'Saving...' : 'Save Changes'
                    }, void 0, false, {
                        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/edit_profile_transaction_data.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(EditTransactionData, "Ai4zuP2l7EsQRExQQK349hpj7yw=");
_c = EditTransactionData;
var _c;
__turbopack_context__.k.register(_c, "EditTransactionData");
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
                    onExport();
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
"[project]/src/components/Detailed_transations.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DetailedTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/sl/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit_profile_transaction_data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/edit_profile_transaction_data.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Inpage_header.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function DetailedTransactions({ userId }) {
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allTransactions, setAllTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTransaction, setSelectedTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCalendarOpen, setIsCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Today');
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [showCustomDate, setShowCustomDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch transactions from the API and filter by userId
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailedTransactions.useEffect": ()=>{
            const fetchTransactions = {
                "DetailedTransactions.useEffect.fetchTransactions": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch(`/api/fetch_transactions?user_id=${encodeURIComponent(userId)}`);
                        const data = await response.json();
                        if (data.success) {
                            // Filter transactions by userId
                            const filteredTransactions = data.data.filter({
                                "DetailedTransactions.useEffect.fetchTransactions.filteredTransactions": (transaction)=>transaction.user_id === userId
                            }["DetailedTransactions.useEffect.fetchTransactions.filteredTransactions"]);
                            setAllTransactions(filteredTransactions);
                            setTransactions(filteredTransactions);
                            filterTransactions('Today', new Date());
                        } else {
                            setError(data.error || 'Failed to fetch transactions');
                        }
                    } catch (err) {
                        setError('Error fetching transactions');
                        console.error('Fetch error:', err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["DetailedTransactions.useEffect.fetchTransactions"];
            if (userId) {
                fetchTransactions();
            }
        }
    }["DetailedTransactions.useEffect"], [
        userId
    ]);
    // Export to Excel function
    const exportToExcel = ()=>{
        const data = transactions.map((transaction)=>({
                'Bill Number': transaction.bill_no || "N/A",
                'Plan': transaction.plan_name || "N/A",
                'Date': transaction.date ? new Date(transaction.date).toLocaleDateString() : "N/A",
                'Amount Paid': transaction.amount || "0",
                'Discount': transaction.discount || "0",
                'Balance': transaction.balance || "0",
                'Transaction Type': transaction.trans_type || "N/A"
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
                wch: 15
            },
            {
                wch: 12
            },
            {
                wch: 12
            },
            {
                wch: 10
            },
            {
                wch: 10
            },
            {
                wch: 15
            } // Transaction Type
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"])(workbook, "User_Transactions.xlsx");
    };
    // Function to handle edit action
    const handleEdit = (transaction)=>{
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };
    // Function to handle delete action
    const handleDelete = async (bill_no)=>{
        if (!window.confirm('Are you sure you want to permanently delete this transaction?')) {
            return;
        }
        try {
            const response = await fetch('/api/delete_trans', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bill_no
                })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Failed to delete transaction');
            }
            if (result.success) {
                // Update state to remove the deleted transaction
                setTransactions((prev)=>prev.filter((t)=>t.bill_no !== bill_no));
                setAllTransactions((prev)=>prev.filter((t)=>t.bill_no !== bill_no));
                alert('Transaction deleted successfully');
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert(error.message || 'Error deleting transaction');
        }
    };
    const handleSave = (updatedTransaction)=>{
        setTransactions(transactions.map((t)=>t.bill_no === updatedTransaction.bill_no ? updatedTransaction : t));
        setAllTransactions(allTransactions.map((t)=>t.bill_no === updatedTransaction.bill_no ? updatedTransaction : t));
        setIsModalOpen(false);
        setSelectedTransaction(null);
        alert('Transaction updated successfully');
    };
    const handleCancel = ()=>{
        setIsModalOpen(false);
        setSelectedTransaction(null);
    };
    const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
        if (isCalendarOpen) setIsCalendarOpen(false);
    };
    const toggleCalendar = ()=>{
        setIsCalendarOpen(!isCalendarOpen);
        if (isDropdownOpen) setIsDropdownOpen(false);
    };
    // Filter transactions based on selected option or date
    const filterTransactions = (option, date)=>{
        if (!allTransactions.length) return;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let filtered = [
            ...allTransactions
        ];
        switch(option){
            case 'Today':
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    transDate.setHours(0, 0, 0, 0);
                    return transDate.getTime() === today.getTime();
                });
                break;
            case 'Yesterday':
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    transDate.setHours(0, 0, 0, 0);
                    return transDate.getTime() === yesterday.getTime();
                });
                break;
            case '2 days before':
                const twoDaysBefore = new Date(today);
                twoDaysBefore.setDate(twoDaysBefore.getDate() - 2);
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    transDate.setHours(0, 0, 0, 0);
                    return transDate.getTime() === twoDaysBefore.getTime();
                });
                break;
            case 'This week':
                const startOfWeek = new Date(today);
                startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    return transDate >= startOfWeek;
                });
                break;
            case 'Last week':
                const startOfLastWeek = new Date(today);
                startOfLastWeek.setDate(startOfLastWeek.getDate() - startOfLastWeek.getDay() - 7);
                const endOfLastWeek = new Date(startOfLastWeek);
                endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    return transDate >= startOfLastWeek && transDate <= endOfLastWeek;
                });
                break;
            case 'This month':
                const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    return transDate >= startOfMonth && transDate <= endOfMonth;
                });
                break;
            case 'Custom date':
                const customDate = new Date(date);
                customDate.setHours(0, 0, 0, 0);
                filtered = filtered.filter((t)=>{
                    const transDate = new Date(t.date);
                    transDate.setHours(0, 0, 0, 0);
                    return transDate.getTime() === customDate.getTime();
                });
                break;
            default:
                break;
        }
        setTransactions(filtered);
    };
    // Handle option selection from dropdown
    const handleOptionSelect = (option)=>{
        setSelectedOption(option);
        setIsDropdownOpen(false);
        if (option === 'Custom date') {
            setIsCalendarOpen(true);
            setShowCustomDate(true);
        } else {
            setShowCustomDate(false);
            const today = new Date();
            filterTransactions(option, today);
        }
    };
    // Handle date selection from calendar
    const handleDateChange = (date)=>{
        setSelectedDate(date);
        setSelectedOption(date.toLocaleDateString());
        setIsCalendarOpen(false);
        filterTransactions('Custom date', date);
    };
    const closeAll = ()=>{
        setIsDropdownOpen(false);
        setIsCalendarOpen(false);
    };
    const options = [
        'Today',
        'Yesterday',
        '2 days before',
        'This week',
        'Last week',
        'This month'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Inpage_header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Transactions",
                onExport: exportToExcel
            }, void 0, false, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center md:text-xl relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleDropdown,
                                className: "flex items-center px-3 py-1 rounded-md hover:bg-[#404346] transition-colors",
                                "aria-expanded": isDropdownOpen,
                                "aria-haspopup": "true",
                                children: [
                                    selectedOption,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCaretDown"], {
                                        className: "ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 287,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 mt-1 w-48 bg-[#404346] rounded-md shadow-lg z-20",
                                role: "menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-1",
                                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleOptionSelect(option),
                                            className: `block w-full text-left px-4 py-2 hover:bg-gray-800 ${selectedOption === option ? 'bg-gray-700' : ''}`,
                                            role: "menuitem",
                                            children: option
                                        }, option, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Detailed_transations.jsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleCalendar,
                                className: "p-2 rounded-md hover:bg-gray-600 transition-colors",
                                "aria-expanded": isCalendarOpen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlCalender"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            isCalendarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 mt-2 z-20",
                                onClick: (e)=>e.stopPropagation(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selected: selectedDate,
                                    onChange: handleDateChange,
                                    inline: true,
                                    calendarClassName: "bg-[#404346] text-white rounded-md shadow-lg",
                                    dayClassName: ()=>"text-white hover:bg-gray-600",
                                    weekDayClassName: ()=>"text-gray-300",
                                    monthClassName: ()=>"text-white",
                                    renderCustomHeader: ({ monthDate, decreaseMonth, increaseMonth })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-2 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: decreaseMonth,
                                                    className: "p-1 rounded hover:bg-gray-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 19l-7-7 7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                                            lineNumber: 353,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#404346]",
                                                    children: monthDate.toLocaleString('default', {
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: increaseMonth,
                                                    className: "p-1 rounded hover:bg-gray-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5l7 7-7 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                                            lineNumber: 378,
                                                            columnNumber: 25
                                                        }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                                        lineNumber: 371,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Detailed_transations.jsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    (isDropdownOpen || isCalendarOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-10 bg-transparent",
                        onClick: closeAll
                    }, void 0, false, {
                        fileName: "[project]/src/components/Detailed_transations.jsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: "Loading transactions..."
            }, void 0, false, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 403,
                columnNumber: 19
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-center py-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 404,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 overflow-x-auto",
                children: !loading && !error && transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-4",
                    children: "No transactions found"
                }, void 0, false, {
                    fileName: "[project]/src/components/Detailed_transations.jsx",
                    lineNumber: 409,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "text-center font-bold md:text-lg text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Bill Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 415,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Amount Paid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Discount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 418,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 419,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] border-r",
                                        children: "Transaction Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "p-3 bg-[#303336] rounded-tr-lg",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                        lineNumber: 421,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Detailed_transations.jsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: transactions.map((transaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "group text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: transaction.bill_no
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: transaction.plan_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white border-r group-hover:bg-[#505356]",
                                            children: new Date(transaction.date).toISOString().split('T')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 433,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: [
                                                "$",
                                                transaction.amount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: [
                                                "$",
                                                transaction.discount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 439,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: [
                                                "$",
                                                transaction.balance
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 442,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] border-r",
                                            children: transaction.trans_type
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 py-6 bg-[#404346] text-white group-hover:bg-[#505356] relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-white hover:text-gray-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEllipsisV"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                                            lineNumber: 451,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dropdown-menu absolute right-0 mt-2 w-48 bg-[#404346] rounded-md shadow-lg z-10 hidden group-hover:block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleEdit(transaction),
                                                                className: "block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#505356]",
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                                                lineNumber: 454,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDelete(transaction.bill_no),
                                                                className: "block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#505356]",
                                                                children: "Delete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                                                lineNumber: 460,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Detailed_transations.jsx",
                                                        lineNumber: 453,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Detailed_transations.jsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Detailed_transations.jsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, transaction.bill_no, true, {
                                    fileName: "[project]/src/components/Detailed_transations.jsx",
                                    lineNumber: 426,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Detailed_transations.jsx",
                            lineNumber: 424,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Detailed_transations.jsx",
                    lineNumber: 411,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#232024] p-6 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$edit_profile_transaction_data$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        transaction: selectedTransaction,
                        onSave: handleSave,
                        onCancel: handleCancel
                    }, void 0, false, {
                        fileName: "[project]/src/components/Detailed_transations.jsx",
                        lineNumber: 479,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Detailed_transations.jsx",
                    lineNumber: 478,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Detailed_transations.jsx",
                lineNumber: 477,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Detailed_transations.jsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_s(DetailedTransactions, "UlTYSCNPsrD52hD859/vCiSYMaQ=");
_c = DetailedTransactions;
var _c;
__turbopack_context__.k.register(_c, "DetailedTransactions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(pages)/transations/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import Inpage_header from "@/components/Inpage_header"
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Detailed_transations$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Detailed_transations.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Page() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userId = searchParams.get('userId');
    // console.log("just consoling", userId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Detailed_transations$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userId: userId
            }, void 0, false, {
                fileName: "[project]/src/app/(pages)/transations/page.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20"
            }, void 0, false, {
                fileName: "[project]/src/app/(pages)/transations/page.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(pages)/transations/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Page, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_57f67a7c._.js.map