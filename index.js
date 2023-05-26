"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
//1 способ:
window.addEventListener('load', () => {
    console.log('Страница загрузилась (способ 1) ');
});
//2 способ:
window.onload = () => {
    console.log('Страница загрузилась (способ 2)');
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
const bodyElem = document.querySelector('body');
bodyElem.addEventListener('click', () => {
    let targetTag = event.target;
    let targetTagName = targetTag.tagName.toLowerCase();

    if (targetTag.className == 'super_element') {
        console.log(`Класс "super_element" присутствует в элементе "${targetTagName}"`);
    }
    else {
        console.log(`Класса "super_element" в элементе "${targetTagName}" нет`);
    }
})

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
const hoverTextarea = document.querySelector('textarea');
hoverTextarea.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea');
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
const ulElem = document.querySelector('ul');
ulElem.addEventListener('click', () => {
    let targetTagInUlElem = event.target;
    let ulInnerElemTagName = targetTagInUlElem.tagName.toLowerCase();
    if (ulInnerElemTagName == 'button') {
        console.log(targetTagInUlElem.textContent);
    }
})

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
//Оба события происходят одновременно, но целевой тег согласно п.3 находится последовательно при движении по DOM - дереву по цепочке body-ul-li-button, а целевой тег согласно п.5 - по цепочке ul-li-button, которая короче, поэтому сначала выполнфется действие согласно п.5, а потом уже согласно п.3.
// А теперь, внимание, - правильный ответ:)
//При клике на кнопку внутри элемента ul, обработчик события клика ulElem.addEventListener('click', ...), выполняется первым, а затем выполняется обработчик события клика bodyElem.addEventListener('click', ...). Это происходит потому, что события обрабатываются в порядке всплытия (bubbling). Событие сначала срабатывает на кнопке, затем на элементе li, далее на элементе ul и, наконец, на элементе body. Поэтому сначала выводится сообщение из 5 задания, а затем сообщение из 3 задания.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
const evenLiElem = document.querySelectorAll('li:nth-child(even)');
evenLiElem.forEach(elem => elem.style.backgroundColor = '#e7e3e3');