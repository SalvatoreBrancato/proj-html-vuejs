<script>
import AwardComp from './AwardComp.vue';
import NavComp from './NavComp.vue';

export default{
  name: "MainComp",
  components:{
    NavComp,
    AwardComp
}
}
</script>

<template>
    <NavComp/>
    <AwardComp/>
</template>

<style lang="scss" scoped>

</style>