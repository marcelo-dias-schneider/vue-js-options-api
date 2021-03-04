const app = Vue.createApp({
    data() {
        return {
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


