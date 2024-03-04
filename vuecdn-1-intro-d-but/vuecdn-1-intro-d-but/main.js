const app = Vue.createApp({
  data() {
    return {
      cart:0,
      product: "chaussettes",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      inventory: 100,
      details: ["50% coton", "30% laine", "20% polyester"],
      variants: [
        {id: 1234 , color: 'bleu', back: '#38475F',  image:  './assets/images/socks_blue.jpg'},
        {id: 3245 , color: 'vert', back: '#4F9869', image: './assets/images/socks_green.jpg'}
        ]       
    };
  },
  methods: {
    addToCart() {
    this.cart += 1
    },
    changeImg(variantImage) {
      this.image = variantImage
      }
    }
});
