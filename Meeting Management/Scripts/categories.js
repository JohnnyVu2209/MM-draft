var modalBtn = document.querySelector('.modal-btn');
var modalCreate = document.querySelector('.modal');
var catalogform = document.querySelector('.catalog-form');
var modalClose = document.querySelector('.create-modal-close');

var editBtns = document.querySelectorAll('.edit-btn');
var deleteBtns = document.querySelectorAll(".delete-btn");

modalBtn.addEventListener('click',function(){
    modalCreate.classList.add('modal-active');
});
modalClose.addEventListener('click',function(){
    modalCreate.classList.remove('modal-active');
});

editBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).classList.add('modal-active');
    };
});

deleteBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).classList.add('modal-active');
    };
});

var closeBtns = document.querySelectorAll('.edit-modal-close');
closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest(".modal").classList.remove('modal-active');
    };
});

var closeBtns = document.querySelectorAll('.delete-modal-close');
closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest(".delete-modal").classList.remove('modal-active');
    };
});
