let btn = document.getElementById("download-resume");

btn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href = "Adnanfazi--CV.pdf"
    link.download = "Adnanfazi--CV.pdf"
    link.click();
});

const webDevbtn = document.getElementById("Web-Dev");

webDevbtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href = "https://github.com/adnanms699/Web-Dev"
    link.target ="_blank"
    link.click();
});

const pythonDataBtn = document.getElementById("Python_Data");

pythonDataBtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href = "https://github.com/adnanms699/Python-for-data-science"
    link.target = "_blank"
    link.click();
});

const Unithrivebtn =document.getElementById("Uni-Thrive");
Unithrivebtn.addEventListener("click", ()=>{
    let link = document.createElement("a")
    link.href ="https://mindful-campus-9.preview.emergentagent.com/"
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