const wrapper = document.querySelector(".wrapper");
const QRInput = document.querySelector("input");
const QRImg = document.querySelector("img");
const generateBtn = document.querySelector("button");

generateBtn.onclick = () => {
  let QRvalue = QRInput.value;

  if (!QRvalue) {
    alert("Input is required!");
    return;
  }

  generateBtn.innerHTML = "Generating QR Code...";
  QRImg.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRvalue;
  QRImg.onload = () => {
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generating QR Code";
  };
};
