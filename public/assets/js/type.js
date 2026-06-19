const words = ["creativity", "empathy", "strategy", "solutions"],
      dynamicText = document.querySelector(".slogan span");

let wordIndex = 0,
    charIndex = 1,
    isDeleting = false;

function typingEffect() {
  const currentWord = words[wordIndex]; //当前展示的单词组
  const currentChar = currentWord.substring(0, charIndex); //当前显示的字符 

  /**元素设置字符的同时，添加停止闪烁类名 */
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  // let speed = isDeleting ? 50 : 100;

  /** 1. 每个单词组播放 */
  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    
    setTimeout(typingEffect, 90);
  } else if (isDeleting && charIndex > 0) {
    /**
     * 3. 设置删除每个字符的效果
     */
    charIndex--;
    
    setTimeout(typingEffect, 90);
  } else {
    /** 
     * 2.设置当前需要删除的单词组或下一个要播放的单词组:
    */
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

    dynamicText.classList.remove("stop-blinking");
    setTimeout(typingEffect, 90);
  }
};

typingEffect();