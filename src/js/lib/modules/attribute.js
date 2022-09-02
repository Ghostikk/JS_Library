import $ from '../core';

// получение атрибута
$.prototype.getAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) continue;
        return this[i].getAttribute(name);
    }
    return this;
};
// установка атрибута
$.prototype.setAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(name)) continue;
        this[i].setAttribute(name, value);
    }
    return this;
};
// удаление атрибута
$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) continue;
        this[i].removeAttribute(name);
    }
    return this;
};
// тогл атрибута
$.prototype.toggleAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].hasAttribute(name) ?
        this[i].removeAttribute(name) :
        this[i].setAttribute(name, value);
    }
    return this;
};