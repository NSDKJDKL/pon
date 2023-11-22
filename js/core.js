// Приветствие животного
var animal = "кошка";
alert("Приветствую, " + animal + "!");

// Запрос у пользователя о любви к животному
var loveAnimal = confirm("Вы любите " + animal + "?");
if (loveAnimal) {
    alert("Отлично! Мы тоже любим " + animal + "!");
} else {
    alert("Жаль, " + animal + " такое замечательное животное!");
}

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true, // Change this line to false disable auto-refreshing.
  }
})