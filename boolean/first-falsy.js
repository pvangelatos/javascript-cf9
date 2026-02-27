let isLogin = "yes";     // User is logged in
let isAdmin = "yesAdmin";    // User is not an admin
let hasAccess = false;  // User does not have access

// Check if the user can access the admin panel
hasAccess = isLogin && isAdmin; // User must be logged in and an admin to have access

// Output the result
console.log("User has access to admin panel:", hasAccess); // Output: User has access to admin panel: yesAdmin

// OR is first truthy value
let isGuest = false;
let isMember = true;
let isAllowed = isGuest || isMember; // This will return true because isMember is truthy

