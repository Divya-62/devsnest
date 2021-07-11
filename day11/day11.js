

var question=[ 
    {"h": "What is Loki's title?", "op1":"God of Mischief", "op2":"God of Pranks", "op3":"God of Tricks", "op4":"God of Evil" , "ans":"op1"}, 
    {"h": "Who is the original owner of Reality Stone?", "op1":"The Asgardians", "op2":"The Dark Elves", "op3":"The Humans", "op4":"The Collector" , "ans":"op2"},
    {"h": "Who helped retrieve Yondu's Yaka Arrow controller?", "op1":"Star Lord", "op2":"Drax the Distroyer", "op3":"Rocket", "op4":"Groot" , "ans":"op4"}, 
    {"h": "What type of radiation caused Bruce to become Hulk?", "op1":"Alpha rays", "op2":"Gamma rays", "op3":"Neutron rays", "op4":"Beta rays" , "ans":"op2"},
    {"h": "What does the 'S' in S.H.I.E.L.D stand for?", "op1":"State", "op2":"Special", "op3":"Strategic", "op4":"Supreme" , "ans":"op3"}
];

var q=document.querySelector(".ques");
var b1=document.querySelector("#op1");
var b2=document.querySelector("#op2");
var b3=document.querySelector("#op3");
var b4=document.querySelector("#op4");

var i=0, score=0;
function putQues()
{
    q.innerText=question[i].h;
    b1.innerText=question[i].op1;
    b2.innerText=question[i].op2;
    b3.innerText=question[i].op3;
    b4.innerText=question[i].op4;
}

document.querySelector("#play-again").addEventListener('click', () => {
    window.location.reload();
});
var selectButton=document.querySelectorAll(".buttons");
var e=document.querySelector(".enter");
e.addEventListener('click', () =>{
    e.style.display="none";
    document.querySelector(".quizS").style.display="block";
    putQues();
    selectButton.forEach(but =>{
        but.addEventListener('click', () =>{
            if(i>=5)
                return ;
            if(but.id==question[i].ans)
            {
                score++;
            }
            i++;
            setTimeout(() => {
                document.querySelector(".quizS").classList.remove();
                document.querySelector(".quizS").classList.remove();
                if(i>=5)
                {
                    document.querySelector(".quizS").style.display="none";
                    document.querySelector(".result").style.display="block";
                    document.querySelector("#res").innerText=`YOU SCORED ${score}/${question.length}`;
                    return ;
                }
            putQues();
            },500);
            document.querySelector(".quizS").classList.add();
            document.querySelector(".quizS").classList.add();
        });
    });
});

