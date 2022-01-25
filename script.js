/*
SELEÇÃO DE ELEMENTOS
    // Selecionando por ID
    const animais = document.getElementById('animais')
    //console.log("ID: ", animais)

    // Selecionando nulo
    const d = document.getElementById('nao-existe')
    //console.log("NULL: ", d)

    // Selecionando por classe
    const gridSection = document.getElementsByClassName('grid-section')
    // console.log(gridSection)
    // console.log(gridSection.length)
    // console.log(gridSection[0])

    // Selecionando por querySelector
    const primeiraLi = document.querySelector('ul').querySelector('li')
    console.log(primeiraLi)
*/

/* 
forEach
    const imgs = document.querySelectorAll('img')
    imgs.forEach(function(img, index){
        console.log(img)
        console.log(index)
    })
*/

const menu = document.querySelector('.menu')
console.log(menu.classList)
menu.classList.add('ativo')
console.log(menu.classList)
menu.classList.remove('ativo')
console.log(menu.classList)
console.log(menu.classList.contains('ativo'))