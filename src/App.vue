<template>
  <div id="app">
    <div class="container">
      <h2 class="assembly-header">Взгляните на процесс сборки своими глазами</h2>
      <AssemblySlider class="assembly-slider-component"
                      v-if="sliderData" :data="sliderData"
                      :autoChange="false"
                      :interval="4000"
      />
      <AssemblyButton class="assembly-button-component"
          :callback="openPopup"
          width="340px"
          height="70px"
          value="К покупкам"/>
      <AssemblyPopupWindow
          :isEmailSubmitted="isEmailSubmitted"
          @saveEmail="saveEmail"
          @closePopup="closePopup"
          v-if="isPopupShowed"
      />
    </div>
  </div>
</template>

<script>
import AssemblySlider from "@/components/slider/AssemblySlider";
import AssemblyButton from "@/components/buttons/AssemblyButton";
import AssemblyPopupWindow from "@/components/popup/AssemblyPopupWindow";

export default {
  name: 'App',
  components: {
    AssemblyButton,
    AssemblySlider,
    AssemblyPopupWindow,
  },
  data() {
    return {
        sliderData: [
        {id: 1, img: "pepliks.png", title: "Привезём точно по списку", text: "Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа."},
        {id: 2, img: "pepliks2.png", title: "Собираем быстро и эффективно", text: "Собираем быстро и эффективно Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки."},
        {id: 3, img: "pepliks3.png", title: "За свежесть и качество отвечаем", text: "За свежесть и качество отвечаем Выделены специальные зоны, в том числе холодная и морозильная."},
        {id: 4, img: "pepliks4.png", title: "Шампунь не положат рядом с рыбой", text: "Шампунь не положат рядом с рыбой Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара."},
        {id: 5, img: "pepliks5.png", title: "Довезём в сохранности даже яйца", text: "Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим."},
      ],
      isPopupShowed: false,
      isEmailSubmitted: false,
      user: {},
    }
  },
  methods: {
    openPopup() {
      this.isPopupShowed = true
    },
    closePopup() {
      this.isPopupShowed = false
    },
    showEmailError() {
      this.isErrorShowed = true
    },
    saveEmail(email)
    {
      this.user = {...this.user, email}
    }
  },
  props : {}
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
  width: 900px;
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

.assembly-header
{
  margin-top: 40px;
  font-family: RotondaC,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 46px;
  /* or 128% */
  text-align: center;
  color: #26303B;
}

.assembly-button-component
{
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
