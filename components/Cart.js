app.component('cart', {
    props:{
        cart:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="cart">
        Cart({{ productOnCart }})
    </div>`,
    computed: {
        productOnCart(){
            let uniqueId = this.cart.filter(onlyUnique)  
            let produtosOnCart = []            
            uniqueId.forEach(id => {
                let quant = 0;
                for(let i = 0; i < this.cart.length; ++i){
                    if(this.cart[i] == id)
                    quant++;
                }
                produtosOnCart.push({'id':id, 'quant':quant})  
            })
            return produtosOnCart
        },
        carts(){
            return this.cart
        }
    }
})

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}