'use strict';

const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};
let carArr = [
    { id: 0, src: 'images/content/sub3/car0.jpg' },
    { id: 1, src: 'images/content/sub3/car1.jpg' },
    { id: 2, src: 'images/content/sub3/car2.jpg' },
    { id: 3, src: 'images/content/sub3/car3.jpg' },
    { id: 4, src: 'images/content/sub3/car4.jpg' },
    { id: 5, src: 'images/content/sub3/car5.jpg' },
    { id: 6, src: 'images/content/sub3/car6.jpg' },
    { id: 7, src: 'images/content/sub3/car7.jpg' },
    { id: 8, src: 'images/content/sub3/car8.jpg' },
    { id: 9, src: 'images/content/sub3/car9.jpg' },
    { id: 10, src: 'images/content/sub3/car10.jpg' },
    { id: 11, src: 'images/content/sub3/car11.jpg' },
];
let itemArr = [
    { id: 0, src: 'images/content/sub3/item0.jpg' },
    { id: 1, src: 'images/content/sub3/item1.jpg' },
    { id: 2, src: 'images/content/sub3/item2.jpg' },
    { id: 3, src: 'images/content/sub3/item3.jpg' },
    { id: 4, src: 'images/content/sub3/item4.jpg' },
    { id: 5, src: 'images/content/sub3/item5.jpg' },
    { id: 6, src: 'images/content/sub3/item6.jpg' },
    { id: 7, src: 'images/content/sub3/item7.jpg' },
    { id: 8, src: 'images/content/sub3/item8.jpg' },
    { id: 9, src: 'images/content/sub3/item9.jpg' },
    { id: 10, src: 'images/content/sub3/item10.jpg' },
    { id: 11, src: 'images/content/sub3/item11.jpg' },
];
let tentArr = [
    { id: 0, src: 'images/content/sub3/tent0.jpg' },
    { id: 1, src: 'images/content/sub3/tent1.jpg' },
    { id: 2, src: 'images/content/sub3/tent2.jpg' },
    { id: 3, src: 'images/content/sub3/tent3.jpg' },
    { id: 4, src: 'images/content/sub3/tent4.jpg' },
    { id: 5, src: 'images/content/sub3/tent5.jpg' },
    { id: 6, src: 'images/content/sub3/tent6.jpg' },
    { id: 7, src: 'images/content/sub3/tent7.jpg' },
    { id: 8, src: 'images/content/sub3/tent8.jpg' },
    { id: 9, src: 'images/content/sub3/tent9.jpg' },
    { id: 10, src: 'images/content/sub3/tent10.jpg' },
    { id: 11, src: 'images/content/sub3/tent11.jpg' },
];
let siteArr = [
    { id: 0, url: 'https://www.naver.com/' },
    { id: 1, url: 'https://www.youtube.com/?app=desktop&hl=ko&gl=KR' },
    { id: 2, url: 'https://www.google.co.kr/?hl=ko' },
    { id: 3, url: 'https://www.daum.net/' },
    { id: 4, url: 'https://www.instagram.com/' },
    { id: 5, url: 'https://www.facebook.com/?locale=ko_KR' },
    { id: 6, url: 'https://www.pinterest.co.kr/' },
    { id: 7, url: 'https://unsplash.com/ko' },
    { id: 8, url: 'https://dbcut.com/' },
    { id: 9, url: 'https://www.figma.com/' },
    { id: 10, url: 'https://developer.mozilla.org/ko/' },
    { id: 11, url: 'https://prezi.com/ko/' },
    { id: 12, url: 'https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8' },
];

