    //CountDown Animation
// Countdown Animation
function startCountdown() {
    const countdownElement = document.querySelector('.count-down');
    let totalSeconds = 47 * 24 * 60 * 60 + 6 * 60 * 60 + 59 * 60 + 59;

    function updateCountdown() {
        if (totalSeconds < 0) {
            countdownElement.innerHTML = "Sale Ended!";
            clearInterval(countdownInterval); // Stop the countdown
            return;
        }

        let days = Math.floor(totalSeconds / (24 * 60 * 60));
        let hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        let seconds = totalSeconds % 60;

        countdownElement.innerHTML = `Until the end of the sale: <strong>${days}</strong> days <strong>${hours}</strong> hours <strong>${minutes}</strong> minutes <strong>${seconds}</strong> sec.`;
        totalSeconds--;
    }

    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Run countdown when page loads
window.onload = startCountdown;


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
      "under-text": "Don't miss this limited-time offer",
      "Fruits & Vegetables": "Fruits & Vegetables",
        "Baby & Pregnancy": "Baby & Pregnancy",
        "Beverages": "Beverages",
        "Meats & Seafood": "Meats & Seafood",
        "Biscuits & Snacks": "Biscuits & Snacks",
        "Breads & Bakery": "Breads & Bakery",
        "Breakfast & Dairy": "Breakfast & Dairy",
        "Frozen Foods": "Frozen Foods",
        "Grocery & Staples": "Grocery & Staples",
        "NEW PRODUCTS": "NEW PRODUCTS",
        "Some of the new products arriving this week": "Some of the new products arriving this week",
        "View All →": "View All →",
        "This product is about to run out": "This product is about to run out",
        "Available only: ": "Available only: ",
        "In store or online your health & safety is our top priority": "In store or online your health & safety is our top priority",
        "The only supermarket that makes your life easier, makes you enjoy life, and makes it better.": "The only supermarket that makes your life easier, makes you enjoy life, and makes it better.",
        "promotion": "Only This Week",
      "qualityProducts": "We provide you the <br> best quality products",
      "excitingShopping": "We make your grocery <br> shopping more exciting",
      "saveMoney": "The one supermarket <br> that saves your money",
      "newArrivals": "New Arrivals",
      "offers": "Do not miss the current offers until the end of month.",
      "viewAll": "View All →",
      "featuredProducts": "Featured Products",
      "smartStore": "A smart store for <br> every people",
      "shopNow": "Shop Now",
      "promotion": "Only This Week",
      "product1": "100 Percent Apple Juice - 64 fl oz Bottle",
      "product2": "Simply Orange Pulp Free Juice – 52 fl oz",
      "product3": "Vitaminwater zero sugar squeezed electrolyte enhanced water,…",
      "product4": "A&W Caffeine-Free, Low Sodium Root Beer Soda Pop, 2 Liter Bottles",
      "stock": "IN STOCK",
      "deals": "Deals Of The Day",
      "description1": "We are here for<br>shopping lovers",
      "description2": "Get pocket-friendly<br> products with us",
      "description3": "Grocery store at the <br> center of the city",
      "shopNow": "Shop Now",
      "viewAll": "View All →",
      "offerEnds": "Remains until the end of the offer",
      "discount": "75%",
    "coldSale": "COLD SALE",
    "rating": "⭐ ⭐ ⭐ ⭐ ☆ <span>3</span>",
    "productTitle": "Great Value Rising Crust Frozen Pizza, Supreme",
    "newPrice": "$0.50",
    "oldPrice": "$1.99",
    "description": "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.",
    "warning": "This product is about to run out",
    "available": "Available only: <strong>23</strong>",
    "addToCart": "Add to cart",
    "paymentOnline": "Payment only online",
    "newStocks": "New stocks and sales",
    "quality": "Quality assurance",
    "delivery": "Delivery from 1 hour",
    "newsletterTitle": "Join our newsletter for £10 off",
    "newsletterDesc": "Register now to get the latest updates on promotions & coupons. Don't worry, we don't spam!",
    "subscribe": "SEND",
    "help": "Do You Need Help?",
    "makeMoney": "Make Money with Us",
    "helpYou": "Let Us Help You",
    "knowUs": "Get to Know Us",
    "downloadApp": "Download our app",
    "followUs": "Follow us on social media:",
    "copyright": "Copyright 2024 © Jinstore WooCommerce WordPress Theme. All rights reserved. Powered by BlackRise Themes."

    
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
      "under-text": "Ne manquez pas cette offre à durée limitée",
      "Fruits & Vegetables": "Fruits & Légumes",
        "Baby & Pregnancy": "Bébé & Grossesse",
        "Beverages": "Boissons",
        "Meats & Seafood": "Viandes & Fruits de mer",
        "Biscuits & Snacks": "Biscuits & Collations",
        "Breads & Bakery": "Pains & Boulangerie",
        "Breakfast & Dairy": "Petit-déjeuner & Produits Laitiers",
        "Frozen Foods": "Produits Surgelés",
        "Grocery & Staples": "Épicerie & Produits de Base",
        "NEW PRODUCTS": "NOUVEAUX PRODUITS",
        "Some of the new products arriving this week": "Quelques nouveaux produits arrivant cette semaine",
        "View All →": "Voir Tout →",
        "This product is about to run out": "Ce produit est sur le point de s'épuiser",
        "Available only: ": "Disponible seulement: ",
        "In store or online your health & safety is our top priority": "En magasin ou en ligne, votre santé & sécurité sont notre priorité absolue",
        "The only supermarket that makes your life easier, makes you enjoy life, and makes it better.": "Le seul supermarché qui facilite votre vie, vous fait profiter de la vie et l'améliore.",
          "promotion": "Seulement cette semaine",
      "qualityProducts": "Nous vous fournissons les <br> meilleurs produits de qualité",
      "excitingShopping": "Nous rendons vos courses <br> plus excitantes",
      "saveMoney": "Le supermarché qui vous <br> fait économiser de l'argent",
      "newArrivals": "Nouveaux Arrivages",
      "offers": "Ne manquez pas les offres en cours jusqu'à la fin du mois.",
      "viewAll": "Voir tout →",
      "featuredProducts": "Produits en Vedette",
      "smartStore": "Un magasin intelligent pour <br> tout le monde",
      "shopNow": "Achetez Maintenant",
      "promotion": "Seulement cette semaine",
    "product1": "Jus de pomme 100 pour cent - Bouteille de 64 fl oz",
    "product2": "Jus d'orange Simply sans pulpe – 52 fl oz",
    "product3": "Vitaminwater zéro sucre pressé, eau enrichie en électrolytes,…",
    "product4": "A&W Sans caféine, Soda Root Beer à faible teneur en sodium, Bouteilles de 2 litres",
    "stock": "EN STOCK",
    "deals": "Offres du jour",
    "description1": "Nous sommes là pour<br>les amateurs de shopping",
    "description2": "Obtenez des produits abordables avec nous",
    "description3": "Épicerie au centre de la ville",
    "shopNow": "Acheter maintenant",
    "viewAll": "Voir tout →",
    "offerEnds": "Reste jusqu'à la fin de l'offre",
    "discount": "75%",
    "coldSale": "VENTE FROIDE",
    "rating": "⭐ ⭐ ⭐ ⭐ ☆ <span>3</span>",
    "productTitle": "Pizza surgelée à croûte montante, suprême",
    "newPrice": "$0.50",
    "oldPrice": "$1.99",
    "description": "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.",
    "warning": "Ce produit est sur le point de s'épuiser",
    "available": "Disponible seulement: <strong>23</strong>",
    "addToCart": "Ajouter au panier",
    "paymentOnline": "Paiement uniquement en ligne",
    "newStocks": "Nouveaux stocks et ventes",
    "quality": "Assurance qualité",
    "delivery": "Livraison en 1 heure",
    "newsletterTitle": "Rejoignez notre newsletter pour 10 £ de réduction",
    "newsletterDesc": "Inscrivez-vous maintenant pour recevoir les dernières mises à jour sur les promotions et les coupons. Ne vous inquiétez pas, nous ne spammons pas!",
    "subscribe": "ENVOYER",
    "help": "Avez-vous besoin d'aide?",
    "makeMoney": "Gagnez de l'argent avec nous",
    "helpYou": "Laissez-nous vous aider",
    "knowUs": "Apprenez à nous connaître",
    "downloadApp": "Téléchargez notre application",
    "followUs": "Suivez-nous sur les réseaux sociaux:",
    "copyright": "Copyright 2024 © Jinstore WooCommerce WordPress Theme. Tous droits réservés. Propulsé par BlackRise Themes."
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
      "under-text": "No te pierdas esta oferta por tiempo limitado",
      "Fruits & Vegetables": "Frutas y Verduras",
        "Baby & Pregnancy": "Bebé & Embarazo",
        "Beverages": "Bebidas",
        "Meats & Seafood": "Carnes y Mariscos",
        "Biscuits & Snacks": "Galletas y Aperitivos",
        "Breads & Bakery": "Panes y Panadería",
        "Breakfast & Dairy": "Desayuno & Lácteos",
        "Frozen Foods": "Alimentos Congelados",
        "Grocery & Staples": "Comestibles y Básicos",
        "NEW PRODUCTS": "NUEVOS PRODUCTOS",
        "Some of the new products arriving this week": "Algunos de los nuevos productos que llegan esta semana",
        "View All →": "Ver Todo →",
        "This product is about to run out": "Este producto está a punto de agotarse",
        "Available only: ": "Disponible solo: ",
        "In store or online your health & safety is our top priority": "En tienda o en línea, su salud y seguridad son nuestra prioridad",
        "The only supermarket that makes your life easier, makes you enjoy life, and makes it better.": "El único supermercado que hace tu vida más fácil, te hace disfrutar de la vida y la mejora.",
         "promotion": "Solo esta semana",
      "qualityProducts": "Le proporcionamos los <br> mejores productos de calidad",
      "excitingShopping": "Hacemos que sus compras <br> sean más emocionantes",
      "saveMoney": "El supermercado que <br> ahorra tu dinero",
      "newArrivals": "Nuevas Llegadas",
      "offers": "No te pierdas las ofertas actuales hasta fin de mes.",
      "viewAll": "Ver Todo →",
      "featuredProducts": "Productos Destacados",
      "smartStore": "Una tienda inteligente para <br> todas las personas",
      "shopNow": "Compra Ahora",
      "promotion": "Solo esta semana",
      "product1": "Jugo de manzana 100 por ciento - Botella de 64 fl oz",
      "product2": "Jugo Simply Orange sin pulpa – 52 fl oz",
      "product3": "Vitaminwater cero azúcar exprimido, agua mejorada con electrolitos,…",
      "product4": "A&W Sin cafeína, Soda de raíz de cerveza con bajo contenido de sodio, Botellas de 2 litros",
      "stock": "EN STOCK",
      "deals": "Ofertas del día",
      "description1": "Estamos aquí para<br>los amantes de las compras",
      "description2": "Obtén productos accesibles con nosotros",
      "description3": "Tienda de comestibles en el <br> centro de la ciudad",
      "shopNow": "Comprar ahora",
      "viewAll": "Ver todo →",
      "offerEnds": "Queda hasta el final de la oferta",
      "discount": "75%",
      "coldSale": "VENTA FRÍA",
      "rating": "⭐ ⭐ ⭐ ⭐ ☆ <span>3</span>",
      "productTitle": "Pizza congelada de masa elevada, suprema",
      "newPrice": "$0.50",
      "oldPrice": "$1.99",
      "description": "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.",
      "warning": "Este producto está a punto de agotarse",
      "available": "Disponible solo: <strong>23</strong>",
      "addToCart": "Añadir al carrito",
      "paymentOnline": "Pago solo en línea",
      "newStocks": "Nuevos stocks y ventas",
      "quality": "Garantía de calidad",
      "delivery": "Entrega en 1 hora",
      "newsletterTitle": "Únase a nuestro boletín para obtener £10 de descuento",
      "newsletterDesc": "Regístrese ahora para recibir las últimas actualizaciones sobre promociones y cupones. No se preocupe, ¡no enviamos spam!",
      "subscribe": "ENVIAR",
      "help": "¿Necesitas ayuda?",
      "makeMoney": "Gana dinero con nosotros",
      "helpYou": "Déjanos ayudarte",
      "knowUs": "Conócenos",
      "downloadApp": "Descarga nuestra aplicación",
      "followUs": "Síguenos en las redes sociales:",
      "copyright": "Copyright 2024 © Jinstore WooCommerce WordPress Theme. Todos los derechos reservados. Desarrollado por BlackRise Themes."
    
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

document.addEventListener("DOMContentLoaded", function () {
    // Desktop language select
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.addEventListener("change", function () {
        updateLanguage(this.value);
      });
    }
  
    // Mobile language select
    const mobileLangSelect = document.getElementById("mobile-lang");
    if (mobileLangSelect) {
      mobileLangSelect.addEventListener("change", function () {
        updateLanguage(this.value);
      });
    }
  });
  
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
    
   
    updateProductWidths();
    
   
    window.addEventListener('resize', function() {
        productsPerView = getProductsPerView();
        maxIndex = Math.max(0, products.length - productsPerView);
        updateProductWidths();
        
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
            updateCarouselPosition();
        }
    });
    
   
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
        
      
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.5' : '1';
    }
    
  
    prevBtn.style.opacity = '0.5';
    nextBtn.style.opacity = maxIndex === 0 ? '0.5' : '1';
});

// Countdown for multiple elements
function startMultipleCountdowns(durationInSeconds) {
    let timer = durationInSeconds;

    function updateCountdown() {
        let days = Math.floor(timer / (24 * 60 * 60));
        let hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((timer % (60 * 60)) / 60);
        let seconds = timer % 60;

        // Select all countdown elements and update them
        document.querySelectorAll(".countdown").forEach(countdown => {
            countdown.querySelector(".time-box:nth-child(1)").textContent = String(days).padStart(2, '0');
            countdown.querySelector(".time-box:nth-child(2)").textContent = String(hours).padStart(2, '0');
            countdown.querySelector(".time-box:nth-child(3)").textContent = String(minutes).padStart(2, '0');
            countdown.querySelector(".time-box:nth-child(4)").textContent = String(seconds).padStart(2, '0');
        });

        if (timer > 0) {
            timer--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
}

// Start countdown from 84 days, 6 hours, 59 minutes, and 59 seconds
const initialDuration = (84 * 24 * 60 * 60) + (6 * 60 * 60) + (59 * 60) + 59;
startMultipleCountdowns(initialDuration);

// Features section animation
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    features.forEach(feature => {
        feature.addEventListener("mouseover", () => {
            feature.style.transform = "scale(1.05)";
            feature.style.transition = "0.3s ease-in-out";
        });

        feature.addEventListener("mouseout", () => {
            feature.style.transform = "scale(1)";
        });
    });
});


document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("active");
});


// today
// Get elements
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

// Open menu
hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
});

// NEXT CATEGORY
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".next-categories");
    let isDown = false;
    let startX;
    let scrollLeft;
  
    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("active");
    });
  
    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("active");
    });
  
    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; 
      container.scrollLeft = scrollLeft - walk;
    });
  });
  