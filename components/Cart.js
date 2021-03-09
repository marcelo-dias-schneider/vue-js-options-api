app.component('cart', {
    props:{
        cart:{
            type: Array,
            required: true
        },
        variants: {
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
                    if(this.cart[i] == id){
                        quant++
                    }
                }
                position = this.variants.map(function(e) { return e.id; }).indexOf(id);
                produtosOnCart.push({'id':id, 'color':this.variants[position].color , 'quant':quant})  
            })
            return produtosOnCart
        }
    }
})

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}