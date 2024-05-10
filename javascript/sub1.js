'use strict';

const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

let $red = get('.custmor .online');
let $green = get('.custmor .vistor');
let $yellow = get('.custmor .offline');
let $backImg = get('.sub1 img');
let $txtbox = getAll('.information ul');
let cnt = 0;

$red.addEventListener('click', (e) => {
    $backImg.setAttribute('src', 'images/content/sub1/custmor0.png');
    $txtbox.forEach((item, idx) => {
        item.classList.remove('on');
    });
    $txtbox[0].classList.add('on');
});

$green.addEventListener('click', (e) => {
    $backImg.setAttribute('src', 'images/content/sub1/custmor1.png');
    $txtbox.forEach((item, idx) => {
        item.classList.remove('on');
    });
    $txtbox[1].classList.add('on');
});

$yellow.addEventListener('click', (e) => {
    $backImg.setAttribute('src', 'images/content/sub1/custmor2.png');
    $txtbox.forEach((item, idx) => {
        item.classList.remove('on');
    });
    $txtbox[2].classList.add('on');
});
