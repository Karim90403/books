<!-- 
<script lang="ts">
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
interface Book {
  id: number;
  name: string;
  isHovered: boolean;
  isFolklor: boolean;
  isBook: boolean;
}

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      books: [{ name: 'Русские народные сказки', isHovered: false, isFolklor: true, isBook: true, id: 1 },
      { name: 'Русские народные песни', isHovered: false, isFolklor: true, isBook: true, id: 2 },
      { name: 'Питер Пэн', isHovered: false, isFolklor: false, isBook: true, id: 3 },
      { name: 'Пословицы и поговорки', isHovered: false, isFolklor: true, isBook: true, id: 4 },
      { name: 'Что такое Родина?', isHovered: false, isFolklor: false, isBook: true, id: 5 },
      { name: 'Рассказы о детях', isHovered: false, isFolklor: false, isBook: true, id: 6 }] ,
      folklor: [
        { id: 1, isBook: false },
        { id: 2, isBook: false },
        { id: 3, isBook: false },
        { id: 4, isBook: false },
        { id: 5, isBook: false },
        { id: 6, isBook: false },
      ] as Array<Book>,
      notFolklor: [
        { id: 1, isBook: false },
        { id: 2, isBook: false },
        { id: 3, isBook: false },
        { id: 4, isBook: false },
        { id: 5, isBook: false },
        { id: 6, isBook: false }
      ] as Array<Book>,

    }
  },
  methods: {
    check() {
      // Pass
    },
    addFolk() {
      this.folklor.pop()
    },
    addNonFolk() {
      this.notFolklor.pop()
    },
  },
})
</script> -->


<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
interface Book {
  id: number;
  name: string;
  isHovered: boolean;
  isFolklor: boolean;
  isBook: boolean;
}

let enabled = ref<boolean>(true)
let dragging = ref<boolean>(false)
let books = ref<Array<Book>>(
  [{ name: 'Русские народные сказки', isHovered: false, isFolklor: true, isBook: true, id: 1 },
  { name: 'Русские народные песни', isHovered: false, isFolklor: true, isBook: true, id: 2 },
  { name: 'Питер Пэн', isHovered: false, isFolklor: false, isBook: true, id: 3 },
  { name: 'Пословицы и поговорки', isHovered: false, isFolklor: true, isBook: true, id: 4 },
  { name: 'Что такое Родина?', isHovered: false, isFolklor: false, isBook: true, id: 5 },
  { name: 'Рассказы о детях', isHovered: false, isFolklor: false, isBook: true, id: 6 }]
)
let folklor = ref<Array<Book>>([
  { id: 1, isBook: false },
  { id: 2, isBook: false },
  { id: 3, isBook: false },
  { id: 4, isBook: false },
  { id: 5, isBook: false },
  { id: 6, isBook: false },
] as Array<Book>,
)
let notFolklor = ref<Array<Book>>([
  { id: 1, isBook: false },
  { id: 2, isBook: false },
  { id: 3, isBook: false },
  { id: 4, isBook: false },
  { id: 5, isBook: false },
  { id: 6, isBook: false },
] as Array<Book>,
)

// const folkFillingSync = ((itemIndex) => {
//   let flag = true
//   folklor.value.forEach((item: Book, index: number) => {
//     if (!(item.isBook && index <= folklor.value.length - 1)) {
//       flag = false;
//       return;
//     }
//   });
//   return flag
// })

const check = () => {
  // Pass
}
const addFolk = (e: any) => {
  console.log(e);
  console.log(e.to.className);
  if (e.to.className.includes("non_folk_droppable")) {
    return
    // check if not book and pop else return false
  } else if (e.to.className.includes("folk_droppable")) {
    // check if not book and pop else return false
  }
  else { return false }
}
const addNonFolk = () => {
  notFolklor.value.pop()
}
</script>


<template>
  <router-link to="/" class="back">
    <img src="../assets/arr.svg" class="arr">
    Назад
  </router-link>
  <div class="main__title">В мире книг</div>
  <div class="main__titles">
    <div class="dropable__title">Жанры фольклора</div>
    <div class="dropable__title">Не являются жанрами <p>фольклора</p>
    </div>
  </div>
  <div class="main__wrapper">
    <VueDraggableNext :move="addFolk" :list="books" handle=".handle" class="main__dragable" group="group">
      <div v-for="book in books" :key="book.id">
        <div class="dragable-item" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
          <div v-if="book.isHovered" class="handle"><img src="../assets/VectordragDark.svg"></div>
          <div v-else class="handle"><img src="../assets/VectordragGray.svg"></div>
          <div class="book-image">
            <img :src="require(`../assets/Picbook${book.id}.png`)" v-bind:alt=book.name>
          </div>
        </div>
      </div>
      <!-- <div>{{books}}</div>
      <div>{{folklor}}</div>
      <div>{{notFolklor}}</div> -->
    </VueDraggableNext>
    <div class="main__dropable">
      <VueDraggableNext v-model="folklor" :move="addFolk" handle=".handle" class="dropable folk_droppable" :sort="true"
        group="group">
        <div v-for="book in folklor" :key="book.id">
          <div v-if="book.isBook" class="dropable__zone--droped">
            <div class="dragable-item" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
              <div v-if="book.isHovered" class="handle"><img src="../assets/VectordragDark.svg"></div>
              <div v-else class="handle"><img src="../assets/VectordragGray.svg"></div>
              <div class="book-image">
                <img :src="require(`../assets/Picbook${book.id}.png`)" v-bind:alt=book.name>
              </div>
            </div>
          </div>
          <div v-else class="dropable__zone"></div>
        </div>
      </VueDraggableNext>
      <VueDraggableNext :list="notFolklor" @add="addNonFolk" handle=".handle" class="dropable non_folk_droppable"
        group="group">
        <div v-for="book in notFolklor" :key="book.id">
          <div v-if="book.isBook" class="dropable__zone--droped">
            <div class="dragable-item" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
              <div v-if="book.isHovered" class="handle"><img src="../assets/VectordragDark.svg"></div>
              <div v-else class="handle"><img src="../assets/VectordragGray.svg"></div>
              <div class="book-image">
                <img :src="require(`../assets/Picbook${book.id}.png`)" v-bind:alt=book.name>
              </div>
            </div>
          </div>
          <div v-else class="dropable__zone"></div>
        </div>
      </VueDraggableNext>
    </div>
  </div>

  <div class="main__button" @click="check">Проверить</div>

</template>

<style lang="scss">
$primaryColor: #8BD74B;
$baseMargin: 57px;

.back {
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

.arr {
  transform: rotate(180deg);
}

.main {
  &__titles {
    display: flex;
    justify-content: end;
    padding-right: 0%;
  }

  &__title {
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

  &__wrapper {
    display: flex;
  }

  &__button {
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

  &__dragable {
    width: 50%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
    padding-left: $baseMargin;

    .dragable-item {
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

  &__dropable {
    width: 50%;
    display: flex;
  }
}

.book-image img {
  width: 163px;
}

.dropable {
  flex-direction: column;
  width: 100%;

  &__title {
    width: 25%;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

  &__zone {
    background: #F2F2F2;
    width: 80%;
    margin-left: 10%;
    height: 280px;
    border: 1px dashed #B0B2C1;
    border-radius: 12px;
    margin-bottom: 10px;
  }

  &__zone--droped {
    margin-left: 10%;
    border-radius: 12px;
    margin-bottom: 10px;

    .dragable-item {

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
}

.pressed {
  border-left: 2px solid #0C6ED6;
}
</style> 