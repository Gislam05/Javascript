 'use strict';
        const texts = {
            text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
            text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
        };
        let navlinks = document.querySelectorAll(".nav-link");
        let active = document.querySelector(".active");
        let text = document.querySelector(".text");
        let i = 0;

       
        navlinks.forEach(function (link) {
            i++;
            link.setAttribute("id", "text" + i); //Сделаем для ссылок уникальные id, потому что сложно следить за ними исходя лишь из их содержимого. 
            //Пользуясь случаем, сделаем эти id в точности такими же, какие у нас свойства у объекта texts
            link.addEventListener('click', clickHandler);
        });
        /*
        1. Получите ссылку на .text, например с помощью querySelector
        2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
            2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
            обработчик клика функцию clickHandler.
        */


        /**
         * Обработчик клика по .nav-link
         * @param {MouseEvent} event
         */

        function clickHandler(event) {
            
            changeText(event);
            changeActiveClass(event);
            // здесь вызывайте changeText и changeActiveClass, и передавайте
            // им объект события.

        }

        /**
         * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
         * на тот, по которому кликнули.
         * @param {MouseEvent} event
         */
        function changeActiveClass(event) { //Если что, event будет ссылкой, на которую нажали
            active.classList.remove("active");
            active = event.target;
            active.classList.add("active");            
        }

        /**
        * Эта фукнция должна читать текст (например через textContent) из
        * .nav-link по которому кликнули и в зависимости от этого в .text
        * ставить соответствующий текст из texts.
        * @param {MouseEvent} event
        */
        function changeText(event) {
           
            text.textContent = texts[event.target.getAttribute("id")];
        }
