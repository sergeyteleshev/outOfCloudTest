<template>
  <button class="assembly__button">К покупкам</button>
</template>

<script>
export default {
  name: "AssemblyButton"
}
</script>

<style scoped>
  .assembly__button
  {
    height: 70px;
    width: 340px;
    left: 550px;
    top: 2603px;
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