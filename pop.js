document.getElementById('startButton').addEventListener('click', function() {
    var popup = document.createElement('div');
    popup.innerHTML = '<span class="closeButton" onclick="closePopup()">X</span> Button Clicked!';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'lightgray';
    popup.style.zIndex = '1000';

    document.body.appendChild(popup);
});

function closePopup() {
    document.body.removeChild(document.querySelector('div'));
}
