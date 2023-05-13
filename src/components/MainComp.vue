<script>
import AwardComp from './AwardComp.vue';
import NavComp from './NavComp.vue';
import ProductsComp from './ProductsComp.vue';
import ServiceComp from './ServiceComp.vue';

export default{
  name: "MainComp",
  components:{
    NavComp,
    AwardComp,
    ServiceComp,
    ProductsComp
}
}
</script>

<template>
    <NavComp/>
    <AwardComp/>
    <ServiceComp/>
    <ProductsComp/>
</template>

<style lang="scss" scoped>

</style>