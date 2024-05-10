'use strict';
const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

let itemArr = [
    {
        id: 0,
        title: '캠핑캠페인, 우리 캠핑할까요 by곰진이TV',
        time: '2023년 12월 23일',
        big: 'images/content/sub4/sub4big0.jpg',
        thum: 'images/content/sub4/sub4thum0.jpg',
    },
    {
        id: 1,
        title: '캠핑장 일회용기 사용은 NO...SK텔레콤 다회용기 캠페인',
        time: '2014년 1월 3일',
        big: 'images/content/sub4/sub4big1.jpg',
        thum: 'images/content/sub4/sub4thum1.jpg',
    },
    {
        id: 2,
        title: '한국관광공사, 캠핑안전캠페인 진행',
        time: '2020년 8월 13일',
        big: 'images/content/sub4/sub4big2.jpg',
        thum: 'images/content/sub4/sub4thum2.jpg',
    },
    {
        id: 3,
        title: '"투명 패트병, 캠핑의자로 재탄생" 원더플 캠페인 ',
        time: '2008년 3월 17일',
        big: 'images/content/sub4/sub4big3.jpg',
        thum: 'images/content/sub4/sub4thum3.jpg',
    },
    {
        id: 4,
        title: '여름철 불법 야영장 집중단속, 안전캠핑캠페인',
        time: '2021년 7월 31일',
        big: 'images/content/sub4/sub4big4.jpg',
        thum: 'images/content/sub4/sub4thum4.jpg',
    },
];

let $mainImg = get('.sub4 article img');
let $h2 = get('.sub4 article h2');

let $ul = get('.sub4 .list');
// let li = document.createElement('li');
let $p = get('.sub4 .list li .txtbox p');

let cnt = 0,
    timer = '',
    interval = 3000,
    size = itemArr.length,
    imgurl = '',
    output = '';

itemArr.forEach((item, idx) => {
    output += `<li>
        <div class="txtbox">
        <strong>${item.title}</strong>
        <p class="time">${item.time}</p></div>
        <div class="imgbox">
        <img src=${item.thum} alt="서브사진" /></div>
        </li>`;
});

$ul.innerHTML = output;
let $li = getAll('.sub4 .list li');
let $strong = getAll('.sub4 .list li .txtbox strong');
let $subImg = getAll('.sub4 .list li img');

$li[0].classList.add('on');
$strong[0].classList.add('on');

$li.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        cnt = idx;
        banner();
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});
//$li[]중 내가 마우스를 올린 아이만이 스케일이 커지도록
$subImg.forEach((item, idx) => {
    item.addEventListener('mouseenter', (e) => {
        e.currentTarget.animate([{ scale: 1 }, { scale: 1.1 }], 500);
        // e.currentTarget.animate([{ overflow: hidden }]);
    });
});

timer = setInterval(make, interval);
function make() {
    cnt++;
    if (cnt > size - 1) {
        cnt = 0;
    }
    banner();
}

//공통함수
function banner() {
    $li.forEach((liItem) => {
        liItem.classList.remove('on');
    });
    $li[cnt].classList.add('on');

    $strong.forEach((strongItem) => {
        strongItem.classList.remove('on');
    });
    $strong[cnt].classList.add('on');
    $mainImg.setAttribute('src', itemArr[cnt].big);
    $mainImg.animate([{ opacity: 0 }, { opacity: 1 }], 500);
    // $mainImg.animate([{ scale: 0.5 }, { scale: 1 }], 500);
    $h2.textContent = itemArr[cnt].title;
}
