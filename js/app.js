let body = document.querySelector('body')
let backToTop = document.querySelector('.backToTop');


const scrollprogress = (event) => {
    let bodyHeight = body.clientHeight;
    let scrollTop = Math.round (window.scrollY);
    let percntage = Math.round ((100 / bodyHeight) * scrollTop);

    backToTop.style.backgroundImage =`conic-gradient(dodgerblue 0% ${percntage}% , white 0% ${percntage}%)`;
}

window.addEventListener('scroll', scrollprogress)




let counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    let ending = counter.dataset.ending;
    let count = 0;
    let duration = 1
    let counting = setInterval(() => {
        count++;
        counter.innerHTML = count

        if(count >= ending) {
            clearInterval(counting)
        }
        
    }, duration)
})

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let num = document.querySelector('.num');

let a = 1;

plus.addEventListener('click', () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;

})

minus.addEventListener('click', () => {
    if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
    

})



let rangeValue = document.querySelector('.rangeValue');
let rangeResult = document.querySelector('.range-result');

rangeValue.addEventListener('input', function(){
    let result = Number(rangeValue.value);

    rangeResult.innerHTML = result;
})