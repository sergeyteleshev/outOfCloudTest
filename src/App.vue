<template>
  <div id="app">
    <div class="container">
      <AssemblyHeader class="assembly-header-component" text="Взгляните на процесс сборки своими глазами"/>
      <AssemblySlider class="assembly-slider-component" :data="sliderData"/>
      <AssemblyButton class="assembly-button-component"/>
    </div>
  </div>
</template>

<script>
import AssemblyHeader from "@/components/AssemblyHeader";
import AssemblySlider from "@/components/AssemblySlider";
import {fetchData} from "@/helpers/fetchData";
import AssemblyButton from "@/components/AssemblyButton";

export default {
  name: 'App',
  components: {
    AssemblyButton,
    AssemblyHeader,
    AssemblySlider,
  },
  data() {
    return {
      sliderData: [
        {id: 1, img: "pepliks.png", title: "Привезём точно по списку", text: "Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа."},
        {id: 2, img: "sunset.jpg", title: "Test", text: "Text"},
        {id: 3, img: "water.jpg", title: "AUE", text: "Brat"},
      ],
    }
  },
  methods: {
    async getSliderData() {
      const res = fetchData('sliderData.json')
      console.log(res)
    }
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

#app, body {
  background-color: #E5E5E5;
}

.container
{
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@font-face {
  font-family: 'RotondaC';
  src: url('assets/fonts/RotondaC.eot');
  src: url('assets/fonts/RotondaC.eot?#iefix') format('embedded-opentype'),
  url('assets/fonts/RotondaC.woff') format('woff'),
  url('assets/fonts/RotondaC.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.assembly-header-component
{
  margin-top: 40px;
}

.assembly-slider-component
{
  margin-top: 29px;
}

.assembly-button-component
{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
