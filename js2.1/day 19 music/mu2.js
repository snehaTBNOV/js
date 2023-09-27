$( document ).ready(function() {
    var song = document.getElementById('song');

    function playMp3(){
      song.play();
    }

    function pauseMp3(){
      song.pause();
    }


    var elem = $('#bar')[0];
    var play=false;
    var width = 0;
    var timerID;
    var speed = 0.03861;
    var fast = false;

    // click play
    $('#play').on('click',function(){
        // prevent click the second time.
        if(!play){
            var id = setInterval(frame, 100);
            timerID = id
            play = true;

            playMp3();
        }

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                if(fast){width+=0.5}
                else{width+=speed}
                elem.style.width = width + '%'; 
            }
        }
    })

    // click pause
    $('#pause').on('click', function(){
        fast = false;
        play = false;
        clearInterval(timerID);

        pauseMp3();
    })

    // click forward
    $('#forward').on('click', function(){
        $('#pause').click();
        fast = true
        play = false;
        $('#play').click();
    })

    // click stop
    $('#stop').on('click', function(){
        fast = false;
        play = false;
        clearInterval(timerID);
        elem.style.width = 0+'%'
        width=0
    })

    // click backward
    $('#backward').on('click',function(){
        $('#pause').click();
        // change bar backward : decrement width
        var id = setInterval(goBack, 50);
        timerID = id;

        function goBack(){
            if(width<=0){
                clearInterval(id);
            } else {
                width -=0.5
                elem.style.width = width + '%';
            }
        }
    })

    // add class
    $('.fa-heart').on('click',function(){
      $(this).toggleClass('heart');
    })

    $('.fa-star').on('click',function(){
      $(this).toggleClass('star');
    }) 
});
