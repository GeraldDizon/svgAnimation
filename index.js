$( document ).ready(function() {
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('imageSVG'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'images/BodyMovin.json'
    })
});

