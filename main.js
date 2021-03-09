const app = Vue.createApp({
    data() {
        return {
            variants: productInfo,
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCard( addOrRemove, id ){
            if(addOrRemove == 'add'){
                this.cart.push(id)
            } else if(addOrRemove == 'remove'){
                const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                } else {
                    alert("this item  is not in cart")
                }
            }
        }
    }
})

let productInfo = [
    {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10, sizes: ["S", "M", "L"], shippingPrice: 2.99},
    {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 5, sizes: ["XS", "M", "XL"], shippingPrice: 2.98},
    {id: 2236, color: 'red', image: './assets/images/socks_blue.jpg', quantity: 0, sizes: ["M", "XL"], shippingPrice: 2.97},
]