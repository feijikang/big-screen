<template>
  <div class="custom">
    <div class="wraper">
      <navbar></navbar>
      <!-- 进度条 -->
      <div class="progess">
        <dv-decoration-2 style="width:50%;height:5px;" :color="['#1A5CD7']" />
        <dv-decoration-2 style="width:50%;height:5px;transform: rotateY(180deg);" :color="['#1A5CD7']" />
      </div>
      <!-- 中间图表 -->
      <div>
        <center></center>
      </div>
      <left></left>
    </div>
    
  </div>
</template>

<script>
import navbar from '../../components/navbar/navbar.vue'
import center from './childComps/center.vue'
import left from './childComps/left.vue'
export default {
  components:{
    navbar,
    center,
    left
  }
}
</script>

<style scoped>
.custom{
  color: #d3d6dd;
  background-color: #000000;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
}
.wraper {
  width: 100vw;
  height: 100vh;
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-image: url("../../assets/img/bg.jpg");
  background-size: cover;
  background-position: center center;
}
.progess{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
</style>