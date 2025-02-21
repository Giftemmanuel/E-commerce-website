    //CountDown Animation
 function startCountdown() {
        const countdownElement = document.querySelector('.count-down');
        let totalSeconds = 47 * 24 * 60 * 60 + 6 * 60 * 60 + 59 * 60 + 59;

        function updateCountdown() {
            let days = Math.floor(totalSeconds / (24 * 60 * 60));
            let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
            let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
            let seconds = totalSeconds % 60;

            countdownElement.innerHTML = `Until the end of the sale: <strong>${days}</strong> days <strong>${hours}</strong> hours <strong>${minutes}</strong> minutes <strong>${seconds}</strong> sec.`;
            totalSeconds--;

            if (totalSeconds < 0) {
                countdownElement.innerHTML = "Sale Ended!";
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    //Dynamic Search Placeholder Animation
    function animateSearchPlaceholder() {
        const searchInput = document.querySelector('.search-box input');
        const placeholderTexts = [
            "Search for fresh fruits...",
            "Looking for beverages?",
            "Best organic deals!",
            "Find your daily essentials..."
        ];
        let index = 0;

        setInterval(() => {
            searchInput.setAttribute('placeholder', placeholderTexts[index]);
            index = (index + 1) % placeholderTexts.length;
        }, 3000);
    }

    //Language Translations
 const translations = {
    English: {
      "free-delivery": "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.",
      "countdown": "Until the end of the sale: <strong>47</strong> days <strong>06</strong> hours <strong>59</strong> minutes <strong>59</strong> sec.",
      "about": "About Us",
      "account": "My Account",
      "wishlist": "Wishlist",
      "delivery-hours": "We deliver to you every day from <strong class='hours'>7:00 to 23:00</strong>",
      "order-tracking": "Order Tracking",
      "deliver-to": "Deliver to<br><strong>all</strong>",
    "search-placeholder": "Search for products, categories or brands...",
    "sign-in": "Sign in <br><strong>Account</strong>",
      "home": "Home",
      "shop": "Shop",
      "fruits-vegetables": "Fruits & Vegetables",
      "beverages": "Beverages",
      "blog": "Blog",
      "contact": "Contact",
      "trending-products": "Trending Products",
      "almost-finished": "Almost Finished <span class='sale'>SALE</span>",
      "weekend-discount": "Weekend Discount",
      "hero-heading": "Get the best quality <br> products at the lowest <br> prices",
      "hero-text": "We have prepared special discounts for you on organic <br> breakfast  products.",
      "shop-now": "Shop Now",
      "price": "$21.67",
      "price-del": "$59.99",
      "under-text": "Don't miss this limited-time offer"
    },
    French: {
      "free-delivery": "LIVRAISON GRATUITE et 40 % de réduction sur les 3 prochaines commandes ! Passez votre 1ère commande.",
      "countdown": "Jusqu'à la fin de la vente : <strong>47</strong> jours <strong>06</strong> heures <strong>59</strong> minutes <strong>59</strong> sec.",
      "about": "À propos de nous",
      "account": "Mon Compte",
      "wishlist": "Liste de souhaits",
      "delivery-hours": "Nous livrons tous les jours de <strong class='hours'>7:00 à 23:00</strong>",
      "order-tracking": "Suivi de commande",
      "deliver-to": "Livrer à<br><strong>tous</strong>",
      "search-placeholder": "Rechercher des produits, des catégories ou des marques...",
      "sign-in": "Se connecter <br><strong>Compte</strong>",
      "home": "Accueil",
      "shop": "Boutique",
      "fruits-vegetables": "Fruits & Légumes",
      "beverages": "Boissons",
      "blog": "Blog",
      "contact": "Contact",
      "trending-products": "Produits Tendances",
      "almost-finished": "Presque Terminé <span class='sale'>SOLDES</span>",
      "weekend-discount": "Remise du Week-end",
      "hero-heading": "Obtenez des produits <br> de meilleure qualité <br> aux meilleurs prix",
      "hero-text": "Nous avons préparé des remises spéciales pour vous sur <br> les produits biologiques du petit déjeuner.",
      "shop-now": "Acheter",
      "price": "21,67 €",
      "price-del": "59,99 €",
      "under-text": "Ne manquez pas cette offre à durée limitée"
    },
    Spanish: {
      "free-delivery": "¡ENTREGA GRATIS y 40 % de descuento en los próximos 3 pedidos! Realiza tu primer pedido.",
      "countdown": "Hasta el final de la venta: <strong>47</strong> días <strong>06</strong> horas <strong>59</strong> minutos <strong>59</strong> seg.",
      "about": "Sobre nosotros",
      "account": "Mi Cuenta",
      "wishlist": "Lista de deseos",
      "delivery-hours": "Te entregamos todos los días de <strong class='hours'>7:00 a 23:00</strong>",
      "order-tracking": "Seguimiento de pedido",
      "deliver-to": "Entregar a<br><strong>todos</strong>",
      "search-placeholder": "Buscar productos, categorías o marcas...",
      "sign-in": "Iniciar sesión <br><strong>Cuenta</strong>",
      "home": "Inicio",
      "shop": "Tienda",
      "fruits-vegetables": "Frutas y Verduras",
      "beverages": "Bebidas",
      "blog": "Blog",
      "contact": "Contacto",
      "trending-products": "Productos Populares",
      "almost-finished": "Casi Terminado <span class='sale'>OFERTA</span>",
      "weekend-discount": "Descuento de Fin de Semana",
      "hero-heading": "Obtén productos de <br>la mejor  calidad a los <br> precios  más bajos",
      "hero-text": "Hemos preparado descuentos especiales para <br> ti en productos orgánicos para el desayuno.",
      "shop-now": "Comprar",
      "price": "$21.67",
      "price-del": "$59.99",
      "under-text": "No te pierdas esta oferta por tiempo limitado"
    }
  };


    //Function to update language
function updateLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

    // Function to setup dropdowns
function setupDropdowns() {
    const langSelect = document.querySelector('#language-select');
    const currencySelect = document.querySelector('#currency-select');
    
    // Initialize language selection
    updateLanguage(langSelect.value);

    langSelect.addEventListener('change', () => {
        updateLanguage(langSelect.value);
    });

    currencySelect.addEventListener('change', () => {
        document.querySelector('.selected-currency').textContent = currencySelect.value;
    });
}

// Run all functions
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    animateSearchPlaceholder();
    setupDropdowns();
});

document.addEventListener("DOMContentLoaded", () => {
    // Display alert when "View All" is clicked
    document.querySelector(".view-all").addEventListener("click", () => {
        alert("Viewing all categories!");
    });
});

function toggleCircle(container) {
    const circle = container.querySelector(".circle");
    circle.classList.toggle("toggled");
}

document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const products = document.querySelectorAll('.product');
    
    let currentIndex = 0;
    let productsPerView = getProductsPerView();
    let maxIndex = Math.max(0, products.length - productsPerView);
    
    // Set initial width of products based on screen size
    updateProductWidths();
    
    // Update carousel on window resize
    window.addEventListener('resize', function() {
        productsPerView = getProductsPerView();
        maxIndex = Math.max(0, products.length - productsPerView);
        updateProductWidths();
        
        // Reset position if current index is now invalid
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
            updateCarouselPosition();
        }
    });
    
    // Navigation button event listeners
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarouselPosition();
        }
    });
    
    // Helper functions
    function getProductsPerView() {
        if (window.innerWidth <= 480) {
            return 1;
        } else if (window.innerWidth <= 768) {
            return 2;
        } else if (window.innerWidth <= 992) {
            return 3;
        } else {
            return 5;
        }
    }
    
    function updateProductWidths() {
        const productWidth = 100 / productsPerView;
        products.forEach(product => {
            product.style.flex = `0 0 calc(${productWidth}% - 2px)`;
        });
    }
    
    function updateCarouselPosition() {
        const productWidth = 100 / productsPerView;
        const translateX = -currentIndex * productWidth;
        productGrid.style.transform = `translateX(${translateX}%)`;
        
        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    }
    
    // Initialize button states
    prevBtn.style.opacity = '0.5';
    nextBtn.style.opacity = maxIndex === 0 ? '0.5' : '1';
});

