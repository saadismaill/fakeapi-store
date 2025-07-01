let mainDiv = document.querySelector("#main");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((product) => {
      mainDiv.innerHTML += `
            <div class="col-md-3 mb-4">
              <div class="card h-100 shadow-sm">
                <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height:200px; object-fit:contain;">
                <div class="card-body d-flex flex-column">
                  <h6 class="card-title">${product.title}</h6>
                  <p class="card-text fw-bold mb-2">$${product.price}</p>
                  <p class="text-muted small">${product.category}</p>
                  <button class="btn btn-dark mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          `;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
