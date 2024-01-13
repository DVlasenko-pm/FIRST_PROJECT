<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage with Dropdown Menu</title>
    <style>
        /* Optional styling for the dropdown menu */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            padding: 10px;
            color: black;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: none; /* Hide the dropdown menu by default */
            position: absolute;
            background-color: #333;
        }

        ul li {
            padding: 10px;
            text-align: center;
        }

        /* Style for dropdown trigger */
        nav:hover ul {
            display: block; /* Show the dropdown menu on hover */
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

        <!-- Dropdown menu -->
        <nav>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
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
