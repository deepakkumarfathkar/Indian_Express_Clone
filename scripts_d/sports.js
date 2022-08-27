// http://127.0.0.1:5501/Unit_3/test/int_news.html
// 0fb67e5dfd424b97bb4079f6c8238072
// 503c800328a1466980f20a01d5373e81

// let key = "0fb67e5dfd424b97bb4079f6c8238072";
let key = "503c800328a1466980f20a01d5373e81";

//  au ru ua jp

var url =
  "https://newsapi.org/v2/top-headlines?" +
  "country=in&" +
  "pageSize=15&" +
  "page=1&" +
  `apiKey=${key}`;

let getDataDee = async () => {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=sports&sortBy=relevancy&apiKey=${key}`
    );
    let data = await res.json();
    let new_data = data.articles;
    console.log(new_data);
    appendDataDee(new_data);
  } catch (error) {
    console.log(error);
  }
};
getDataDee();

let appendDataDee = (data) => {
  let content = document.getElementById("main_container_dk_1");
  let no_new = 0;
  data.forEach(({ urlToImage, title, url }) => {
    if (urlToImage != undefined && no_new <= 25) {
      let box1 = document.createElement("div");
      box1.addEventListener("click", function () {
        box1.addEventListener("click", function () {
          window.open(url);
        });
      });
      let imag = document.createElement("img");
      imag.src = urlToImage;
      let box = document.createElement("div");
      let headl = document.createElement("p");
      headl.innerText = title;
      box.append(headl);
      box1.append(imag, box);
      content.append(box1);
    }
    no_new++;
  });
};
const getTop = async () => {
  try {
    let res = await fetch(url + "&category=sports&category=business");
    let data = await res.json();
    let nedata = data.articles;
    console.log(nedata);
    appendTop(nedata);
  } catch (error) {}
};
getTop();

let appendTop = (data) => {
  let content = document.getElementById("recomodation_d");
  data.forEach(({ urlToImage, title, url }) => {
    if (urlToImage != undefined) {
      let box1 = document.createElement("div");
      box1.addEventListener("click", function () {
        box1.addEventListener("click", function () {
          window.open(url);
        });
      });
      let imag = document.createElement("img");
      imag.src = urlToImage;
      let box = document.createElement("div");
      let headl = document.createElement("p");
      headl.innerText = title;
      box.append(headl);
      box1.append(imag, box);
      content.append(box1);
    }
  });
};

const slidData = async () => {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${key}`
    );
    let data = await res.json();
    let new_data = data.articles;
    appendSlid(new_data);
  } catch (error) {
    console.log(error);
  }
};
slidData();
const appendSlid = (data) => {
  let cout = 0;
  let container = document.getElementById("intr_news");

  setInterval(() => {
    container.innerHTML = "";
    let box = document.createElement("div");
    box.addEventListener("click", function () {
      box.addEventListener("click", function () {
        window.open(data[cout].url);
      });
    });
    box.setAttribute("id", "intr_news_1");
    let box1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = data[cout].urlToImage;
    box1.append(image);
    let box2 = document.createElement("div");
    let ttl = document.createElement("h3");
    ttl.innerText = data[cout].title;
    box2.append(ttl);
    box.append(box1, box2);
    let lin = document.createElement("hr");
    container.append(box, lin);
    cout++;
    if (cout == 4) {
      cout = 0;
    }
  }, 2000);
  let top_news_d = document.getElementById("top_news_d");
  let top_div1 = document.createElement("div");
  top_div1.addEventListener("click", function () {});
  let image5 = document.createElement("img");
  image5.src = data[5].urlToImage;
  let title5 = document.createElement("h5");
  title5.innerText = data[5].title;

  top_div1.append(image5, title5);
  let top_div2 = document.createElement("div");
  top_div2.addEventListener("click", function () {});
  let image6 = document.createElement("img");
  image6.src = data[6].urlToImage;
  let title6 = document.createElement("h5");
  title6.innerText = data[6].title;
  top_div2.append(image6, title6);

  top_news_d.append(top_div1, top_div2);

  let below_contar = document.getElementById("top_news_d_1");
  let newscout = 7;
  data.forEach((el) => {
    if (newscout <= 7 || newscout < 10) {
      let box_contr = document.createElement("div");
      box_contr.addEventListener("click", function () {
        window.open(data[newscout].url);
      });
      let bimg = document.createElement("img");
      bimg.src = data[newscout].urlToImage;
      let btitl = document.createElement("h6");
      btitl.innerText = data[newscout].title;
      box_contr.append(bimg, btitl);
      below_contar.append(box_contr);
      newscout++;
    }
  });
};

let inter_NewsDee = async (page_number) => {
  try {
    let url1 = `https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=${key}&page=${page_number}`;
    let res = await fetch(url1);
    let data = await res.json();
    let new_data = data.articles;
    console.log(new_data);
    appendIntDeeNews(new_data);
  } catch (error) {}
};

let j = 1;
window.onload = inter_NewsDee(j);

const appendIntDeeNews = (data) => {
  let container = document.getElementById("sports_news");
  container.innerHTML = null;
  data.forEach((el) => {
    let box = document.createElement("div");
    box.setAttribute("class", "sports_news_inner");
    box.addEventListener("click", function () {
      window.open(el.url);
    });
    let boximg = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.urlToImage;
    boximg.append(image);
    let boxcontent = document.createElement("div");
    let date = document.createElement("p");
    date.innerText = el.publishedAt;
    let tle = document.createElement("h4");
    tle.innerText = el.title;
    let descr = document.createElement("h6");
    descr.innerText = el.description;
    boxcontent.append(tle, date, descr);
    let line = document.createElement("hr");
    box.append(boximg, boxcontent);
    container.append(box, line);
  });
};

const pageButton = (result, per_page) => {
  document.getElementById("pagination_dk").innerHTML = "";
  let buttons = Math.ceil(result / per_page);
  for (let i = 1; i <= buttons; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    btn.addEventListener("click", function () {
      inter_NewsDee(i);
    });
    document.getElementById("pagination_dk").append(btn);
  }
};

pageButton(100, 20);

let newsqury = JSON.parse(localStorage.getItem("newsobj"));
function serchfunction() {
  let obj = {
    query: document.getElementById("search").value,
  };

  localStorage.setItem("newsobj", JSON.stringify(obj));
  window.location.href = "search.html";
}
