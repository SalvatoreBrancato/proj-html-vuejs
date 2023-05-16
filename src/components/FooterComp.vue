<script>
import {store} from '../store'

export default{
  name: "FooterComp",

    data(){
        return{
            store
        }
    },
    methods: {
        confermaPrenotazione(){
            if(store.prenotazione == false){
                store.prenotazione = true
            }else{
                store.prenotazione = false
            }
        }
    }    
}
</script>

<template>
    <div id="container-footer" class="d-flex justify-content-around align-items-end py-5">
        <div class="d-flex flex-column">
            <img src="/img/avadabarbers_footer_shop_image-400x312.png" alt="">
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">SHOP OUR RANGE NOW</button>
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
        <div class="d-flex flex-column align-items-center">
            <img class="imgRasoio" src="/img/safety_set-400x400.png" alt="">
            <button class="w-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">BOOK YOUR APPOINTMENT</button>
        </div>

        <!-- Inzio offcanvas -->
        <div class="offcanvas offcanvas-start h-50" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Prenota il tuo appuntamento</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div>
                <div class="offcanvas-body d-flex justify-content-around">
                    <span class="w-25">Data:</span>
                    <select class="" name="giorno" id="giorno">
                        <option class="text-center" v-for="(element, index) in 30 " value="">{{element}}</option>
                    </select>
                    <select class="w-25" name="mese" id="mese">
                        <option class="text-center" v-for="(element, index) in store.arrayMesi" value="">{{element}}</option>
                    </select>
                    <select name="anno" id="anno">
                        <option class="text-center" v-for="(element, index) in store.arrayAnno " value="">{{element}}</option>
                    </select>
                </div>
                <div class="offcanvas-body d-flex justify-content-around">
                    <span class="w-25">Orario:</span>
                    <select class="w-25" name="ore" id="ore">
                        <option class="text-center" v-for="(element, index) in 10 ">{{ index + 9 }}</option>
                    </select>
                    <select class="w-25" name="minuti" id="minuti">
                        <option class="text-center" v-for="(element, index) in 4">{{index * 15}}</option>
                    </select>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <button @click="confermaPrenotazione()" class="w-50">Prenota</button>
            </div>
            <div v-if=(store.prenotazione) id="conferma-appuntamento" class="h-100 d-flex justify-content-center align-items-center flex-column">
                <h5 class="text-center mt-2">Prenotazione confermata, riceverai un promemoria un giorno prima dell'appuntamento.</h5>
                <h3 class="text-center mt-2">Ti aspettiamo!</h3>
            </div>
        </div>
        <!-- Fine offcanvas -->

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
        .imgRasoio{
            width: 70%; 
        }
        #offcanvasWithBothOptions{
            background-color: black;
            h5{
            color: $white;
            font-family: 'Abril Fatface', cursive;
            font-size: 22px;
            }
            #giorno,
            #mese,
            #anno,
            #ore,
            #minuti{
                height: 10%;
                color: $white;
                border: 2px solid $gold;
                background-color: black;
            }
            h3{
                color: $white;
            }
        }       
    }
</style>