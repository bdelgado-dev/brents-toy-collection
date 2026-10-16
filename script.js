
const shopName = "Brent's Toy Collection";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display the shop name.
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// Count the toy cards on the page.
const products = document.querySelectorAll(".product-card");
runningTotal = products.length;

const productCountElement = document.getElementById("product-count");

if (productCountElement) {
    productCountElement.textContent = runningTotal;
}

// Update the copyright.
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName} • Built for Toy Lovers`;
}

// 1. STOCK STATUS
const stockCount = 5;
let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Stock information unavailable";
}

const stockStatusElement = document.getElementById("stock-status");

if (stockStatusElement) {
    stockStatusElement.textContent = stockMessage;
}

// 2. FREE DELIVERY CHECK
const orderTotal = 1200;
const isMember = true;

const qualifiesForFreeDelivery =
    orderTotal >= 1000 && isMember === true;

const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryFeeElement = document.getElementById("delivery-fee");
const finalTotalElement = document.getElementById("final-total");

if (deliveryFeeElement) {
    deliveryFeeElement.textContent = deliveryFee;
}

if (finalTotalElement) {
    finalTotalElement.textContent = finalTotal;
}

// 3. SHOP OPEN OR CLOSED
const isShopOpen = true;

const shopMessage = isShopOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
    shopStatusElement.textContent = shopMessage;
}

// Console messages.
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Product Count:", runningTotal);
console.log("Stock Status:", stockMessage);
console.log("Delivery Fee:", deliveryFee);
console.log("Final Total:", finalTotal);
console.log("Shop Status:", shopMessage);
