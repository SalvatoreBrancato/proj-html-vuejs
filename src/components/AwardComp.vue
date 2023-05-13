<script>


export default{
  name: "AwardComp",
  components:{
    
}
}
</script>

<template>
    <div id="container-award" class="d-flex justify-content-center align-items-center flex-column animate__animated animate__backInDown">
        <h3>AWARD WINNING</h3>
        <h2>Pro Barbers</h2>
        <button>MEET NOW YOUR BARBER</button>
    </div>
</template>

<style lang="scss" scoped>
    #container-award{
        background-image: url(../../public/img/avadabarbers-about-introbackground.jpg);
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
</style>