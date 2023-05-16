<script>


export default{
  name: "AwardComp",
  components:{
    
}
}
</script>

<template>
    <div id="container-award" class="d-flex justify-content-center align-items-center flex-column">
        <h3>AWARD WINNING</h3>
        <h2>Pro Barbers</h2>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">MEET NOW YOUR BARBER</button>
    </div>
    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">YOUR BARBER</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <!-- Inizio carosello -->
            <div id="carouselExampleInterval" class="carousel slide position-relative" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download.png" class="d-block w-100 position-relative" alt="Foto Henry">
                                <h2 class="position-absolute top-50 left-0">HENRY</h2>
                            </div>
                            <div>
                                <img src="/img/download (7).png" class="d-block w-100 position-relative" alt="Foto Jhon">
                                <h2 class="position-absolute top-50 left-0">JHON</h2>
                            </div>
                            <div>
                                <img src="/img/download (5).png" class="d-block w-100 position-relative" alt="Foto Joseph">
                                <h2 class="position-absolute top-50 left-0">JOSEPH</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download (3).png" class="d-block w-100 position-relative" alt="Foto Patrik">
                                <h2 class="position-absolute top-50 left-0">PATRIK</h2>
                            </div>
                            <div>
                                <img src="/img/download (4).png" class="d-block w-100 position-relative" alt="Foto Michael">
                                <h2 class="position-absolute top-50 left-0">MICHAEL</h2>
                            </div>
                            <div>
                                <img src="/img/download (2).png" class="d-block w-100 position-relative" alt="Foto Bob">
                                <h2 class="position-absolute top-50 left-0">BOB</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download (6).png" class="d-block w-100 position-relative" alt="Foto Laurence">
                                <h2 class="position-absolute top-50 left-0">LAURENCE</h2>
                            </div>
                            <div>
                                <img src="/img/download (8).png" class="d-block w-100 position-relative" alt="Foto Fred">
                                <h2 class="position-absolute top-50 left-0">FRED</h2>
                            </div>
                            <div>
                                <img src="/img/download (1).png" class="d-block w-100 position-relative" alt="Foto Robert">
                                <h2 class="position-absolute top-50 left-0">ROBERT</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="ovale position-absolute"></div>
                <div class="ovale-top position-absolute"></div>
            </div>
          <!-- Fine carosello -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-award{
        background-image: url(/img/avadabarbers-about-introbackground.jpg);
        height: 50vh;
        h2{
            color: $whiteTrasparent;
            font-size: 90px;
            font-family: 'Abril Fatface', cursive;
        }
        h3{
            color:$gold;
            font-size: 20px;
            letter-spacing: 15px;
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
    #offcanvasTop{
        background-color: black;
        background-size: cover;
        height: 70%;
        h5{
            text-align: center;
            color: $gold;
            letter-spacing: 15px;
            font-size: 20px;
            width: 100%;
        }
        h2{
            color:$gold;
            font-size: 20px;
            letter-spacing: 15px;
        }
        .ovale{
            width: 100%;
            background-color: black;
            border-radius: 50%;
            bottom: -150px;
            right: 0;
            left: 0;
            height: 60%;
        }
        .ovale-top{
            width: 100%;
            background-color: black;
            border-radius: 50%;
            top: -200px;
            right: 0px;
            left: 0px;
            height: 60%;
        }
        
    }  
</style>