jQuery(document).ready(function(){

    $('#eventTag').click(function(){
        // $(this).css('border-left','2px solid black');
        // $(this).css('border-top','2px solid black');
        // $(this).css('border-right','2px solid black');
        // $(this).css('border-bottom','0');
        // $('#newTag').css('border', '0');
        // $('#newTag').css('border-bottom', '2px solid black');
        $(this).css('border', '2px solid black');
        $('#newTag').css('border', '0');
        $(this).css('color', 'black');
        $('#newTag').css('color', 'silver');
        $('#tabChange').html('   &#62;이벤트   &#62;');
    });

    $('#newTag').click(function(){
        // $(this).css('border-left','2px solid black');
        // $(this).css('border-top','2px solid black');
        // $(this).css('border-right','2px solid black');
        // $(this).css('border-bottom','0');
        // $('#eventTag').css('border','0');
        // $('#eventTag').css('border-bottom', '2px solid black');
        $(this).css('border', '2px solid black');
        $('#eventTag').css('border', '0');
        $(this).css('color', 'black');
        $('#eventTag').css('color', 'silver');
        $('#tabChange').html('&#62;신규매장&#62;');
    });

    $('#all').click(function(){
        $(this).css('color','red');
        $(this).css('border-bottom','2px solid red');
        $('#ing').css('border-bottom','0');
        $('#end').css('border-bottom','0');
        $('#ing').css('color','silver');
        $('#end').css('color','silver');
        $(this).css('outline','0');
        $('#btnChange').html('전체');
    });

    $('#ing').click(function(){
        $(this).css('color','red');
        $(this).css('border-bottom','2px solid red');
        $('#all').css('border-bottom','0');
        $('#end').css('border-bottom','0');
        $('#all').css('color','silver');
        $('#end').css('color','silver');
        $(this).css('outline','0');
        $('#btnChange').html('진행중');
    });

    $('#end').click(function(){
        $(this).css('color','red');
        $(this).css('border-bottom','2px solid red');
        $('#ing').css('border-bottom','0');
        $('#all').css('border-bottom','0');
        $('#ing').css('color','silver');
        $('#all').css('color','silver');
        $(this).css('outline','0');
        $('#btnChange').html('종료');
    });

    

});