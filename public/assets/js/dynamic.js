document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".project-inside-cover-container");
    const img = document.querySelector(".project-inside-image-cover");

    function updateContainerHeight() {
        if (img.naturalWidth && img.naturalHeight) {
            const aspectRatio = img.naturalHeight / img.naturalWidth;
            container.style.height = `${container.clientWidth * aspectRatio}px`;
        }
    }

    // 监听图片加载完成
    if (img.complete) {
        updateContainerHeight();
    } else {
        img.onload = updateContainerHeight;
    }

    // 监听窗口大小变化，重新计算高度
    window.addEventListener("resize", updateContainerHeight);
});
