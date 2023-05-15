<script>

export default{
  name: "ProductsComp",
  data(){
    return{
        shop: false  
    }
  },
  methods:{
     
    acquistaProdotto(){
        if(this.shop == false){
            this.shop = true
        }else{
            this.shop = false
        }
    }
  }
}

</script>

<template>
    <div id="container-products" class="d-flex justify-content-around align-items-center flex-column position-relative">
        <div>
            <h3 class="text-center">WE HAVE YOUR COVERED</h3>
            <h2>Avada Grooming Products</h2>
        </div>
        <div class="d-flex justify-content-around align-items center">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="/img/brush_dark-400x400.png" alt="Brush">
                <h4>Brush</h4>
                <span class="animate__animated animate__pulse animate__infinite">€15,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="/img/scissors-400x400.png" alt="Scrissors">
                <h4>Scissors</h4>
                <span class="animate__animated animate__pulse animate__infinite">€85,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="/img/hot_oil_dark-400x400.png" alt="Hot Oil">
                <h4>Hot Oil</h4>
                <span class="animate__animated animate__pulse animate__infinite">€18,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="/img/straight_razor_dark-400x400.png" alt="Straight Razor">
                <h4>Straight Razor</h4>
                <span class="animate__animated animate__pulse animate__infinite">€30,00</span>
            </div>
        </div>
        <div>
            <button @click="acquistaProdotto()">SHOP OUR PRODUCT RANGE</button>
        </div>
        <div v-if="(this.shop)" id="card-absolute" class="position-absolute d-flex justify-content-center">
            <div id="banner">
                <img src="/img/shaving_butter-400x400.png" alt="shaving butter">
            </div>
            <div id="card-absolute-right" class="py-4 px-4">
                <h3 id="featured-product" >THIS MOUNTH FEATURED PRODUCT</h3>
                <h2 id="product" >Shaving Butter</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur asperiores atque suscipit ducimus eum at earum.</p>
                <button class="m-auto">BUY NOW</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-products{
        height: 100vh;
        background-image: url(/img/avadabarbers-reviewsbackground.jpg);
        background-size: cover;
        h3{
            color: $gold;
            font-size: 20px;
            letter-spacing: 15px;
        }
        h2{
            color: $whiteTrasparent;
            font-size: 90px;
            font-family: 'Abril Fatface', cursive;
        }
        h4{
            color: $gold;
            font-size: 28px;
            font-family: 'Abril Fatface', cursive;
        }
        span{
            color: $gold;
            font-size: 18px;
        }
        button{
            border: 2px solid  $gold;
            background-color: rgba(0, 0, 0, 0.0);
            color:  $gold;  
            padding: 15px;
            font-weight: bold;
            &:hover{
                background-color:  $gold;
                color: black;
                transition: 2s;
            }        
        }
        #card-absolute{
            bottom: -370px;
            border-top: 5px solid  $gold;
            width: 60%;
            #banner{
                background-image: url(/img/avadabarbers-cta-background.jpg);
                background-size: cover;
            }
            #card-absolute-right{
                background-color: black;
                #featured-product{
                    color: $gold;
                    font-size: 16px;
                    letter-spacing: 5px;
                }
                #product{
                    font-size: 60px;
                }
                p{
                    color: $white;
                }
            }  
        }
    }    
</style>