/ Fetch categories from API
fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        displayProducts(data); // Display the products on the page
        console.log(data); // Log the data for debugging purposes
    })
    .catch(err => console.error('Error fetching data', err));

// Function to display the products on the page
function displayProducts(products) {
    const container = document.getElementById('products-container');

    // Clear any existing content in the container
    container.innerHTML = '';

    // Loop through the products and create HTML elements for each
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Add product details
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description.substring(0, 100)}...</p>
          <p><strong>Price:</strong> $${product.price}</p>
        `;

        // Append the product div to the container
        container.appendChild(productDiv);
    });
}
