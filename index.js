let btn = document.getElementById("download-resume");

btn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href = "AdnanFazi_CV.pdf"
    link.download = "AdnanFazi_CV.pdf"
    link.click();
});

let bttn = document.getElementById("contact-me");

bttn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href = "https://www.linkedin.com/in/adnan-fazi"
    link.target = "_blank"
    link.click();
});
