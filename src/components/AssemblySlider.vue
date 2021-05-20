<template>
  <div v-on:load="getSliderData()" class="assembly-slider">
    <div class="assembly-slider__nav" v-on:click="prevSlide($props.data)">
      <img :src="require('../assets/img/nav left.svg')">
    </div>
    <AssemblySliderItem
        :itemData="$props.data[this.currentSlideIndex]"
    />
    <div class="assembly-slider__nav" v-on:click="nextSlide($props.data)">
      <img :src="require('../assets/img/nav right.svg')">
    </div>
  </div>
</template>

<script>
import AssemblySliderItem from "@/components/AssembleySliderItem";

export default {
  name: "AssemblySlider",
  components: {
    AssemblySliderItem
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  methods: {
    nextSlide(data) {
      if(this.currentSlideIndex >= data.length - 1)
        this.currentSlideIndex = 0
      else
        this.currentSlideIndex++
    },
    prevSlide(data) {
      if(this.currentSlideIndex === 0)
        this.currentSlideIndex = data.length - 1
      else
        this.currentSlideIndex--
    }
  }
}
</script>

<style scoped>
.assembly-slider
{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.assembly-slider__nav
{
  height: 100%;
  padding: 0 20px;
}

.assembly-slider__nav:hover
{
  background: rgba(0,0,0,0.15);
}

.assembly-slider__nav img
{
  width: 20px;
  height: 40px;
}
</style>