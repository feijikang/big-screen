<template>
  <div id="home">
    <!-- <dv-loading v-if="isShow" style="width:100vw;height:100vh">加载中</dv-loading> -->
    <!-- <dv-full-screen-container class="bg" ></dv-full-screen-container> -->
    <div class="bg" >

      <!-- 头部导航 -->
      <navbar></navbar>

      <!-- 左侧数据 -->
      <dv-border-box-12 class="left-border">
        <center-left-1></center-left-1>
      </dv-border-box-12>
      
      <!-- 中心地图展示区域 -->
      <center ></center>

      <!-- 右侧排名 -->
      <dv-border-box-13 class="right-border">
        <center-right style=""></center-right>
      </dv-border-box-13>

      <!-- 中间数字盘 -->
      <center-bottom></center-bottom>

      <!-- 底部表格 -->
      <div class="bottom-table">
        <dv-border-box-13 style="width:49%">
          <bottomLeft />
        </dv-border-box-13>
        <dv-border-box-12 style="width:49%">
          <bottomRight />
        </dv-border-box-12>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import { formatTime } from '../../utils/index.js'
import navbar from "../../components/navbar/navbar.vue"
import center from "./childComps/center"
import centerRight from "./childComps/centerRight.vue"
import centerLeft1 from "./childComps/centerLeft1.vue"
import bottomLeft from "./childComps/bottomLeft.vue"
import bottomRight from "./childComps/bottomRight.vue"
import centerBottom from "./childComps/centerBottom.vue"


export default {
  data () {
    return {
      isShow:true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    navbar,
    center,
    centerRight,
    centerLeft1,
    bottomLeft,
    bottomRight,
    centerBottom,
  },
  mounted () {
    this.timeFn();
    setTimeout(() => {
      this.isShow = false;
    },1000)
  },
  methods: {
    // 时间
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 500)
    }
  }
};
</script>

<style lang="scss">
  // @import '../../assets/scss/home.scss';
  #home{
    color: #d3d6dd;
    background-color: #000000;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .bg {
    width: 100%;
    padding: 0.2rem 0.2rem 0 0.2rem;
    background-image: url("../../assets/img/bg.jpg");
    background-size: cover;
    background-position: center center;
  }
  
    // 中间左边
  .left-border{
    width: 23%;
    height: 8rem;
    margin-top: 0.2rem;
  }
  // 中间右边
  .right-border{
    width: 23%;
    height: 8rem;
    position: absolute;
    right: 0.2rem;
    top: 1.65rem;
  }
  // 左下
  .left-bottom{
   width: 25%; 
   height: 6.225rem;
   position: absolute;
   top:10rem
  }
  // 底部两个表格
  .bottom-table{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-top: 2.3rem;
  }
</style>