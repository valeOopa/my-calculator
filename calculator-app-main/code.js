"use strict";

//* MAIN
const main = document.getElementById("main");

//* ZONA ALTA
const headerTitle = document.getElementById("header__title");
const themeText = document.getElementById("theme-text");
const selectorControl = document.getElementById("selectorControl");
const bola = document.querySelector(".bola");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");


//* ZONA MEDIA
const screen = document.getElementById("screen");

//* ZONA BAJA
const panel = document.getElementById("panel");
const buttons = document.querySelectorAll("button");
//? BOTONES DIFERENTES
const btnDel = document.getElementById("btn-del");
const btnReset = document.getElementById("btn-reset");
const btnEquals = document.getElementById("btn-equals");

const changeColor = (mainbG,titleColor,themeColor,
                     screenbG,screenColor,labelColor,labelbG,bolabG,
                     panelbG,
                     btnbG,btnbB,btnColor,
                     delbG,delbB,delColor,
                     resetbG,resetbB,resetColor,
                     equalsbG,equalsbB,equalsColor,) => {

    for(let button of buttons){
        button.style.background = btnbG;
        button.style.borderBottom =  btnbB;
        button.style.color = btnColor;
    };

    main.style.background = mainbG;
    headerTitle.style.color = titleColor;
    themeText.style.color = themeColor;
    for(let label of labels){
        label.style.color = labelColor;
        label.style.setProperty("--backgroundColor", labelbG);
    };
    bola.style.background = bolabG;

    screen.style.background = screenbG;
    screen.style.color = screenColor;

    panel.style.background = panelbG;
    btnDel.style.background = delbG
    btnDel.style.borderBottom =  delbB
    btnDel.style.color = delColor;

    btnReset.style.background = resetbG;
    btnReset.style.borderBottom =  resetbB;
    btnReset.style.color = resetColor;

    btnEquals.style.background = equalsbG;
    btnEquals.style.borderBottom =  equalsbB;
    btnEquals.style.color = equalsColor;

    
};

for(let label of labels){
    label.addEventListener("click",()=>{
        if(label.getAttribute("for") === "select1") {
            changeColor("hsl(222, 26%, 31%)","#fff","#fff",
                        "hsl(224, 36%, 15%)","#fff","#fff","hsl(223, 31%, 20%)","hsl(6, 63%, 50%)",
                        "hsl(223, 31%, 20%)",                   //!DARK MODE
                        "hsl(30, 25%, 89%)","3px solid hsl(28, 16%, 65%)","hsl(221, 14%, 31%)",
                        "hsl(225, 21%, 49%)","3px solid hsl(224, 28%, 35%)","#fff",
                        "hsl(225, 21%, 49%)","3px solid hsl(224, 28%, 35%)","#fff",
                        "hsl(6, 63%, 50%)","3px solid hsl(6, 70%, 34%)","#fff");
        }
        else if(label.getAttribute("for") === "select2") {
            changeColor("hsl(0, 0%, 90%)","hsl(60, 10%, 19%)","hsl(60, 10%, 19%)",
                        "hsl(0, 0%, 93%)","hsl(60, 10%, 19%)","hsl(60, 10%, 19%)","hsl(0, 5%, 81%)","hsl(25, 98%, 40%)",
                        "hsl(0, 5%, 81%)",                      //!WHITE MODE
                        "hsl(45, 7%, 89%)","3px solid hsl(35, 11%, 61%)","hsl(60, 10%, 19%)",
                        "hsl(185, 42%, 37%)","3px solid hsl(185, 58%, 25%)","#fff",
                        "hsl(185, 42%, 37%)","3px solid hsl(185, 58%, 25%)","#fff",
                        "hsl(25, 98%, 40%)","3px solid hsl(25, 99%, 27%)","#fff");
        }
        else if(label.getAttribute("for") === "select3") {
            changeColor("hsl(268, 75%, 9%)","hsl(52, 100%, 62%)","hsl(52, 100%, 62%)",
                        "hsl(268, 71%, 12%)","hsl(52, 100%, 62%)","hsl(52, 100%, 62%)","hsl(268, 71%, 12%)","hsl(176, 100%, 44%)",
                        "hsl(268, 71%, 12%)",                      //!VIOLET MODE
                        "hsl(268, 47%, 21%)","3px solid hsl(290, 70%, 36%)","hsl(52, 100%, 62%)",
                        "hsl(281, 89%, 26%)","3px solid hsl(285, 91%, 52%)","#fff",
                        "hsl(281, 89%, 26%)","3px solid hsl(285, 91%, 52%)","#fff",
                        "hsl(176, 100%, 44%)","3px solid hsl(177, 92%, 70%)","hsl(198, 20%, 13%)");
        };
    });
};
let lastToggle;


for(let button of buttons){
    let screenText = screen.textContent;
    button.addEventListener("click",e=>{
        lastToggle = e.target.textContent;
        screenText = screen.textContent;
        if(button.id === "btn-del") {
            screenText = screen.textContent;
            screen.textContent = screenText.slice(0,-1);
        }
        else if(button.id === "btn-reset") {
            screen.textContent = null;
        }
        else if(button.id === "btn-equals") {
            try{
                screenText = screen.textContent;
                screenText = screen.textContent.replace("x","*"); 
                let operation = eval(screenText);    
                screen.textContent = operation;
            }catch{
                alert("Inserte una operación válida.");
                screen.textContent = null;
            };
        }
        else{
            screen.textContent += button.textContent;    
        };
    });
};

    


console.log(screen.textContent);