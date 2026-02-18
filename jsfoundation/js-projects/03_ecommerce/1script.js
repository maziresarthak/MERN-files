// On line 26 we have aria label and product.id that tells each button will have a unique id as same as the product id. So the new product and button for the new product will have same id and will be uniwue for other, basically each of the button gets an uniwue id and later on if I want to find I can just go ahead and find this out. To know aout aria label go here : https://chatgpt.com/share/,69878b6e-39b8-8004-b305-cbef8fa556f0
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 59.99 },
    { id: 2, name: "Product 2", price: 39.99 },
    { id: 3, name: "Product 3", price: 69.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Products array madhe pratyek index/product var we want to perform these operations thats why we use forEach method
  products.forEach((product) => {
    const productDiv = document.createElement("div"); // So 1st project sarkha we can create li for each product but ithe we will use div for each product
    // SO each product gets its own div and we will add a class to it which is product because we already have the designs and all for the products, tyamule ata tya akhya div la me product class dhila ani button sathi product class madhe ajun css ahe go check it out tyamule button la te css milala
    productDiv.classList.add("product");
    productDiv.innerHTML =
      // tofixed() will keep the precision upto 2 so if I have a no like 89.999 it will take 89.99 only two digits from right of the decimal
      `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id='${product.id}'>Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (event) => {
    // console.log("Clicked"); // Again event bubbling takes place as I click on any part of the div even the button event bubbling takes place

    // But I am only concerned about the button :
    if (event.target.tagName === "BUTTON") {
      //   console.log("Clicked"); Now there is no event bubbling
      //   Now the basic idea on this event listener is when I click the button I want to know the attribute that is I want to grab the attribute of the button I clicked so as from one the attirbute I would love to know the product id so through that product id I can go ahead and filter out my products the array and I can add the product into my cart
      //   console.log(event.target.getAttribute("data-id"));
      //   console.log(typeof event.target.getAttribute("data-id")); So basically when I print the product-id on line 39 I get a number but actually when I check the typeof its a string so I want ot convert that string into number which is done below :
      const productId = parseInt(event.target.getAttribute("data-id"));
      // As the defination says for find() 'Returns the value of the first element in the array where predicate is true, and undefined' otherwise that means what ever the condition you are providing if thats true it will return that very first element and thats what we wantmo
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = ""; // Hota kay darvelis button dabtana, task render kartana mala to task emty karava lagel jar me asa nahi kela ani line 55 la delete kela ki kay hota for ex me task 1 add kela, magh nantar task 2 add kela ki ek additional task 1 add hotay mhanje in total task1, task1, task2 he 3 task yetat, 1 task1 additional yetoy, ata parat task 2 la add kela ki ata task1, task 2 he repeat hota additionally jast task1 repeat jhala hota,  mhanjc  kay ki renderCart() ne memory madhe to task1 ani task1, task2 fix kela jo darveli add honarach navin task add kartana, so renderCart() chi memory hi clean/empty karnya sathi we do this, jevha me he parat vachil ani kahi kala nahi ki line 55 comment karun bagh ani try kar tula error kalel
    // Basically empty here is being rendered out
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div"); // Actually to jo emptyCartMessage para ahe tithe he sagla add karaychay cart item and all...
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0; // Shortcut way to clear the cart
    alert("Checkedout successfully");
    renderCart(); // Lastly run this method again to again empty is being rendered out
    // Ani ata ofc checkout kelyavr line 72var cart.length === 0 honar so else madhe totalPriceDisplay cha textcontent 0 karava lagel to clear the total out
  });
});
