
import $ from '../core';


$.prototype.html = function(content) {

    for (let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        } else return this[i].innerHTML;
    }

    return this;
};
// выбор определенного элемента
$.prototype.eq = function(i) {

    const swap = this[i];
    const objLength = Object.keys(this).length;
    // найдем количество св-в в искомом элементе
    for (let i = 0; i < objLength; i++) {
      // полностью очищаем объект
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};


// возвращает индекс элемента по порядку с общим родителем
$.prototype.index = function() {
    // получаем родителя
    const parent = this[0].parentNode;
    // получаем детей через спред оператора (преобразуем html коллекция в массив)
    const childs = [...parent.children];
    // возвращает элемент который равен this[0]
    const findMyIndex = item => {return item == this[0]};
    // если  findMyIndex вернет true, то childs.findIndex() вернет номер элемента
    return childs.findIndex(findMyIndex);
};

// возвращает элемент с определенным селектором
$.prototype.find = function (selector) {
    let items = [];
 
    for (let i = 0; i < this.length; i++) {
        let arr = this[i].querySelectorAll(selector);
        items.push(...arr);
        delete this[i];
    }
 
    Object.assign(this, items);
    this.length = items.length;
 
    return this;
};

$.prototype.closest = function(selector) {

    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;

    // Проверим полученные значения объекта на пустоту
    Object.values(this).forEach(function(value) {
        if(value === null || value === undefined) {
            return console.log(`Селектор ${selector} несуществует!`);
            
        }
    });
    
    for (; counter < objLength; counter++) {
        delete this[counter];
    };

    return this;
};

$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};