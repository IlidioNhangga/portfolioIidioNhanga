let menuAbrir = document.querySelector('.menuAbrir');
let menuFexar = document.querySelector('.menuFexar');
let menuLateral = document.querySelector('.menuLateral');
let trocar = document.querySelector('.trocar');
let fonteficando = document.querySelector('.fonteficando');
let baixarCurriculo = document.querySelector('.baixarCurriculo');
let baixarCurriculo1 = document.querySelector('.baixarCurriculo1');

const slider = document.querySelectorAll('.slide');
const prev1 = document.querySelector('#prev');
const next1 = document.querySelector('#next');
let correntSlide = 0;

const slider1 = document.querySelectorAll('.slide1');
const prev11 = document.querySelector('#prev1');
const next11 = document.querySelector('#next1');
let correntSlide1 = 0;

window.addEventListener("scroll", () => {
    let containerCabecalho = document.querySelector(".containerCabecalho");
    fonteficando.classList.toggle('fontificar', window.scrollY > 0);
    containerCabecalho.classList.toggle('suavizar', window.scrollY > 0);
});

baixarCurriculo.addEventListener('click', function () {
    window.open('../pdf/curriculoNhanga.pdf', '_blank');
});

baixarCurriculo1.addEventListener('click', function () {
    window.open('../pdf/curriculoNhanga.pdf', '_blank');
});


menuAbrir.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
    menuAbrir.classList.toggle('menuAbrirFexar');
    menuFexar.classList.toggle('menuFexarAbrir');
});

menuFexar.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
    menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
});

/**/
function hedSlide() {
    slider.forEach(item => item.classList.remove('ligado'))
}
function showSlide(){
    slider[correntSlide].classList.add('ligado')
}
function nextSlider(){
    hedSlide()
    if(correntSlide==slider.length-1){
        correntSlide = 0
    }
    else{
        correntSlide++
    }
    showSlide();
}
function prevSlider(){
    hedSlide();
    if(correntSlide == 0){

        correntSlide=slider.length-1;
    }
    else{
        correntSlide--;
    }
    showSlide();
}


next1.addEventListener('click', nextSlider);
prev1.addEventListener('click', nextSlider);
/**/
function hedSlide1() {
    slider1.forEach(item => item.classList.remove('ligado1'))
}
function showSlide1(){
    slider1[correntSlide1].classList.add('ligado1')
}
function nextSlider1(){
    hedSlide1()
    if(correntSlide1==slider1.length-1){
        correntSlide1 = 0
    }
    else{
        correntSlide1++
    }
    showSlide1();
}
function prevSlider1(){
    hedSlide1();
    if(correntSlide1 == 0){

        correntSlide1=slider1.length-1;
    }
    else{
        correntSlide1--;
    }
    showSlide1();
}


next11.addEventListener('click', nextSlider1);
prev11.addEventListener('click', nextSlider1);
/**/
  let menuClose1 = document.querySelector('.menuClose1');
  let menuClose2 = document.querySelector('.menuClose2');
  let menuClose3 = document.querySelector('.menuClose3');
  let menuClose4 = document.querySelector('.menuClose4');

  /**/
  menuClose1.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
        menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
  });
  
  menuClose2.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
        menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
  });
  menuClose3.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
        menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
  });
  
  menuClose4.addEventListener('click', function () {
    menuLateral.classList.toggle('menuLateralMostrar');
        menuFexar.classList.toggle('menuFexarAbrir');
    menuAbrir.classList.toggle('menuAbrirFexar');
  });

  /**/