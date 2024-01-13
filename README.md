<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <script src="script.js" defer></script>
    <style>
        /* Optional styling for the close button */
        .closeButton {
            position: absolute;
            top: 10px;
            left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
    <button id="startButton" style="background-color: red;">Start</button>
</body>
</html>
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
