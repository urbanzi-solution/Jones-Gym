
// const membershipPlans = [
//   {
//     amount: 45000,
//     balance: 0,
//     bill_no: "468",
//     date: "2025-07-31T18:30:00.000Z",
//     discount: 0,
//     exp_date: "2026-01-28T18:30:00.000Z",
//     name: "Praveen Nair",
//     plan_name: "6 M PT",
//     trainer: "",
//     trans_type: "Credit Card",
//     user_id: "JM240"
//   }
//   // Add more membership plans here if needed
// ];

const membershipPlans = [
    {
        "user_id":"JM240",
        "plan_name":"6 M PT",
        "bill_no":"468",
        "amount":45000,
        "discount":0,
        "balance":0,
        "trans_type":"Credit Card",
        "trainer":"",
        "date":"2025-08-01",
        "exp_date":"2026-01-29"
    }
];

// const membershipPlans = [
//     {
//         "user_id":"SJ233",
//         "plan_name":"1 M G+P.T",
//         "bill_no":"3684",
//         "amount":13000,
//         "discount":0,
//         "balance":0,
//         "trans_type":"GPay",
//         "trainer":"",
//         "date":"2025-08-01",
//         "exp_date":"2025-08-31"}
// ];

// Mock member data for fallback (since it was referenced in original code)
const member = {
  joining_date: "2024-01-01T00:00:00.000Z"
};

// Mock loading state (set to false since we have data)
const loading = false;

console.log("membershipPlans", membershipPlans);

// Calculate plan names (equivalent to useMemo)
function calculatePlanNames(plans) {
  return plans.length > 0 
    ? plans.map(plan => plan.plan_name).join(', ')
    : 'Basic Gym';
}

const planNames = calculatePlanNames(membershipPlans);
console.log("planNames", planNames);

// Calculate expiration details for each plan (equivalent to useMemo)
function calculatePlanExpirations(plans, memberJoiningDate, isLoading) {
  if (plans.length > 0) {
    return plans.map(plan => {
      const expiryDate = new Date(plan.exp_date);
      const today = new Date();
      
      // Calculate days until expiry
      const daysUntilExpiry = Math.max(
        0,
        Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
      );
      
      // Format expiry date
      const formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).split('/').join('-');

      return {
        planName: plan.plan_name,
        daysUntilExpiry,
        formattedExpiry,
        isExpired: expiryDate < today
      };
    });
  } else if (!isLoading) {
    // Fallback for when no plans are found
    const joiningDate = new Date(memberJoiningDate);
    const expiryDate = new Date(joiningDate);
    expiryDate.setFullYear(joiningDate.getFullYear() + 1);
    const today = new Date();
    
    const daysUntilExpiry = Math.max(
      0,
      Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24))
    );
    
    const formattedExpiry = expiryDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).split('/').join('-');

    return [{
      planName: 'Basic Gym',
      daysUntilExpiry,
      formattedExpiry,
      isExpired: expiryDate < today
    }];
  }
  return [];
}

const planExpirations = calculatePlanExpirations(membershipPlans, member.joining_date, loading);
console.log("planExpirations", planExpirations);

// Calculate overall expiration status (equivalent to useMemo)
function calculateExpirationStatus(expirations) {
  if (expirations.length > 0) {
    // Count expired plans that are less than 60 days old
    const expiredPlansCount = expirations.filter(plan => {
      if (!plan.isExpired) return false;
      
      const expiryDate = new Date(plan.formattedExpiry.split('-').reverse().join('-'));
      const currentDate = new Date();
      const diffTime = currentDate - expiryDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      
      return diffDays < 60;
    }).length;
    
    const latestPlan = expirations.reduce((latest, plan) => {
      const planDate = new Date(plan.formattedExpiry.split('-').reverse().join('-'));
      return !latest || planDate > new Date(latest.formattedExpiry.split('-').reverse().join('-')) ? plan : latest;
    }, null);
    
    return {
      daysUntilExpiry: latestPlan.daysUntilExpiry,
      isExpired: expiredPlansCount > 0,
      formattedExpiry: latestPlan.formattedExpiry,
      expiredPlansCount
    };
  }
  return { daysUntilExpiry: 0, isExpired: true, formattedExpiry: 'N/A', expiredPlansCount: 1 };
}

const { daysUntilExpiry, isExpired, formattedExpiry, expiredPlansCount } = calculateExpirationStatus(planExpirations);

console.log("Overall expiration status:", {
  daysUntilExpiry,
  isExpired,
  formattedExpiry,
  expiredPlansCount
});

// Simulate the Membership Info section output
console.log("\n=== MEMBERSHIP INFO OUTPUT ===");

if (loading) {
  console.log("Loading...");
} else {
  const plansToShow = planExpirations.filter(plan => !plan.isExpired && plan.daysUntilExpiry <= 60);
  
  if (plansToShow.length > 0) {
    plansToShow.forEach((plan, index) => {
      console.log(`${plan.planName} - ${plan.daysUntilExpiry} Days Remaining, Expires ${plan.formattedExpiry}`);
    });
  } else {
    console.log("No plans");
  }
}

// Additional detailed information about each membership plan
console.log("\n=== DETAILED MEMBERSHIP PLANS ===");
membershipPlans.forEach((plan, index) => {
  console.log(`\nPlan ${index + 1}:`);
  console.log(`  Name: ${plan.name}`);
  console.log(`  Plan: ${plan.plan_name}`);
  console.log(`  Amount: ₹${plan.amount}`);
  console.log(`  Balance: ₹${plan.balance}`);
  console.log(`  Bill No: ${plan.bill_no}`);
  console.log(`  Date: ${new Date(plan.date).toLocaleDateString('en-GB')}`);
  console.log(`  Expiry Date: ${new Date(plan.exp_date).toLocaleDateString('en-GB')}`);
  console.log(`  Discount: ₹${plan.discount}`);
  console.log(`  Trainer: ${plan.trainer || 'Not assigned'}`);
  console.log(`  Transaction Type: ${plan.trans_type}`);
  console.log(`  User ID: ${plan.user_id}`);
});