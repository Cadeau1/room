const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close_btn');
const ul = document.querySelector('ul');
const logo = document.querySelector('.logo');
const main = document.querySelector('main');
const background = {
    color: 'Very-Dark-Gray: hsl(0, 0%, 27%)'
}

hamburger.addEventListener('click', () => {
    ul.style.display = 'flex';
    closeBtn.style.display = 'inline';
    logo.style.display = 'none';
    hamburger.style.display = 'none'
    document.getElementById('main').style.backgroundColor = "#808088";
    // main.style.backgroundColor = background;
    // main.style.opacity = 0.5;
})
closeBtn.addEventListener('click', () => {
    ul.style.display = 'none';
    logo.style.display = 'flex';
    hamburger.style.display = 'block';
    document.getElementById('main').style.backgroundColor = "initial"
})
// function fadeInFadeOut(num) {

    // if (hamburger.addEventListener('click'), () => {
    // document.getElementById('main').style.backgroundColor = "#808088";
    // }
    // else {
        // document.getElementById('main').style.backgroundColor = "initial"
    // })
        // do something
        // console.log('Number is greeter than ten')
    // } else {
        // do something else
        // console.log('Number is less than ten')
    // }
// }