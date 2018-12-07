<template>
  <div class="notfound">
    <div class="box">
      <img src="././../assets/img/notfound.png" alt="">
      <Button size="large" type="primary" shape="circle" @click="goHome">返回首页</Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      let now = this.$store.state.home
      now.filterList = []
      now.tabList = []
      now.activeName = ''
      now.nowTab = '/home/index'
      this.$router.push('/home/index')
      this.VueCookie.delete('TAB-LINK')
      this.VueCookie.delete('TAB-TABLIST')
    }
  }
}
</script>

<style lang="scss" scoped>
.notfound{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #5c5e64;
  .box{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
  }
}
</style>
