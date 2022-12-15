<template >
  <div class="max-h-screen  bg-gray-900 text-white py-8" >
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

export default {

  name: 'App',
  components: {
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
