'use strict';

const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

let arrSite = [
    'https://www.naver.com/',
    'https://dbcut.com/',
    'https://unsplash.com/ko',
    'https://developer.mozilla.org/ko/',
];
let $li = getAll('.list li');
let $strong = getAll('.list li strong');
let $p = get('.mainPic');
let $img = get('.mainPic img');
let $prev = get('.prev');
let $next = get('.next');
let $sub2 = get('.sub2');

let cnt = 0,
    timer = null,
    interval = 4000;

timer = setInterval(make, interval);
function make() {
    cnt++;
    if (cnt > $li.length - 1) {
        cnt = 0;
    }
    banner();
}
$p.addEventListener('click', (e) => {
    window.open(arrSite[cnt]);
});

$li.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        $img.setAttribute('src', `images/content/sub2/exhibition${idx}.jpg`);
        let imgurl = `'images/content/sub2/hall${idx}.jpg'`;
        $sub2.style.backgroundImage = `url(${imgurl})`;
        $img.animate([{ opacity: 0 }, { opacity: 1 }], 500);

        $li.forEach((liItem, idx) => {
            liItem.classList.remove('on');
        });
        $li[idx].classList.add('on');

        $strong.forEach((liItem, idx) => {
            liItem.classList.remove('on');
        });
        $strong[idx].classList.add('on');
        clearInterval(timer);
        timer = setInterval(make, interval);
    });
});

// 버튼 누르기
//다음
$next.addEventListener('click', (e) => {
    cnt++;
    if (cnt > $li.length - 1) {
        cnt = 0;
    }
    banner();
    clearInterval(timer);
    timer = setInterval(make, interval);
});
//이전
$prev.addEventListener('click', (e) => {
    cnt--;
    if (cnt < 0) {
        cnt = $li.length - 1;
    }
    banner();

    clearInterval(timer);
    timer = setInterval(make, interval);
});

//공통함수 banner()
function banner() {
    $img.setAttribute('src', `images/content/sub2/exhibition${cnt}.jpg`);
    let imgurl = `'images/content/sub2/hall${cnt}.jpg'`;
    $sub2.style.backgroundImage = `url(${imgurl})`;
    $img.animate([{ opacity: 0 }, { opacity: 1 }], 500);
    for (let i = 0; i < $li.length; i++) {
        $li[i].classList.remove('on');
        $strong[i].classList.remove('on');
    }
    $li[cnt].classList.add('on');
    $strong[cnt].classList.add('on');
}

//마우스 이벤트
$p.addEventListener('mouseenter', (e) => {
    clearInterval(timer);
});
$p.addEventListener('mouseleave', (e) => {
    timer = setInterval(make, interval);
});
