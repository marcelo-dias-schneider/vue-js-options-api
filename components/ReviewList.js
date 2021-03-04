app.component('reviews-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `<div v-show="reviews.length" class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars 
                <br/>
                "{{review.review}}"
                <br/>
                Recommended: {{ review.recommend }}
                <hr/>


            </li>
        </ul>
    </div>`,
    computed: {
        recommendation(){
            reviews.forEach(review => {
                alert(this.review.recommend)
            });
            // return this.reviews.recommend
        }
    }

})