function launchBrowser(){
let browserName  ="Firefox"
if(browserName ==="Chrome"){
    console.log("This is a Chrome browser");
    
}
else{
        console.log("This is not a  Chrome browser");
}

}launchBrowser()

function runTests(testType) {
    switch (testType) {
        case "Smoke":
            console.log("Running Smoke tests");
            break;
        case "Sanity":
            console.log("Running Sanity tests");
            break;
        case "Regression":
            console.log("Running Regression tests");
            break;
        default:
            console.log("Running Smoke tests");   // default test type
    }
}

let testType = "Sanity";
runTests(testType);   // Running Sanity tests
