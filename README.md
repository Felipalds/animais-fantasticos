# Projeto do curso de Javascript Completo ES6+
## Seleção de elementos pelo DOM
1. document.getElementById('id_do_elemento')
2. document.getElementsByClassName('class_dos_elementos')
3. document.getElementsByTagName('class_dos_elementos')
- Nos casos por TAG e por CLASS, é retornado um HTMLCollection (dinâmico) de elementos;
- Nos casos por CLASS, caso seja passado mais que uma classe, será retornado elementos que possuam ambas;
- Caso o elemento selecionado não exista, será retornado <i>null</i>;
4. querySelector('.classe, #id, tag')
- É o mesmo selector para o CSS
- Podemos buscar dentro de outros elementos:
- const lista = document.querySelector('ul').querySelector('li')
5. querySelectorAll('.classe)
- Retorna uma NodeList (estático)
- Possui forEach

## Arrays front-end
1. HTMLCollection não é um array nem um NodeList, portanto não possui métodos como o forEach()
- Podemos transformar NodeList e HTMLCollection em Arrays puros: <i> Array.from(lista)

## forEach()
1. forEach é um método de arrays, que recebe sempre uma função de callback como parâmetro
- <i>array.forEach(function(item, index, array){})</i>

## Arrow Function
1. É um encurtamento das funções
- <i>(args) => {}</i>

## Manipulação de classes 
1. classList // DOMTokenList
2. className // string
3. classList.add('ativo', 'mobile') // adiciona classes
4. classList.remove('ativo')
5. classList.toggle('ativo') adiciona se não tiver, remove se tiver
6. classList.contains('ativo) // true or false
7. classList.replace('ativo', 'inativo')
8. attributes // NamedNodeList -> retorna uma lista de atributos que existem no objeto
9. getAttribute('src) // pega o valor do src
10. setAttribute('alt', 'Texto Alternativo')
11. removeAttribute('alt')
12. hasAttribute('alt')


