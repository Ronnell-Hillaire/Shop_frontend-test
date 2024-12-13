// fetch data from the api
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => displayProducts(data))
    .then(json=>console.log(json))
    .catch(err => console.error('Error fetching data', err));


    // Function to display the products ont the page
    function displayProducts(products) {
        const container = document.getElementById('product-container');

        //loop through the products and create HTML elements for each
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
            //Append the product div to the container
            container.appendChild(productDiv);
        });
    }


