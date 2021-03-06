var online_store_product = Vue.component("Product", {
    template: `
    <div>
        <div class="product-card" :id="productId">
            <div class="product-image">
                <img align="center" class="product-img" width="200" height="250" v-bind:src="image_src" />
            </div>

            <div class="product-info">
                <h1>{{product.name}} </h1>
                <p> {{product.description}} </p>
                <p> RAM: {{product.ram}} GB, ROM: {{product.rom}} GB, Screen: {{product.display}} inches</p>
                <p> MRP: INR {{product.mrp}}, Discount: {{product.discount * 100}}%</p>
                <p> Today's Price: INR {{product.mrp - (product.mrp * product.discount)}}</p>

                <button class="current-cart-button" @click="addToCart">+</button>
                <input class="current-cart" type="number" v-model.number="localcart" />
                <button class="current-cart-button" @click="removeFromCart" :disabled="this.localcart < 1"
                    :class="{disabledButton: this.localcart < 1}">-</button>
            </div>

            <br />
            <div class="product-review">
                <h2> Product Reviews </h2>
                <p v-if="!reviews.length">Be the first to review this product</p>
                <ul>
                    <li v-for="review in reviews">
                        <span>Reviewed by: {{review.name}} </span> <br />
                        <span>Rating: {{review.rating}} </span> <br />
                        <span>{{review.review}} </span> <br />
                    </li>
                </ul>

                <button class="button" @click="showReviewForm = !showReviewForm">Show/Hide Review Form</button>
                <ProductReview v-show="showReviewForm" @review-submitted="addReview"></ProductReview>
            </div>

        </div>
    </div>
    `,
    props: {
        product: { type: Object }
    },
    data() {
        return { reviews: [], showReviewForm: false, localcart: 0, productId: null };
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
        },
        addToCart() {
            this.localcart += 1;
            this.$emit('add-to-cart', this.product.id);
        },
        removeFromCart() {
            if (this.localcart < 1) return;
            this.localcart -= 1;
            this.$emit('remove-from-cart', this.product.id);
        }
    },
    mounted() {
        this.productId = "productId" + this.product.id;
    }
});