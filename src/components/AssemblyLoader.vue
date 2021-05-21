<template>
  <div class="assembly-loader" v-bind:style="{
    backgroundImage: 'url(' + src + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: height + 'px',
    width: width + 'px',
  }">
  </div>
</template>

<script>
export default {
  name: "AssemblyLoader",
  props: {
    isShowed: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: require('../assets/img/loader.gif')
    },
    width: {
      type: Number,
      default: 10,
    },
    height: {
      type: Number,
      default: 10,
    }
  }
}
</script>

<style scoped>

</style>