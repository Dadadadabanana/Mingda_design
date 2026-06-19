async function animateEffect3(text) {
    const target = document.querySelector("#Effect3");
    const textBeforeLength = target.innerText.length;

    if (textBeforeLength > 0) {
        // 向上淡出消失
        await target.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0, transform: "translateY(-20px)" }
            ],
            { duration: 500, easing: "ease-in-out" }
        ).finished;
    }

    target.innerText = text; // 更新文本

    // 从下方滑入
    target.animate(
        [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 500, easing: "ease-in-out" }
    );
}

// 轮播文本
const texts = [
    "Analysing requirements strategically.",
    "Crafting empathetic, logical experience.",
    "Creating practical, impactful solutions."
];

let index = 0;

function cycleText() {
    animateEffect3(texts[index]);
    index = (index + 1) % texts.length; // 循环切换索引
}

// 每 3 秒切换一次
setInterval(cycleText, 3000);

// 初始化第一句话
cycleText();