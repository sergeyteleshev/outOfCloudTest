<template>
    <div class="assembly-slider">
      <button class="assembly-slider__nav" v-on:click="prevSlide">
        <img :src="require('../../assets/img/nav left.svg')">
      </button>
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
      <button class="assembly-slider__nav" v-on:click="nextSlide">
        <img :src="require('../../assets/img/nav right.svg')"/>
      </button>
    </div>
</template>

<script>
import AssemblySliderItem from "@/components/slider/AssembleySliderItem";

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
    nextSlide() {
      if(this.currentSlideIndex >= this.data.length - 1)
        this.currentSlideIndex = 0
      else
        this.currentSlideIndex++
    },
    prevSlide() {
      if(this.currentSlideIndex === 0)
        this.currentSlideIndex = this.data.length - 1
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
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;
  transition: all ease 0.5s;
}

.assembly-slider__nav
{
  border: none;
  background: none;
  text-align: center;
  vertical-align: center;
}

.assembly-slider__nav:hover
{
  cursor: pointer;
}

.assembly-slider__nav img
{
  padding: 20px 30px;
  width: 20px;
  height: 40px;
}

.assembly-slider__nav img:hover
{
  background: rgba(0,0,0,0.15);
}

.assembly-slider-item-wrapper
{
  max-width: 640px;
  overflow: hidden;
  margin: 0 auto;
}
</style>