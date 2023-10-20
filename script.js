let searchImgInput=document.querySelector(".searchContainer input");
let searchResult=document.querySelector(".imageContainer");
let searchBtn=document.querySelector(".searchBtn");
let showMoreBtn=document.querySelector(".showMoreBtn");
console.log(searchResult)

let accessKey="8TjOMyeJH8hB7NFZdYDhaes2KtLfOI9JDh8uL055mNM";
let secretKey="LDX2MgsIl5UhinXAjTXDs70YeGuVv4XaQkTU0ueqCgc";

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchImgInput.value;
    if(keyword!=""){
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
        const response= await fetch(url);
        const data=await response.json();
        console.log(data);
        const results=data.results;
        results.map((result)=>{
            const image=document.createElement("img");
            image.src=result.urls.small;
            const imageLink=document.createElement("a");
            imageLink.href=result.links.html;
            imageLink.target="_blank";
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        })
        showMoreBtn.style.display="block";
    }
}

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
searchBtn.addEventListener("click",()=>{
    searchImages();
});

window.addEventListener("scroll",(e)=>{
    if(pageYOffset>=158){
        document.querySelector(".scroll").classList.add("show");
    }
    if(pageYOffset<157){
        document.querySelector(".scroll").classList.remove("show");
    }
})

document.querySelector(".scroll").addEventListener("click",()=>{
    window.scrollTo({top: 0 , behavior: 'smooth' })
})