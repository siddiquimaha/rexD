// working
// let allCounters = document.querySelectorAll(".counter");

// allCounters.forEach((element) => {
//     const updateCount = () => {
//         const target = parseFloat(element.dataset.count); 
//         let initNum = parseFloat(element.innerText);
//         console.log(initNum);

//         if (initNum < target) {
//             initNum++;
//             element.textContent = `+${initNum}`;
//             setTimeout(updateCount, 5);
//         } else {
//             element.textContent = `+${target}`;
//         }
//     }
//     updateCount();
// });
// working
const countNum = document.querySelectorAll('.counter');
// console.log(countNum);
let speed = 200;

countNum.forEach((myCount) =>{
    // console.log(myCount.innerText);
    let target = myCount.dataset.count;
    // console.log(target);
    let initialNum = 0;
    let speedIncrement = target/speed; 

    const updateCount = () =>{
        if(initialNum < target){
            // initialNum++;
            initialNum = initialNum +speedIncrement; 
            myCount.innerText = `+${Math.ceil(initialNum)}`;
            setTimeout(updateCount,10);
        }else{
            myCount.innerText = `+${target};`
        }
    }
updateCount();

});
window.addEventListener('scroll', () => {
    const supportSection = document.getElementById('support');
    const translateCols = document.querySelectorAll('.translate-y');

    const supportSectionTop = supportSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (supportSectionTop < windowHeight) {
        translateCols.forEach(col => {
            col.classList.add('scrolled');
        });
    }
});



















// let count = document.querySelector(".count-game");
// let decrese = document.querySelector(".dec-btn");
// let increase = document.querySelector(".inc-btn");
// let reset = document.querySelector(".rest-btn");

// let num = 0;
// const resetGame = () =>{
//     count.innerText = 0;
// }
// const countDecrease = () =>{
//     num--;
//     count.innerText = num;
// }
// const countIncrease = () =>{
//     num++;
//     count.innerText = num;
// }
// increase.addEventListener("click", countIncrease);
// decrese.addEventListener("click", countDecrease);
// reset.addEventListener("click",resetGame);




