<script>
import AwardComp from './AwardComp.vue';
import NavComp from './NavComp.vue';
import ProductsComp from './ProductsComp.vue';
import ServiceComp from './ServiceComp.vue';
import ReviewComp from './ReviewComp.vue';
import BlogComp from './BlogComp.vue';

export default{
  name: "MainComp",
  components:{
    NavComp,
    AwardComp,
    ServiceComp,
    ProductsComp,
    ReviewComp,
    BlogComp
}
}
</script>

<template>
    <NavComp/>
    <AwardComp/>
    <ServiceComp/>
    <ProductsComp/>
    <ReviewComp/>
    <BlogComp/>
</template>

<style lang="scss" scoped>

</style>