$('#pass-valid').on('focus',function(){
     $('.pass-req').slideDown();
});
$('#pass-valid').on('blur',function(){
    $('.pass-req').slideUp();
});

$('#pass-valid').on('keyup',function(){
   passValue = $(this).val();

if(passValue.match(/[a-z]/g)){
    $('.lowercase').addClass('active');
}else{
    $('.lowercase').removeClass('active');
}
if(passValue.match(/[A-Z]/g)){
    $('.Capital').addClass('active');
}else{
    $('.Capital').removeClass('active');
}
if(passValue.match(/[0-9]/g)){
    $('.Number').addClass('active');
}else{
    $('.Number').removeClass('active');
}
if(passValue.match(/[!@#$%^&*]/g)){
    $('.Special').addClass('active');
}else{
    $('.Special').removeClass('active');
}
if(passValue.length == 8 || passValue.length > 8){
    $('.Character').addClass('active');
}else{
    $('.Character').removeClass('active');
}

$('.pass-req ul li').each(function(index, el) {
    if(!$(this).hasClass('active')){
        $('.submit').removeClass('active')
    }else{
        $('.submit').addClass('active')
    }
});
});