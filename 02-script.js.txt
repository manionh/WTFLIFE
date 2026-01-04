function copyToClipboard() {
    const caText = document.getElementById("ca-text").innerText;
    const btn = document.getElementById("copy-btn");
    const originalText = btn.innerText;

    navigator.clipboard.writeText(caText).then(() => {
        btn.innerText = "DATA ACQUIRED";
        btn.style.borderColor = "#c2a878"; // Gold
        btn.style.color = "#c2a878";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = "";
            btn.style.color = "";
        }, 2000);
    });
}