document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top");

  if (!backToTopButton) {
    console.error("Error: .back-to-top button not found!");
    return;
  }

  let lastScrollY = window.scrollY;

  function toggleBackToTop() {
    const currentScrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    if (window.scrollY > 700) {
      backToTopButton.classList.add("show"); // 添加 show 类
    } else {
      backToTopButton.classList.remove("show"); // 移除 show 类
    }

    // 判断是否处于滚动条接近底部的状态
    if (currentScrollY < lastScrollY && currentScrollY + clientHeight < scrollHeight - 50) {
      backToTopButton.classList.remove("show");
    }

    lastScrollY = currentScrollY; // 更新滚动位置
  }

  window.addEventListener("scroll", toggleBackToTop);

  // 平滑滚动到顶部的函数
  function handleClick() {
    // 记录开始时间
    const beginTime = Date.now();
    // 初始位置
    const beginValue = document.documentElement.scrollTop;
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));

    const frameFunc = () => {
      // 进度，500ms 内将页面滚动到顶部
      const progress = (Date.now() - beginTime) / 500;
      if (progress < 1) {
        // 根据进度修改 scrollTop 的值
        document.documentElement.scrollTop = beginValue * (1 - progress);
        rAF(frameFunc);
      } else {
        document.documentElement.scrollTop = 0;
      }
    };

    rAF(frameFunc);
  }

  // 点击按钮触发平滑滚动到顶部
  backToTopButton.addEventListener("click", handleClick);

  // 初始检查滚动状态
  toggleBackToTop();
});
