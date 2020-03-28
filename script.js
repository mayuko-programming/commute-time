$(function() {
    $('input[type="button"]').click(function(){

        var result =$('input[id="commute-time"]').val();
        var count =$('input[id="commute-count"]').val();
        console.log(result);
        console.log(count);
        
        result=result*48*2*count/60;
        var book =　result/5;
        $('#result-time').text(`${result}時間通勤に費やしました((+_+))`);
        $('#result-book').text(`その時間で${book}冊本を読めました(^^)/`);
        $('.question').css("display","none");
        $('.result').css("display","block");
        $('.modal-first').animate({opacity:1},3000);
       
        $('.modal-second').animate({opacity:1},3000);
    });
    $('.btn-area3').click(function(){
        $('.question').css("display","block");
        $('.result').css("display","none");
    });
});
