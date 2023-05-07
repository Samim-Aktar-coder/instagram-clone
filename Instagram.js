

// //!============= PAUSE VIDEO =================

// const videoBoxes = document.querySelectorAll('.video__box');

// videoBoxes.forEach(videoBox => {
//     const video = videoBox.querySelector('.video');
//     const pauseLogo = videoBox.querySelector('.pause__logo');
//     videoBox.addEventListener('click', () => {
//         if (videoBox.classList.contains('pause')) {
//             video.play();
//             videoBox.classList.remove('pause');
//             pauseLogo.classList.add('display-none');
//         } else {
//             video.pause();
//             videoBox.classList.add('pause');
//             pauseLogo.classList.remove('display-none');
//         }
//     });
// });


// //!============= MUTE ALL VIDEOS SIMULTANEOUSLY =================

// const volumeBtns = document.querySelectorAll('.volume__btn');
// const videos = document.querySelectorAll('.video');


// videos.forEach(video => {
//     video.muted = true;
// });

// volumeBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         if (btn.classList.contains('mute')) {
//             videos.forEach(video => {
//                 video.muted = false;
//             });
//             volumeBtns.forEach(btn => {
//                 const volumeLogo = btn.querySelector('i');
//                 btn.classList.remove('mute');
//                 volumeLogo.classList.replace('bxs-volume-mute', 'bxs-volume-full');
//             });
//         } else {
//             videos.forEach(video => {
//                 video.muted = true;
//             });
//             volumeBtns.forEach(btn => {
//                 const volumeLogo = btn.querySelector('i');
//                 btn.classList.add('mute');
//                 volumeLogo.classList.replace('bxs-volume-full', 'bxs-volume-mute');
//             });
//         }
//     });
// });


// //!============= PLAY VIDEO WITH SCROLL =================

// window.addEventListener('scroll', () => {
//     const pageY = window.pageYOffset;

//     videoBoxes.forEach(videoBox => {

//         const video = videoBox.querySelector('.video');
//         const videoBoxTop = videoBox.offsetTop - 200;
//         const videoBoxHeight = videoBox.offsetHeight;
//         const pauseLogo = videoBox.querySelector('.pause__logo');

//         if (!pauseLogo.classList.contains('display-none')) {
//             return;
//         } else if (pageY > videoBoxTop && pageY <= videoBoxTop + videoBoxHeight) {
//             video.play();
//         }
//         else {
//             video.pause();
//         }
//     });
// });


// //!============= LIKES & SAVE FUCTION =================

// const allLikes = document.querySelectorAll('.like');
// const allSaves = document.querySelectorAll('.save');


// allLikes.forEach(like => {
//     like.addEventListener('click', () => {
//         if (like.classList.contains('fill')) {
//             like.classList.remove('fill');
//             like.classList.replace('bi-heart-fill', 'bi-heart');
//         } else {
//             like.classList.add('fill');
//             like.classList.replace('bi-heart', 'bi-heart-fill');
//         }
//     });
// });

// allSaves.forEach(save => {
//     save.addEventListener('click', () => {
//         if (save.classList.contains('fill')) {
//             save.classList.remove('fill');
//             save.classList.replace('bi-bookmark-fill', 'bi-bookmark');
//         } else {
//             save.classList.add('fill');
//             save.classList.replace('bi-bookmark', 'bi-bookmark-fill');
//         }
//     });
// });


// //!============= MORE MODAL FUCTION =================

// const moreBtn = document.querySelector('.more__btn');
// const moreModal = document.querySelector('.more__modal');



// moreBtn.addEventListener('click', () => {
//     if (!moreModal.classList.contains('modal-show')) {
//         moreModal.classList.add('modal-show');
//         moreBtn.classList.add('more-active');
//         darkModal.classList.remove('dark-show');
//     } else {
//         moreModal.classList.remove('modal-show');
//         moreBtn.classList.remove('more-active');
//         darkModal.classList.remove('dark-show');
//     }
// });



// //!============= DARKT THEME & DARK LOGO =================

// const darkBtn = document.querySelector('.dark__button');
// const darkCircle = document.querySelector('.circle');
// const logoImg1 = document.querySelector('.logo__img1');
// const logoImg2 = document.querySelector('.logo__img2');
// const instaLogo1 = document.querySelector('.insta-logo-1');
// const instaLogo2 = document.querySelector('.insta-logo-2');

// darkBtn.addEventListener('click', () => {
//     if (darkBtn.classList.contains('active')) {
//         document.body.classList.remove('dark-theme');
//         darkBtn.classList.remove('active');
//         darkCircle.classList.replace('right', 'left');
//         logoImg1.classList.remove('img-hide');
//         logoImg2.classList.add('img-hide');
//         instaLogo1.classList.remove('img-hide');
//         instaLogo2.classList.add('img-hide');
//     } else {
//         document.body.classList.add('dark-theme');
//         darkBtn.classList.add('active');
//         darkCircle.classList.replace('left', 'right');
//         logoImg1.classList.add('img-hide');
//         logoImg2.classList.remove('img-hide');
//         instaLogo1.classList.add('img-hide');
//         instaLogo2.classList.remove('img-hide');
//     }
// });




// //!============= DARK BUTTON MODAL =================

// const themeBtn = document.querySelector('.theme-btn');
// const darkModal = document.querySelector('.dark__modal');

// themeBtn.addEventListener('click', () => {
//     if (darkModal.classList.contains('dark-show')) {
//         darkModal.classList.remove('dark-show');
//     } else {
//         moreModal.classList.remove('modal-show');
//         darkModal.classList.add('dark-show');
//     }
// });

