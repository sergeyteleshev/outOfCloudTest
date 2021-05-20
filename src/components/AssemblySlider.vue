<template>
    <div class="assembly-slider">
      <div class="assembly-slider__nav" v-on:click="prevSlide($props.data)">
        <img :src="require('../assets/img/nav left.svg')">
      </div>
      <div class="assembly-slider-item-wrapper">
        <div class="assembly-slider" :style="`margin-left: -${(100 * currentSlideIndex)}%`">
          <AssemblySliderItem
              v-for="item in $props.data"
              v-bind:key="item.id"
              :itemData="item"
              :slideNumber="currentSlideIndex + 1"
          />
        </div>
      </div>
      <div class="assembly-slider__nav" v-on:click="nextSlide($props.data)">
        <img :src="require('../assets/img/nav right.svg')"/>
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
    autoChange: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 4000,
    }
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
    },
  },
  mounted() {
    if(this.autoChange)
    {
      let vm = this
      setInterval(function () {
        vm.nextSlide(vm.data)
      }, vm.interval)
    }
  }
}
</script>

<style scoped>
.assembly-slider
{
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  transition: all ease 0.5s;
}

.assembly-slider__nav
{
  padding: 0 30px;
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

.assembly-slider-item-wrapper
{
  max-width: 640px;
  overflow: hidden;
  margin: 0 auto;
}
</style>