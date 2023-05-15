<script>


export default{
  name: "ServiceComp",
    mounted(){
      
    }
}


</script>

<template>
    <div id="container-service" class="d-flex justify-content-center align-items-center flex-column col-10 mx-auto">
        <div>
            <h3>MENS GROOMING</h3>
            <h2>Services</h2>
        </div>
        <div class="d-flex justify-content-around mt-5">
            <div class="text-center mt-4 box animate__animated animate__backInLeft animate__delay-1s" ref="animate__animated">
                <img src="/img/avadabarbers-trimcut-icon-before.png" alt="icona macchinetta per capelli">
                <h4 class="mt-4">Trim & Cut</h4>
                <p class="mt-4">Avada Barbers are experts in the lickety split trim and hair cut. Quick but carful and ridiculously good looking.</p>
            </div>
            <div class="text-center mt-4 box animate__animated animate__backInLeft animate__delay-2s" ref="animate__animated">
                <img src="/img/avadabarbers-washndry-icon.png" alt="icona macchinetta per capelli">
                <h4 class="mt-4">Wash & Dry</h4>
                <p class="mt-4">Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.</p>
            </div>
            <div class="text-center mt-4 box animate__animated animate__backInLeft animate__delay-3s" ref="animate__animated">
                <img src="/img/avadabarbers-beardtrim-icon.png" alt="icona macchinetta per capelli">
                <h4 class="mt-4">Beard Tidy</h4>
                <p class="mt-4">Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
    #container-service{
        height: 100vh;
        background-color: white;
        h2{
            color: $grayTrasparent;
            font-size: 90px;
            font-family: 'Abril Fatface', cursive;
        }
        h3{
            color:$gold;
            font-size: 20px;
            letter-spacing: 15px;
        }
        .box{
            width: 30%;
            h4{
                font-family: 'Abril Fatface', cursive;
                color: $gold;
                font-size: 40px;
            }
            p{
                color: $grayTrasparent;
                font-size: 18px;
                font-family: 'Montserrat', sans-serif;
            }
        }
    }
</style>

<!-- <template>
  <div class="fade-in" ref="fade-in">
     il contenuto della sezione 
  </div>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.$refs['fade-in']);
  }
};
</script>

<style lang="scss">
.fade-in {
  opacity: 0;
  animation: fade-in ease-in-out 1s forwards;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style> -->