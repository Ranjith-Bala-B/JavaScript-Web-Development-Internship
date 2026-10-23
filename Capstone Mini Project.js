console.log("---Initializing Inventory System---");

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter the product name:");
let productPrice = Number(prompt("Enter the product price:"));

if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product name or price!");
} else {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}

function getCategory(price) {
    let category;

    if (price < 50) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

console.log("---Processing Inventory Roster (forEach)---");

inventory.forEach(product => {
    if (!product.name || product.price <= 0) {
        return;
    }

    console.log(
        `*Item:${product.name}($${product.price})->Category:${getCategory(product.price)}`
    );
});

function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        if (item.price <= 0) {
            continue;
        }

        total += item.price;
    }

    return total;
}

const applyDiscount = (price, discount = 0) =>
    price - (price * discount / 100);

console.log("---Financial Analytics---");

const totalValue = calculateTotal(inventory);
console.log("Total Inventory Value:$" + totalValue);

const affordableItems = inventory.filter(
    product => product.price < 200
);

console.log(
    "Filtered Affordable Items (Under $200):" +
    JSON.stringify(affordableItems.map(product => product.name))
);

const report = inventory.map(
    product => `${product.name.toUpperCase()}:$${product.price}`
);

console.log("Formatted Report List:" + JSON.stringify(report));

console.log("Laptop Price After 10% Discount:$" +
    applyDiscount(800, 10));