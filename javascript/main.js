'use strict';

const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};
let thumArr = [
    { id: 0, src: '../0321_숙제/images/content/sub3/thum0.jpg' },
    { id: 1, src: '../0321_숙제/images/content/sub3/thum1.jpg' },
    { id: 2, src: '../0321_숙제/images/content/sub3/thum2.jpg' },
    { id: 3, src: '../0321_숙제/images/content/sub3/thum3.jpg' },
    { id: 4, src: '../0321_숙제/images/content/sub3/thum4.jpg' },
    { id: 5, src: '../0321_숙제/images/content/sub3/thum5.jpg' },
    { id: 6, src: '../0321_숙제/images/content/sub3/thum6.jpg' },
    { id: 7, src: '../0321_숙제/images/content/sub3/thum7.jpg' },
    { id: 8, src: '../0321_숙제/images/content/sub3/thum8.jpg' },
    { id: 9, src: '../0321_숙제/images/content/sub3/thum9.jpg' },
    { id: 10, src: '../0321_숙제/images/content/sub3/thum10.jpg' },
    { id: 11, src: '../0321_숙제/images/content/sub3/thum11.jpg' },
    { id: 12, src: '../0321_숙제/images/content/sub3/thum12.jpg' },
    { id: 13, src: '../0321_숙제/images/content/sub3/thum13.jpg' },
    { id: 14, src: '../0321_숙제/images/content/sub3/thum14.jpg' },
    { id: 15, src: '../0321_숙제/images/content/sub3/thum15.jpg' },
    { id: 16, src: '../0321_숙제/images/content/sub3/thum16.jpg' },
    { id: 17, src: '../0321_숙제/images/content/sub3/thum17.jpg' },
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
    { id: 13, url: 'https://www.miricanvas.com/ko' },
    { id: 14, url: 'https://noonnu.cc/' },
    { id: 15, url: 'https://url.kr/' },
    { id: 17, url: 'https://www.tistory.com/' },
];

let subject = ['사진1', '사진2', '사진3', '사진4', '사진5', '사진6', '사진7', '사진8', '사진9', '사진10', '사진11', '사진12', '사진13', '사진14','사진15','사진16','사진17','사진18'];

//번호 생성
let $number = get('.number strong');
let $sum = get('.number .sum');
$sum.textContent = thumArr.length;

//li태그에 이미지 생성해서 innerHTML로 출력
let output = '';
let $ul = get('article .thum');

thumArr.forEach((item, idx) => {
    output += `<li><img src=${item.src} alt="이미지 축소" /></li>`;
});
// thumArr.forEach((item, idx) => {
//     output += `<li><img src="../0321_숙제/images/content/sub3/thum${item.id}.jpg" alt="이미지 축소" /></li>`;
// });

$ul.innerHTML = output;

// 클래스 on 붙였다가 떼기
let $li = getAll('article .thum li');
let $big = get('article .big img');
let $h2 =get('h2')
let cnt = 0;
let imgurl = '';

$li.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        $li.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        imgurl = `../0321_숙제/images/content/sub3/big${idx}.jpg`;
        $big.setAttribute('src', imgurl);
        $number.textContent =`현재번호 ${idx+1}`;
        $h2.textContent=subject[idx];
        
    });
});

//타이머
let timer = null,
    interval = 3000;

timer = setInterval(make, interval);
function make() {
    cnt++;
    if (cnt > thumArr.length - 1) {
        cnt = 0;
    }
    $li.forEach((item, idx) => {
        item.classList.remove('on');
    });
    $li[cnt].classList.add('on');
    imgurl = `../0321_숙제/images/content/sub3/big${cnt}.jpg`;
    $big.setAttribute('src', imgurl);
    $number.textContent =`현재번호 ${cnt+1}`;
    $h2.textContent=subject[cnt];
}

//마우스 이벤트
let $hover = get('article .big');

$hover.addEventListener('mouseenter', e=>{
 clearInterval(timer);
});

$hover.addEventListener('mouseleave', e=>{
    timer = setInterval(make, interval);
   });

$big.addEventListener('click',(e)=>{
    window.open(siteArr[cnt].url);
   })
