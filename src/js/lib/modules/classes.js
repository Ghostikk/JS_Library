import $ from '../core';

// Из-за неизвесного числа операторов добавляем спред оператор в аргумент функции
$.prototype.addClass = function (...classNames) {
    if(classNames) {
        for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
        }
    } else console.log(`Ошибка!Нeвозможно добавить класс "${classNames}" к выбранному селектору`);
    
    return this;
};


// удаление класса
$.prototype.removeClass = function (...classNames) {

    for (let i = 0; i < this.length; i++) {
        if(!classNames) continue;
        this[i].classList.remove(...classNames);
    }
    
    return this;
};


// Проверка класса, если есть - убрать, если нет - добавить
$.prototype.toggleClass = function (classNames) {

     for (let i = 0; i < this.length; i++) {
        if (!classNames) continue;
        this[i].classList.contains(classNames) ?
        this[i].classList.remove(classNames) :
        this[i].classList.add(classNames);
    }
    
    return this;
};
