import { _ } from 'core-js';
import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, finaly) {
  // старт анимации
    let timeStart = null;
  // техническая функция 
    function _animateOverTime(time) {
      
        if(!timeStart) {timeStart = time;}
        // длительность анимации
        let timeElapsade = time - timeStart,
        // изминение параметра от 0 до 1
            complection = Math.min(timeElapsade / duration, 1);

        callback(complection);

        if(timeElapsade < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
              if(typeof finaly === 'function') 
              {
                 finaly();  
              }
        }
    }

    return _animateOverTime;
}

$.prototype.fadeIn = function(duration, display, finaly) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const animation = this.animateOverTime(duration, _fadeIn, finaly);
        requestAnimationFrame(animation);
    }

    return this;
};

$.prototype.fadeOut = function(duration, finaly) {
    for (let i = 0; i < this.length; i++) {
        
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const animation = this.animateOverTime(duration, _fadeOut, finaly);
        requestAnimationFrame(animation);
    }

    return this;
};

$.prototype.fadeToggle = function(duration, display, finaly) {
    for (let i = 0; i < this.length; i++) {
      //getComputedStyle получение текущих отрисованных стилей
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
    
            const animation = this.animateOverTime(duration, _fadeIn, finaly);
            requestAnimationFrame(animation);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };
    
            const animation = this.animateOverTime(duration, _fadeOut, finaly);
            requestAnimationFrame(animation);
        }
    }

    return this;
};