<script>
import AwardComp from './AwardComp.vue';
import NavComp from './NavComp.vue';
import ServiceComp from './ServiceComp.vue';

export default{
  name: "MainComp",
  components:{
    NavComp,
    AwardComp,
    ServiceComp
}
}
</script>

<template>
    <NavComp/>
    <AwardComp/>
    <ServiceComp/>
</template>

<style lang="scss" scoped>

</style>