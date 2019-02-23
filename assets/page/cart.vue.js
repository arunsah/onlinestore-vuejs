var online_store_cart=Vue.component("Cart",{
    template:`
    <div class="cart-box">
        <span> Cart( {{products}} )</span>
    </div>
    `,
    props:{
        products:{type:Array}
    },
    data(){
        return {};
    }
});