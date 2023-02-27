
const next = ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => 
   document.getElementById('img').src=data.message);
   let random = Math.floor(Math.random()*7);
   let myimg = document.getElementById('myimg').src = `images/${random}.jpg`;
}

