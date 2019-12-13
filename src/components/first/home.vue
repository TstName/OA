<template>
    <div class="content">
        <div class="Tlist">
                <span>9:36:00</span>
                <div>三端可视化管理系统</div>
                <router-link to="/index">进入管理</router-link>
        </div>
        <div class="home">
                <div class="left"></div>
                <div class="center"></div>
                <div class="right"></div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          option :{
                title : {
                    text: '某地区蒸发量和降水量',
                    subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['蒸发量','降水量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'降水量',
                        type:'bar',
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint : {
                            data : [
                                {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                                {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }
                ]
            }
      };
    },
    methods: {
    },
    mounted(){
        // var a = this.$echarts.init(document.getElementById('one'));
        // a.setOption(this.option)

    }
  }
</script>
</template>
<style  scoped lang="scss">
  .content{
    padding: 0;
  }
    .Tlist{
        height:70px;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 30px;
        box-sizing: border-box;
    }
    .home{
        width:100%;
        height:calc(100% - 70px);
        background:white;
        display: flex;
        .left{
            width:30%;
            height:100%;
            background:skyblue;
        }
        .center{
            flex:1;
            height:100%;
            background:yellowgreen;
        }
        .right{
            width:30%;
            height:100%;
            background:blue;
        }
    }
</style>
