<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {}
  },
  created() {
  },
  mounted() {},
  methods: {},
}
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Gopher;
}

ul,
li {
  list-style: none;
}


html, body {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
