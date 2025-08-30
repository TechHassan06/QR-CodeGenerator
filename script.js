let imgBox = document.getElementById("imgBox");
let QRText = document.getElementById("qrText");
let QRImage = document.getElementById("qrImage");

function QRGenerator() {
  if (QRText.value.length > 0) {
    QRImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" +
      QRText.value;
    imgBox.classList.add("show-img");
  } else {
    QRText.classList.add("error");
    setTimeout(() => {
      QRText.classList.remove("error");
    }, 1000);
  }
}
