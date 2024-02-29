// Check Sub
if (localStorage.getItem("subEmailKhedmaty")) {
    console.log("Yeaah");
} else {
    window.location = "../subscribe.html" ;
}

let OrgProducts = JSON.parse(localStorage.getItem("topics"));
let productId = localStorage.getItem("MainID");
let productsDetails = OrgProducts.find((item) => item.id == productId);
var servicesContainer = document.querySelector(".services-container");

window.onload = function() {
    if (localStorage.getItem("MainID") == null) {
        window.location = "../index.html#services" ;
    }
    localStorage.setItem("AllCoursesFind" , JSON.stringify(AllCoursesFind));
}


let Parts = [
    {
        id: 1 ,
        icon: "bx bxs-music" ,
        heading: "ترانيم" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    {
        id: 2 ,
        icon: "bx bxs-book" ,
        heading: "دراسة كتاب" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    {
        id: 3 ,
        icon: "bx bxs-joystick" ,
        heading: "العاب" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    {
        id: 4 ,
        icon: "bx bxs-hand" ,
        icon2: "bx bxs-hand" ,
        heading: "صلاة" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

];

let Paper = [
    {
        id: 1 ,
        icon: "bx bxs-quote-alt-left" ,
        heading: "أقوال أباء" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
        file: "../assest/Files/Paper/Word/Fathers' sayings - PF.docx" ,
        btn: "btn"
    },

    {
        id: 2 ,
        icon: "bi bi-card-list" ,
        heading: "أيات" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Paper/Pdf/verses.pdf" ,
        btn: "btn"
    },

    {
        id: 3 ,
        icon: "bi bi-battery-charging" ,
        heading: "مقولات تشجيعية" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Paper/Pdf/quotes.pdf" ,
        btn: "btn"
    },

    {
        id: 4 ,
        icon: "bx bxs-info-circle" ,
        heading: "معلمومات عامة" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Paper/Word/All-Informations.docx" ,
        btn: "btn"
    },


    
];

let TopicesD = [
    {
        id: 1 ,
        icon: "bx bxs-book" ,
        heading: "القيامة" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
        file: "../assest/Files/Topices/Pdf/After Death.pdf" ,
        btn: "btn"
    },
];

let Q_A = [
    {
        id: 1 ,
        icon: "bx bx-question-mark" ,
        heading: "مسابقة أسئلة عامة 1" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
        file: "../assest/Files/Q&A/Q&A 1.pptx" ,
        btn: "btn"
    },

    {
        id: 2 ,
        icon: "bx bx-question-mark" ,
        heading: "مسابقة أسئلة عامة 2" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Q&A/Q&A 2.pptx" ,
        btn: "btn"
    },

    {
        id: 3 ,
        icon: "bx bx-question-mark" ,
        heading: "مسابقة أسئلة عامة 3" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Q&A/Q&A 3.pptx" ,
        btn: "btn"
    },

    {
        id: 4 ,
        icon: "bx bx-question-mark" ,
        heading: "مسابقة أسئلة عن الميلاد" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,  
        file: "../assest/Files/Q&A/Q&A Merry Chrismats.pptx" ,
        btn: "btn"
    },


    
];


let Videos = [

    {
        id: 1 ,
        icon: "bx bxs-videos" ,
        heading: "هدية الكريسماس 🎁" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,   
        URL: "https://youtu.be/Q9Yqqc-XsTs?feature=shared" ,
        btnYT: "btnYT" ,
    },

    {
        id: 2 ,
        icon: "bx bxs-videos" ,
        heading: "تذمر علي طفل فقير و الاخر مشلول" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,   
        URL: "https://youtu.be/jOZ9xjWP3WI?feature=shared" ,
        btnYT: "btnYT" ,
    },

    {
        id: 2 ,
        icon: "bx bxs-videos" ,
        heading: "فيلم البطل المجهول" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,   
        URL: "https://youtu.be/qJxy_HjuN5E?feature=shared" ,
        btnYT: "btnYT" ,
    },
    
    
];


var setitle = document.querySelector(".sec-title");

var AllCoursesFind;
var projectName;

switch (productId) {
    case "1":
        AllCoursesFind = Parts ;
        projectName = "فقرات";
        break;

    case "2":
        AllCoursesFind = Paper ;
        projectName = "توزيع ورق";
    break;

    case "3":
        AllCoursesFind = TopicesD ;
        projectName = "مواضيع دينية";
    break;

    case "4":
        AllCoursesFind = Q_A ;
        projectName = "أسئلة و أجوبة";
    break;

    
    case "5":
        AllCoursesFind = Videos ;
        projectName = "فيديوهات تعليمية";
        break;
        
        // case "5":
        //     AllCoursesFind = Parts ;
        //     projectName = "تسجيل غياب";
        // break;
        
    default:

    break;
}

setitle.innerHTML = projectName;


function drawCourseInfo() {
    let productUi = AllCoursesFind.map((item) => {
        return `
            ${item.new ? `<span class="new">${item.new}</span>` : "" }
            <div class="services-box">
                <i class='${item.icon}'></i>
                ${item.icon2 ? `<i class='${item.icon2}'></i>` : "" }
                
                <h3>${item.heading}</h3>

                ${item.desc ? `<p>${item.desc}</p>` : "" }
                <p><b>${item.publisher}</b></p>
                ${item.btn ? `<a href="${item.file}" class="btn">Download</a>` : ""}
                ${item.btnYT ? `<a href="${item.URL}" class="btn">Watch</a>` : ""}
                
                </div>
                `;
                
    });
    localStorage.setItem("AllCoursesFind" , JSON.stringify(AllCoursesFind));
    // localStorage.setItem("topics" , JSON.stringify(topics));
    servicesContainer.innerHTML = productUi.join(''); 
}
drawCourseInfo();

function searchCards() {
    var input, filter, cards, card, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    cards = document.getElementById("cards");
    card = cards.getElementsByClassName("services-box");

    for (i = 0; i < card.length; i++) {
        title = card[i].getElementsByTagName("h3")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}
  
function saveTopicShowD(id) {
    localStorage.setItem("topicShowID" , id);
    window.location = "showTopic.html" ;
}
