<template>
        <div class="login">
          <header>
              <div>地府管理系统</div>
              <img src="../../assets/login/top.png" alt="头部呈现">
          </header>
          <img class="global" src="../../assets/login/global.png" alt="地球">
          <img class="bottom" src="../../assets/login/buttom1.png" alt="bottom">
          <img class="bottom" src="../../assets/login/buttom2.png" alt="bottom2">
          <img class="bottom" src="../../assets/login/buttom3.png" alt="bottom3">
          <img class="bottom" src="../../assets/login/buttom4.png" alt="bottom4">
          <img class="leftbottom" src="../../assets/login/a.png" alt="font">
           <img class="righttop" src="../../assets/login/b.png" alt="font">
           <!-- form表单 -->
           <div class="form">
                <img src="../../assets/login/login_img.png" alt="提示">
                <div class="main">
                    <div class="input">
                      <img src="../../assets/login/user.png">
                      <input type="text" v-model="account" placeholder="请输入账号">
                    </div>
                    <div class="input">
                      <img src="../../assets/login/password.png">
                      <input type="text" v-model="password" placeholder="请输入密码">
                    </div>
                    <div class="forget">
                      <span>{{error}}</span>
                      <div @click="Mcookie" >
                        <img v-if="flag" src="../../assets/login/norecta.png">
                        <img v-else src="../../assets/login/yesrecta.png">
                        记住密码
                      </div>
                    </div>
                    <button @click="Mlogin">登录</button>
                </div>
           </div>
        </div>
</template>
<script>
  export default {
    data() {
      return {
        flag:true,
        error:"",
        account:"",
        password:""
      }
    },
    methods: {
      Mcookie(){
        this.flag = !this.flag
      },
      Mlogin(){
       function a(name, value,day){
          var Days = day || 365;
          var exp = new Date();
          exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
          document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        }
        a("usersession","dawdawdwa456456",1)
        this.$router.push({path:"/"})
      }
    },
    mounted(){

    }
  }
</script>
<style  scoped lang="scss">
  @mixin flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @mixin position2 {
    position: absolute;
    bottom: 0;
    left: 0;
  }
    .login{
        width:100%;
        height:100%;
        overflow: hidden;
        background-image: url(../../assets/login/login_bg.png);
        background-position: left top;
        background-size: cover;
        position: relative;
        color: #00eaff;
        header{
          height: 110px;
          width: 100%;
          display: flex;
          align-items: center;
           justify-content: center;
          flex-direction: column;
          div{
            font-size: 32px;
            font-weight: 700;
            margin-left: -40px;
          }
          img{
            width: 700px;
          }
        }
        .global{
          height: 800px;
          width: 800px;
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(0%,-50%);
        }
        .bottom{
              @include position2
              width: 120%;
              height: 100px;
        }
        .leftbottom{
          height: 700px;
           @include position2
        }
        .righttop{
           position: absolute;
           top: 0;
           right: 0;
        }
        .form{
          position: absolute;
          top: 50%;
          right: 10%;
          transform: translate(0%,-50%);
          height: 510px;
          width: 507px;
          background-image:url(../../assets/login/loginbg.png);
          background-position: left top;
          background-size: cover;
          >img{
             position: absolute;
             top: 20px;
             left: 50%;
             transform: translateX(-35%);
          }
          .main{
            height: 340px;
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-35%);
            button{
              width: 80%;
              height: 60px;
              margin-left: 10%;
              background: none;
              background-image:url(../../assets/login/login.png);
              background-position: left top;
              background-size: 100% 100%;
              border: none;
              outline:none;
              font-size: 25px;
              font-weight: 700;
              margin-top: 20px;
            }
            button:active{
              opacity: 0.8;
            }
            .forget{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 16px;
                height: 50px;
                padding-left:40px;
                img{
                  margin: 0 10px;
                }
                span{
                  color: red;
                }
            }
            .input{
             display: flex;
             align-items: center;
             justify-content: space-between;
             height: 60px;
             background-image:url(../../assets/login/input.png);
             background-position: left top;
             background-size: 100% 100%;
             margin-top: 30px;
             img{
               margin:0 20px;
             }
             input{
               flex: 1;
               border: none;
               background: rgba(0,0,0,0);
               height: 50%;
               outline: none;
               padding: 0 20px;
               border-left:1px solid #014250;
               color:#00eaff;
             }
             input::-webkit-input-placeholder {
                  color: #00eaff;
             }
            }
          }
        }
    }
</style>
