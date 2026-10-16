const shopName = "Brent's Toy Collection";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display the shop name.
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// Count the products on the current page.
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

// Display labelled values in the console.
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Product Count:", runningTotal);
