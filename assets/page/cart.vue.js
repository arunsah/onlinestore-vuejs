var online_store_cart = Vue.component("Cart", {
    template: `
    <div class="cart-box">
        <span> Cart( {{products}} )</span>
        <span> Rs. {{cartValues}} </span>
    </div>
    `,
    props: {
        products: { type: Array },
        allproducts: { type: Array }
    },
    data() {
        return { showItem: [] };
    },
    computed: {
        cartValues() {

            this.showItem = [];
            // todo: optimized this loops
            var totalSum = 0;
            for (var i = 0; i < this.products.length; ++i) {
                var outerid = this.products[i];
                for (var j = 0; j < this.allproducts.length; ++j) {
                    var innerid = this.allproducts[j].id;
                    //console.log("found : " + outerid + " " + innerid);
                    if (outerid === innerid) {
                        //console.log("iffound : " + outerid + " " + innerid);
                        // calculate price here
                        var product = this.allproducts[i];
                        var sum = product.mrp - (product.mrp * product.discount);
                        this.showItem.push(product.name + " at " + sum);
                        totalSum += sum;
                    }
                }

            }
            return totalSum;

        }
    }
});