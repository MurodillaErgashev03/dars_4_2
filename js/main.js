const elResult = document.querySelector("#result");
const elInput = document.querySelector("#age");
const elBtn = document.querySelector("#btn");



elBtn.addEventListener("click", function () {
  const a = elInput.value;
  const result = a / 3.6;
  let bolinma = result;
  let hour = Math.trunc(bolinma);
  let minut = (bolinma - hour);
  let abc = minut * 60;
  let secund = Math.trunc(abc);
  let sec = abc - secund;

  let abcd = sec * 60;

  let mm = Math.trunc(abcd);

  elResult.textContent = hour + "soat" + " " + secund + "minut" + " " + mm + "secund";

});


const elResult1 = document.querySelector("#result1");
elBtn.addEventListener("click", function () {
  const b = elInput.value
  const result1 = b / 20.1;

  let bolinma = result1;
  let hour = Math.trunc(bolinma);
  let minut = (bolinma - hour);
  let abc = minut * 60;
  let secund = Math.trunc(abc);
  let sec = abc - secund;

  let abcd = sec * 60;


  let mm = Math.trunc(abcd);



  elResult1.textContent = hour + "soat" + " " + secund + "minut" + " " + mm + "secund";

});



const elResult2 = document.querySelector("#result2");
elBtn.addEventListener("click", function () {
  const c = elInput.value
  const result2 = c / 70;

  let bolinma = result2;
  let hour = Math.trunc(bolinma);
  let minut = (bolinma - hour);
  let abc = minut * 60;
  let secund = Math.trunc(abc);
  let sec = abc - secund;

  let abcd = sec * 60;


  let mm = Math.trunc(abcd);


  elResult2.textContent = hour + "soat" + " " + secund + "minut" + " " + mm + "secund";

});




const elResult3 = document.querySelector("#result3");
elBtn.addEventListener("click", function () {
  const d = elInput.value
  const result3 = d / 800;


  let bolinma = result3;
  let hour = Math.trunc(bolinma);
  let minut = (bolinma - hour);
  let abc = minut * 60;
  let secund = Math.trunc(abc);
  let sec = abc - secund;

  let abcd = sec * 60;

  let mm = Math.trunc(abcd);


  elResult3.textContent = hour + "soat" + " " + secund + "minut" + " " + mm + "secund";


});



console.log(elInput);



