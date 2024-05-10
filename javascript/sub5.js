'use strict';
const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

let $list = get('.itemList');
// $list.style.overflow = 'hidden';

let $box = get('.sub5 .listbox');
let $ul = get('.itemList');
let $pagingli = getAll('.sub5 .paging li');
let $next = get('.sub5 button.next');
let $prev = get('.sub5 button.prev');

let first,
    last,
    current = 0,
    old = 0,
    size = $pagingli.length;
$box.style.overflow = 'hidden';

last = document.querySelector('.itemList li:last-child');
$ul.prepend(last);
$ul.style.marginLeft = '-220px';

$next.addEventListener('click', (e) => {
    current++;
    if (current > size - 1) {
        current = 0;
    }
    $ul.style.transition = 'all 0.5s ease';
    $ul.style.marginLeft = parseInt(getComputedStyle($ul).marginLeft) + 220 + 'px';

    setTimeout(() => {
        last = document.querySelector('.itemList li:last-child');
        $ul.prepend(last);
        $ul.style.transition = 'none';
        $ul.style.marginLeft = '-220px';
    }, 500);

    $pagingli.forEach((lis, idx) => {
        lis.classList.remove('on');
    });
    $pagingli[current].classList.add('on');
});

$prev.addEventListener('click', (e) => {
    current--;
    if (current < 0) {
        current = size - 1;
    }
    $ul.style.transition = 'all 0.5s ease';
    $ul.style.marginLeft = parseInt(getComputedStyle($ul).marginLeft) - 220 + 'px';

    setTimeout(() => {
        first = document.querySelector('.itemList li:first-child');
        $ul.append(first);
        $ul.style.transition = 'none';
        $ul.style.marginLeft = '-220px';
    }, 500);

    $pagingli.forEach((lis, idx) => {
        lis.classList.remove('on');
    });
    $pagingli[current].classList.add('on');
});
