const btn = document.querySelector(".btn")
btn.addEventListener("click", short);
const copy =document.querySelector(".copy")
const newurl=document.getElementById("shorturl")

async function short() {
    let longurl = document.querySelector(".longurl").value;
    let shorturl = document.getElementById("shorturl")
    console.log(shorturl);
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
    const data = await result.json();
    shorturl.value = data.result.short_link2;
    console.log(data.result.short_link2);
}
copy.onclick=()=>{
newurl.select();
window.navigator.clipboard.writeText(newurl.value);
}