<script>
export default{
  name: "NavComp",
  components:{
    
  }
}
</script>

<template>
    <div id="container-nav" class="vh-100">
        <!-- Parte superiore della nav con logo e icone -->
        <div class="w-100 d-flex justify-content-around align-items-center pt-5">
            <img src="../../public/img/avadabarbers-logo-x1.png" alt="Logo">
            <div class="d-flex justify-content-around w-25">
                <a class="animate__animated animate__zoomInDown" href="#container-service">Service</a>
                <a class="animate__animated animate__zoomInDown" href="#container-products">Products</a>
                <a class="animate__animated animate__zoomInDown" href="#container-review">Review</a>
                <a href="/"><i class="fa-solid fa-cart-shopping" style="color: #fcfcfc;"></i></a>
                <a href="/"><i class="fa-solid fa-bars" style="color: #ffffff;"></i></a>
            </div>
        </div>
        <!-- Parte centrale della nav -->
        <div id="container-nav-center" class="w-100 d-flex justify-content-center align-items-center">
            <div class="animate__animated animate__backInLeft">
                <h1 class="animate__animated animate__backInLeft">Barber Shop</h1>
                <div id="linea-gold" class="mt-4"></div>
                <p class="mt-4">The Pinnacle of Male grooming</p>
                <button>LEARN MORE</button>
            </div>
            <div class="animate__animated animate__backInRight">
                <img src="../../public/img/avadabarbers_hero_focalmirror-600x825.png" alt="Foto taglio">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #container-nav{
        background-image: url(../../public/img/avadabarbers-homepage-hero-bg.jpg);
        background-size: cover;
        i{
            margin-right: 20px;
            font-size: 20px;
            &:hover{
                color: #ae8652;
            }
        }
        a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 18px;
            letter-spacing: 3px;
            &:hover{
                color: #ae8652;
                transition: 0.5s;
            }
        }
        #container-nav-center{
            //margin-top: 10%;
            h1{
                color: rgba(255, 255, 255, 0.8);
                font-size: 90px;
                font-family: 'Abril Fatface', cursive;
            }
            #linea-gold{
                border-top: 5px solid #ae8652;
                width: 60%;
            }
            p{
                color:#ae8652;
                opacity: 0.5;
                font-size: 2rem;
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
    }

</style>