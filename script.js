/* =========================================================
   SRIDEVI TEXTILES
   COMPLETE CUSTOMER WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

    /* ================= MEN ================= */

    {
        id: 1,
        name: "Classic Men's Shirt",
        category: "Men",
        price: 799,
        oldPrice: 1199,
        rating: 4.5,
        sizes: ["S", "M", "L", "XL"],
        description:
            "Premium quality men's shirt designed for everyday comfort and stylish occasions.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/White.jpg",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/White+back.jpg",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Person+white+shirt.jpg"
        ]
    },


    {
        id: 2,
        name: "Premium Men's Kurta",
        category: "Men",
        price: 999,
        oldPrice: 1499,
        rating: 4.7,
        sizes: ["M", "L", "XL", "XXL"],
        description:
            "Elegant traditional kurta with a modern fit and comfortable premium fabric.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Men+kurta+front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Men+kuta+backside.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Men+kurta+zoom.webp"
        ]
    },


    {
        id: 3,
        name: "Men's Casual T-Shirt",
        category: "Men",
        price: 499,
        oldPrice: 799,
        rating: 4.4,
        sizes: ["S", "M", "L", "XL"],
        description:
            "Comfortable casual t-shirt suitable for everyday wear.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/T+Shirt+front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/T+Shirt+back.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/T+Shirt+Side.webp"
        ]
    },


    {
        id: 4,
        name: "Men's Traditional Wear",
        category: "Men",
        price: 1299,
        oldPrice: 1999,
        rating: 4.8,
        sizes: ["M", "L", "XL", "XXL"],
        description:
            "Traditional ethnic wear perfect for festivals, celebrations and special occasions.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Tradit+Front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Tradit+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Tradit+3.webp"
        ]
    },


    {
        id: 5,
        name: "Men's Formal Collection",
        category: "Men",
        price: 1499,
        oldPrice: 2199,
        rating: 4.6,
        sizes: ["M", "L", "XL", "XXL"],
        description:
            "Stylish formal collection designed for office wear and important occasions.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Formal+front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Formal+Side.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Formal+back.webp"
        ]
    },


    /* ================= WOMEN ================= */

    {
        id: 6,
        name: "Designer Saree",
        category: "Women",
        price: 1599,
        oldPrice: 2499,
        rating: 4.8,
        sizes: ["Free Size"],
        description:
            "Beautiful designer saree with elegant styling suitable for special occasions.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Saree+Front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Saree+Back.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Saree+zoom.webp"
        ]
    },


    {
        id: 7,
        name: "Women's Designer Dress",
        category: "Women",
        price: 1199,
        oldPrice: 1899,
        rating: 4.6,
        sizes: ["S", "M", "L", "XL"],
        description:
            "Trendy women's dress made with comfortable fabric and elegant styling.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Dress+front.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Dress+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Design+Dress+zoom.webp"
        ]
    },


    {
        id: 8,
        name: "Women's Ethnic Wear",
        category: "Women",
        price: 1399,
        oldPrice: 2199,
        rating: 4.7,
        sizes: ["S", "M", "L", "XL"],
        description:
            "Elegant ethnic collection combining traditional design with modern comfort.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Ethnic+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Ethnic+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/ethnic+3.webp"
        ]
    },


    {
        id: 9,
        name: "Women's Kurti",
        category: "Women",
        price: 699,
        oldPrice: 1099,
        rating: 4.5,
        sizes: ["S", "M", "L", "XL", "XXL"],
        description:
            "Comfortable and stylish kurti suitable for everyday and festive wear.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Womens+kurtha+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Womens+Kurtha+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Womens+Kurtha+3.webp"
        ]
    },


    {
        id: 10,
        name: "Our Signatured Saree Collections",
        category: "Women",
        price: 1299,
        oldPrice: 2199,
        rating: 4.9,
        sizes: ["Free Size"],
        description:
            "Get customised your dream Saree from our Hand-Craft work.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Premimum+Saree.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Premimum+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Premimum+3.webp"
        ]
    },


    /* ================= KIDS ================= */

    {
        id: 11,
        name: "Kids Party Wear",
        category: "Kids",
        price: 899,
        oldPrice: 1399,
        rating: 4.7,
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        description:
            "Colourful party wear collection for kids with comfortable fabric.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Party+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Party+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Party+3.webp"
        ]
    },


    {
        id: 12,
        name: "Kids Casual Dress",
        category: "Kids",
        price: 599,
        oldPrice: 999,
        rating: 4.5,
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        description:
            "Cute and comfortable casual dress for everyday use.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+casual+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+casual+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+casual+3.webp"
        ]
    },


    {
        id: 13,
        name: "Kids Traditional Wear",
        category: "Kids",
        price: 799,
        oldPrice: 1199,
        rating: 4.6,
        sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
        description:
            "Traditional ethnic collection for children.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Tradit+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Tradit+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Tradit+3.webp"
        ]
    },


    {
        id: 14,
        name: "Kids Girls Casual",
        category: "Kids",
        price: 699,
        oldPrice: 1099,
        rating: 4.4,
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        description:
            "Stylish Girls collection made for comfort and everyday adventures.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Girl+Casu+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Girl+casu+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+girl+casu+3.webp"
        ]
    },


    {
        id: 15,
        name: "Kids Girls Traditional",
        category: "Kids",
        price: 749,
        oldPrice: 1199,
        rating: 4.7,
        sizes: ["2Y", "4Y", "6Y", "8Y"],
        description:
            "Beautiful girls collection featuring colourful and comfortable designs.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Girl+Tradit+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Girl+Tradit+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Kids+Girl+Tradit+3.webp"
        ]
    },


    /* ================= ACCESSORIES ================= */

    {
        id: 16,
        name: "Premium Handbag",
        category: "Accessories",
        price: 899,
        oldPrice: 1299,
        rating: 4.6,
        sizes: ["Free Size"],
        description:
            "Elegant handbag designed to complement your everyday fashion.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Handbag+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Hnadbag+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Handbad+3.webp"
        ]
    },


    {
        id: 17,
        name: "Fashion Watch",
        category: "Accessories",
        price: 699,
        oldPrice: 999,
        rating: 4.4,
        sizes: ["Free Size"],
        description:
            "Stylish fashion watch suitable for daily and special occasions.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Watch+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Watch+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Watch+3.webp"
        ]
    },


    {
        id: 18,
        name: "Fashion Sunglasses",
        category: "Accessories",
        price: 499,
        oldPrice: 799,
        rating: 4.5,
        sizes: ["Free Size"],
        description:
            "Modern sunglasses designed to complete your stylish look.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Sunglass+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Sunglass+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Sunglass+3.webp"
        ]
    },


    {
        id: 19,
        name: "Designer Wallet",
        category: "Accessories",
        price: 399,
        oldPrice: 699,
        rating: 4.3,
        sizes: ["Free Size"],
        description:
            "Compact and stylish wallet for everyday use.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Wallet+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Wallet+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Wallet+3.webp"
        ]
    },


    {
        id: 20,
        name: "Fashion Accessories Set",
        category: "Accessories",
        price: 599,
        oldPrice: 899,
        rating: 4.6,
        sizes: ["Free Size"],
        description:
            "Beautiful accessories set to complete your fashion collection.",
        images: [
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Access+Set+1.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Access+Set+2.webp",
            "https://aasaicodes.s3.ap-south-1.amazonaws.com/Access+Set+3.webp"
        ]
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let cart = [];

let selectedProduct = null;

let selectedSize = null;

let currentCategory = "All";

let newArrival = products[9];


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayProducts(list) {

    const grid =
        document.getElementById("productGrid");


    if (!grid) return;


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    🔍
                </div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search.
                </p>
            </div>
        `;

        return;

    }


    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        const discount =
            product.oldPrice
                ? Math.round(
                    (
                        (product.oldPrice - product.price)
                        /
                        product.oldPrice
                    ) * 100
                )
                : 0;


        card.innerHTML = `

            <div class="product-photo-box">

                ${
                    discount > 0
                    ?
                    `<div class="offer">
                        ${discount}% OFF
                    </div>`
                    :
                    ""
                }


                <button
                    class="wishlist"
                    onclick="toggleWishlist(this, ${product.id})"
                >
                    ♡
                </button>


                <img
                    class="product-photo"
                    src="${product.images[0]}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>


                <div class="product-name">
                    ${product.name}
                </div>


                <div class="rating">

                    ${"★".repeat(Math.floor(product.rating))}

                    <span>
                        ${product.rating}
                    </span>

                </div>


                <div class="price">

                    <strong>
                        ₹${product.price}
                    </strong>

                    ${
                        product.oldPrice
                        ?
                        `<del>
                            ₹${product.oldPrice}
                        </del>`
                        :
                        ""
                    }

                </div>


                <button
                    class="view-product"
                    onclick="openProduct(${product.id})"
                >
                    View Product
                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   FILTER CATEGORY
========================================================= */

function filterCategory(category, button = null) {

    currentCategory = category;


    if (category === "All") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product =>
                    product.category === category
            );

        displayProducts(filtered);

    }


    document
        .querySelectorAll(".product-tabs button")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    } else {

        document
            .querySelectorAll(".product-tabs button")
            .forEach(btn => {

                if (
                    btn.textContent.trim() === category
                ) {

                    btn.classList.add("active");

                }

            });

    }


    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   OPEN PRODUCT
