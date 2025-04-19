const homeLink = document.getElementById('home-link');
const projectsLink = document.getElementById('projects-link');
const aboutLink = document.getElementById('about-link');
const autosignLink = document.getElementById('autosign-link');

// 手机把nav收成三条线
let btn = document.getElementById("nav-btn");
let nav = document.getElementById("nav-item");

let hide = true;

btn.addEventListener("click", function (event) {
    event.stopPropagation(); // 阻止事件冒泡，防止点击按钮时触发document的点击事件
    if (hide) {
        nav.style.display = "block";
        hide = false;
    } else {
        nav.style.display = "none";
        hide = true;
    }
});

// 监听整个页面的点击事件
document.addEventListener("click", function (event) {
    // 如果 nav 是可见的，并且点击的不是 btn 或 nav 本身，就隐藏 nav
    if (!hide && !nav.contains(event.target) && !btn.contains(event.target)) {
        nav.style.display = "none";
        hide = true;
    }
});



//在对应页面字体加粗
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index.html" ){
      homeLink.classList.add('active');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('notactive');
    }
    else if (currentPage === "projects.html") 
    {
      homeLink.classList.add('notactive');
      projectsLink.classList.add('active');
      aboutLink.classList.add('notactive');
    } 
    else if (currentPage === "about.html")
    {
      homeLink.classList.add('notactive');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('active');
    }
    else{
      homeLink.classList.add('notactive');
      projectsLink.classList.add('notactive');
      aboutLink.classList.add('notactive');
    }
  
    console.log("Current Page:", currentPage);
  });
  
  
  
  
  // 监听 projectsLink 和 autosignLink 的点击事件
  function setupNavigation() {
    const currentPage = window.location.pathname.split("/").pop();
    homeLink.addEventListener('click', (event) => {
      if (currentPage === 'index.html') {
        event.preventDefault(); // 阻止默认跳转行为
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // window.location.href = "index.html";
      } else {
        window.location.href = "index.html";
      }
    });
  
    autosignLink.addEventListener('click', (event) => {
      if (currentPage === 'index.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "index.html";
      }
    });
  
    projectsLink.addEventListener('click', (event) => {
      if ( currentPage === 'projects.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "projects.html";
      }
    });
  
    aboutLink.addEventListener('click', (event) => {
      if ( currentPage === 'about.html') {
        event.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        window.location.href = "about.html";
      }
    });
  }
  
//发邮件
document.querySelectorAll(".send-email, .footer-email").forEach(function(element) {
      element.addEventListener("click", function () {
          window.location.href = "mailto:claudia.mingdalin@outlook.com?subject=Hey%20Mingda";
      });
});
  

//跳转linkedin
document.addEventListener("DOMContentLoaded", function (){
  document.querySelector(".footer-linkdein").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/mingda-lin/", "_blank");
});
});

document.addEventListener("DOMContentLoaded", function (){
  document.querySelector(".footer-behence").addEventListener("click", function () {
    window.open("https://www.behance.net/mingdalin", "_blank");
});
});




//projects卡片点击进入对应的project
document.querySelectorAll(".project-container").forEach((container, index) => {
    container.addEventListener("click", function () {
        const urls = [
            "/projects/Loan.html",  
            "/projects/RequestManagement.html",
            "/projects/Repayment.html",  
            "/projects/DesignSystem.html", 
            "/projects/SharePoint.html",  
            "/projects/Inside9.html",  
        ];

        let basePath = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/");

        if (urls[index]) {
            window.location.href = basePath + urls[index]; // 自动跳转
        }
    });
});


setupNavigation();




