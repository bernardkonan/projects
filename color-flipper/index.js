// DOM elements
const main = document.getElementById('main');
const btn = document.getElementById('btn');
const spanColor = document.getElementById('color-span');

// data 
const colors = [
    'black','red','green','blue',
    'yellow','violet','orange','gray',
    'brown','pink','purple','aqua',
    'beige','chocolate','coral','crimson',
    'cyan','fire brick','fuschsia','gold',
    'indigo','lawn green','lime','magenta',
    'maroon','navy','olive','plum','salmon',
    'silver','steel blue','tan','light green',
    'dark blue'
]
const generateColor = () => {
    const index = Math.floor(Math.random()*colors.length) - 1;
    return colors[index];
}

btn.addEventListener('click',function(){
    const color = generateColor();
    main.style.background = color;
    spanColor.innerText = color;
})