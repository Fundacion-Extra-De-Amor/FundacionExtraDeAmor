filterSelection("all");

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("post");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    let i, arrl, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    let addToCartButtons = document.getElementsByClassName("ADD_TO_CART");
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }

}


let btnVerMas = document.getElementsByClassName("btn-verMas");
let btn_Cerrar = document.getElementsByClassName("btnCerrar");

for (let i = 0; i < btnVerMas.length; i++) {
    let button = btnVerMas[i];
    button.addEventListener("click", showOverlay);
}

function showOverlay(e) {
    let button = e.target;
    let post = button.parentElement.parentElement.parentElement;
    post.classList.add('overlay');
}

for (let i = 0; i < btn_Cerrar.length; i++) {
    let button = btn_Cerrar[i];
    button.addEventListener("click", hideOverlay );
}
function hideOverlay(e) {
    let button = e.target;
    let post = button.parentElement.parentElement;
    post.classList.remove('overlay');
}


function addToCartClicked(event) {
    let button = event.target;
    let post = button.parentElement.parentElement.parentElement;
    let title = post.getElementsByClassName("post-title")[0].innerText;
    let text = post.getElementsByClassName("post__text")[0].innerText;
    let imageSrc = post.getElementsByClassName("post__image")[0].src;
    let date = post.getElementsByClassName("post_date")[0].innerText;

    addItemToCart(title, text,  imageSrc, date);
    const cart = document.getElementById("cart");
    cart.classList.add("show-cart");
        
    const btnCerrar = document.getElementById("btn-cerrar");
    btnCerrar.addEventListener("click", () => {
        purchaseClicked();
        cart.classList.remove("show-cart");
        post.classList.remove('overlay');
    });
}


function purchaseClicked() {
    let cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
}

function addItemToCart(title, text,  imageSrc, date) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartItemTitles = cartItems.getElementsByClassName("cart-item-title");

    let cartRowContents = `
  <div class="btnCerrar" id="btn-cerrar">X</div>
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}">
  </div>
  <div class="post-body">
      <span class="cart-item-date">${date}</span>
      <h3 class="cart-item-title">${title}</h3> 
      <p class="cart-text cart-column">${text} </p>
  </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
}

// !swiper

const swiper = new Swiper(".swiper", {
    //! Optional parameters
    direction: "horizontal",
    // direction: 'vertical',
    loop: true,

    // !If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // !Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    //! And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});