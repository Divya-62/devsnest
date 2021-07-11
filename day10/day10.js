

let x;

let words=["Manifest","Lucifer","Elite","Sweet Tooth","Money Heist","The Office","Brooklyn Nine-Nine","Friends"]
words=[...words, ...words];
let gameAct=true;

for (let i = 0; i <16; i++) {
    let card=  document.createElement("div");
    card.classList.add("flip-card");

    let inner=  document.createElement("div");
    inner.classList.add("flip-card-inner");

    let front=  document.createElement("div");
    front.classList.add("flip-card-front");

    let back=  document.createElement("div");
    let ran_dom=(Math.floor(Math.random()*(16-i)));
    back.innerHTML="<h2>"+words[ran_dom]+"</h2>";
    words.splice(ran_dom,1);
    back.classList.add("flip-card-back");

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    document.getElementById("grid").appendChild(card);
}

let clickedCard;
let cards=document.getElementsByClassName("flip-card");

for(let card of cards){
    card.addEventListener("click",()=>{
       
        if(clickedCard){
            card.firstChild.classList.add("flipped");
           
            if(card===x){
                
                alert("You have clicked same card twice");
            } 
            else{
            setTimeout(()=>{
                if(card.firstChild.lastChild.innerHTML !== clickedCard.firstChild.lastChild.innerHTML){
                    card.firstChild.classList.remove("flipped");
                    clickedCard.firstChild.classList.remove("flipped");
                }
                else{
                    
                    card.style.visibility="hidden";
                    clickedCard.style.visibility="hidden";

                }
                clickedCard=undefined;
                gameAct=true;
            },1000);
        }
        }
        
        else{
            clickedCard=card;
            x=card;
            card.firstChild.classList.add("flipped");
        }
    })
}
