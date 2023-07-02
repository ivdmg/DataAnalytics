const burger = document.querySelector('.header__mobile');

burger.addEventListener('click', function(){
    document.querySelector('.header__mobile-icon').classList.toggle('active');
    document.querySelector('.mobile__nav').classList.toggle('active');
    document.querySelector('.mobile__nav-fade').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})
document.querySelector('.mobile__nav-fade').addEventListener('click', function(){
    document.querySelector('.header__mobile-icon').classList.toggle('active');
    document.querySelector('.mobile__nav').classList.toggle('active');
    document.querySelector('.mobile__nav-fade').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})