//timer runs changePic every 3sec
let timerThing = setInterval(changePic, 3000)
let currentPosition = 0;

//Get all images an cycle each image.
function changePic(){
    const pics = document.querySelectorAll('.img-container img');
    
    //sets class name to a name that css will not display
    pics[currentPosition].className = 'not-visible';

    if(currentPosition == (pics.length -1)){
        currentPosition = 0;
        pics[pics.length -1].className = 'not-visible';
        pics[currentPosition].className = '';
        
    }
    else{
        currentPosition ++;
        //removes class name an un-hides picture.
        pics[currentPosition].className = '';
    }
    
    /*
    console.log(document.querySelectorAll('.img-container  img'));
    console.log('current pos '+currentPosition);
    console.log(pics[currentPosition].className)
    */

}