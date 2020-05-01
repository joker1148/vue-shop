<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default {
  mounted(){
    let url = "/api/common/adver-getadver"
    // this.$http.get(url).then((res)=>{
    //   console.log(res)
    // })
    this.$jsonp(url,(err,res)=>{
      console.log(res)
    })
  }  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
