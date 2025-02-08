const Image = document.getElementById('headImage');
let angle = 0;
const intervalID = setInterval(spin, 50);

function spin()
{
    angle += 60;
    Image.style.rotate = angle + "deg";
    if (angle == 360)
    {
        angle = 0;
    }
}

