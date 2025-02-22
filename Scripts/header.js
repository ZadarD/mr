const button = document.getElementById('menubutton');
const image = document.getElementById('headerimage');
const panel = document.getElementById('sidepanelcontainer');

setInterval(rotate, 10)
let currentSpin = 0;
function rotate()
{
    currentSpin += 2;
    image.style.transform = `rotate(${currentSpin}deg)`;
    if (currentSpin == 360)
    {
        currentSpin = 0;
    }
}

let panelOpen = false;
function menuclick() 
{
    let currentPosition = panelOpen ? 0 : -250;
    let targetPosition = panelOpen ? -250 : 0;

    let intervalID = setInterval(() => {
        if ((panelOpen && currentPosition <= targetPosition) || (!panelOpen && currentPosition >= targetPosition)) 
        {
            clearInterval(intervalID);
            panelOpen = !panelOpen;
        } 
        else 
        {
            currentPosition += panelOpen ? -10 : 10;
            panel.style.left = `${currentPosition}px`;
        }
    }, 10);
}
button.addEventListener('click', menuclick);

image.addEventListener('click', back);
function back()
{
    window.location.href = "index.php";
}