========================================================= */

function openProduct(id) {

    selectedProduct =
        products.find(
            product => product.id === id
        );


    if (!selectedProduct) return;


    selectedSize =
        selectedProduct.sizes[0];


    document.getElementById("detailImage").src =
        selectedProduct.images[0];


    document.getElementById("detailCategory").textContent =
        selectedProduct.category;


    document.getElementById("detailName").textContent =
        selectedProduct.name;


    document.getElementById("detailRating").innerHTML =
        "★".repeat(Math.floor(selectedProduct.rating))
        +
        `<span>${selectedProduct.rating}</span>`;


    document.getElementById("detailPrice").textContent =
        `₹${selectedProduct.price}`;


    document.getElementById("detailOldPrice").textContent =
        selectedProduct.oldPrice
            ? `₹${selectedProduct.oldPrice}`
            : "";


    document.getElementById("detailDescription").textContent =
        selectedProduct.description;


    /* =========================
       SIZES
    ========================= */

    const sizeContainer =
        document.getElementById("sizeOptions");


    sizeContainer.innerHTML = "";


    selectedProduct.sizes.forEach(
        (size, index) => {

            const button =
                document.createElement("button");

            button.className =
                "size" +
                (index === 0 ? " selected" : "");


            button.textContent = size;


            button.onclick = function () {

                document
                    .querySelectorAll(".size")
                    .forEach(btn =>
                        btn.classList.remove("selected")
                    );


                this.classList.add("selected");


                selectedSize = size;

            };


            sizeContainer.appendChild(button);

        }
    );


    /* =========================
       IMAGE THUMBNAILS
    ========================= */

    const thumbnails =
        document.getElementById(
            "productThumbnails"
        );


    thumbnails.innerHTML = "";


    const labels = [
        "Front",
        "Back",
        "Model"
    ];


    selectedProduct.images.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("button");


            thumbnail.className =
                "product-thumbnail" +
                (index === 0 ? " active" : "");


            thumbnail.innerHTML = `

                <img
                    src="${image}"
                    alt="${labels[index]}"
                >

                <span>
                    ${labels[index]}
                </span>

            `;


            thumbnail.onclick = function () {

                document.getElementById(
                    "detailImage"
                ).src = image;


                document
                    .querySelectorAll(
                        ".product-thumbnail"
                    )
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                this.classList.add("active");

            };


            thumbnails.appendChild(thumbnail);

        }
    );


    document.getElementById(
        "detailAddButton"
    ).onclick = function () {

        addToCart(selectedProduct.id);

    };


    document
        .getElementById("productModal")
        .classList.add("show");

}


