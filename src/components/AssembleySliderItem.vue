<template>
  <div class="assembly-slider__item">
    <div class="assembly-slider__img" v-bind:style="{backgroundImage: 'url(' + require('../assets/img/' + itemData.img) + ')'}"></div>
    <h3 class="assembly-slider__title">{{itemData.title}}</h3>
    <div class="assembly-slider__text">{{ itemData.text }}</div>
  </div>
</template>

<script>
export default {
  name: "AssemblySliderItem",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style scoped>
.assembly-slider__img
{
  width: 561px;
  height: 316px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.assembly-slider__item
{
  width: 640px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: white;
  box-shadow: 0px 0px 40px 0px #0000001A;
  border-radius: 10px;
}

.assembly-slider__title
{
  margin-top: 28px;
  font-family: 'RotondaC', serif;
  color: #26303B;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}

.assembly-slider__text
{
  font-family: 'RotondaC', serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #26303B;
}
</style>