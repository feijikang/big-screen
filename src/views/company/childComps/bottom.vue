<template>
  <div class="bottom">
    <div>
      <dv-water-level-pond :config="config" style="width:150px;height:200px" />
      <div class="title">完成率</div>
    </div>
    <div>
      <dv-water-level-pond :config="config" style="width:150px;height:200px" />
      <div class="title">完成率</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      config:{
        data: [66]
      }
    }
  }
}
</script>

<style scoped>
  .bottom{
    display: flex;
    justify-content: space-between;
  }
  .title{
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
  }
</style>