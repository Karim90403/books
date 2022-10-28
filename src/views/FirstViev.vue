<template>
    <span class="title">В мире книг</span>
    <div class="instruction">
        <span class="instruction__title">Инструкция:</span>
        <span class="instruction__text">Распредели книги, ориентируясь на названия, 
            по соответствующим рубрикам таблицы: «Жанры фольклора», «Не являются жанрами фольклора».</span>
    </div>
    <router-link to="/main" class="instruction__button">Продолжить</router-link>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
$baseMargin: 15%;
$mainColor: #183B59;
$primaryColor: #8BD74B;
#app {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.title {
  font-family: 'Inter';
  font-style: normal;
  margin-top: 60px;
  margin-left: $baseMargin;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  color: $primaryColor;
}
 .instruction{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px 36px;
  margin-top: 36px;
  margin-left: $baseMargin;
  gap: 10px;
  width: 65%;
  height: 100px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 20px 20px;
  border-top: $primaryColor solid;
  &__title{
    font-weight: 700;
    font-size: 140%;
    line-height: 30px;
    color: $mainColor;
  }
  &__text{
    font-weight: 500;
    font-size: 120%;
    line-height: 140%;
    color: $mainColor;
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
 }
</style>