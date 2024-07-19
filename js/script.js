let cardRender = document.querySelector("#card-render");
let displayAddcart = document.querySelector("#product-cart");
let displayProduct = document.querySelector("#product-display");
let countNumbers = 0;
let addedItems = {};

const url = "http://localhost:3000/popularProducts";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      cardRender.innerHTML += ` <div class="max-w-sm rounded shadow-sm">
                    <div class="rounded-md bg-red-500 absolute m-4">
                        <p class="text-white p-2">Sale 50%</p>
                    </div>
                    <img class="w-full" src="images/product.png" alt="Sunset in the mountains">
                    <div class="px-6 py-4 flex justify-between">
                        <div>
                            <p class="text-gray-500">HealthCare</p>
                            <h1 class="font-bold text-lg mb-2">${item.title}</h1>
                            <p class="font-bold text-md mb-2">$ ${item.price}</p>
                            <p class="star">⭐⭐⭐⭐⭐</p>
                        </div>
                        <div>
                            <button class="add-to-cart-btn remove-to-cart-btn hover:bg-blue-700 rounded-full" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}">
                                <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="32.0979" cy="32.9121" rx="31.8674" ry="32" fill="#F2F2F2" />
                                    <path
                                        d="M26.8369 30.5H23.0869L20.5869 44.25H43.0869L40.5869 30.5H36.8369M26.8369 30.5V26.75C26.8369 23.9886 29.0755 21.75 31.8369 21.75V21.75C34.5983 21.75 36.8369 23.9886 36.8369 26.75V30.5M26.8369 30.5H36.8369M26.8369 30.5V34.25M36.8369 30.5V34.25"
                                        stroke="#1A1A1A" stroke-width="1.85644" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>`;
    });

    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
      button.addEventListener("click", (add) => {
        const productId = add.currentTarget.getAttribute("data-id");
        const productTitle = add.currentTarget.getAttribute("data-title");
        const productPrice = add.currentTarget.getAttribute("data-price");

        if (!addedItems[productId]) {
          addedItems[productId] = { title: productTitle, price: productPrice };
          countNumbers++;
          displayAddcart.textContent = countNumbers;
        } else {
          delete addedItems[productId];
          countNumbers--;
          displayAddcart.textContent = countNumbers;
        }
      });
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
