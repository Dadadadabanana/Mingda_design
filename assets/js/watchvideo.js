const videos_button = [
    ".repayment-video",
    ".loan-video",
    ".designsystem-video",
    ".sharepoint-video",
    ".inside9-video"
];

// 对应的视频链接
const videoLinks = {
    ".repayment-video": "https://youtu.be/fraEIbTOkws",
    ".loan-video": "https://youtu.be/gFTCM0DA03E",
    ".designsystem-video": "https://youtu.be/aQNs5diGQBg",
    ".sharepoint-video": "https://youtu.be/cXNsjjkd7Nk",
    ".inside9-video": "https://youtu.be/_FHZHcRiZG8"
};


document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        // 遍历 videoLinks 中的所有类名
        videos_button.forEach(buttonClass => {
            if (this.classList.contains(buttonClass.slice(1))) {  // 使用 classList.contains 判断类名
                window.open(videoLinks[buttonClass], "_blank");
            }
        });
    });
});


