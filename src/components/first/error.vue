<template>
	<div class="error">
	 <header>
     <p>哎呀亲......您访问的页面出错了！</p>
     <span>您输入的网址有错误或链接已过期。</span>
   </header>
   <div>
     <img :class="flag ? 'fours hover':'fours'" src="../../assets/login/four.png" alt="">
     <img :class="flag ? 'four hover2':'four'" src="../../assets/login/four2.png" alt="">
     <img class="round" src="../../assets/login/round.png">
   </div>
   <router-link to="/"><button>我要回首页</button></router-link>

	</div>
</template>

<script>
  export default {
	data() {
	  return {
      flag:false
	  }
	},
	mounted(){
    setTimeout(()=>{
      this.flag = true;
    },0)
	}
  }
</script>
<style  scoped lang="scss">
  .error:hover .hover{

  }
  .error{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-image: url(../../assets/login/login_bg.png);
    background-size: cover;
    background-position: left top;
    color: #00eaff;
    overflow: hidden;
    header{
      font-size: 25px;
      span{
        display: block;
        margin-top: 30px;
        text-align: center;
        font-size: 18px;
      }
    }

    div{
      position: relative;
      margin: 100px 0;
      .fours{
        width: 50px;
        position: absolute;
        top: -250%;
        left:-25px;
         transition: 2s;
      }
      .four{
        width: 50px;
        position: absolute;
        top: -250%;
        right:-20px ;
        transition: 2s;
      }
      .hover{
        top: 40px;
        left:-25px;
      }
      .hover2{
        top: 40px;
        right:-20px;
      }
      .round{
        width: 300px;
      }
    }
    button{
      border: none;
      outline: none;
      width: 100px;
      height: 30px;
      border-radius: 50px;
      border: 2px solid #692d23;
      background: #ffba30;
      color: black;
    }
  }
</style>
