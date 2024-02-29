// Check Sub
if (localStorage.getItem("subEmailKhedmaty")) {
    console.log("Yeaah");
} else {
    window.location = "subscribe.html" ;
}

// Draw Cards
let topics = [
    {
        id: 1 ,
        icon: "bx bxs-pie-chart-alt-2" ,
        heading: "فقرات" ,
        desc: "ها تلاقي فقرات كتير تقدر تقدمها في أجتماعك و تحسن مستوي الخدمة و كمان لو عندك أقتراح ينفع تضيفه و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    {
        id: 2 ,
        icon: "bx bxs-notepad" ,
        heading: "توزيع ورق" ,
        desc: "في حاجات كتير تقدر توزعها علي المخدومين و في أمثلة لو عاوز تشوف تطبيق علي الفكرة و تقدر تضيف أقتراح من عندك و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    // {
    //     id: 3 ,
    //     icon: "bi bi-lightbulb-fill" ,
    //     heading: "أفكار ورش" ,
    //     desc: "يوجد الكثير من الافكار الذي يمكنك تطبيقها عمليا مثل مشاريع بالخشب و أشياء أخري و تقدر تضيف أقتراح من عندك و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
    //     publisher: "كنيسة العذراء و مارمينا المرج" ,    
    // },

    {
        id: 3 ,
        icon: "bi bi-newspaper" ,
        heading: "مواضيع دينية" ,
        desc: "يوجد مواضيع كثيرة مثل القيامة و أشياء أخري و العناصر و الموضوع كامل و تقدر تضيف قتراح من عندك و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    {
        id: 4 ,
        icon: "bi bi-question-square-fill" ,
        heading: "أسئلة و أجوبة" ,
        desc: "يوجد الكثير من الأسئلة الدينية و اجوابتها لمعرفة بعض الأسئلة و تزيد معلوماتك و تقدر تضيف قتراح من عندك و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },

    // {
    //     id: 5 ,
    //     icon: "bi bi-table" ,
    //     heading: "طريقة تسجيل غياب" ,
    //     desc: "هنا ستجد الطرق اللتي يمكنك أن تسجل بها حضور للشباب و تقدر تضيف قتراح من عندك و لو اللي قمت بأضافته شئ جميل سوف يتم أضافته في الموقع" ,
    //     publisher: "كنيسة العذراء و مارمينا المرج" ,    
    // },

    {

        id: 5 ,
        icon: "bx bxs-videos" ,
        heading: "فيديوهات تعليمية" ,
        desc: "يوجد الكثير من الفيديوهات التعليمية و يمكنك عرضها في الاجتماع او ... و الوعظات و الكثير من الاشياء علي شكل فيديوهات يمكنك تحميلهم أو مشاهدتهم لا تنسي تفقط القناة  " ,
        publisher: "كنيسة العذراء و مارمينا المرج" ,    
    },
];
  
window.onload = function() {
    localStorage.setItem("topics" , JSON.stringify(topics));
}
  
var servicesContainer = document.querySelector(".services-container");
  
function drawTopices() {
    let productUi = topics.map((item) => {
    return `
        ${item.new ? `<span class="new">${item.new}</span>` : "" }
        <div class="services-box">
            <i class='${item.icon}'></i>
            <h3>${item.heading}</h3>
            <p>${item.desc}</p>
            <p><b>${item.publisher}</b></p>
            <a href="#" onclick="saveTopic(${item.id})" class="btn">Read More</a>
        </div>
        `;
    });
    localStorage.setItem("topics" , JSON.stringify(topics));
    servicesContainer.innerHTML = productUi.join(''); 
}
drawTopices();

function saveTopic(id) {
    localStorage.setItem("MainID" , id);
    window.location = "html/allTop.html" ;
}

// function searchCards() {
// var input, filter, cards, card, title, i;
// input = document.getElementById("searchInput");
// filter = input.value.toUpperCase();
// cards = document.getElementById("cards");
// card = cards.getElementsByClassName("servicesQuote-card");

// for (i = 0; i < card.length; i++) {
//     title = card[i].getElementsByClassName("title")[0];
//     if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         card[i].style.display = "";
//     } else {
//         card[i].style.display = "none";
//     }
// }
// }
  
// Btn Top , Down
var topBtn = document.querySelector(".top");
var bottomBtn = document.querySelector(".bottom");
var topI = document.querySelector(".top i");

bottomBtn.addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
  
  
window.onscroll = function() {
    if (scrollY <= 500) {
        topBtn.style.display = "none" ;
        bottomBtn.style.display = "block" ;
    }

    else {
        topBtn.style.display = "block" ;
        bottomBtn.style.display = "none" ;
    }
}