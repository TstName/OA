import Vue from 'vue'
import Router from 'vue-router'
// 非管理页
import Index from '@/components/first/index';
import Home from '@/components/first/home';
import Login from '@/components/first/login';
import Error from '@/components/first/error';
// 用户管理
import Adduser from '@/components/user/adduser';
import Userlist from '@/components/user/userlist';
import Management from '@/components/user/management';
// 配置管理
import WeChat from '@/components/settings/weChat';
import Pay from '@/components/settings/pay';
import Mobile from '@/components/settings/mobile';
import Pc from '@/components/settings/pc';
// 数据管理
import Vedio from '@/components/data/vedio';
import Images from '@/components/data/images';
import Fiction from '@/components/data/fiction';
import Book from '@/components/data/book';
import Message from '@/components/data/message';
// 技术笔记管理
import Javascript from '@/components/note/javascript';
import Jquery from '@/components/note/jquery';
import CssHtml from '@/components/note/cssHtml';
import Node from '@/components/note/node';
import Hybrid from '@/components/note/hybrid';
import Minappliction from '@/components/note/minappliction';
Vue.use(Router)
 const router = new Router({
  routes: [
    {path:'/',name:"home",component:Home},
    {path:'/login',name:"login",component:Login},
    {path:'*',name:"error",component:Error},
    {
      path:'/index',
      name:"index",
      component:Index,
      children:[
        {path:'adduser',name:"adduser",component:Adduser},
        {path:'userlist',name:"userlist",component:Userlist},
        {path:'weChat',name:"weChat",component:WeChat},
        {path:'pay',name:"pay",component:Pay},
        {path:'mobile',name:"mobile",component:Mobile},
        {path:'pc',name:"pc",component:Pc},
        {path:'fiction',name:"fiction",component:Fiction},
        {path:'images',name:"images",component:Images},
        {path:'vedio',name:"vedio",component:Vedio},
        {path:'book',name:"book",component:Book},
        {path:'management',name:"management",component:Management},
        {path:'javascript',name:"javascript",component:Javascript},
        {path:'jquery',name:"jquery",component:Jquery},
        {path:'cssHtml',name:"cssHtml",component:CssHtml},
        {path:'node',name:"node",component:Node},
        {path:'hybrid',name:"hybrid",component:Hybrid},
        {path:'minappliction',name:"minappliction",component:Minappliction},
        {path:'message',name:"message",component:Message}
      ]
    }

  ]
})
router.beforeEach((to, from, next) => {
  var session, reg = new RegExp("(^| )usersession=([^;]*)(;|$)");
  session = document.cookie.match(reg)
      if(session){
        next()
      }else{
        if(to.path == "/login"){
          next()
        }else{
          next('login')
        }
      }
})
export default router;
