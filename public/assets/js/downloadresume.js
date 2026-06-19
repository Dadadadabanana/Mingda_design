document.getElementById("downloadBtn").addEventListener("click", function () {
    window.open("assets/files/Resume_Mingda Lin.pdf", "_blank");
    const link = document.createElement("a");
    link.href = "assets/files/Resume_Mingda Lin.pdf";
    link.download = "Resume_Mingda Lin.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });