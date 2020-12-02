(() => {
  const app = {
    initialize() {
      //   Dit is hetzelfde als initialize: function () {...}
      console.log("1. Application started!");
      this.cacheElements();
      this.onClickList();
      this.onClickOpenBasket();
      this.onClickCloseBasket();
      this.fillWebshop();
      this.webshopType();
    },
    cacheElements() {
      this.$burger = document.querySelector(".svg__burger");
      this.$list = document.querySelector(".header__links");
      this.$basket = document.querySelector(".basket");
      this.$basketAside = document.querySelector(".basket-aside");
      this.$cross = document.querySelector('.svg__cross');
      this.$webshop = document.querySelector("#webshopLoad");
      this.$webshopContainer = document.querySelector("#typeLoader");
    },
    onClickList() {
      this.$burger.addEventListener("click", () => {
        console.log("click werkt!");

        if (this.$list.classList.contains("fullList")) {
          this.$list.classList.remove("fullList");
        } else {
          this.$list.classList.add("fullList");
        }
      });
    },
    onClickOpenBasket() {
      this.$basket.addEventListener("click", () => {
        console.log("Basket click werkt");

        this.$basketAside.classList.add('fill-basket');

      });
    },

    onClickCloseBasket() {
      this.$cross.addEventListener('click', () => {
        console.log('Basket close');

        this.$basketAside.classList.remove('fill-basket');
      });
    },

    fillWebshop() {
      console.log('Webshop data loading Working');

      let webshopStr = "";

      if (this.$webshop !== null) {
        
        webshop.forEach((webshopItem) => {
//           webshopStr += `<div class="webshopFlex">
// <img src="${webshopItem.img}" alt="${webshopItem.type} groot boeket">
// <div class="webshopDynamic">
// <a href="boeket.html?type=${webshopItem.type}"> ${webshopItem.name}</a>
// <p>€ ${webshopItem.price}</p>
// </div>
// </div>
//          `


          webshopStr += ` <div class="webshopFlex">
          <figure>
            <a href="boeket.html?type=${webshopItem.type}">
              <img
                src="${webshopItem.img}"
                alt="een ${webshopItem.type} boeket"
              />
              <figcaption>Boeket ${webshopItem.type}</figcaption>
            </a>
            <span>€ ${webshopItem.price}</span>
          </figure>
          </div>
          `
        });

        this.$webshop.innerHTML = webshopStr;
      }
    },

    webshopType() {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const urlType = params.get('type');

      if (urlType !== null) {
        console.log("Type loaing works");

        let typeItem = "";
        let typeStr = "";

        for (let i = 0; i < webshop.length; i++) {
          if (webshop[i].type === urlType) {
            typeItem = webshop[i];
          }
        };
        
        if (typeItem) {
          typeStr = `
<img src="${typeItem.img}" alt="${typeItem.name}">
<div class="webshop-type-top">
<h1>${typeItem.name}</h1>
<p class="Webshop-type-price">€ ${typeItem.price}</p>
</div>          
          `
          window.document.title = typeItem.name;
          this.$webshopContainer.innerHTML = typeStr;
        } else {
          window.document.title = "Niet gevonden";
        }

      }
    }
    
  };
  app.initialize();
})();
