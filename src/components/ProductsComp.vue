<script>

export default{
  name: "ProductsComp"
}
</script>

<template>
    <div id="container-products" class="d-flex justify-content-around align-items-center flex-column">
        <div>
            <h3 class="text-center">WE HAVE YOUR COVERED</h3>
            <h2>Avada Grooming Products</h2>
        </div>
        <div class="d-flex justify-content-around align-items center">
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../../public/img/brush_dark-400x400.png" alt="Brush">
                <h4>Brush</h4>
                <span class="animate__animated animate__pulse">€15,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../../public/img/scissors-400x400.png" alt="Scrissors">
                <h4>Scissors</h4>
                <span class="animate__animated animate__pulse">€85,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../../public/img/hot_oil_dark-400x400.png" alt="Hot Oil">
                <h4>Hot Oil</h4>
                <span class="animate__animated animate__pulse">€18,00</span>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column">
                <img src="../../public/img/straight_razor_dark-400x400.png" alt="Straight Razor">
                <h4>Straight Razor</h4>
                <span class="animate__animated animate__pulse">€30,00</span>
            </div>
        </div>
        <div>
            <button>SHOP OUR PRODUCT RANGE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #container-products{
        height: 100vh;
        background-image: url(../../public/img/avadabarbers-reviewsbackground.jpg);
        background-size: cover;
        h3{
            color:#ae8652;
            font-size: 20px;
            letter-spacing: 15px;
        }
        h2{
            color: rgba(255, 255, 255, 0.6);
            font-size: 90px;
            font-family: 'Abril Fatface', cursive;
        }
        h4{
            color:#ae8652;
            font-size: 28px;
            font-family: 'Abril Fatface', cursive;
        }
        span{
            color:#ae8652;
            font-size: 18px;
        }
        button{
            border: 2px solid #ae8652;
            background-color: rgba(0, 0, 0, 0.0);
            color: #ae8652;  
            padding: 15px;
            font-weight: bold;
            &:hover{
                background-color: #ae8652;
                color: black;
                transition: 2s;
            }        
    }  
        
    }
</style>