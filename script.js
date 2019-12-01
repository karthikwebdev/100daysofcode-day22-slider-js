let count = 1;

function next()
{
    if(count ===1)
    {
        document.getElementById('img1').style.transform = `translate(-100%)`
        document.getElementById('img2').style.transform = `translate(-100%)`
        document.getElementById('img3').style.transform = `translate(-100%)`
        document.getElementById('img1').style.transitionDelay = `1000ms`
        document.getElementById('img1').style.transitionDuration = `1000ms`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        count = count + 1;
    }
     else if(count === 2)
    {
        document.getElementById('img1').style.transform = `translate(-200%)`
        document.getElementById('img2').style.transform = `translate(-200%)`
        document.getElementById('img3').style.transform = `translate(-200%)`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        document.getElementById('img3').style.transitionDelay = `1000ms`
        document.getElementById('img3').style.transitionDuration = `1000ms`
        count = count + 1;
    }
    else if (count === 3)
    {
        document.getElementById('img1').style.transform = `translate(0%)`
        document.getElementById('img2').style.transform = `translate(0%)`
        document.getElementById('img3').style.transform = `translate(0%)`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        document.getElementById('img3').style.transitionDelay = `1000ms`
        document.getElementById('img3').style.transitionDuration = `1000ms`
        count = 1;
    }
}
function prev()
{
    if (count === 1) {
        document.getElementById('img1').style.transform = `translate(-200%)`
        document.getElementById('img2').style.transform = `translate(-200%)`
        document.getElementById('img3').style.transform = `translate(-200%)`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img1').style.transitionDelay = `1000ms`
        document.getElementById('img1').style.transitionDuration = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        document.getElementById('img3').style.transitionDelay = `1000ms`
        document.getElementById('img3').style.transitionDuration = `1000ms`
        count = count + 2;

    }
    else if(count === 2)
    {
        document.getElementById('img1').style.transform = `translate(0%)`
        document.getElementById('img2').style.transform = `translate(0%)`
        document.getElementById('img3').style.transform = `translate(0%)`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        document.getElementById('img3').style.transitionDelay = `1000ms`
        document.getElementById('img3').style.transitionDuration = `1000ms`
        count = 1;

    }
    else if(count === 3)
    {
        console.log(" first slide");
        document.getElementById('img1').style.transform = `translate(-100%)`
        document.getElementById('img2').style.transform = `translate(-100%)`
        document.getElementById('img3').style.transform = `translate(-100%)`
        document.getElementById('img1').style.transitionDelay = `1000ms`
        document.getElementById('img1').style.transitionDuration = `1000ms`
        document.getElementById('img2').style.transitionDelay = `1000ms`
        document.getElementById('img2').style.transitionDuration = `1000ms`
        count = count - 1;

    }
}
