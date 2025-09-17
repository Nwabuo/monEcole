const overView = {
    registration: "Candidates register via accredited CBT centers with biometric data and personal information",
    selectInstitute: "You can choose up to four institutions — a mix of universities, polytechnics, and colleges.",
    Examination:"Use of English (compulsory)<br/>Three other subjects based on your intended course of study.",
    releaseResult: "UTME results are typically released within 48–72 hours of the exam.",
    postUTME: "After UTME, many universities conduct their own post-UTME screening or exams.",
    CAPS_Admission: "The Central Admissions Processing System (CAPS) is the official portal where students can accept or reject admission offers"
}

console.log(typeof (document.querySelector('.link')));

const navlink = document.querySelector('.link');



function sayHello (){
    console.log('hello');
}

function whatsAppy(goingTo){
    if(goingTo == "chat me"){
    let phoneNumber = "2347061473780";
    let url = "https://wa.me/" + phoneNumber;
    window.open(url, "_blank");}
    else{
        let groupLink = "https://chat.whatsapp.com/EyTvOlEXJUz7HN57vT3phX?mode=ac_t";
    window.open(groupLink, "_blank");}  
}

//https://chat.whatsapp.com/EyTvOlEXJUz7HN57vT3phX?mode=ac_t


const navButton = document.querySelector('.hamburger');

console.log(navButton);

let droppedDown = false;


const dropMenu = function(){
    if (!droppedDown) {
        document.querySelector('.center').classList.add('disappear');
        console.log(document.querySelector('.center').classList);
        document.querySelector('.top').classList.add("topper");
        document.querySelector('.bottom').classList.add('bottomer');

        //drop down
        document.querySelector('.nav-list').classList.add('dropDown')
        
        droppedDown = true;
    }
        else if(droppedDown) {
        document.querySelector('.center').classList.remove('disappear');
        document.querySelector('.top').classList.remove("topper");
        document.querySelector('.bottom').classList.remove('bottomer');

        //drop it down
        document.querySelector('.nav-list').classList.remove('dropDown'); 
        droppedDown = false;
    }
}


navButton.addEventListener('click', dropMenu);

