<script>
import {store} from '../store'

export default{
    name: "NavComp",
   
    data(){
        return{
            store
        }
    },
    methods: {
        
        azzeraInput(){ 
        
        store.registrazione = true
            
        this.store.arrayUtenti.push({ 
        nome: store.nome,
        cognome: store.cognome,
        indirizzo: store.indirizzo,
        email: store.email,
        età: store.età
        });
    
        store.nome = '';
        store.cognome = '',
        store.indirizzo = '',
        store.email = '',
        store.età = ''
        }
    }
}

</script>

<template>
    <div id="container-nav" class="vh-100">
        <!-- Parte superiore della nav con logo e icone -->
        <div class="w-100 d-flex justify-content-around align-items-center pt-5">
            <img id="logo" src="/img/avadabarbers-logo-x2.png" alt="Logo">
            <div class="d-flex justify-content-around w-50">
                <a class="animate__animated animate__zoomInDown animate__delay-1s" href="#container-service">Service</a>
                <a class="animate__animated animate__zoomInDown animate__delay-2s" href="#container-products">Products</a>
                <a class="animate__animated animate__zoomInDown animate__delay-3s" href="#container-review">Review</a>
                <a class="animate__animated animate__zoomInDown animate__delay-4s" href="#container-blog">Blog</a>
                <a class="animate__animated animate__zoomInDown animate__delay-5s" href="#container-footer">Contacts</a>
                <a href="/"><i class="fa-solid fa-cart-shopping" ></i></a>
                <a href="/"><i class="fa-solid fa-bars"></i></a>
            </div>
        </div>
        <!-- Parte centrale della nav -->
        <div id="container-nav-center" class="w-100 d-flex justify-content-center align-items-center">
            <div class="animate__animated animate__backInLeft">
                <h1 class="animate__animated animate__backInLeft">Barber Shop</h1>
                <div id="linea-gold" class="mt-4"></div>
                <p class="mt-4">The Pinnacle of Male grooming</p>
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">LEARN MORE</button>
            </div>
            <div class="animate__animated animate__backInRight animate__delay-0.5s animate__slow">
                <img src="/img/avadabarbers_hero_focalmirror-600x825.png" alt="Foto taglio">
            </div>
        </div>
    </div>
    <!-- inizio offcanvass -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">
                Iscriviti per accedere alla tua area personale.
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column align-items-start">
            <div class="d-flex justify-content-around align-items-center my-3 w-100">
                <span class="me-3 w-25">NOME:</span>
                <input class="w-50" type="text" v-model="store.nome">
            </div>
            <div class="d-flex justify-content-around align-items-center my-3 w-100">
                <span class="me-3 w-25">COGNOME:</span>                    
                <input class="w-50" type="text" v-model="store.cognome">
            </div>
            <div class="d-flex justify-content-around align-items-center my-3 w-100">
                <span class="me-3 w-25">INDIRIZZO:</span>
                <input class="w-50"  type="text" v-model="store.indirizzo">
            </div>
            <div class="d-flex justify-content-around align-items-center my-3 w-100">
                <span class="me-3 w-25 ">EMAIL:</span>
                <input class="w-50"  type="email" v-model="store.email">
            </div>
            <div class="d-flex justify-content-around align-items-center my-3 w-100">
                <span class="me-3 w-25">ETA':</span>
                <input type="radio" name="età" id="minorenne" class="" value="minorenne" v-model="store.età">
                <label for="minorenne"> -18</label>
                <input type="radio" name="età" id="maggiorenne" class="" value="maggiorenne" v-model="store.età">
                <label for="minorenne"> +18</label>
            </div>
            <div class="w-100 d-flex justify-content-center">
                <button type="submit" class="mt-4 w-25" @click="azzeraInput()">Iscriviti</button>
            </div>
            <div id="box-registrazione" v-if=(store.registrazione) class="w-100 h-25 mt-5 d-flex justify-content-center align-items-center">
                <h5 class="text-center">Registrazione avvenuta correttamente, riceverai una mail di conferma al seguente indirizzo: {{store.arrayUtenti[0].email}}</h5>
            </div>
        </div>
    </div>
<!-- fine ofcanvass -->
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-nav{
        background-image: url(/img/avadabarbers-homepage-hero-bg.jpg);
        background-size: cover;
        a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 18px;
            letter-spacing: 3px;
            &:hover{
                color: $gold;
                transition: 0.5s;
            }
            i .fa-solid{
            margin-right: 20px;
            font-size: 20px;
            color: white;
            &:hover{
                color: $gold;
            }
        }
        }
        #container-nav-center{
            //margin-top: 10%;
            h1{
                color: $white;
                font-size: 90px;
                font-family: 'Abril Fatface', cursive;
            }
            #linea-gold{
                border-top: 5px solid $gold;
                width: 60%;
            }
            p{
                color:$gold;
                opacity: 0.5;
                font-size: 2rem;
            }
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
        }
    }
    #offcanvasRight{
        background-image: url(/img/avadabarbers-about-introbackground.jpg);
        background-size: cover;
        width: 30%;
        button{
            border: 2px solid $gold;
            background-color: rgba(0, 0, 0, 0.0);
            color: $gold;  
            padding: 10px;
            font-weight: bold;
            &:hover{
                background-color: $gold;
                color: black;
                transition: 2s;
            }        
        }
        h5{
            color: $white;
            font-family: 'Abril Fatface', cursive;
            font-size: 22px;
        }
        span,
        label{
            letter-spacing: 3px;
            color:$gold;
            font-size: 14px;
        }
        input{
            border-radius: 10px;
            border: 2px solid $gold;
            background-color: rgba(28, 28, 28, 0.5);
            color: $white;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
        #box-registrazione{
            border: 2px solid $gold;
        }
    }

</style>