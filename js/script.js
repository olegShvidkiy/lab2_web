//3 разных карусели для адаптива. без этого на телефоне карусель и вообще вся страница ломается, поэтому я создал разметку для 3-х разных каруселей, которые адаптированы под разную ширину
//экрана и с помощью медиа запросов включаю display:block для соответствующей карусели. сответственно для каждой карусели пришлось отдельно сделать обработчик
//событий для того чтобы открывать и закрывать описание на каждой отдельной карточке. лучше ничего не придумал, простите =)

const carousel_1 = document.querySelector("#carousel-1");
const carousel_2 = document.querySelector("#carousel-2");
const carousel_3 = document.querySelector("#carousel-3");

const btns_1 = carousel_1.querySelectorAll(".btn");
const btns_2 = carousel_2.querySelectorAll(".btn");
const btns_3 = carousel_3.querySelectorAll(".btn");
const btns = [btns_1, btns_2, btns_3];

function changeHeight(item, id, check, btns) {
  item.parentElement.querySelector(".size").classList.toggle("open-size");
  item.parentElement.classList.toggle("open-body");
  if (check) {
    check--;
    check = changeHeight(btns[id], id, check, btns);
    return check;
  } else {
    check++;
    return check;
  }
}
let check1 = 0;
let id1;
carousel_1.addEventListener("click", (e) => {
  e.preventDefault();
  btns_1.forEach((item, i) => {
    if (e.target == item) {
      if (i == id1 && check1 == 1) {
        item.parentElement.querySelector(".size").classList.toggle("open-size");
        item.parentElement.classList.toggle("open-body");
        check1 = 0;
      } else {
        check1 = changeHeight(item, id1, check1, btns_1);
        id1 = i;
      }
    }
  });
});
let check2 = 0;
let id2;
carousel_2.addEventListener("click", (e) => {
  btns_2.forEach((item, i) => {
    if (e.target == item) {
      if (i == id2 && check2 == 1) {
        item.parentElement.querySelector(".size").classList.toggle("open-size");
        item.parentElement.classList.toggle("open-body");
        check2 = 0;
      } else {
        check2 = changeHeight(item, id2, check2, btns_2);
        id2 = i;
      }
    }
  });
});
let check3 = 0;
let id3 = 0;
carousel_3.addEventListener("click", (e) => {
  btns_3.forEach((item, i) => {
    if (e.target == item) {
      if (i == id3 && check3 == 1) {
        item.parentElement.querySelector(".size").classList.toggle("open-size");
        item.parentElement.classList.toggle("open-body");
        check3 = 0;
      } else {
        check3 = changeHeight(item, id3, check3, btns_3);
        id3 = i;
      }
    }
  });
});
// -------------
const audioButton = document.querySelectorAll(".poll-audio");
const audio = [
  new Audio("../golosovanie.mp3"),
  new Audio("../golosovanie2.mp3"),
  new Audio("../golosovanie3.mp3"),
];
id = 0;
audioButton[0].addEventListener("click", () => {
  audio[id].pause();
  id = Math.floor(Math.random() * audio.length);
  audio[id].volume = 0.05;
  audio[id].currentTime = 0;
  audio[id].play();
});
audioButton[1].addEventListener("click", () => {
  audio[id].pause();
});

// let arr = new Array(7);
// for (let i = 0; i < 7; i++) {
//   arr[i] = new Array(7);
//   //   for (let j = 0; j < 7; j++) {
//   //     arr[i][j] = i * 7 + j;
//   //   }
// }

// for (let i = 0; i < 7; i++) {
//   for (let j = 0; j < i; j++) {
//     arr[i - j][j] = j;
//   }
// }
// console.log(arr);
document.querySelector(".poll-list").addEventListener("click", (e) => {
  if (e.target.parentNode.tagName === "LI") {
    e.target.parentNode.querySelector(".poll-votepart-part").innerHtml =
      "width:50%";
  }
});
