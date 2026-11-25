// Assignment: var vs let vs const

// 1 & 2. Global const
const browserVersion = "Chrome";

// 3. Function
function getBrowserVersion() {
  // Hoisting check: the var declaration below is hoisted to the top of
  // this function, so it shadows the global and is undefined here.
  console.log("Before if (var hoisted):", browserVersion); // undefined

  // 4. if condition
  if (browserVersion === "Chrome") {  
    // 5. Local variable using var (function scoped)
    var browserVersion = "Chrome 120";
  }

  // Printed outside the block: works, because var ignores block scope
  console.log("Outside block (var):", browserVersion); // Chrome 120
}

// 6. Call the function
getBrowserVersion();
