<template>
  <h2 class="assembly-header">{{ text }}</h2>
</template>

<script>
export default {
  name: "AssemblyHeader",
  props: {
    text: {
      type: String,
      default: '',
    },
    fontSize: {
      type: Number,
      default: 16,
    }
  }
}
</script>

<style scoped>
.assembly-header
{
  font-family: RotondaC, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  /* or 128% */
  text-align: center;
  color: #26303B;
}
</style>