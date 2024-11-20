# etch-a-sketch

In this project I will be creating a sketchpad using HTML, CSS, and Javascript.

# To-Do:
1. Create a 16x16 grid of square divs (JS)
    - Create a container div of a fixed size for the squares (HTML)
    - Display squares as grid using Flexbox (CSS)
    - Use box-sizing: border-box to ensure grid fits nicely inside container div
2. Implement hover effect, so squares change colour when mouse passes over, leaving a trail of coloured divs behind
    - Use addEventListener for square divs to detect when mouse hovers over square (mouseover/mouseeneter)
    - Add class to div (CSS)/change background colour (JS)
3. Create button allowing user to create a new grid with specified amount of squares per side. This removes the old grid, and generates a new one within the same space.
    - Set an input limit of 100 sq/side to save resources
    - Use Flexbox to make sure the container div does not change size, and same amount of pixels are used.