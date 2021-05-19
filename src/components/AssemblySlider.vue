<template>
  <div class="assembly-slider">
    <div class="assembly-slider__nav">
      <img src="img/nav%20left.svg">
    </div>
    <div class="assembly-slider__content">
      <img class="assembly-slider__img" src="img/pepliks.png" alt="pepliks"/>
      <h3 class="assembly-slider__title">Привезём точно по списку</h3>
      <div class="assembly-slider__text">
        Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа.
      </div>
    </div>
    <div class="assembly-slider__nav">
      <img src="img/nav%20right.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "AssemblySlider",
  data: Object,
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