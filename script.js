function copyToClipboard() {
    const caText = document.getElementById("ca-text").innerText;
    const btn = document.getElementById("copy-btn");
    const originalText = btn.innerText;

    navigator.clipboard.writeText(caText).then(() => {
        btn.innerText = "DATA ACQUIRED";
        btn.style.borderColor = "var(--brass-light)";
        btn.style.color = "var(--brass-light)";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = "";
            btn.style.color = "";
        }, 2000);
    });
}