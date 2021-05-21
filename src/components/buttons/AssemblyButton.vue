<template>
  <button v-on:click="callback" v-bind:style="{width, height}" class="assembly__button">{{value}}</button>
</template>

<script>
export default {
  name: "AssemblyButton",
  methods: {
    // openPopup() {
    //   this.$emit('openPopup')
    // }
  },
  props: {
    width: {
      type: String,
      default: '340px',
    },
    height: {
      type: String,
      default: '70px',
    },
    value: {
      type: String,
      default: '',
    },
    callback: {
      type: Function,
      default: () => {},
    }
  }
}
</script>

<style scoped>
  .assembly__button
  {
    border-radius: 10px;
    border: none;
    background: linear-gradient(0deg, #7DB945, #7DB945),
    linear-gradient(0deg, #7DB945, #7DB945);
    font-family: 'RotondaC', serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.01em;
    text-align: center;
    color: white;
  }

  .assembly__button:hover
  {
    background: linear-gradient(0deg, #7DC945, #7DC945),
    linear-gradient(0deg, #7DC945, #7DC945);
    cursor: pointer;
  }
</style>