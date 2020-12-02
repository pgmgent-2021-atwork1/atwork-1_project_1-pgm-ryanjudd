(() => {
  const app = {
    initialize() {
      //   Dit is hetzelfde als initialize: function () {...}
      console.log("1. Application started!");
      this.cacheElements();
      this.onClickList();
      this.onClickOpenBasket();
      this.onClickCloseBasket();
    },
    cacheElements() {
      this.$burger = document.querySelector(".svg__burger");
      this.$list = document.querySelector(".header__links");
      this.$basket = document.querySelector(".basket");
      this.$basketAside = document.querySelector(".basket-aside");
      this.$cross = document.querySelector('.svg__cross');
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
    }
    
  };
  app.initialize();
})();
