var online_store_product = Vue.component("ProductReview", {
    template: `
    <div class="review-form">
        <form @submit.prevent="onSubmit" name="reviewForm">
            <p>
                <label for="userName">Name: </label>
                <input type="text" id="userName" name="userName" placeholder="Enter your name" v-model="userName" />
                <label for="rating">Rating: </label>

                <select class="custom-select" id="rating" name="rating" placeholder="Enter your name" v-model.number="rating">
                    <option value="5" selected>5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                
            </p>
            <p>
                <label>Would you recommend this product?</label>
                <label for="recommendation_yes">Yes: </label>
                <input type="radio" id="recommendation_yes" name="recommendation" />
                <label for="recommendation_no">No: </label>
                <input type="radio" id="recommendation_no" name="recommendation" />
            </p>
            <p>
                <label for="review">Review: </label><br/>
                <textarea id="review" name="review" placeholder="Enter your review" v-model="review" rows="5" cols="50">
                </textarea>
            </p>

            
            <p>
                <input class="button" type="submit" value="Submit Review" />
            </p>
        </form>
    </div>
    `,
    props: {
        product: { type: Object }
    },
    data() {
        return { userName: null, review: null, rating: null };
    },
    computed: { // results are saved untill dependencies are chenaged        
        image_src() {
            return '/assets/img/' + this.product.image;
        },
        id() { return this.product.id; }
    },
    methods: {
        onSubmit() {
            var productReview = {
                name: this.userName,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview);
            // reseting
            this.userName = null;
            this.review = null;
            this.rating = null;
            //console.log(productReview);
        }
    }
});