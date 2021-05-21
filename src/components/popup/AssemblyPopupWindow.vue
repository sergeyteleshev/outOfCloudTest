<template>
  <div class="assembly-popup-wrapper">
    <div class="assembly-popup-window">
      <div class="assembly-popup-window__close"><span @click="closePopup" class="assembly-popup-close">X</span></div>
      <h3 class="assembly-popup-window__title">Чтобы продолжить покупки необходимо авторизоваться</h3>
      <input v-if="!isEmailSubmitted" class="assembly-popup-window__email" placeholder="Введите ваш e-mail">
      <button v-if="!isEmailSubmitted" @click="submitEmailAuth" class="assembly-popup-window__submit">Отправить</button>
      <div v-if="!isEmailSubmitted" class="assembly-popup-window__error">{{isErrorShowed ? errorMessage : null}}</div>
      <div v-if="isEmailSubmitted" class="assembly-popup-window__submitted">Спасибо!</div>
      <AssemblyLoader v-if="isEmailLoading" class="assembly-popup-window__loader" :src="require('../../assets/img/loader.gif')" :width="30" :height="30"/>
    </div>
  </div>
</template>

<script>

import {isEmailValid} from "@/helpers/email";
import AssemblyLoader from "@/components/AssemblyLoader";
import {myFetch} from "@/helpers/fetch";

export default {
  name: "AssemblyPopupWindow",
  components: {AssemblyLoader},
  props: {
    isShowed: {
      type: Boolean,
      default: false,
    },
    isEmailSubmitted: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      errorMessage: "Неверный формат email. Пример: example@yandex.ru",
      isErrorShowed: false,
      isEmailLoading: false,
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    showEmailError() {
      this.isErrorShowed = true
    },
    hideEmailError() {
      this.isErrorShowed = false
    },
    submitEmailSuccess(email) {
      this.isEmailSubmitted = true
      this.$emit('saveEmail', email)
    },
    async submitEmailAuth() {
      const email = document.getElementsByClassName('assembly-popup-window__email')[0].value
      const isEmailVal = isEmailValid(email)

      if(isEmailVal) {
        this.hideEmailError()
        this.isEmailLoading = true
        console.log(`${email} провалидирован и готов к отправке на сервер`)

        const url = window.location.href
        const res = await myFetch(url, email)
        this.isEmailLoading = false

        if(res) {
          console.log(res)
          this.submitEmailSuccess(res)
        }
      }
      else {
        console.log(`Упс! Невалидный email`)
        this.showEmailError()
      }
    }
  },
}
</script>

<style scoped>
.assembly-popup-wrapper
{
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,0.5);
}

.assembly-popup-window
{
  background: white;
  padding: 30px;
  width: 400px;
  border-radius: 15px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
}

.assembly-popup-window__email
{
  margin-top: 20px;
  padding: 11px 15px;
  font-family: 'RotondaC', serif;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: .05px;
  color: #043e44;
  border: 1px solid #dfdfdf;
  border-radius: 6px;
}

.assembly-popup-window__submit
{
  margin-top: 20px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  border: none;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  font-family: 'RotondaC', serif;
  letter-spacing: 0.1em;
  height: 50px;
  background: linear-gradient(0deg, #7DB945, #7DB945),
  linear-gradient(0deg, #7DB945, #7DB945);
}

.assembly-popup-window__submit:hover
{
  background: linear-gradient(0deg, #7DC945, #7DC945),
  linear-gradient(0deg, #7DC945, #7DC945);
}

.assembly-popup-window__title
{
  margin-top: 10px;
  font-family: RotondaC, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  /* or 128% */
  text-align: center;
  color: #26303B;
}

.assembly-popup-window__close
{
  text-align: right;
  font-family: RotondaC, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  /* or 128% */
  color: #26303B;
}

.assembly-popup-close:hover
{
  cursor: pointer;
}

.assembly-popup-window__error
{
  margin-top: 16px;
  color: rgb(222, 7, 20);
  text-align: center;
  font-family: 'RotondaC', serif;
}

.assembly-popup-window__submitted
{
  margin-top: 16px;
  color: #7DB945;
  font-size: 24px;
  text-align: center;
  font-family: 'RotondaC', serif;
}

.assembly-popup-window__loader
{
  margin: 0 auto;
}
</style>