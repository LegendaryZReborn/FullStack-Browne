
var num_slides = 5;
var slide = 1;

show_slide(slide);

function show_slide(num)
{
  var img_name = "img ("+ num +").jpg"    
  document.getElementById("img").src = "images/" + img_name;;
  console.log( document.getElementById("img").src);
}

function next_slide()
{
    slide = (slide + 1) % (num_slides + 1);

    if(slide == 0)
        slide++;

    show_slide(slide);
}

function prev_slide()
{
    slide--;;

    if(slide == 0)
        slide = num_slides;

    show_slide(slide);
}