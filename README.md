
# Sortable Table CDN

## Overview

The Sortable Table CDN provides a customizable and accessible solution for implementing sortable tables in web projects. This CDN includes HTML, CSS, and JavaScript files that enable users to sort table columns by clicking on the headers. The sortable table supports various data types, including text, numbers, and dates, and it is designed to be easy to integrate and customize.

## Features

- Sort table columns alphabetically, numerically, or by date.
- Customizable arrow icons indicating sorting direction.
- Lightweight and efficient implementation.
- Accessibility enhancements for keyboard navigation.
- Easily customizable CSS styles to match your project's design.

## Usage

### 1. Include CSS Styles

Include the sortable.css file in the `<head>` section of your HTML file to apply the necessary styles:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dinakar2329/Sortable_table.github.io/sortable.css">
```

### 2. Create HTML Table

Create the HTML table structure in the `<body>` section of your HTML file. Add the `sortable` class to the table headers (`<th>`) that you want to make sortable. Use the `data-type` attribute to specify the data type of each sortable column (e.g., `"text"`, `"number"`, `"date"`).

```html
<table class="sortable-table">
    <thead>
        <tr>
            <th class="sortable" data-type="text">Name</th>
            <th class="sortable" data-type="number">Age</th>
            <th class="sortable" data-type="date">Date</th>
            <!-- Add more columns as needed -->
        </tr>
    </thead>
    <tbody>
        <!-- Table data rows go here -->
    </tbody>
</table>
```

### 3. Include JavaScript

Include the sortable.js file just before the closing `</body>` tag of your HTML file to add sorting functionality to the table:

```html
<script src="https://cdn.jsdelivr.net/gh/Dinakar2329/Sortable_table.github.io/sortable.js"></script>
```

### 4. Customize and Populate Table Data

Customize the table structure and populate it with your data as needed. Ensure that the `data-type` attribute of each sortable column matches the data type of the corresponding data.

### 5. Test and Integrate

Save your HTML file and open it in a web browser to test the sortable table functionality. Customize the CSS styles and table structure to integrate it seamlessly into your web project.

## Example

Here's a basic example of how to use the sortable table in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sortable Table Example</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Dinakar2329/Sortable_table.github.io//sortable.css"> 
    <style>
        /* Custom styles can be added here */
    </style>
</head>
<body>

    <!-- Place your sortable table HTML code here -->

    <script src="https://cdn.jsdelivr.net/gh/Dinakar2329/Sortable_table/sortable.js"></script>
</body>
</html>
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
