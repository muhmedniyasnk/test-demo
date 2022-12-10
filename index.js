const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");



generateBtn.addEventListener("click",() =>{
    let qrvalue = qrInput.value;
    if(!qrvalue) return;
    generateBtn.innerText = "Generate QR code......";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${qrvalue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code";

    });
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})