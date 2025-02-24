const productInfo = "./db.json";
const ul = document.querySelector("ul");

// db.json
fetch(productInfo)
  // json Data 찾아오기
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCounter++,
      })),
    };
    // 기존 json Data 제거함수
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // 찾아온 json Data를 활용해서 원하는 DOM 생성
    const createItem = (product) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      attr.value = product.img;
      img.setAttributeNode(attr);

      h3.className = "name";
      h3.innerText = product.name;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      span.className = "price";
      span.innerText = price;

      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);

      li.addEventListener("click", () => {
        window.location.href = "product-detail.html";
      });
    };

    // json Data 찾아온 후 DOM생성 및 브라우저 출력
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // 오름차순정렬
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });
      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);

    // 내림차순정렬
    const descButton = document.querySelector(".decending");
    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // 최신순정렬
    const newlisting = document.querySelector(".newlisting");
    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });

      removeItems();

      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newlisting.addEventListener("click", sortNew);

    // 검색이벤트
    const searchBar = document.querySelector(".searchBar");
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();
      if (keyword === "") {
        removeItems();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });
        removeItems();
        filtered.forEach((product) => {
          createItem(product);
        });
      }
    });

    // 셀렉트 & 옵션이벤트
    const select = document.querySelector("select");
    const selectCategory = (e) => {
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      const filtered = products.data.filter((product) => {
        return product.category === value;
      });

      removeItems();
      filtered.forEach((product) => {
        createItem(product);
      });
    };

    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.error(error);
  });

// Channel Talk

(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "8f0f1a69-ac0d-4265-9f70-0ce18b8e2539",
});
