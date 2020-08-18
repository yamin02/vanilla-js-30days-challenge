const docs = document.getElementById('docs'); 
async function yamin() {
const response = await fetch('http://192.168.56.1:8887/docs.txt')
const text = await response.text() ;
docs.innerHTML = text;
}
yamin();


const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
    const context = this
    const args = arguments 
    clearTimeout(debounceTimer) 
    debounceTimer = setTimeout(() => 
    func.apply(context, args), delay) 
    } 
}
const img = document.getElementsByTagName('img');
const docs0 = document.querySelector('.docs');
const docp = document.querySelector('#docs');
console.log(docs.offsetHeight)

function slidein(){
    for (const img1 of img){
        const heigthhalf = docs0.scrollTop + docs0.clientHeight - img1.height*0.7 ; 
        console.log(heigthhalf);
        //console.log(img1.offsetTop);
        const condtion1 = heigthhalf > img1.offsetTop;

        if(condtion1){
            img1.classList.add('active')
        }else{
            img1.classList.remove('active');
        }
    }
}

docs0.addEventListener('scroll',debounce(slidein,20))
