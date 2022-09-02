import './lib/lib';
import $ from './lib/lib';


// TEST LIBLARY
// $('#first').on('click',() => {
//     $('button').eq(2).fadeOut(800);
// });
// $('[data-count="second"]').on('click',() => {
//     $('button').eq(2).fadeIn(800);
// });


// инициализация модального окна программно

// $("#trigger").click(() =>
//     $("#trigger").createModal({
//         text: {
//           title: "Генерация модального окна на лету!",
//           body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!",
//         },
//         btns: {
//             count:6,
//             settings: [
//                 ["Close", ["btn-danger", "mr-10"], true],
//                 ["Save changes", ["btn-success"], false,
//                     () => {alert("Данные сохранены")},
//                 ],
//                 ["Another btn", ["btn-warning", "ml-10"],false,
//                   () => {alert("Another alert")},
//                 ],
//                 ["Close", ["btn-danger", "ml-10"], true],
//                 ["Save changes", ["btn-success", "mt-10", "mr-10"], false,
//                     () => {alert("Данные сохранены")},
//                 ],
//                 ["Another btn", ["btn-warning", "mt-10"],false,
//                   () => {alert("Another alert")},
//                 ],
//             ],
//         },
//    })
// );

// GET POST запросы
// $().get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res => console.log(res));

//   $().post('https://jsonplaceholder.typicode.com/posts')
//       .then(res => console.log(res));


// слайдер на лету с генерацией HTML

// $('#example-carousel').createCarousel({
//       width: 850,
//       height: 450,
//       slides: [
//          {
//             src: "https://tushlar.ru/wp-content/uploads/2021/02/tushda-mashina-1.jpg",
//             alt: "white-car",
//          },
//          {
//             src: "https://img1.goodfon.ru/original/1280x720/6/a1/lamborghini-aventador-1634.jpg",
//             alt: "red-car",
//          },
//          {
//             src: "https://img2.goodfon.ru/original/1280x720/7/99/lamborghini-murcielago-5124.jpg",
//             alt: "yellow-car",
//          },
//       ],
//    })
//    .carousel();
