var online_store_product = Vue.component("ProductReview", {
    template: `
    <div class="review-form">
        <form @submit.prevent="onSubmit">
            <p>
                <label for="userName">Name: </label>
                <input type="text" id="userName" name="userName" placeholder="Enter your name" v-model="userName" />
            </p>
            <p>
                <label for="review">Review: </label>
                <textarea id="review" name="review" placeholder="Enter your review" v-model="review">
                </textarea>
            </p>
            <p>
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
                <input type="submit" value="Submit Review" />
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
            console.log(productReview);
        }
    }
});