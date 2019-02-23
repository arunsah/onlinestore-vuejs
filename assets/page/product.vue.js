var online_store_product = Vue.component("Product", {
    template: `
    <div>
        <div class="product-card">
            <div class="product-image">
                <img align="center" class="product-img" width="200" height="250" v-bind:src="image_src" />
            </div>

            <div class="product-info">
                <h1>{{id}}</h1>
                <p> {{product.name}} </p>
                <p> {{product.description}} </p>
            </div>

            
            <div>
            <h2> Product Reviews </h2>
            <p v-if="!reviews.length">Be the first to review this product</p>
            <ul>
                <li v-for="review in reviews">
                    <span>Reviewed by: {{review.name}} </span>
                    <span>Rating: {{review.rating}} </span>
                    <span>{{review.review}} </span>                
                </li>
            </ul>

            <button class="button" @click="showReviewForm = !showReviewForm">Show/Hide Review Form</buttton>
            <ProductReview v-if="showReviewForm" @review-submitted="addReview"></ProductReview>
            </div>

        </div>

       
    </div>
    `,
    props: {
        product: { type: Object }
    },
    data() {
        return { reviews: [], showReviewForm:false };
    },
    computed: { // results are saved untill dependencies are chenaged        
        image_src() {
            return '/assets/img/' + this.product.image;
        },
        id() { return this.product.id; }
    },
    methods: {
        addReview(productReview) {
            this.reviews.push(productReview);
        }
    }
});