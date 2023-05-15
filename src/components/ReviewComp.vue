<script>

export default{
  name: "ReviewComp"
}
</script>

<template>
<div id="container-review" class="d-flex justify-content-center align-items-center flex-column">
  <h3 class="text-center">WHAT PEOPLE SAY</h3>
  <h2>Reviews</h2>
  <div class="d-flex justify-content-around">
    <div class="w-25 d-flex flex-column justify-content-center align-items-center py-5">
      <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum recusandae facere blanditiis labore accusamus. Labore, possimus earum ea architecto repellat fuga inventore tempora perspiciatis asperiores. Labore, officiis tenetur. Sequi, doloribus!</p>
      <img class="my-4" src="/img/avadabarbers-trimcut-gallery6-400x400.jpg" alt="foto-utente">
      <span>Jhon Doe</span>
    </div>
    <div class="w-25 d-flex flex-column justify-content-center align-items-center py-5">
      <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum recusandae facere blanditiis labore accusamus. Labore, possimus earum ea architecto repellat fuga inventore tempora perspiciatis asperiores. Labore, officiis tenetur. Sequi, doloribus!</p>
      <img class="my-4" src="/img/avadabarbers-trimcut-gallery7-400x402.jpg" alt="foto-utente">
      <span>Pete Jhones</span>
    </div>
    <div class="w-25 d-flex flex-column justify-content-center align-items-center py-5">
      <p class="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum recusandae facere blanditiis labore accusamus. Labore, possimus earum ea architecto repellat fuga inventore tempora perspiciatis asperiores. Labore, officiis tenetur. Sequi, doloribus!</p>
      <img class="my-4" src="/img/avadabarbers-trimcut-gallery3-400x402.jpg" alt="foto-utente">
      <span>Mark Wilson</span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../style/main.scss' as *;
  #container-review{
    height: 100vh;
    h3{
      color:$gold;
      font-size: 20px;
      letter-spacing: 15px;
    }
    h2{
      color: $grayTrasparent;
      font-size: 90px;
      font-family: 'Abril Fatface', cursive;
    }
    img{
      border-radius: 50%;
      width: 30%;
    }
    span{
      color:$gold;
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>