// Check Sub
if (localStorage.getItem("subEmailKhedmaty")) {
    console.log("Yeaah");
} else {
    window.location = "../subscribe.html" ;
}

window.addEventListener("DOMContentLoaded", function () {
    var darkon = localStorage.getItem("DarkLightMode");
    if (darkon == "on") {
    darkmode();
    }

});
    
var fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", function () {
    toggleFullScreen();
    if (document.fullscreenEnabled) {
        toggleFullScreen();
    } else {
        alert("Fullscreen not supported.");
    }
});
    
function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }

  setTimeout(function () {
    window.scrollBy(0, 1);
  }, 100);
  
  updateFullscreenIcon();
}
    
function updateFullscreenIcon() {
  var fulllIcon = document.getElementById("fullscreenButton");

  if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    fulllIcon.classList.add("bx-fullscreen");
    fulllIcon.classList.remove("bx-exit-fullscreen");
  } else {
    fulllIcon.classList.add("bx-exit-fullscreen");
    fulllIcon.classList.remove("bx-fullscreen");
  }
}
    
// Dark Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const landing = document.querySelector('.landing');
const whyWeRead = document.querySelector('#whyWeRead');
const services = document.querySelector('#services');
const addH = document.querySelector('.add-h');
const navH = document.querySelector('nav');

function darkmode() {
  toggle.classList.toggle('bi-brightness-high-fill');
  if(toggle.classList.toggle('bi-moon')){
      body.style.background = '#fff';
      body.style.color = 'black';
      
      landing.style.color = 'black';
      landing.style.background = 'white';

      services.style.color = '#fff';
      services.style.background = '#fff';

      navH.style.background = 'black';

      whyWeRead.style.background = "#eee" ;
      whyWeRead.style.color = "#000" ;

      addH.style.background = "#eee" ;
      addH.style.color = "#000" ;
  } else{
      navH.style.background = '#1f243d';

      body.style.background = '#1f242d';
      body.style.color = 'white';

      landing.style.color = 'white';
      landing.style.background = '#1f242d';

      whyWeRead.style.background = "#323946" ;
      whyWeRead.style.color = "#fff" ;

  
      services.style.color = '#fff';
      services.style.background = '#1f242d';

      addH.style.background = "#323946" ;
      addH.style.color = "#fff" ;
  }
}
    
toggle.addEventListener('click', function() {
  localStorage.setItem("DarkLightMode", toggle.classList.contains('bi-moon') ? "on" : "Off");
  darkmode();
});
  
// New Message
// var newMessage = document.querySelector(".newMessage");
// var newUpdateLocal = localStorage.getItem("Update1-BK")

// if (newUpdateLocal) {
//   newMessage.style.display = "none" ;
//   newMessage.style.opacity = "0" ;
//   newMessage.style.visibility = "hidden" ;
// } else {
//   newMessage.style.display = "block" ;
//   newMessage.style.opacity = "1" ;
//   newMessage.style.visibility = "visible" ;
// }
  
//   let NewMessage = [
//     {
//         id: 6 ,
//         icon: "bx bxs-cog" ,
//         heading: "The New Update 1" ,
//         iconheading: "🌟🚀" ,
//         time: "In 16/2/2024",
//         desc: "what's new ? <br/><br/> * You Can Download Any Book In English Or In Arabic <br/> * You Can Add A Book To The Web And Write Your Name <br/> * Added A Page For Top Books <br/> * Added A Page For All Books <br/> * And A Quote Page " ,
//         btnContent: "OK",
//     },
//   ];
  
//   function drawMSG() {
//     let updatesME = NewMessage.map((msg) => {
//         return `
//         <div class="message-content">
//             <i class='${msg.icon}'></i>
//             <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
//             <span>${msg.time}</span>
//             <p>${msg.desc}</p>
//             <button onclick="sound()" type="button" class="okBtnUpdate">${msg.btnContent}</button>
//         </div>
//         `;
//     });
  
//     newMessage.innerHTML = updatesME.join(''); 
//   }
//   drawMSG();
  
//   var SendUpdate = document.querySelector(".okBtnUpdate");
  
//   SendUpdate.addEventListener('click' , function() {
//     localStorage.setItem("Update1-BK" , JSON.stringify("Updated"));
  
//     // var itemsToRemove = ["LastUpdate"];
//     // itemsToRemove.forEach(function(item) {
//     //   localStorage.removeItem(item);
//     // });
  
//     newMessage.style.display = "none" ;
//   })
  
//   // New Message
//   var subscribeMessage = document.querySelector(".subscribeMessage");
//   var subscribedYT = localStorage.getItem("subscribedYT-BK")
  
//   if (subscribedYT) {
//     subscribeMessage.style.display = "none" ;
//     subscribeMessage.style.opacity = "0" ;
//     subscribeMessage.style.visibility = "hidden" ;
//   } else {
//     subscribeMessage.style.display = "block" ;
//     subscribeMessage.style.opacity = "1" ;
//     subscribeMessage.style.visibility = "visible" ;
//   }
  
//   let SubMessages = [
//     {
//         id: 1 ,
//         icon: "bx bxl-youtube" ,
//         heading: "Support Me" ,
//         iconheading: "🌟🚀" ,
//         time: "In 15/2/2024",
//         desc: "The least you can do to help me or support me is to subscribe to my YouTube channel. I hope you will be honest and help me. Thank you." ,
//     },
//   ];
  
//   function drawSubMSG() {
//     let updatesME = SubMessages.map((msg) => {
//         return `
//         <div class="subscribeMessage-content">
//             <i class='${msg.icon}' style="color: red;"></i>
//             <h3>${msg.heading} <span> ${msg.iconheading}</span></h3>
//             <p>${msg.desc}</p>
//             <button onclick="sound()" type="button" class="subBtn">Subscribe</button>
//         </div>
//         `;
//     });
  
//     subscribeMessage.innerHTML = updatesME.join(''); 
//   }
//   drawSubMSG();
  
//   var SendUpdate = document.querySelector(".subBtn");
  
//   SendUpdate.addEventListener('click' , function() {
//     localStorage.setItem("subscribedYT-BK" , JSON.stringify("Subscribed"));
//     subscribeMessage.style.display = "none" ;
//     window.location = "https://youtube.com/@programmerfero" ;
//   })
  
  // Menu Icon
  let menu_icons = document.querySelector('.menu-icons'),
  nav = document.querySelector('nav');
  
  menu_icons.addEventListener('click', () => {
      nav.classList.toggle('active');
  });
  
  