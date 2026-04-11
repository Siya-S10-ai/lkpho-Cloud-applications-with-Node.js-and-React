 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestString = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    // Convert that string back into a Date object
    let aestDate = new Date(aestString);
    return aestDate // Return the formatted date and time
};
