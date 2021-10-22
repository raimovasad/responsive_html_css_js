

const menu = document.querySelector('#nav__menu-icon'),
 menuContent = document.querySelector('#nav__menu-content'),
 closeMenu = document.querySelector('.nav__menu_close'),
 menuIcon = document.querySelector('.nav__menu__icon'),
 menuItem1 = document.querySelector('.nav__menu__item1'),
 menuItem2 = document.querySelector('.nav__menu__item2'),
 menuItem3 = document.querySelector('.nav__menu__item3'),
 videoBtn = document.querySelector('#home-video-btn'),
 videoFile = document.querySelector('#home-video'),
videoIcon = document.querySelector('#videoplay'),
videoText = document.querySelector('.home__video__watch'),
marsAbout = document.querySelector('.mars__about'),
marsAboutBg = document.querySelector('.mars__about_bg');








menu.addEventListener('click',()=>{
    menuContent.classList.add('show-menu')
    menu.style.opacity = '0'
   
})

closeMenu.addEventListener('click',()=>{
    menuContent.classList.remove('show-menu')
    menu.style.opacity = '1'
   
})

menuIcon.addEventListener('mouseover', ()=>{
    menuItem1.style.transform = 'rotate(45deg) translateY(10px)'
    
    menuItem3.style.transform = 'rotate(-45deg) translateY(-10px)'
    menuItem2.style.transform = 'translateX(70px)'

})
menuIcon.addEventListener('mouseout', ()=>{
    menuItem1.style.transform = 'rotate(0deg) translateY(0px)'
    
    menuItem3.style.transform = 'rotate(0deg) translateY(0px)'
    menuItem2.style.transform = 'translateX(0px)'
})


console.log(videoIcon);
function playPause(){

    if(videoFile.paused){
        videoFile.play()
        videoText.style.transform = 'translateX(100%)'
        if(videoIcon.classList.contains('fa-play')){

            videoIcon.classList.add('fa-pause')
            videoIcon.classList.remove('fa-play')
        }
    }
    else{
        videoText.style.transform = 'translateX(0%)'
        videoFile.pause()
        videoIcon.classList.remove('fa-pause')
        videoIcon.classList.add('fa-play')
    }
}


videoBtn.addEventListener('click',playPause)