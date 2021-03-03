const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Socks industry',
            description: 'This is a nice ',
            // image: './assets/images/socks_green.jpg',
            selectedVariante: 0,
            showLink: false,
            link: 'link',
            url: '#',
            // inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 10, sizes: ["S", "M", "L"]},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, sizes: ["XS", "M", "XL"]},
            ],
            // sizes: ["S", "M", "L", "XL"],
            showRemoveBotton : false
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            this.styleBottons()
        },
        removeItem(){
            this.cart > 0 ? this.cart -= 1 : alert("there is no item on the cart")
            this.styleBottons()
        },
        updateVariant(index){
            this.selectedVariante = index
        },
        styleBottons(){
            this.cart > 0 ? this.showRemoveBotton = true : this.showRemoveBotton = false
        }
    },
    computed: {
        title(){
            return this.product +' '+ this.variants[this.selectedVariante].color 
        },
        descriptionProduct(){
            return this.description + this.product
        },
        quantity(){
            return this.variants[this.selectedVariante].quantity
        },
        image(){
            return this.variants[this.selectedVariante].image
        },
        sizes(){
            return this.variants[this.selectedVariante].sizes
        }
    }
})


