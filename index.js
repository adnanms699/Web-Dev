const resumeBtn = document.getElementById("download-resume");

if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "AdnanfaziCV..pdf";
        link.download = "AdnanfaziCV..pdf";
        link.click();
    });
}

const webDevbtn = document.getElementById("Web-Dev");
if (webDevbtn) {
    webDevbtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "https://github.com/adnanms699/Web-Dev";
        link.target = "_blank";
        link.click();
    });
}

const pythonDataBtn = document.getElementById("Python_Data");
if (pythonDataBtn) {
    pythonDataBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "https://github.com/adnanms699/Python-for-data-science";
        link.target = "_blank";
        link.click();
    });
}


const Unithrivebtn =document.getElementById("Uni-Thrive");
Unithrivebtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href ="https://unithrive-demo-for-workshop.vercel.app/"
    link.target = "_blank"
    link.click();
});

const hackathonBtn = document.getElementById("Hacktheeast");
hackathonBtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href= "https://www.hacktheeast.com/"
    link.target = "_blank"
    link.click();
});

const enactusBtn = document.getElementById("ENACTUS");
enactusBtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href= "https://www.linkedin.com/company/enactushongkong/about/"
    link.target = "_blank"
    link.click();
});