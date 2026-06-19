// const words = ["led", "create", "optimise"],
//       dynamicText = document.querySelector(".slogan span");

// let wordIndex = 0,
//     charIndex = 1,
//     isDeleting = false;

// function typingEffect() {
//   const currentWord = words[wordIndex]; //当前展示的单词组
//   const currentChar = currentWord.substring(0, charIndex); //当前显示的字符 

//   /**元素设置字符的同时，添加停止闪烁类名 */
//   dynamicText.textContent = currentChar;
//   dynamicText.classList.add("stop-blinking");

//   /** 1. 每个单词组播放 */
//   if (!isDeleting && charIndex < currentWord.length) {
//     charIndex++;
    
//     setTimeout(typingEffect, 200);
//   } else if (isDeleting && charIndex > 0) {
//     /**
//      * 3. 设置删除每个字符的效果
//      */
//     charIndex--;
    
//     setTimeout(typingEffect, 200);
//   } else {
//     /** 
//      * 2.设置当前需要删除的单词组或下一个要播放的单词组:
//     */
//     isDeleting = !isDeleting;
//     wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

//     dynamicText.classList.remove("stop-blinking");
//     setTimeout(typingEffect, 200);
//   }
// };

// typingEffect();


const words = ["led", "create", "optimise"];
const dynamicText = document.querySelector(".dynamic-text");

let wordIndex = 0,
    charIndex = 1,
    isDeleting = false;

function typingEffect() {
    const currentWord = words[wordIndex]; // 当前变换的单词
    const currentChar = currentWord.substring(0, charIndex); // 当前显示的部分

    // 只修改动态部分的文本
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typingEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typingEffect, 100);
    } else {
        // 切换到下一个单词或删除当前单词
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

        dynamicText.classList.remove("stop-blinking");
        setTimeout(typingEffect, 1000);
    }
}

// 启动打字动画
typingEffect();
