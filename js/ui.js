let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

var homeSection = document.getElementById('home');

homeSection.style['width'] = `${windowWidth.toString()}px`;
homeSection.style['height'] = `${windowHeight.toString()}px`;

let aboutDisplay = 'none';

function toggleAboutSection(elem){
    let aboutSection = document.getElementById('aboutme');
    aboutDisplay = (aboutDisplay != 'none') ? 'none' : 'block';
    aboutSection.style['display'] = aboutDisplay 
    // alert('worked');
}

function addListenerToHome() {
    let home = document.getElementById('home')
    let nav = home.children[0]
    let ul = nav.children[0]
    let li = ul.children[0]
    let a = li.children[0]

    a.addEventListener('click', function(){
        toggleAboutSection(a);
    });
}

addListenerToHome();