$( document ).ready(function() {
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('imageSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/BodyMovin.json'
    })
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('teaSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/Tea/data1.json'
    })
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('logoSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/logogray.json'
    })
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('codingSVG'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'images/CodingImage.json'
    })
});

