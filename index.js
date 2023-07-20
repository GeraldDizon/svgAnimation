$( document ).ready(function() {
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('imageSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/BodyMovin.json'
    })
});

