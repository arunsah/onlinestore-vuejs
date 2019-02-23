const app = new Vue({
    el: '#app',
    data: {
        store_type: 'Fresh Fruits',
        //image_src: '/fruits_img/apple.jpg',
        cart: 0,
        fruits: [],
        productId: 1,
        currentFruit: {}
    },

    methods: {
        addToCart: function () {
            if (this.currentFruit.box <= 0){ inStock = false; return;}
            this.cart += 1;
            this.currentFruit.box -= 1;
        },
        removeFromCart: function () {
            if (this.cart <= 0) return;
            this.cart -= 1;
            this.currentFruit.box += 1;
        },
        setProductId(productId) {
            //alert(productId);
            this.productId = productId;
            this.image_src = '/fruits_img/' + this.fruits[productId - 1].img;
            this.currentFruit = this.fruits[productId - 1];
        }
    },
    created() {

        fetch('https://api.myjson.com/bins/cfn66')// 
            .then(response => response.json())
            .then(json => {
                this.fruits = json.fruits;
                this.setProductId(1);
            });

    },

    computed:{ // results are saved untill dependencies are chenaged
        productRate(){
            return 'Price: ' +this.currentFruit.price+
             ' for ' + this.currentFruit.quantity;
        },
        inStock(){
            return this.currentFruit.box > 0;
        },
        image_src(){
            return '/fruits_img/' + this.currentFruit.img;
        }
    }


});