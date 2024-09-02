
let input = document.querySelector('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    greet(input.value);
})


function greet(user){
    if(user !=  ''){
        setTimeout(() => {
            alert(`Hello ${user}, Welcome to my website`)
            document.getElementById('show').innerHTML = `Hello ${user}, welcome to my website`;
        }, 500);

        let utter = new SpeechSynthesisUtterance(`Hello ${user}, welcome to my website`);
        speechSynthesis.speak(utter);
        input.value = ''

        let show = document.getElementById('show');
        show.innerHTML = `Hello ${user}, welcome to my website`;
        
        setTimeout(() => {
            show.classList.add('toggle-name');
        }, 2000);   
    }
    else{
        alert(`Hello ${user}, Welcome to my website`)
        show = document.getElementById('show');
        show.innerHTML = `Hello ${user}, welcome to my website`;
    }
}