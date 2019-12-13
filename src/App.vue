<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
  }
  .content{
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding: 20px;
    position: relative;
  }
  .content::-webkit-scrollbar {display:none}
  div{
    box-sizing: border-box;
  }
*{
  margin:0;
  padding:0;
  user-select: none;
  font-family: "宋体";
}
#app{
  height:100vh;
  width:100vw;
}


</style>
