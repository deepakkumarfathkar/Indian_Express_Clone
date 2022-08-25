const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let year = d.getFullYear();
const date = d.getDate();
d.getTime();
console.log(month, day,date,year);
let time = document.getElementById("time_s");
time.innerHTML = `${day}, ${month} ${date} ${year}`


let getData = async()=>{

    let res = await fetch(` https://newsapi.org/v2/top-headlines?country=in&apiKey=40e1600621784c8b9353d3c3ad8cef6b&pageSize=6`);
    let data = await res.json();
    console.log("d",data.articles);
    appendData(data.articles);

}
getData();
let container = document.getElementById("container1_s")
let inner_container1_s = document.getElementById("inner_container1_s");
let inner_container2_s = document.getElementById("inner_container2_s");


 
let appendData =(data)=>{
    // container.innerHTML = null;
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src= data[0].urlToImage;
    let p = document.createElement("h4");
    p.innerText = data[0].title;
    let desc = document.createElement("p");
    desc.innerText = data[0].description;
    div.append(p,img,desc);

    inner_container1_s.append(div);
    data.shift()
    
    data.forEach(function(el){
        // console.log(el)
        // inner_container2_s.innerHTML = null;
        let div2 = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = el.title;
        div2.style.borderTop = "1px dotted  gray"
        div2.style.marginTop = "10px"
        div2.style.alignItems = "center"
        div2.append(title);
        inner_container2_s.append(div2);
        

    })

   
}

let container2 = document.getElementById("container2_s");

let getTopNews =async ()=>{
    let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=40e1600621784c8b9353d3c3ad8cef6b`);
    let data = await res.json();
    // console.log(data);
    appendTopNews(data.articles);
}
getTopNews();
let top_news = document.getElementById("top_news");
let appendTopNews =(data)=>{
    top_news.innerHTML = null;
    let h3 = document.createElement("h3");
    h3.innerText = "TOP NEWS"
    top_news.append(h3)
    
    data.forEach(function(el){
    let div = document.createElement("div");
    div.setAttribute("class", "top_news_inner")
    let title = document.createElement("p");
    title.innerText = el.title;
    let img = document.createElement("img");
    img.src= el.urlToImage;
    div.append(title, img);
    top_news.append(div)

    })


}

let latest_news = document.getElementById("latest_news");

let getLatestNews = async()=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-08-24&sortBy=popularity&apiKey=40e1600621784c8b9353d3c3ad8cef6b&pageSize=10`);
    let data = await res.json();
    // console.log(data.articles);
    appendLatestNews(data.articles);
}
getLatestNews();

let appendLatestNews =(data)=>{
    latest_news.innerHTML = null;
    let h3 = document.createElement("h3");
    h3.innerText = "LATEST NEWS"
    latest_news.append(h3)
    
    data.forEach(function(el){
    let div = document.createElement("div");
    div.setAttribute("class", "latest_news_inner")
    let title = document.createElement("p");
    title.innerText = el.title;
   
    div.append(title);
    latest_news.append(div)

    })
}


let city = document.getElementById("city_s");
let val = city.value;
// console.log(val);
city.onchange = function changePrice(){
    val = city.value;
    getDataByCity(val);
    // console.log(val)
}
console.log("val",val)

let getDataByCity =async(val)=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${val}&from=2022-08-24&sortBy=popularity&apiKey=2f9406a793e0494c999bc0adce06e9c2&pageSize=6`);
    let data = await res.json();
    appendDataByCity(data.articles);
    console.log("ees", data);
}
getDataByCity(val);
let news_by_city_s = document.getElementById("news_by_city_s");
let inner1_s = document.getElementById("inner1_s");
let inner2_s = document.getElementById("inner2_s");
let place = document.getElementById("label_s")
let appendDataByCity =(data)=>{
    inner1_s.innerHTML = null;
    inner2_s.innerHTML = null;
    place.innerHTML = null;

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src= data[0].urlToImage;
    let p = document.createElement("h4");
    p.innerText = data[0].title;
    let desc = document.createElement("p");
    desc.innerText = data[0].description;
    div.append(p,img,desc);

    inner1_s.append(div);
    data.shift()
    data.forEach(function(el){
        // console.log(el)
        
        let div2 = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = el.title;
        div2.style.borderTop = "1px dotted  gray"
        div2.style.marginTop = "10px"
        div2.style.alignItems = "center"
        div2.append(title);
        inner2_s.append(div2);
        
        

    })
    place.innerText = `${val} News`
}


