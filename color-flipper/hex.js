// DOM elements
const main = document.getElementById('main');
const btn = document.getElementById('btn');
const spanColor = document.getElementById('color-span');

const generateColor = () => {
    const base = '0123456789abcdef';
    let hex = '#';
    for(let i = 0; i < 6; i++){
        hex += base[Math.floor(Math.random()*base.length)]
    }
    return hex;
}

btn.addEventListener('click',function(){
    const color = generateColor();
    main.style.background = color;
    spanColor.innerText = color;
})