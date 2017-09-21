
var num_slides = 5;
var num_slides = 4;
var num = 0;

show_slide(num);

function show_slide(n)
{
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var i;

    //set all displays to none
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    //set the appropriate slide to block
    slides[n].style.display = "block";
}

function next_slide()
{
    num = (num + 1) % num_slides;
    show_slide(num);
}

function prev_slide()
{
    num--;
    if(num < 0) 
        num = num_slides - 1;  
    
    show_slide(num);
}

/* 
var slide = 1;

show_slide(slide);


function show_slide(num)
{
  var img_name = "img ("+ num +").jpg"; 
  document.getElementById("img").src = "images/" + img_name;
}

function next_slide()
{
    var img_name;

    slide = (slide + 1) % (num_slides + 1);

    if(slide == 0)
        slide++;

    img_name = "img ("+ slide +").jpg"; 
    document.getElementById("img").src = "images/" + img_name;
}

function prev_slide()
{
    var img_name;
    
    slide--;;

    if(slide == 0)
        slide = num_slides;

    img_name = "img ("+ slide +").jpg"; 
    document.getElementById("img").src = "images/" + img_name;
}
 */