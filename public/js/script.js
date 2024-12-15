function ham_open(){
    let open=document.getElementById("navbarmobile");
    let scrollDeactive=document.getElementById('index');
    open.style.display="block";
    scrollDeactive.style.overflow="hidden";
}

function ham_close(){
    let close=document.getElementById("navbarmobile");
    let scrollActive=document.getElementById('index');
    scrollActive.style.overflow="scroll";
    close.style.display="none";
}

function lightMode(){
    let light=document.getElementById("indexMain");
    let lightIcon=document.getElementById("lightMode");
    let darkIcon=document.getElementById("darkMode");
    light.style.backgroundColor="white";
    light.style.color="black";
    lightIcon.style.display="none";
    darkIcon.style.display="block";
}   
function darkMode(){
    let dark=document.getElementById("indexMain");
    let darkIcon=document.getElementById("darkMode");
    let lightIcon=document.getElementById("lightMode");
    dark.style.backgroundColor="black";
    dark.style.color="white";
    darkIcon.style.display="none";
    lightIcon.style.display="block";

}