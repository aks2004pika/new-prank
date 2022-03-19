const mainBlock = document.querySelector(".dynamicBlock");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const shadowBlock = document.querySelectorAll(".boxShadow");
const block1Yes = document.querySelector(".block1Btn2");
const block1No = document.querySelector(".block1Btn1");
const block2Yes = document.querySelector(".block2Btn2");
const block2No = document.querySelector(".block2Btn1");

const mainBlockAnims = [
  {
    animation: "mainBlockAnim1 4s ease-in-out .1s forwards",
  },
  {
    animation: "mainBlockAnim2 4s ease-in-out .1s forwards",
  },
  {
    animation: "mainBlockAnim3 4s ease-in-out .1s forwards",
  },
];

const shadowAnim = [
  {
    animation: "shadowAnim1 1.7s ease-out 1.1s forwards",
  },
  {
    animation: "shadowAnim2 1.7s ease-out 1.1s forwards",
  },
  {
    animation: "shadowAnim3 1.7s ease-out 1.1s forwards",
  },
];
const block1ToBlock2 = [
  {
    animation: "block1ToBlock2Anim1 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block1ToBlock2Anim2 1.6s ease-out 1.3s forwards",
  },
];

const block2ToBlock3 = [
  {
    animation: "block2ToBlock3Anim1 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block2ToBlock3Anim2 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block2ToBlock3Anim3 1.6s ease-out 1.3s forwards",
  },
];

const block3ToBlock4 = [
  {
    animation: "block3ToBlock4Anim1 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block3ToBlock4Anim2 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block3ToBlock4Anim3 1.6s ease-out 1.3s forwards",
  },
  {
    animation: "block3ToBlock4Anim4 1.6s ease-out 1.3s forwards",
  },
];

block1Yes.onclick = () => {
  Object.assign(mainBlock.style, mainBlockAnims[0]);
  Object.assign(block1.style, block1ToBlock2[0]);
  Object.assign(block2.style, block1ToBlock2[1]);
  Object.assign(shadowBlock[0].style, shadowAnim[0]);
  Object.assign(shadowBlock[1].style, shadowAnim[0]);
  Object.assign(shadowBlock[2].style, shadowAnim[0]);
  Object.assign(shadowBlock[3].style, shadowAnim[0]);

  setTimeout(that, 4000);

  function that() {
    block2.style.transform = "translateZ(60px)";
    block1.style.transform = "translateZ(10px)";
  }
};

const block2No1 = document.querySelector(".block2btn3");
const block2No2 = document.querySelector(".block2btn4");
const block2No3 = document.querySelector(".block2btn5");
const block2No4 = document.querySelector(".block2btn6");

block2No.onclick = () => {
  block2No.style.display = "none";
  block2No1.style.display = "flex";
};

block2No1.onclick = () => {
  block2No1.style.display = "none";
  block2No2.style.display = "flex";
};

block2No2.onclick = () => {
  block2No2.style.display = "none";
  block2No3.style.display = "flex";
};

block2No3.onclick = () => {
  block2No3.style.display = "none";
  block2No4.style.display = "flex";
};

block2No4.onclick = () => {
  block2No4.style.display = "none";
  block2No.style.display = "flex";
};

block2Yes.onclick = () => {
  Object.assign(mainBlock.style, mainBlockAnims[1]);
  Object.assign(block2.style, block2ToBlock3[0]);
  Object.assign(block1.style, block2ToBlock3[1]);
  Object.assign(block3.style, block2ToBlock3[2]);
  Object.assign(shadowBlock[0].style, shadowAnim[1]);
  Object.assign(shadowBlock[1].style, shadowAnim[1]);
  Object.assign(shadowBlock[2].style, shadowAnim[1]);
  Object.assign(shadowBlock[3].style, shadowAnim[1]);

  setTimeout(that2, 4000);

  function that2() {
    block3.style.transform = "translateZ(60px)";
    block2.style.transform = "translateZ(10px)";
    block1.style.transform = "translateZ(-40px)";
  }
};

const block3Yes = document.querySelectorAll(".block3Btn");

block3Yes[0].onclick = () => {
  Object.assign(mainBlock.style, mainBlockAnims[2]);
  Object.assign(block3.style, block3ToBlock4[0]);
  Object.assign(block2.style, block3ToBlock4[1]);
  Object.assign(block1.style, block3ToBlock4[2]);
  Object.assign(block4.style, block3ToBlock4[3]);
  Object.assign(shadowBlock[0].style, shadowAnim[2]);
  Object.assign(shadowBlock[1].style, shadowAnim[2]);
  Object.assign(shadowBlock[2].style, shadowAnim[2]);
  Object.assign(shadowBlock[3].style, shadowAnim[2]);
};

block3Yes[1].onclick = () => {
  Object.assign(mainBlock.style, mainBlockAnims[2]);
  Object.assign(block3.style, block3ToBlock4[0]);
  Object.assign(block2.style, block3ToBlock4[1]);
  Object.assign(block1.style, block3ToBlock4[2]);
  Object.assign(block4.style, block3ToBlock4[3]);
  Object.assign(shadowBlock[0].style, shadowAnim[2]);
  Object.assign(shadowBlock[1].style, shadowAnim[2]);
  Object.assign(shadowBlock[2].style, shadowAnim[2]);
  Object.assign(shadowBlock[3].style, shadowAnim[2]);
};

const hauntBlock = document.querySelector(".hauntBlock");
const block4Btn = document.querySelectorAll(".block4Btn");
const horrorVideo = document.querySelector(".horrorVideo");

block4Btn[0].onclick = () => {
  mainBlock.style.display = "none";
  hauntBlock.style.display = "flex";
  horrorVideo.play();
};

block4Btn[1].onclick = () => {
  mainBlock.style.display = "none";
  hauntBlock.style.display = "flex";
  horrorVideo.play();
};

const nextBtn = document.querySelector(".nextBtn");
const rickBlock = document.querySelector(".rickBlock");
const rickVideo = document.querySelector(".rickVideo");

nextBtn.onclick = () => {
  hauntBlock.style.display = "none";
  rickBlock.style.display = "flex";
  rickVideo.play();
  horrorVideo.pause();
};

const button = document.querySelector(".button");

button.onclick = () => {
  window.open("index.html");
  rickVideo.pause();
};
