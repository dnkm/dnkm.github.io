addEventListener('load', () => {
    document.body.classList.remove("loading");
    document.body.classList.add("loaded");

    let $testImg = document.querySelector('#testImg')

    new Waypoint({
        element: $testImg,
        handler: function (direction) {
            if (direction === 'down') {
                $testImg.classList.add('rotated')
            }
        },
        offset: Waypoint.viewportHeight() - 50
    })

    new Waypoint({
        element: $testImg,
        handler: function (direction) {
            if (direction === 'up') {
                $testImg.classList.remove('rotated')
            }
        },
        offset: Waypoint.viewportHeight() / 2
    })

});

function scrollPage() {
    let amt = window.innerHeight / 2 + 10;
    let it = setInterval(() => {
        if (amt >= 3) {
            window.scrollBy(0, 3);  
            amt-=3     
        } else if (amt >= 0) {
            window.scrollBy(0, amt);
            amt = 0
        } else {
            clearInterval(it)
        }        
    }, 1000/60);
}