const app = new Vue({
    el: '#app',
    data: {
        products: [],
        productMap: null,
        productId: 0,
        currentProduct: {},
        cartProduct: []
    },

    methods: {
        setProductId(productId) {
            console.log(productId);
            this.productId = productId;
            this.currentProduct = this.products[productId];
            this.cartProduct.push(this.productId);
        },
        addToCart(productId) {
            console.log("adding : " + productId);
            this.cartProduct.push(productId);
        },
        removeFromCart(productId) {
            console.log("removing : " + productId);
            var index = this.cartProduct.indexOf(productId);
            if (index > -1) {
                this.cartProduct.splice(index, 1);
            }
        }
    },
    created() {

        fetch('/assets/json/cellphone.json')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                this.products = json.products;

                
                
                var result = new Map(json.products.map(i => [i.id, i.name]));
                console.log("Result is: " + JSON.stringify([...result])); 

                console.log( result);
                console.log( result.get(1));

            })
            .catch(error => console.error(error));;

    },

    computed: { // results are saved untill dependencies are chenaged
        /* productRate(){
            return 'Price: ' +this.currentFruit.price+
             ' for ' + this.currentFruit.quantity;
        },
        inStock(){
            return this.currentFruit.box > 0;
        },
        image_src(){
            return '/products_img/' + this.currentFruit.img;
        } */
    }


});