const url = "https://reqres.in/api/products";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    products.data.forEach((product) => {
      result.innerHTML += `
        <div>
          <p>상품명 : ${product.name}</p>
          <p>생산년도 : ${product.year}</p>
        </div>
    `;
    });
  }
});
