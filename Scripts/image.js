const Image = document.getElementById('headerImage');
let angle = 0;
const intervalID = setInterval(spin, 10);

function spin()
{
    angle += 1;
    Image.style.rotate = angle + "deg";
    if (angle == 360)
    {
        angle = 0;
    }
}