/* =========================================================
   CLOSE PRODUCT
========================================================= */

function closeProduct() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    const existing =
        cart.find(
            item =>
                item.id === productId &&
                item.size === selectedSize
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            size: selectedSize,

            quantity: 1,

            image: product.images[0]

        });

    }


    updateCart();

    closeProduct();

    openCart();

}


/* =========================================================
   INCREASE QUANTITY
========================================================= */

function increaseQuantity(index) {

    if (!cart[index]) return;


    cart[index].quantity++;


    updateCart();

}


/* =========================================================
   DECREASE QUANTITY
========================================================= */

function decreaseQuantity(index) {

    if (!cart[index]) return;


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();

}


/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");


    const cartCount =
        document.getElementById("cartCount");


    const cartTotal =
        document.getElementById("cartTotal");


    let total = 0;

    let itemCount = 0;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some beautiful products!
                </p>

            </div>

        `;


        cartCount.textContent = "0";

        cartTotal.textContent = "₹0";

        return;

    }


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        itemCount += item.quantity;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <div class="cart-size">
                    Size: ${item.size}
                </div>

                <div class="cart-price">
                    ₹${item.price}
                </div>


                <div class="quantity-control">

                    <button
                        class="quantity-btn"
                        onclick="decreaseQuantity(${index})"
                    >
                        −
                    </button>


                    <span class="quantity-number">
                        ${item.quantity}
                    </span>


                    <button
                        class="quantity-btn"
                        onclick="increaseQuantity(${index})"
                    >
                        +
                    </button>

                </div>

            </div>


            <div class="cart-item-right">

                <strong class="cart-item-total">
                    ₹${itemTotal}
                </strong>


                <button
                    class="remove-cart"
                    onclick="removeCart(${index})"
                    title="Remove"
                >
                    🗑️
                </button>

            </div>

        `;


        cartItems.appendChild(div);

    });


    cartCount.textContent = itemCount;

    cartTotal.textContent =
        `₹${total}`;

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("show");


    document
        .getElementById("cartBackdrop")
        .classList.add("show");

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("show");


    document
        .getElementById("cartBackdrop")
        .classList.remove("show");

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(button, productId) {

    button.classList.toggle("active");


    if (button.classList.contains("active")) {

        button.textContent = "♥";

    } else {

        button.textContent = "♡";

    }

}


