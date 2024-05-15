function getShippingCost(country) {
  let price;

  // Convert country to lower case to handle case-insensitive comparison
  switch (country.toLowerCase()) {
      case 'china':
          price = 100;
          return `Shipping to China will cost ${price} credits`;
      case 'chile':
          price = 250;
          return `Shipping to Chile will cost ${price} credits`;
      case 'australia':
          price = 170;
          return `Shipping to Australia will cost ${price} credits`;
      case 'jamaica':
          price = 120;
          return `Shipping to Jamaica will cost ${price} credits`;
      default:
          return "Sorry, there is no delivery to your country";
  }
}

// Test cases
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
