<script>

export default{
  name: "BlogComp"
}
</script>

<template>
    <div id="container-blog" class="vh-100 d-flex justify-content-around align-items-center flex-column py-4">
        <div>
            <h3 class="text-center">TALES FROM THE BARBER SHOP</h3>
            <h2>Recent Blog Posts</h2>
        </div>
        <div class="h-50 d-flex justify-content-around align-items center">
            <div id="box-posts" class=" d-flex justify-content-around align-items-center flex-column">
                <img src="/img/avadabarbers-second-blog-320x202.jpg" alt="Brush">
                <h4>Avada Barbers Now Open</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum ab eos molestiae ut sunt, minus nulla laborum. Accusamus ratione deserunt reprehenderit doloremque perferendis, delectus voluptates sint assumenda magnam eius!</p>
            </div>
            <div id="box-posts" class="d-flex justify-content-around align-items-center flex-column">
                <img src="/img/avadabarbers-choosing-blog-320x202.jpg" alt="Scrissors">
                <h4>Chosing The Right Barber </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum ab eos molestiae ut sunt, minus nulla laborum. Accusamus ratione deserunt reprehenderit doloremque perferendis, delectus voluptates sint assumenda magnam eius!</p>
            </div>
            <div id="box-posts" class="d-flex justify-content-around align-items-center flex-column">
                <img src="/img/avadabarbers-ourservice-blog-320x202.jpg" alt="Hot Oil">
                <h4>Quick Service Guide</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum ab eos molestiae ut sunt, minus nulla laborum. Accusamus ratione deserunt reprehenderit doloremque perferendis, delectus voluptates sint assumenda magnam eius!</p>
            </div>
        </div>
        <div>
            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">READ MORE OUR BLOG</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-blog{
        background-image: url(/img/avadabarbers-about-ptb-retina.jpg);
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
        #box-posts{
            width: calc(90% / 3);
            h4{
                color: $gold;
                font-size: 28px;
                font-family: 'Abril Fatface', cursive;
            }
            p{
                color: rgba(152, 151, 151, 0.8);
                font-size: 18px;
                text-align: center;
            }
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
    }
</style>