/* =========================================================
   NEW ARRIVAL
========================================================= */

function updateNewArrival() {

    if (!newArrival) return;


    document.getElementById(
        "arrivalImage"
    ).src = newArrival.images[0];


    document.getElementById(
        "arrivalTitle"
    ).textContent = newArrival.name;


    document.getElementById(
        "arrivalDescription"
    ).textContent = newArrival.description;


    document.getElementById(
        "arrivalPrice"
    ).textContent = `₹${newArrival.price}`;


    document.getElementById(
        "arrivalOldPrice"
    ).textContent =
        newArrival.oldPrice
            ? `₹${newArrival.oldPrice}`
            : "";

}


/* =========================================================
   OPEN NEW ARRIVAL
========================================================= */

function openArrivalProduct() {

    openProduct(newArrival.id);

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    document
        .getElementById("searchOverlay")
        .classList.add("show");


    setTimeout(() => {

        document
            .getElementById("searchInput")
            .focus();

    }, 100);

}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("show");


    document
        .getElementById("searchInput")
        .value = "";


    document
        .getElementById("searchResults")
        .innerHTML = "";

}


function searchProducts() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const results =
        document.getElementById(
            "searchResults"
        );


    if (!input) {

        results.innerHTML = "";

        return;

    }


    const matches =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(input)

            ||

            product.category
                .toLowerCase()
                .includes(input)

        );


    results.innerHTML = "";


    if (matches.length === 0) {

        results.innerHTML = `

            <div class="empty-cart">

                No products found.

            </div>

        `;

        return;

    }


    matches.forEach(product => {

        const div =
            document.createElement("div");


        div.className =
            "search-result";


        div.innerHTML = `

            <img
                src="${product.images[0]}"
                alt="${product.name}"
            >


            <div>

                <strong>
                    ${product.name}
                </strong>

                <small>
                    ${product.category}
                </small>

                <p>
                    ₹${product.price}
                </p>

            </div>

        `;


        div.onclick = function () {

            closeSearch();

            openProduct(product.id);

        };


        results.appendChild(div);

    });

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("show");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("show");

}


function loginUser() {

    const mobile =
        document.getElementById(
            "loginMobile"
        ).value.trim();


    if (!mobile) {

        alert(
            "Please enter your mobile number."
        );

        return;

    }


    alert(
        "Login feature will be connected to the backend later."
    );

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    closeCart();


    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("show");

}


function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    const name =
        document.getElementById(
            "customerName"
        ).value;


    alert(
        `Thank you ${name}! Your order has been received.`
    );


    cart = [];


    updateCart();

    closeCheckout();

    event.target.reset();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("show");

}


function closeMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("show");

}


/* =========================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const productModal =
            document.getElementById(
                "productModal"
            );


        const checkoutModal =
            document.getElementById(
                "checkoutModal"
            );


        const loginModal =
            document.getElementById(
                "loginModal"
            );


        const searchOverlay =
            document.getElementById(
                "searchOverlay"
            );


        if (
            event.target === productModal
        ) {

            closeProduct();

        }


        if (
            event.target === checkoutModal
        ) {

            closeCheckout();

        }


        if (
            event.target === loginModal
        ) {

            closeLogin();

        }


        if (
            event.target === searchOverlay
        ) {

            closeSearch();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

            closeCheckout();

            closeLogin();

            closeSearch();

            closeCart();

        }

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

displayProducts(products);

updateCart();

updateNewArrival();