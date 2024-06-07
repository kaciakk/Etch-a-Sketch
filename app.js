const mainContainer = document.querySelector('#main-container');
const sizeUpBtn = document.querySelector('#btn-sizeup');
const eraseBtn = document.querySelector('#btn-erase');
const rangeInput = document.querySelector('#rangeInput');
const value = document.querySelector('#value');
let singleDivs = [];
let currentSize = 4;
value.textContent = `${currentSize} x ${currentSize}`

function setRangInputValue(){
    rangeInput.addEventListener('input', (e) => {
        value.textContent = `${e.target.value} x ${e.target.value}`;
         const size = e.target.value;
         currentSize = size;
         value.textContent = `${size} x ${size}`;
         reSize(size)
         
    });
}

function reSize (size) {
    const containerSize = 500;
    const itemSize = containerSize / size;
    mainContainer.innerHTML = '';
    singleDivs = [];
   
    if(size <= 100){
        for ( let i=0 ; i < Math.pow(size,2); i++){
            const singleDiv = document.createElement('div');
            singleDiv.className = 'singleDiv'
            singleDiv.style.width = `${itemSize}px`;
            singleDiv.style.height = `${itemSize}px`;
            singleDiv.addEventListener('mouseover', function() {this.style.background = 'lightgrey'});
            mainContainer.appendChild(singleDiv);
            singleDivs.push(singleDiv);
            console.log(singleDivs);
        }
    }else{
        console.log("Size musi byc mniejsze niz 100")
    }
}

function eraseAll (){
    singleDivs.forEach(div => {
        div.style.background = '';
    })
    singleDivs = []
    reSize(currentSize)
}
eraseBtn.addEventListener('click', eraseAll)
reSize(currentSize)
setRangInputValue()
