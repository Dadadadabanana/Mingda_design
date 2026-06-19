const showVideoBtn = document.getElementById('showVideoBtn');
const myVideo = document.getElementById('myVideo');
const overlay = document.getElementById('overlay');
const closeVideoBtn = document.getElementById('closeBtn');
const replayVideoBtn = document.getElementById('replayBtn');

showVideoBtn.addEventListener('click', () => {
    videoContainer.style.display = 'block';
    myVideo.style.display = 'block';
    overlay.style.display = 'block';
    closeVideoBtn.style.display = 'block';
    replayVideoBtn.style.display = 'none'; // 确保打开视频时不显示 replay 按钮

    myVideo.currentTime = 0;
    myVideo.play();
});


// 关闭视频
closeVideoBtn.addEventListener('click', () => {
    myVideo.pause();
    myVideo.style.display = 'none';
    overlay.style.display = 'none';
    closeVideoBtn.style.display = 'none';
    replayVideoBtn.style.display = 'none';

    // 退出全屏
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
});

// 重新播放视频
replayVideoBtn.addEventListener('click', () => {
    replayVideoBtn.style.display = 'none'; // 确保 replay 按钮被隐藏
    
    myVideo.currentTime = 0;
    myVideo.play();

    closeVideoBtn.style.display = 'block';
});

// 当视频播放结束时，显示 replay 按钮
myVideo.addEventListener('ended', () => {
    closeVideoBtn.style.display = 'block';
    replayVideoBtn.style.display = 'block';
});
