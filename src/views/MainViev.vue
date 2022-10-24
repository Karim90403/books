<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
interface Book {
  id: number;
  name?: string;
  isHovered?: boolean;
  isFolklor?: boolean;
  isBook: boolean;
  state?: string;
  preessed?: string;
}

let enabled = ref<boolean>(true)
let dragging = ref<boolean>(false)
let books = ref<Array<Book>>(
  [{ name: 'Русские народные сказки', isHovered: false, isFolklor: true, isBook: true, id: 1, state: " ", preessed: " " },
  { name: 'Русские народные песни', isHovered: false, isFolklor: true, isBook: true, id: 2, state: " ", preessed: " " },
  { name: 'Питер Пэн', isHovered: false, isFolklor: false, isBook: true, id: 3, state: " ", preessed: " " },
  { name: 'Пословицы и поговорки', isHovered: false, isFolklor: true, isBook: true, id: 4, state: " ", preessed: " " },
  { name: 'Что такое Родина?', isHovered: false, isFolklor: false, isBook: true, id: 5, state: " ", preessed: " " },
  { name: 'Рассказы о детях', isHovered: false, isFolklor: false, isBook: true, id: 6, state: " ", preessed: " " }]
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

let dropping = ref(false)

const moveBook = (e: any) => {
  if (e.added) {
    e.added.element.preessed = " "
    if(folklor.value.length > 6){
      let iter: any = 0;
      folklor.value.forEach(element => {
        iter += 1;
        if(!element.isBook && e.added.element.id == element.id) {
          folklor.value = [...folklor.value.slice(0, iter-1)  ,...folklor.value.slice(iter, folklor.value.length)]
        }
      });
    } else if(folklor.value.length < 6){
      folklor.value.push({ id: e.added.element.id , isBook: false })
      console.log(folklor.value)
    } 
    if (notFolklor.value.length > 6) {
      let iter: any = 0;
      notFolklor.value.forEach(element => {
        iter += 1;
        if(!element.isBook && e.added.element.id == element.id) {
          notFolklor.value = [...notFolklor.value.slice(0, iter-1)  ,...notFolklor.value.slice(iter, notFolklor.value.length)]
        }
      });
    }  else if (notFolklor.value.length < 6) {
      notFolklor.value.push({ id: e.added.element.id , isBook: false })
      console.log(folklor.value)

    }
  } else if (e.moved) {
    e.moved.element.preessed = " "
  } else if (e.remowed) {
    e.remowed.element.preessed = " "
  }
}

const check = () => {
  // pass
  folklor.value.forEach(element => {
    if(element.isBook) {
      if(element.isFolklor){
        element.state = "correct";
      } else {
        element.state = "incorrect";
      }
    }
  })

  notFolklor.value.forEach(element => {
    if(element.isBook) {
      if(!element.isFolklor){
        element.state = "correct";
      } else {
        element.state = "incorrect";
      }
    }
  })
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
    <VueDraggableNext :list="books" @change="moveBook"  handle=".handle" class="main__dragable" group="group">
      <div v-for="book in books" :key="book.id">
        <div class="dragable-item" :class="[`${book.state}`, `${book.preessed}` ]" @mousedown="book.preessed = 'pressed'" @mouseup="book.preessed = ' '" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
          <div v-if="book.isHovered" class="handle"><img src="../assets/VectordragDark.svg"></div>
          <div v-else class="handle"><img src="../assets/VectordragGray.svg"></div>
          <div class="book-image">
            <img :src="require(`../assets/Picbook${book.id}.png`)" v-bind:alt=book.name>
          </div>
        </div>
      </div>
    </VueDraggableNext>
    <div class="main__dropable">
      <VueDraggableNext :list="folklor" @change="moveBook"  handle=".handle" class="dropable folk_droppable" :sort="true"
        group="group">
        <div v-for="book in folklor" :key="book.id">
          <div v-if="book.isBook" class="dropable__zone--droped">
            <div class="dragable-item" :class="[`${book.state}`, `${book.preessed}` ]" @mousedown="book.preessed = 'pressed'" @mouseup="book.preessed = ' '" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
              <!-- <v-if book.state = "correct">correct</v-if>
              <v-if book.state = "incorrect">incorrect</v-if> -->
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
      <VueDraggableNext :list="notFolklor" @change="moveBook"  handle=".handle" class="dropable non_folk_droppable" group="group">
        <div v-for="book in notFolklor" :key="book.id">
          <div v-if="book.isBook" class="dropable__zone--droped">
            <div class="dragable-item" :class="[`${book.state}`, `${book.preessed}` ]" @mousedown="book.preessed = 'pressed'" @mouseup="book.preessed = ' '" @mouseover="book.isHovered = true" @mouseleave="book.isHovered = false">
              <!-- <div v-if="book.state === 'correct'">correct</div>  
              <div v-if="book.state === 'incorrect'">incorrect</div> -->
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

.correct{
  border-left: 2px solid #46B755;
}

.incorrect{
  border-left: 2px solid #F93232;
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