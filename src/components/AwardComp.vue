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
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="20000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download.png" class="d-block w-100" alt="Foto Henry">
                                <h2>HENRY</h2>
                            </div>
                            <div>
                                <img src="/img/download (7).png" class="d-block w-100" alt="Foto Jhon">
                                <h2>JHON</h2>
                            </div>
                            <div>
                                <img src="/img/download (5).png" class="d-block w-100" alt="Foto Joseph">
                                <h2>JOSEPH</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download (3).png" class="d-block w-100" alt="Foto Patrik">
                                <h2>PATRIK</h2>
                            </div>
                            <div>
                                <img src="/img/download (4).png" class="d-block w-100" alt="Foto Michael">
                                <h2>MICHAEL</h2>
                            </div>
                            <div>
                                <img src="/img/download (2).png" class="d-block w-100" alt="Foto Bob">
                                <h2>BOB</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div class="d-flex justify-content-around align-items-center">
                            <div>
                                <img src="/img/download (6).png" class="d-block w-100" alt="Foto Laurence">
                                <h2>LAURENCE</h2>
                            </div>
                            <div>
                                <img src="/img/download (1).png" class="d-block w-100" alt="Foto Fred">
                                <h2>FRED</h2>
                            </div>
                            <div>
                                <img src="/img/download (8).png" class="d-block w-100" alt="Foto Robert">
                                <h2>ROBERT</h2>
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
            </div>
          <!-- Fine carosello -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #container-award{
        background-image: url(/img/avadabarbers-about-introbackground.jpg);
        height: 50vh;
        h2{
            color: rgba(255, 255, 255, 0.6);
            font-size: 90px;
            font-family: 'Abril Fatface', cursive;
        }
        h3{
            color:#ae8652;
            font-size: 20px;
            letter-spacing: 15px;
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
    #offcanvasTop{
        background-image: url(/img/avadabarbers-contact-ptb-retina.jpg);
        background-size: cover;
        height: 70%;
        h5{
            text-align: center;
            color: #ae8652;
            letter-spacing: 15px;
            font-size: 20px;
            width: 100%;
        }
        h2{
            color:#ae8652;
            font-size: 20px;
            letter-spacing: 15px;
        }
    }  
</style>