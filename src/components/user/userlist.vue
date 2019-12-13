<template>
 <div class="content">
 <el-table
    :data="tableData"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%;text-align: center;">
    <el-table-column type="selection" width="30"></el-table-column>
    <el-table-column align="center" sortable label="创建时间" prop="date"></el-table-column>
    <el-table-column align="center" sortable label="名称" prop="name" ></el-table-column>
    <el-table-column align="center" sortable label="性别" prop="sex"  ></el-table-column>
    <el-table-column align="center" sortable label="IP地址" prop="ip" ></el-table-column>
    <el-table-column align="center" sortable label="账号" prop="account" ></el-table-column>
    <el-table-column align="center" sortable label="密码" prop="password" ></el-table-column>
    <el-table-column align="center" sortable label="IP所属地" prop="address" ></el-table-column>
    <el-table-column align="center"  fixed="right" width="200">
     <template slot="header" slot-scope="scope">
        <el-input v-model="search"size="mini"placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
<!-- 弹出 -->
  </el-table>
    <div class="alert" v-show="form.flag">
            <el-form ref="form" :model="form" label-width="800px">
              <el-form-item label="用户名称">
                <el-input v-model="form.name" placeholder="请输入用户名称"></el-input>
              </el-form-item>
              <el-form-item label="账号">
                <el-input v-model="form.account"  placeholder="请输入账号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input v-model="form.password" placeholder="请输入密码" autocomplete="off" type="password"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="form.region" placeholder="请选择性别">
                  <el-option label="男" value="shanghai"></el-option>
                  <el-option label="女" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创建时间" >
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" :disabled="form.currentdate" v-model="form.day" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" :disabled="form.currentdate" v-model="form.time" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="当前时间">
                <el-switch v-model="form.currentdate"></el-switch>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button  @click="Mcancal">取消</el-button>
              </el-form-item>
            </el-form>
    </div>
</div>
</template>
<script>
  export default {
    data() {

      return {
         tableData: [{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄',
                  account:'2855172736',
                  password:'88888888',
                  ip:'47.105.215.22',
                  sex:'男'
                },{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄',
                  account:'2855172736',
                  password:'777',
                  ip:'47.105.215.22',
                  sex:'男'
                },{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄',
                  account:'2855172736',
                  password:'666',
                  ip:'47.105.215.22',
                  sex:'男'
                },{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄',
                  account:'2855172736',
                  password:'444',
                  ip:'47.105.215.22',
                  sex:'男'
                }],
                search: '',
        form: {
              name: '',//姓名
              account: '',//账号
              password: '',//密码
              sex: '',//性别
              day:'',//天
              time:'',//时间
              currentdate: true,//是否获取当前时间
              flag:false
            }
      }
    },
    methods:{
      Mcancal(){
            this.form.flag = false;
      },
       handleEdit(index, row) {
              console.log(index, row);
            },
            handleDelete(index, row) {
              console.log(index, row);
            },
             formatter(row, column) {
                    return row.address;
                  }
    }
  }
</script>
</template>
<style scoped lang="scss">
.alert{
  padding: 20px;
  overflow: scroll;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
