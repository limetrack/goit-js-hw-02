function checkForSpam(message) {
  // Convert the message to lower case for case-insensitive comparison
  const lowerCaseMessage = message.toLowerCase();
  
  // Check if the message contains "spam" or "sale"
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
      return true;
  } else {
      return false;
  }
}

// Test cases
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
