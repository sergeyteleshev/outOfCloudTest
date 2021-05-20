<template>
  <div class="assembly-slider__item">
    <div class="assembly-slider-number">{{slideNumber}}</div>
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
    },
    slideNumber: {
      type: Number,
      default: 1,
    }
  },
}
</script>

<style scoped>
.assembly-slider__img
{
  margin: 0 auto;
  width: 561px;
  height: 316px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.assembly-slider__item
{
  text-align: center;
  width: 640px;
  height: 450px;
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

.assembly-slider-number
{
  position: relative;
  width: 50px;
  height: 45px;
  left: 0px;
  top: 28px;
  font-family: 'RotondaC',serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 46px;
  /* or 209% */
  text-align: center;
  color: #7DB945;
  background: white;
  border-radius: 50px;
}
</style>