
function orderProduct(productName) {

    const phoneNumber = "918083737390";

    const message =
        `Hi Night Fury! 👋

I want to order:

${productName}

Please send me the price, available sizes and colours.`;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* =========================================
   PRODUCT FILTER
   ========================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class */

        button.classList.add("active");


        /* Get selected category */

        const filter =
            button.getAttribute("data-filter");


        /* Filter products */

        productCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
   ========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});