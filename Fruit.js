
//  Slide show starting

// Slide show ending


// // Read the username from localStorage
// var loggedInUsername = localStorage.getItem('loggedInUsername');

// // Check if the username is set in localStorage
// if (loggedInUsername) {
//     // Display the username on the redirected page
//     document.getElementById('usernameDisplay').textContent = 'Welcome, ' + loggedInUsername;
// } else {
//     // Handle the case where the username is not set (optional)
//     document.getElementById('usernameDisplay').textContent = 'Guest'; // Default text
// }



//-------------------------
// On the redirected page (Page B - redirected_page.html)
document.addEventListener('DOMContentLoaded', function () {
    // Read the username from localStorage
    var loggedInUsername = localStorage.getItem('loggedInUsername');
    // alert('Welcome Admin');
    // Check if the element with ID 'usernameDisplay' exists in the DOM
    // var usernameElement = document.getElementById('usernameDisplay');

    //     if (loggedInUsername) {

    //         usernameElement.innerHTML = 'Welcome To My Fruit Shop, ' + loggedInUsername;
    //     } else {
    //         alert('Element with ID "usernameDisplay" not found or username not set.');
    //     }
    // });

    // Get the username from the user after login (you can replace this with your login logic)
    // var username = prompt('Enter your username:');

    // Set the same username on all images in the carousel
    var carouselCaptions = document.querySelectorAll('.carousel-caption');
    for (var i = 0; i < carouselCaptions.length; i++) {
        var caption = carouselCaptions[i];
        var marquee = document.createElement('p');
        marquee.className = 'marquee';
        marquee.textContent = 'Welcome To My Fruit Shop, ' + loggedInUsername;
        caption.appendChild(marquee);
    }
});






// ------------  Calculation for Fruits -------------




// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cartItemsList = document.getElementById('cart-items');
//     const fruitCounts = {}; // Object to store fruit counts

//     addToCartButtons.forEach((button) => {
//         button.addEventListener('click', function () {
//             const fruitName = this.getAttribute('data-fruit');

//             // Increase the fruit count or initialize to 1 if it doesn't exist
//             if (fruitCounts[fruitName]) {
//                 fruitCounts[fruitName]++;
//             } else {
//                 fruitCounts[fruitName] = 1;
//             }

//             // Update the cart display
//             updateCartDisplay();
//         });
//     });

//     function updateCartDisplay() {
//         // Clear the current cart display
//         cartItemsList.innerHTML = '';

//         // Loop through the fruitCounts object and add items to the cart
//         for (const fruitName in fruitCounts) {
//             const count = fruitCounts[fruitName];
//             const listItem = document.createElement('li');
//             listItem.textContent = `${fruitName}: ${count}`;
//             cartItemsList.appendChild(listItem);
//         }
//     }
// });


// // ------------------------- shows the prices and fruit names
// document.addEventListener('DOMContentLoaded', function () {
//     const fruitDivs = document.querySelectorAll('.fruit');
//     const cartItemsList = document.getElementById('cart-items');
//     const totalPriceSpan = document.getElementById('total-price');
//     const cart = {}; // Object to store cart items and quantities

//     // Grid view table
//     const gridViewBody = document.getElementById('grid-view-body');

//     fruitDivs.forEach((fruitDiv) => {
//         const addButton = fruitDiv.querySelector('.add-to-cart');
//         const fruitName = fruitDiv.getAttribute('data-fruit');
//         const fruitPrice = parseFloat(fruitDiv.getAttribute('data-price'));

//         addButton.addEventListener('click', function () {
//             // Increase the fruit count or initialize to 1 if it doesn't exist
//             if (cart[fruitName]) {
//                 cart[fruitName].count++;
//             } else {
//                 cart[fruitName] = { count: 1, price: fruitPrice };
//             }

//             // Update the cart display and total price
//             updateCartDisplay();
//             // Update the grid view
//             updateGridView();
//         });
//     });

//     function updateCartDisplay() {
//         // Clear the current cart display
//         cartItemsList.innerHTML = '';

//         // Initialize total price to 0
//         let totalPrice = 0;

//         // Loop through the cart object and add items to the cart
//         for (const fruitName in cart) {
//             const { count, price } = cart[fruitName];
//             const listItem = document.createElement('li');
//             listItem.textContent = `${fruitName}: ${count} x $${price.toFixed(2)} = $${(count * price).toFixed(2)}`;
//             cartItemsList.appendChild(listItem);

