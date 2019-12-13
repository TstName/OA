<template>
 <div class="backmodul">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
</div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods:{
      goBack(){
        alert("123")
      }
    }
  }
</script>
</template>
<style scoped lang="scss">
.backmodul{
  padding: 24px;
      border: 1px solid #ebebeb;
      border-radius: 3px;
}

</style>
