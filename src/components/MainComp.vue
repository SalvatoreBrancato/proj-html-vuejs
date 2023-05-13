<script>
import AwardComp from './AwardComp.vue';
import NavComp from './NavComp.vue';
import ProductsComp from './ProductsComp.vue';
import ServiceComp from './ServiceComp.vue';
import ReviewComp from './ReviewComp.vue';

export default{
  name: "MainComp",
  components:{
    NavComp,
    AwardComp,
    ServiceComp,
    ProductsComp,
    ReviewComp
}
}
</script>

<template>
    <NavComp/>
    <AwardComp/>
    <ServiceComp/>
    <ProductsComp/>
    <ReviewComp/>
</template>

<style lang="scss" scoped>

</style>