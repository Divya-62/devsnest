const btn = document.querySelector('button');
const input = document.querySelector('input');

// async function getData(username){
//     const result= await fetch(`https://api.github.com/users/${username}`);
//     const data = await result.json();
//     return data;
// }
btn.addEventListener('click' , async()=>{
     const username  =input.value;
    // let response = getData(username);
    // let user = await response;

    // console.log(user);
    // const result;
    fetch(`https://api.github.com/users/${username}`)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("direct").innerHTML ="click on the image below";
        document.getElementById("result").innerHTML =`
        <a target="_blank" href="https://www.github.com/${username}"><img src="${data.avatar_url}"/></a>`
    
    })
    
})