//             // Calculate and update the total price
//             totalPrice += count * price;
//         }

//         // Update the total price display
//         totalPriceSpan.textContent = totalPrice.toFixed(2);
//     }

//     function updateGridView() {
//         // Clear the current grid view
//         gridViewBody.innerHTML = '';

//         // Loop through the cart object and add items to the grid view
//         for (const fruitName in cart) {
//             const { count, price } = cart[fruitName];
//             const row = document.createElement('tr');

//             // Fruit Name
//             const fruitCell = document.createElement('td');
//             fruitCell.textContent = fruitName;
//             row.appendChild(fruitCell);

//             // Price
//             const priceCell = document.createElement('td');
//             priceCell.textContent = `$${price.toFixed(2)}`;
//             row.appendChild(priceCell);

//             // Quantity
//             const quantityCell = document.createElement('td');
//             quantityCell.textContent = count;
//             row.appendChild(quantityCell);

//             gridViewBody.appendChild(row);
//         }
//     }
// });









// -------------   Fruit Order Print Code

document.addEventListener('DOMContentLoaded', function () {
    const fruitDivs = document.querySelectorAll('.fruit');
    const gridViewBody = document.getElementById('grid-view-body');
    const totalPriceSpan = document.getElementById('total-price');
    const cart = {}; // Object to store cart items and quantities

    fruitDivs.forEach((fruitDiv) => {
        const addButton = fruitDiv.querySelector('.add-to-cart');
        const fruitName = fruitDiv.getAttribute('data-fruit');
        const fruitPrice = parseFloat(fruitDiv.getAttribute('data-price'));

        addButton.addEventListener('click', function () {
            // Increase the fruit count or initialize to 1 if it doesn't exist
            if (cart[fruitName]) {
                cart[fruitName].count++;
            } else {
                cart[fruitName] = { count: 1, price: fruitPrice };
            }

            // Update the grid view
            updateGridView();
        });
    });

    function updateGridView() {
        // Clear the current grid view
        gridViewBody.innerHTML = '';

        // Initialize total price to 0
        let totalPrice = 0;

        // Loop through the cart object and add items to the grid view
        for (const fruitName in cart) {
            const { count, price } = cart[fruitName];
            const row = document.createElement('tr');

            // Fruit Name
            const fruitCell = document.createElement('td');
            fruitCell.textContent = fruitName;
            row.appendChild(fruitCell);

            // Price
            const priceCell = document.createElement('td');
            priceCell.textContent = `$${price.toFixed(2)}`;
            row.appendChild(priceCell);

            // Quantity
            const quantityCell = document.createElement('td');
            quantityCell.textContent = count;
            row.appendChild(quantityCell);

            // Create a "Remove" button for each item in the grid view
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-from-cart');
            removeButton.textContent = '-';

            // Attach an event listener to the "Remove" button
            removeButton.addEventListener('click', function () {
                // Remove one quantity of the fruit
                if (cart[fruitName].count > 1) {
                    cart[fruitName].count--;
                } else {
                    delete cart[fruitName]; // Remove the fruit if quantity becomes zero
                }

                // Update the grid view
                updateGridView();
            });

            // Add the "Remove" button to the Remove column
            const removeCell = document.createElement('td');
            removeCell.appendChild(removeButton);
            row.appendChild(removeCell);

            gridViewBody.appendChild(row);

            // Calculate and update the total price
            totalPrice += count * price;
        }

        // Update the total price display
        totalPriceSpan.textContent = totalPrice.toFixed(2);
    }

    
    // -------------
    
    const printButton = document.getElementById('print-button');

    printButton.addEventListener('click', function () {
        printCart();
    });
    
    function printCart() {
        const gridViewBody = document.getElementById('grid-view-body');
        const totalPriceSpan = document.getElementById('total-price');
    
        // Create a new window for printing
        const printWindow = window.open('', '', 'width=600,height=600');
    
        // Prepare the content to be printed
        const gridHTML = `
            <h2>Grid View</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fruit Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    ${gridViewBody.innerHTML}
                </tbody>
            </table>
            <p>Total Price: $${totalPriceSpan.textContent}</p>
        `;
    
        // Write the content to the new window
        printWindow.document.open();
        printWindow.document.write(`
            <html>
            <head>
                <title>Print Grid View</title>
            </head>
            <body>${gridHTML}</body>
            </html>
        `);
        printWindow.document.close();
    
        // Trigger the print dialog
        printWindow.print();
        printWindow.close();
    }
    
});
