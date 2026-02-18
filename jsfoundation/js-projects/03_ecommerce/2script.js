// Again for practise repeat kartoy but tyane additional assignment dhiliye
// 1> Remove button for each product in car, fairly easy css madhe kam karava lagel ani delete button inner html ne add karuyat
// 2> Local storage madhe save karava lagel so that refresh kela ki products empty nako hoyla

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 34.94 },
    { id: 2, name: "Product 2", price: 76.64 },
    { id: 3, name: "Product 3", price: 372.04 },
    { id: 4, name: "Product 4", price: 2.73 },
  ];

  let cart = JSON.parse(localStorage.getItem("items")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price}</span>
    <button data-id='${product.id}'>Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function saveItemCart() {
    localStorage.setItem("items", JSON.stringify(cart));
  }

  function addToCart(product) {
    cart.push(product);
    saveItemCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price}
        <button data-id='${item.id}'>Remove</button>
        `;
        cartItem.classList.add("cart-item"); // me kay kela ki ek car-item class css file madhe banavli product class che properties copy marlya thode deduction kela ani button sathi pan same kela just remove la red colour dhila
        cartItems.appendChild(cartItem);
        totalPriceDisplay.innerText = `$${totalPrice.toFixed(2)}`;

        //   2 main goshti ahet ithe, ek ki apla cart array ha const nasla pahije karan ofc remove kartana array change honar na so const --> let. Dusri goshta me button la data-id aria label dhilach nhavta so tyala item chi idch milali nahi mhanun filter() method was useless
        // SO ata caritem remove kelya nantar tyachi amount sudha reduce karun total diplay karaychay
        cartItem.addEventListener("click", (event) => {
          if (event.target.tagName === "BUTTON") {
            // cart = cart.filter((i) => i.id !== item.id); This is completely fine ik I have done this for project 1 but ig a cleaner approach or understanble approach whenever I coome back is
            const itemId = parseInt(event.target.getAttribute("data-id")); // ofc he string madhe yeta we want to convert this into int
            const cart = cart.filter((item) => item.id !== itemId);
            // Donihi samech ahe just me tya item id la attribute through grab karun jast var madhe save kela jyachi kharatar garaz nahiye we can do it directly but this is easy to understand if I come back here
            cartItem.remove();
            totalPrice -= item.price;
            totalPriceDisplay.innerText = `$${totalPrice.toFixed(2)}`;
            saveItemCart();
          }
        });
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.innerText = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkedout successfully");
    saveItemCart();
    renderCart();
  });
  renderCart(); // Ata local storage perfectly work karat hota like me ek function banavla saveItemCart() magh main set and get steps kelya magh tya funciton la line 46,76,89 la call kela sagla perfect hota. Mhanje car madhe item add kela ki local la add jhala magh nantar remove kela ki local madhun pan remove hoycha ani magh checkout kela ki cart ani local donihi clear hoycha, ith paryant perfect hota, renderCart() function sudha perfect work karat hota like add kartana render, remove kartana render ani checkout kartan empty cart cha render, the only thin hi hoti ki item car madhe add kela ani page refresh kela ki udan jaycha tar mala lastly kay karava lagla ki line 92 la renderCart() la call karava lagla je kay sangta ki renderCart() he fakt adding, removing ani checkout la call kelala pan dom loading la nahi tyamule dom initial page load jhala ki call karaycha
  //   Basically conclusion ha hae ki dom load jhala ki akha code tar load hoilach pan local storage madhe kahi items cart madhe ahet ka ani te render karaychi garz ahe ka mhanun rederTask() last la to render the local storage on refreshing the page
});
