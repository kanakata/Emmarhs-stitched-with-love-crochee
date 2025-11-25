let items = document.querySelectorAll('.slider .items .item');
let btnPrev = document.querySelector('.slider .prev');
let btnNext = document.querySelector('.slider .next');
let pagination = document.querySelectorAll('.slider .pagination .dot');
let product = document.querySelectorAll('.products .product-items .product-item');

let currentItem = 0;
console.log(items.length);

btnNext.addEventListener('click', function() {
    currentItem++;
    if(currentItem >= items.length) {
        currentItem = 0
    }
    
    let itemactiveold = document.querySelector('.slider .items .item.active');
    itemactiveold.classList.remove('active');
    items[currentItem].classList.add('active');

    let paginationactiveold= document.querySelector('.slider .pagination .dot.active');
    paginationactiveold.classList.remove('active');
    pagination[currentItem].classList.add('active');

    clearInterval(int);
    int = setInterval(()=>{
        btnNext.click()
    },3000)
})

btnPrev.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = items.length - 1;
    }
    
    let itemactiveold = document.querySelector('.slider .items .item.active');
    itemactiveold.classList.remove('active');
    items[currentItem].classList.add('active');

    let paginationactiveold= document.querySelector('.slider .pagination .dot.active');
    paginationactiveold.classList.remove('active');
    pagination[currentItem].classList.add('active');

    clearInterval(int);
    int = setInterval(()=>{
        btnNext.click()
    },3000)
})


let int = setInterval(function() {
    currentItem++;
    if(currentItem >= items.length) {
        currentItem = 0
    }
    
    let itemactiveold = document.querySelector('.slider .items .item.active');
    itemactiveold.classList.remove('active');
    items[currentItem].classList.add('active');

    let paginationactiveold= document.querySelector('.slider .pagination .dot.active');
    paginationactiveold.classList.remove('active');
    pagination[currentItem].classList.add('active');

}, 3000);

    
// for(let i = 0; i < pagination.length; i++) {
//     pagination[i].addEventListener('click', function() {
//         items[currentItem].classList.remove('active');
//         pagination[currentItem].classList.remove('active');
//         currentItem = i;
//         items[currentItem].classList.add('active');
//         pagination[currentItem].classList.add('active');
//     });     
// }

