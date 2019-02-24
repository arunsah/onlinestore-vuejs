var online_store_product = Vue.component("ProductReview", {
    template: `
    <div class="review-form">
        <form @submit.prevent="onSubmit">
            <p>
                <label for="userName">Name: </label>
                <input type="text" id="userName" name="userName" placeholder="Enter your name" v-model="userName" />

                <label for="rating">Rating: </label>
                <select id="rating" name="rating" placeholder="Enter your name" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                
            </p>
            <p>
                <label for="review">Review: </label>
                <textarea id="review" name="review" placeholder="Enter your review" v-model="review">
                </textarea>
            </p>
           
            <p>
            <span>Would you recommend this product?</span> 
            <br/>
                <label for="recommendation_yes">Yes: </label>
                <input type="radio" id="recommendation_yes" name="recommendation" />
                <label for="recommendation_no">No: </label>
                <input type="radio" id="recommendation_no" name="recommendation" />
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