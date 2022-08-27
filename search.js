
var url = 'https://newsapi.org/v2/top-headlines?' +
'country=in&'+ 
'pageSize=15&' +
 'page=1&'+
 'apiKey=80732b8fea5a4855a6728ee0eee12001';
 

let  getData=async ()=>{
    try {
         let res =await fetch(`https://newsapi.org/v2/everything?q=india&sortBy=relevancy&apiKey=80732b8fea5a4855a6728ee0eee12001`)
    let data =await res.json()
    let new_data=data.articles
    console.log(new_data)
    appenddata(new_data)
    } catch (error) {
        console.log(error)
    }
   
}
 getData()

let appenddata=(data)=>{
    let content=document.getElementById('content_container_2')
    let no_new=0
    data.forEach(({urlToImage,title,url})  => {
        if(urlToImage!=undefined&&no_new<=25){
        let box1=document.createElement('div')
        box1.addEventListener('click',function(){
            box1.addEventListener('click',function(){
                window.open(url)
               
                        
            })
        })
        let imag=document.createElement('img')
        imag.src=urlToImage
        let box=document.createElement('div')
        let headl=document.createElement('p')
        headl.innerText=title
        box.append(headl)
        box1.append(imag,box)
        content.append(box1)
        }
        no_new++

        
    });
}
const getmustread=async ()=>{
    try {
        let res =await fetch(url+'&category=sports&category=entertainment')
        let data =await res.json()
        let nedata= data.articles
        console.log(nedata)
        appenddatamustread(nedata)
        
    } catch (error) {
        
    }
  
}
getmustread()

let appenddatamustread=(data)=>{
    let content=document.getElementById('MUST_READ')
    data.forEach(({urlToImage,title,url})  => {
        if(urlToImage!=undefined){
        let box1=document.createElement('div')
        box1.addEventListener('click',function(){
            box1.addEventListener('click',function(){
                window.open(url)
               
                        
            })
        })
        let imag=document.createElement('img')
        imag.src=urlToImage
        let box=document.createElement('div')
        let headl=document.createElement('p')
        headl.innerText=title
        box.append(headl)
        box1.append(imag,box)
        content.append(box1)
        }

        
    });
}

const getswapData=async ()=>{
   try {
    let res =await fetch(`https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=80732b8fea5a4855a6728ee0eee12001`)
    let data =await res.json()
    let new_data=data.articles
    getDataswap(new_data)
   } catch (error) {
     console.log(error)
   }
   
}
 getswapData()

let newsqury=JSON.parse(localStorage.getItem('newsobj'))
let  getData_news=async (page_number)=>{
   try {
    let urm = `https://newsapi.org/v2/everything?q=${newsqury.query}&sortBy=publishedAt&apiKey=80732b8fea5a4855a6728ee0eee12001&language=en&pageSize=20&page=${page_number}`;
    let res =await fetch(urm)
    let data =await res.json()
    let new_data=data.articles
    console.log(new_data)
     appendallnews(new_data)
     appendlivevlogs(new_data)
   } catch (error) {
    
   }
    
}

let j=1
window.onload=getData_news(j)

const appendallnews=(data)=>{
    let city_news=document.getElementById('city_news')
    let nam=document.createElement('h2')
    nam.innerText=newsqury.query.toUpperCase()
    let nam2=document.createElement('p')
    nam2.innerText=newsqury.query.toLowerCase()
    document.getElementById('query_name').append(nam2)
    city_news.append(nam)
    let container=document.getElementById('news_container')
    container.innerHTML=""
     data.forEach(el => {
        let box=document.createElement("div")
        box.setAttribute("class","news_container_inner")
        box.addEventListener('click',function(){
            window.open(el.url)
           
                    
        })
        let boximg=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.urlToImage
        boximg.append(image)
        let boxcontent=document.createElement("div")
        let date=document.createElement("p")
        date.innerText=el.publishedAt
        let tle =document.createElement("h4")
        tle.innerText=el.title
        let descr=document.createElement("h6")
        descr.innerText=el.description
        boxcontent.append(tle,date,descr)
        let line=document.createElement("hr")
        box.append(boximg,boxcontent)
        container.append(box,line)

        
        
     });
}

const showButton=(result,per_page)=>{
    
    document.getElementById("news_buttoon").innerHTML=""
    let buttons=Math.ceil(result/per_page)
    for(let i=1;i<=buttons;i++){
        let btn=document.createElement('button')
        btn.innerHTML=i
        btn.addEventListener("click",function(){
             getData_news(i)
        })
        document.getElementById("news_buttoon").append(btn)
    }
}

showButton(100,20)
const appendlivevlogs=(data)=>{
    let livevloges=document.getElementById("livevloges")
    let box=document.createElement('div')
    let cout=0
    data.forEach(({title}) => {
        if(cout<4){
        let box1=document.createElement('div')
        let ttl=document.createElement('p')
        ttl.setAttribute("font-weight",'medium')
        ttl.innerText=title
        box1.append(ttl)
        box.append(box1)
        cout++
        }
    });
    livevloges.append(box)

}

function serchfunction(){
    let obj={
        query:document.getElementById('search').value
    }
    
    localStorage.setItem('newsobj',JSON.stringify(obj))
    window.location.href="search.html"
}