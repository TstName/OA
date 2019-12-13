<template>
 <div class="contents">
   <header>
     <span>TST</span>
     <p>三端控制</p>
     <div>姓名</div>
   </header>
  <!--导航栏-->
    <div class="main">
      <div class="Tmenu">
          <el-row class="tac">
            <el-col >
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
                <div  v-for="(item,index) in arr" :key="index" >
                  <el-submenu v-if="item.ary" :index="index+''"  :title="item.description">

                         <template slot="title">
                           <i :class="item.icon"></i>
                           <span>{{item.name}}</span>
                         </template>
                         <!-- 二级 -->
                         <el-menu-item
                            v-for="(items,indexs) in item.ary"
                             v-if="items.type == 2"
                           :index="items.url"
                           :key="indexs">{{items.name}}</el-menu-item>
                            <!-- 三级 -->
                          <el-menu-item-group  v-for="(items,indexs) in item.ary" v-if="items.type == 3" :key="indexs">
                               <template  slot="title">{{items.title}}</template>
                              <el-menu-item
                                v-for="(itemss,indexss) in items.arys"
                               :index="itemss.url"
                               :key="indexss">{{itemss.name}}</el-menu-item>
                          </el-menu-item-group>

                   </el-submenu>
                  <el-menu-item   v-else :index="item.url" :title="item.description">
                     <i :class="item.icon"></i>
                     <span slot="title">{{item.name}}</span>
                   </el-menu-item>
                </div>
                </el-menu>
            </el-col>
          </el-row>
      </div>
      <router-view class="Tview"/>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: true,
        theme:'dark',
      arr:[
        {name:"始祖",icon:"el-icon-message",url:"/index/message",description:'众生之祖'},
        {name:"三界-生灵",icon:"el-icon-user-solid",description:'众生平等',ary:[
                                                        {
                                                          title:"天界",
                                                          type:3,
                                                          arys:[
                                                            {name:"天道",url:"/index/management"}
                                                          ]
                                                        },
                                                        {
                                                          title:"人界",
                                                          type:3,
                                                          arys:[
                                                            {name:"人道",url:"/index/management"},
                                                            {name:"畜生",url:"/index/management"}
                                                          ]
                                                        },

                                                        {
                                                          title:"地界",
                                                          type:3,
                                                          arys:[
                                                            {name:"恶鬼",url:"/index/userlist"},
                                                            {name:"阿修罗",url:"/index/management"},
                                                            {name:"地狱",url:"/index/management"}
                                                          ]
                                                        }
                                                      ]},
        {name:"三界-货币",icon:"el-icon-user-solid",description:'货币管理',ary:[
                                                        {
                                                          title:"天界",
                                                          type:3,
                                                          arys:[
                                                            {name:"神石",url:"/index/management"}
                                                          ]
                                                        },
                                                        {
                                                          title:"人界",
                                                          type:3,
                                                          arys:[
                                                            {name:"欧元",url:"/index/management"},
                                                            {name:"灵石",url:"/index/management"}
                                                          ]
                                                        },

                                                        {
                                                          title:"地界",
                                                          type:3,
                                                          arys:[
                                                            {name:"冥币",url:"/index/userlist"},
                                                            {name:"鲜血",url:"/index/management"}
                                                          ]
                                                        }
                                                      ]},
        {name:"三界-设备",icon:"el-icon-user-solid",description:'设备管理',ary:[
                                                            {
                                                              title:"天界",
                                                              type:3,
                                                              arys:[
                                                                {name:"神器",url:"/index/userlist"}
                                                              ]
                                                            },
                                                            {
                                                              title:"人界",
                                                              type:3,
                                                              arys:[
                                                                {name:"器具",url:"/index/userlist"}
                                                              ]
                                                            },
                                                            {
                                                              title:"地界",
                                                              type:3,
                                                              arys:[
                                                                {name:"生死簿",url:"/index/userlist"},
                                                                {name:"神器",url:"/index/management"}
                                                              ]
                                                            }
                                                      ]},
        {name:"数据管理",icon:"el-icon-coin",description:'用户数据管理',ary:[
                                                      {name:"视频管理",type:2,url:"/index/vedio"},
                                                      {name:"图片管理",type:2,url:"/index/images"},
                                                      {name:"短文管理",type:2,url:"/index/fiction"},
                                                      {name:"电子书下载管理",type:2,url:"/index/book"}
                                                    ]},
        {name:"技术管理",icon:"el-icon-notebook-1",description:'技术笔记管理',ary:[
                                                      {name:"JavaScript",type:2,url:"/index/javascript"},
                                                      {name:"jQuery",type:2,url:"/index/jquery"},
                                                      {name:"CSS&HTML",type:2,url:"/index/cssHtml"},
                                                      {name:"Node",type:2,url:"/index/node"},
                                                      {name:"Hybrid",type:2,url:"/index/hybrid"},
                                                      {name:"小程序",type:2,url:"/index/minappliction"}
                                                    ]},

      ]
      }
    },
    methods:{
    }
  }
</script>
</template>
<style scoped lang="scss">

  .contents::-webkit-scrollbar {display:none}
.contents{
  height: 100%;
  width: 100%;
  overflow: scroll;
  // 头部
  header{
    height: 70px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    box-sizing: border-box;
  }
  .main{
    display: flex;
    height:calc(100% - 70px);
    .Tmenu{
      height: 100%;
      width:250px;
      background-color: rgb(84, 92, 100);
      overflow: scroll;
      .el-col{
        width: 100%;
        ul{
            border:none !important;
          }
      }
    }
    .Tmenu::-webkit-scrollbar {display:none}
    .Tview{
      flex: 1;
      height:100%;
    }
  }

}

</style>
