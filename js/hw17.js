//1
const inputEl = document.querySelector(".textinput");
const btnEl = document.querySelector(".btn");


//2
const imageEl = document.querySelector(".image");
imageEl.src = "./img/2.jpg";

//3
const linkEl = document.querySelector(".link");
linkEl.href = "https://www.bing.com/";

const photoEl = document.querySelector(".photo");
photoEl.alt = "Ліс";
photoEl.src = "./img/4.jpg";

//4
const listEl = document.querySelector(".list");
const firstItem = listEl.firstElementChild;
firstItem.textContent = "Новий перший елемент";