let subjectcar = [
    '가성비가 좋은 캠핑카',
    '자동차를 넘어 즐거움이 모이는 플랫폼',
    '움직이는 별장, 3가지 매력',
    '차박의 인기를 재현',
    '숙박비 걱정은 끝',
    '더 그랜뉴 새로운 캠핑카 출시',
    '풀옵션의 카라반',
    '미래를 위한 모빌리티 전기캠핑카',
    '완벽에 완벽을 더한 캠핑카',
    '현대 기술기반 확장형 캠핑카',
    '캠핑족 겨냥한 쏘카 캠핑카',
    '새로운 감각의 1톤 캠핑카',
];
let subjectitem = [
    '불편함이 낭만이 되는 순간',
    '감성적인 캠핑을 위한 필수품',
    '가볍게 쏙 챙길 수 있는 캠핑용품',
    '여행에 낭만을 더해줄 감성소품',
    '혼자 떠나는 감성여행',
    '한 눈에 골라보는 캠핑용품',
    '피크닉을 떠나는 듯한 가벼움',
    '캠핑을 본격적인 준비',
    '함께 구매시 최대 30% 할인',
    '달빛 아래, 감성 아래',
    '올 봄 한정 특가세일',
    '선물하기 좋은 캠핑용품',
];
let subjecttent = [
    '원터치 캠핑텐트',
    '거실형 텐트 4인용',
    '천막과 텐트의 일체형공간',
    '뮤터 원터치 이지돔 캠핑텐트',
    '팍 필드 도킹 텐트',
    '6인용 인스턴트 캠핑텐트',
    '사각형 원터치 캠핑텐트',
    '초보자를 위한 간단 야외용텐트',
    '접이식 감성텐트',
    '마운티아 아레스 돔 텐트',
    '가성비를 자랑하는 6인용 텐트',
    '아이두젠코 캠핑텐트',
];

//번호 생성
let $number = get('.number strong');
let $sum = get('.number .sum');
$sum.textContent = ` / ${carArr.length}`;

let output1 = '';
let output2 = '';
let output3 = '';
let $ulcar = get('article .thum.car');
let $ulitem = get('article .thum.item');
let $ultent = get('article .thum.tent');

carArr.forEach((car, idx) => {
    output1 += `<li><img src=${car.src} alt="이미지 축소" /></li>`;
});
itemArr.forEach((item, idx) => {
    output2 += `<li><img src=${item.src} alt="이미지 축소" /></li>`;
});
tentArr.forEach((tent, idx) => {
    output3 += `<li><img src=${tent.src} alt="이미지 축소" /></li>`;
});

$ulcar.innerHTML = output1;
$ulitem.innerHTML = output2;
$ultent.innerHTML = output3;

let $li = getAll('article .thum li');
let $carli = getAll('article .small .thum.car li');
let $itemli = getAll('article .small .thum.item li');
let $tentli = getAll('article .small .thum.tent li');
let $big = get('article .big img');
let $bigcar = get('article #car img');
let $bigitem = get('article #item img');
let $bigtent = get('article #tent img');
let $h2 = get('h2');
let cnt = 0;
let $url = getAll('article .small.on li img');
let timeUrl = '';
let carUrl = '';
let itemUrl = '';
let tentUrl = '';

//타이머
let timer = '',
    timercar = '',
    timeritem = '',
    timertent = '',
    interval = 3000;

timer = setInterval(make, interval);

