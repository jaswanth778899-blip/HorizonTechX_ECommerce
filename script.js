const products = [
  {
    id: 1,
    name: "Aurora Headphones",
    category: "Audio",
    description: "Adaptive noise cancelling",
    price: 329,
    icon: "🎧"
  },
  {
    id: 2,
    name: "Cell Power Bank",
    category: "Power",
    description: "20,000mAh fast charging",
    price: 109,
    icon: "🔋"
  },
  {
    id: 3,
    name: "Nova Smartwatch",
    category: "Wearables",
    description: "Titanium case smartwatch",
    price: 279,
    icon: "⌚"
  },
  {
    id: 4,
    name: "Pulse Earbuds",
    category: "Audio",
    description: "Wireless earbuds",
    price: 149,
    icon: "🎵"
  },
  {
    id: 5,
    name: "Flux Keyboard",
    category: "Desk",
    description: "Mechanical keyboard",
    price: 189,
    icon: "⌨️"
  },
  {
    id: 6,
    name: "Lumen Monitor Light",
    category: "Desk",
    description: "Zero-glare desk lighting",
    price: 89,
    icon: "💡"
  },
  {
    id: 7,
    name: "Orbit Speaker",
    category: "Audio",
    description: "360-degree sound",
    price: 129,
    icon: "🔊"
  },
  {
    id: 8,
    name: "Vertex Mouse",
    category: "Desk",
    description: "Lightweight wireless mouse",
    price: 99,
    icon: "🖱️"
  }
];

let cart = [];

const productsContainer =
  document.getElementById("products");

function displayProducts() {

  productsContainer.innerHTML = products.map(product => {

    return `
      <div class="product">

        <div class="product-image">
          ${product.icon}
        </div>

        <div class="category">
          ${product.category}
        </div>

        <h3>${product.name}</h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <span class="price">
            $${product.price}
          </span>

          <button
            class="add-btn"
            onclick="addToCart(${product.id})">
            Add +
          </button>

        </div>

      </div>
    `;

  }).join("");

}

function addToCart(id) {

  const product =
    products.find(item => item.id === id);

  cart.push(product);

  updateCart();

}

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();

}

function updateCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartCount =
    document.getElementById("cartCount");

  const cartTotal =
    document.getElementById("cartTotal");

  cartCount.textContent = cart.length;

  if (cart.length === 0) {

    cartItems.innerHTML =
      "Your cart is empty.";

    cartTotal.textContent = "0.00";

    return;
  }

  cartItems.innerHTML =
    cart.map((product, index) => {

      return `
        <div class="cart-item">

          <div>
            <strong>${product.name}</strong>
            <p>$${product.price}</p>
          </div>

          <button
            class="remove-btn"
            onclick="removeFromCart(${index})">
            Remove
          </button>

        </div>
      `;

    }).join("");

  const total =
    cart.reduce(
      (sum, product) => sum + product.price,
      0
    );

  cartTotal.textContent =
    total.toFixed(2);

}

function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(
    "Checkout is simulated for this demo."
  );

}

displayProducts();
updateCart();