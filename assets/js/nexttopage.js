const pages = [
    "Loan.html",
    "RequestManagement.html",
    "Repayment.html",
    "SharePoint.html",
    "DesignSystem.html",
    "Inside9.html",
];

// 获取当前页面的索引
const currentPage = window.location.pathname.split("/").pop();

// 找到当前页面在页面数组中的位置
const currentIndex = pages.indexOf(currentPage);

// 获取“下一页”和“上一页”的元素
const nextPageButton = document.getElementById("next-page");
const prevPageButton = document.getElementById("prev-page");

// 如果是最后一页，点击“下一页”会跳到第一页
nextPageButton.addEventListener("click", () => {
    const nextPage = currentIndex === pages.length - 1 ? pages[0] : pages[currentIndex + 1];
    let basePath = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/");
    window.location.href = basePath + "/" + nextPage; // 跳转到下一页
});

// 如果是第一页，点击“上一页”会跳到最后一页
prevPageButton.addEventListener("click", () => {
    const prevPage = currentIndex === 0 ? pages[pages.length - 1] : pages[currentIndex - 1];
    let basePath = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/");
    window.location.href = basePath + "/" + prevPage; // 跳转到上一页
});