function make() {
    cnt++;
    if (cnt >= siteArr.length - 1) {
        cnt = 0;
    }

    $carli.forEach((li, idx) => {
        li.classList.remove('on');
    });
    $carli[cnt].classList.add('on');
    $bigcar.setAttribute('src', carArr[cnt].src);
    $number.textContent = `번호 : ${cnt + 1}`;
    $h2.textContent = subjectcar[cnt];
}
function make1() {
    cnt++;
    if (cnt >= siteArr.length - 1) {
        cnt = 0;
    }

    $carli.forEach((li, idx) => {
        li.classList.remove('on');
    });
    $carli[cnt].classList.add('on');
    $bigcar.setAttribute('src', carArr[cnt].src);
    $number.textContent = `번호 : ${cnt + 1}`;
    $h2.textContent = subjectcar[cnt];
}
function make2() {
    cnt++;
    if (cnt >= siteArr.length - 1) {
        cnt = 0;
    }

    $itemli.forEach((li, idx) => {
        li.classList.remove('on');
    });
    $itemli[cnt].classList.add('on');
    $bigitem.setAttribute('src', itemArr[cnt].src);
    $number.textContent = `번호 : ${cnt + 1}`;
    $h2.textContent = subjectitem[cnt];
}
function make3() {
    cnt++;
    if (cnt >= siteArr.length - 1) {
        cnt = 0;
    }

    $tentli.forEach((li, idx) => {
        li.classList.remove('on');
    });
    $tentli[cnt].classList.add('on');
    $bigtent.setAttribute('src', tentArr[cnt].src);
    $number.textContent = `번호 : ${cnt + 1}`;
    $h2.textContent = subjecttent[cnt];
}

//탭 클릭

let $tab = getAll('article .listname li');

let $tabimg = getAll('.sub3 article .big');
let $tablist = getAll('.sub3 article .small');

$tab.forEach((tab, idx) => {
    tab.addEventListener('click', (e) => {
        $tab.forEach((tabs) => {
            tabs.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        clearInterval(timer);
        if (tab.textContent === '캠핑카') {
            $h2.textContent = subjectcar[0];
            $number.textContent = '번호: 1';
            cnt = 0;
            clearInterval(timeritem);
            clearInterval(timertent);
            timercar = setInterval(make1, interval);
        } else if (tab.textContent === '피크닉용품') {
            $h2.textContent = subjectitem[0];
            $number.textContent = '번호: 1';
            cnt = 0;
            clearInterval(timercar);
            clearInterval(timertent);

            timeritem = setInterval(make2, interval);
        } else if (tab.textContent === '캠핑텐트') {
            $h2.textContent = subjecttent[0];
            $number.textContent = '번호: 1';

            cnt = 0;
            clearInterval(timeritem);
            clearInterval(timertent);

            timertent = setInterval(make3, interval);
        }

        $tabimg.forEach((imgs) => {
            imgs.classList.remove('on');
        });
        $tabimg[idx].classList.add('on');

        $tablist.forEach((list) => {
            list.classList.remove('on');
        });
        $tablist[idx].classList.add('on');
    });
});

//클릭
$carli.forEach((car, idx) => {
    car.addEventListener('click', (e) => {
        $carli.forEach((carli, idx) => {
            carli.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        carUrl = `images/content/sub3/car${idx}.jpg`;
        $bigcar.setAttribute('src', carUrl);
        $number.textContent = `번호 : ${idx + 1}`;
        $h2.textContent = subjectcar[idx];
        cnt = idx;

        clearInterval(timercar);
        timercar = setInterval(make1, interval);
    });
});

$itemli.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        $itemli.forEach((itemli) => {
            itemli.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        itemUrl = `images/content/sub3/item${idx}.jpg`;
        $bigitem.setAttribute('src', itemUrl);
        $number.textContent = `번호 : ${idx + 1}`;
        $h2.textContent = subjectitem[idx];
        cnt = idx;
        clearInterval(timeritem);
        timeritem = setInterval(make2, interval);
    });
});

$tentli.forEach((tent, idx) => {
    tent.addEventListener('click', (e) => {
        $tentli.forEach((tentli) => {
            tentli.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        tentUrl = `images/content/sub3/tent${idx}.jpg`;
        $bigtent.setAttribute('src', tentUrl);
        $number.textContent = `번호 : ${idx + 1}`;
        $h2.textContent = subjecttent[idx];
        cnt = idx;
        clearInterval(timertent);
        timertent = setInterval(make3, interval);
    });
});
//

//마우스 이벤트
let $hover = get('article .big');

$big.addEventListener('click', (e) => {
    window.open(siteArr[cnt].url);
});
