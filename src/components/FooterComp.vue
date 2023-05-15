<script>

export default{
  name: "FooterComp"
}
</script>

<template>
    <div id="container-footer" class="d-flex justify-content-around align-items-end py-5">
        <div class="d-flex flex-column">
            <img src="/img/avadabarbers_footer_shop_image-400x312.png" alt="">
            <button>SHOP OUR RANGE NOW</button>
        </div>
        <div class="d-flex justify-content-around align-items-center flex-column h-100">
            <img src="/img/avadabarbers-stickylogo-x2.png" alt="Logo">
            <ul>
                <li>Avada Barbers</li>
                <li>123 New York Street</li>
                <li>New York City</li>
                <li>info@yourwebsite.com</li>
                <li>+1(555)555-1212</li>
            </ul>
            <span>FOLLOW US</span>
            <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div class="d-flex flex-column">
            <img src="/img/avadabarbers_footer_appointment_image-400x312.png" alt="">
            <button>BOOK YOUR APPOINTMENT</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-footer{
        height: 50vh;
        background-image: url(/img/avadabarbers-services-ptb-retina.jpg);
        background-size: cover;  
        border-top: 5px solid $gold;
        button{
            border: 2px solid $gold;
            background-color: rgba(0, 0, 0, 0.0);
            color: $gold;  
            padding: 15px;
            font-weight: bold;
            &:hover{
                background-color: $gold;
                color: black;
                transition: 2s;
            }        
        }
        ul{
            list-style: none;
            text-align: center;
            width: 100%;
            padding: 0;
            li{
                color: $white;
                width: 100%;
            }
        }
        span{
            text-align: center;
            color: $gold;
            font-weight: bold;
        }
        i{
            color: $white;
            text-align: center;
            margin: 0 10px;
            font-size: 20px;
        }       
    }
</style>