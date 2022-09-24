<script setup lang="ts">
  
  import { ref } from 'vue';
  let hovered = ref(false);
  let pressed = ref(true);
  let books = ref([
    { name: '', image: '', isHovered: false, isFolklor: true, id: 1},
    { name: '', image: '', isHovered: false, isFolklor: true, id: 2},
    { name: '', image: '', isHovered: false, isFolklor: false, id: 3},
    { name: '', image: '', isHovered: false, isFolklor: true, id: 4},
    { name: '', image: '', isHovered: false, isFolklor: false, id: 5},
    { name: '', image: '', isHovered: false, isFolklor: false, id: 6}
  ]);
  const press = () => {pressed.value = !pressed.value}
</script>
  

<template>
  <router-link to="/" class="back">
    <img src="../assets/arr.svg" class="arr">
    Назад
  </router-link>
  <div class="main__title">В мире книг</div>
  <div class="main__titles">
    <div class="dropable__title">Жанры фольклора</div>
    <div class="dropable__title">Не являются жанрами <p>фольклора</p></div>
  </div>
  <div class="main__wrapper" >
    <div class="main__dragable">
      <dragable v-model="books" handle=".handle" item-key="id">
        <div v-for="book in books" :key="book.id">
          <div class="dragable-item" @mouseover="hovered = true" @mouseleave="hovered = false">
            <div v-if="hovered" class="handle"><img src="../assets/VectordragDark.svg"></div>
            <div v-else class="handle"><img src="../assets/VectordragGray.svg"></div>
            <div class="book-image">
              <img src="../assets/Picbook1.png">
            </div>
          </div>
        </div>
      </dragable>
      <!-- <div class="dragable-item" @mouseover="hovered = true" @mouseleave="hovered = false">
        <div v-if="hovered"><img src="../assets/VectordragDark.svg"></div>
        <div v-else><img src="../assets/VectordragGray.svg"></div>
        <div class="book-image">
          <img src="../assets/Picbook2.png">
        </div>
      </div>
      <div class="dragable-item">
        <img src="../assets/VectordragGray.svg">
        <div class="book-image">
          <img src="../assets/Picbook3.png">
        </div>
      </div>
      <div class="dragable-item">
        <img src="../assets/VectordragGray.svg">
        <div class="book-image">
          <img src="../assets/Picbook4.png">
        </div>
      </div>
      <div class="dragable-item">
        <img src="../assets/VectordragGray.svg">
        <div class="book-image">
          <img src="../assets/Picbook5.png">
        </div>
      </div>
      <div class="dragable-item">
        <img src="../assets/VectordragGray.svg">
        <div class="book-image">
          <img src="../assets/Picbook6.png">
        </div>
      </div> -->
    </div>
    <div class="main__dropable">
      <div class="dropable">
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
      </div>
      <div class="dropable">
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
        <div class="dropable__zone"></div>
      </div>
    </div>
  </div>

  <div class="main__button">Проверить</div>

</template>

<script lang="ts">
  import draggable from "vuedraggable";
  export default {
        components: {
            draggable,
        },
        data() {
          return {
            drag: false,
          }
        }
</script>

<style lang="scss">
  $primaryColor: #8BD74B;
  $baseMargin: 57px;

  .back{
    color: $primaryColor;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    padding: 14px 3%;
    margin: 0;
    box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
    border-radius: 8px;
    text-decoration: none;

    img {
      margin-right: 8px;
    }
  }

  .arr{
    transform: rotate(180deg);
  }

  .main{
    &__titles{
      display: flex;
      justify-content: end;
    }

    &__title{
      color: #fff;
      font-size: 2.5em;
      display: flex;
      justify-content: center;
      padding: 40px;
      margin: 0 40px;
      background: linear-gradient(90deg, #3F8CFF 0.06%, #60B9A6 99.94%);
      box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
      border-radius: 24px;
      margin-bottom: 24px;
    }

    &__wrapper{
      display: flex;
    }

    &__button{
        display: flex;
        width: fit-content;
        background: $primaryColor;
        color: #fff;
        border-radius: 24px;
        padding: 0.5em 2.25em;
        font-weight: 500;
        font-size: 120%;
        line-height: 140%;
        margin-left: $baseMargin;
        margin-top: 36px;
        cursor: pointer;
        text-decoration: none;
      }

    &__dragable{
      width: 50%;
      height: fit-content;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 1em;
      padding-left: $baseMargin;

      .dragable-item{
        gap: 8px;
        isolation: isolate;
        width: 285px;
        height: 280px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
        border-radius: 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    &__dropable{
      width: 50%;
      display: flex;
    }
  }

  .book-image img{
      width: 163px;
    }

  .dropable{
      flex-direction: column;
      width: 100%;

      &__title{
        width: 25%;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
      }

      &__zone{
        background: #F2F2F2;
        width: 80%;
        margin-left: 10%;
        height: 280px;
        border: 1px dashed #B0B2C1;
        border-radius: 12px;
        margin-bottom: 10px;
      }
    }

    .pressed{
      border-left: 2px solid #0C6ED6;
    }
</style>