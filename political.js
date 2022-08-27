let newsqury=JSON.parse(localStorage.getItem('newsobj'))
function serchfunction(){
    let obj={
        query:document.getElementById('search').value
       
    }
    
    localStorage.setItem('newsobj',JSON.stringify(obj))
     window.location.href="search.html"
}
var url = 'https://newsapi.org/v2/top-headlines?' +
'country=in&'+ 
'pageSize=15&' +
 'page=1&'+
 'apiKey=80732b8fea5a4855a6728ee0eee12001';
//  80732b8fea5a4855a6728ee0eee12001
//  535406d3232541aebbaa0608736333dd
// 43952ba56a2e4570b47285bb77628cb6
// 448bb457b22b421b9064cdf0689e842c
 

let  getData=async ()=>{
    try {
         let res =await fetch(`https://newsapi.org/v2/everything?q=indian political news&sortBy=relevancy&apiKey=80732b8fea5a4855a6728ee0eee12001`)
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
        let res =await fetch(url)
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
    let res =await fetch(`https://newsapi.org/v2/everything?q=indian political news&sortBy=publishedAt&apiKey=80732b8fea5a4855a6728ee0eee12001`)
    let data =await res.json()
    let new_data=data.articles
     getDataswap(new_data)
   } catch (error) {
     console.log(error)
   }
   
}
 getswapData()
const getDataswap=(data)=>{
   let cout=0
   let container=document.getElementById("PULSE_NEWS")
     
   setInterval(() => {
    container.innerHTML=""
    let box=document.createElement("div")
    box.addEventListener('click',function(){
        box.addEventListener('click',function(){
            window.open(data[cout].url)
           
                    
        })     
    })
    box.setAttribute("id","PULSE_NEWS_1")
    let box1=document.createElement("div")
    let image=document.createElement("img")
    image.src=data[cout].urlToImage
    box1.append(image)
    let box2=document.createElement("div")
    let ttl=document.createElement("h3")
    ttl.innerText=data[cout].title
    box2.append(ttl)
    box.append(box1,box2)
    let lin=document.createElement("hr")
    container.append(box,lin)
    cout++
    if(cout==4){
        cout=0
    }

   },2000 )
   let EXPRESS=document.getElementById('EXPRESS')
   let EXPRESS_div1=document.createElement("div")
   EXPRESS_div1.addEventListener('click',function(){
            
})
   let image5=document.createElement("img")
   image5.src=data[5].urlToImage
   let title5=document.createElement("h5")
   title5.innerText=data[5].title

  EXPRESS_div1.append(image5,title5)
   let EXPRESS_div2=document.createElement("div")
   EXPRESS_div2.addEventListener('click',function(){
            
})
   let image6=document.createElement("img")
   image6.src=data[6].urlToImage
   let title6=document.createElement("h5")
   title6.innerText=data[6].title
   EXPRESS_div2.append(image6,title6)

 EXPRESS.append(EXPRESS_div1,EXPRESS_div2)

 let below_contar=document.getElementById('qys')
 let newscout=7
 data.forEach(el => {
    if(newscout<=7||newscout<10 ){
      let box_contr=document.createElement("div")
      box_contr.addEventListener('click',function(){
        window.open(data[newscout].url)
       
                
    })
      let bimg=document.createElement("img")  
      bimg.src= data[newscout].urlToImage
      let btitl=document.createElement("h6")
      btitl.innerText=data[newscout].title
      box_contr.append(bimg,btitl)
      below_contar.append(box_contr)
      newscout++
    }
   
    
 });
}
//everything?q=apple&from=2022-08-22&to=2022-08-24&sortBy=popularity&apiKey=API_KEY
let  getData_news=async (page_number)=>{
   try {
    // let urm = `https://newsapi.org/v2/everything?q=indian political news&sortBy=publishedAt&apiKey=43952ba56a2e4570b47285bb77628cb6&pageSize=20&page=${page_number}`;
    let res =await fetch(`https://newsapi.org/v2/everything?q=indian political news&sortBy=publishedAt&apiKey=80732b8fea5a4855a6728ee0eee12001&pageSize=20&page=${page_number}`)
    let data =await res.json()
    let new_data=data.articles
    console.log(new_data)
     appendallnews(new_data)
   } catch (error) {
    
   }
    
}

let j=1
window.onload=getData_news(j)

const appendallnews=(data)=>{
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
