function ham_open(){
    let open=document.getElementsByClassName("navbarLinksMobile");
    for(let i=0;i<open.length;i++){
        open[i].style.display="block";
    }

    let scrollDeactive=document.getElementsByClassName('index');
    for(let i=0;i<scrollDeactive.length;i++){
        scrollDeactive[i].style.overflowY="hidden";
    }

}

function ham_close(){
    let close=document.getElementsByClassName("navbarLinksMobile");
    for(let i=0;i<close.length;i++){
        close[i].style.display="none";
    }

    let scrollActive=document.getElementsByClassName('index');
    for(let i=0;i<scrollActive.length;i++){
        scrollActive[i].style.overflowY="scroll";
    }

}



function lightMode(){
    let light=document.getElementById("indexMain");
    let lightIcon=document.getElementById("lightMode");
    let darkIcon=document.getElementById("darkMode");
    let backToTop=document.getElementById("backToTop");
    light.style.backgroundColor="white";
    light.style.color="black";
    lightIcon.style.display="none";
    darkIcon.style.display="block";
    backToTop.style.backgroundColor="black";

    let backTo=document.getElementsByClassName("whiteTheme");
    for(let i=0;i<backTo.length;i++){
        backTo[i].style.backgroundColor="white";
    }

           
    let linkBtn=document.getElementsByClassName("whiteTheme");
    for(let i=0;i<linkBtn.length;i++){
        linkBtn[i].style.color="black";
    }

}   
function darkMode(){
    let dark=document.getElementById("indexMain");
    let darkIcon=document.getElementById("darkMode");
    let lightIcon=document.getElementById("lightMode");
    let backToTop=document.getElementById("backToTop");
    dark.style.backgroundColor="black";
    dark.style.color="white";
    darkIcon.style.display="none";
    lightIcon.style.display="block";
    backToTop.style.backgroundColor="white";

    let backTo=document.getElementsByClassName("whiteTheme");
    for(let i=0;i<backTo.length;i++){
        backTo[i].style.backgroundColor="black";
    }

    let linkBtn=document.getElementsByClassName("whiteTheme");
    for(let i=0;i<linkBtn.length;i++){
        linkBtn[i].style.color="white";
    }


}