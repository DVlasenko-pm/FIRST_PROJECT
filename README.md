<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage with Menu</title>
    <style>
        /* Optional styling for the container */
        .image-container {
            position: relative;
            text-align: center;
            color: white;
        }

        /* Styling for the text on the image */
        .text-on-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            /* Add any other styling as needed */
        }

        /* Styling for the menu */
        nav {
            text-align: center;
            background-color: #333;
            padding: 10px 0;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        nav li {
            display: inline;
            margin: 0 10px;
        }

        nav a {
            text-decoration: none;
            color: white;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <div class="image-container">
            <img src="path/to/your/image.jpg" alt="Header Image">
            <p class="text-on-image">Text on Image</p>
        </div>
        <h1>This is the Header</h1>
        
        <!-- Menu with 3 items -->
        <nav>
            <ul>
                <li><a href="#">Menu Item 1</a></li>
                <li><a href="#">Menu Item 2</a></li>
                <li><a href="#">Menu Item 3</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <p>This is the main content of the webpage.</p>
    </main>

    <footer>
        <p>This is the Footer</p>
    </footer>
</body>
</html>
