/*var qrcode = new QRCode("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});


var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("qrcode");
  
  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();
*/

  document.getElementById("qrlink").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getLink();
    }
  });

  const qr = new QRCode(document.getElementById("qrcode"), {
    colorDark : "#FFFFFF",
    colorLight : "#00B9E8",
    correctLevel : QRCode.CorrectLevel.H
});
  function getLink(){
    let link = document.getElementById("qrlink").value;
    generateQR(link);
  }

  function generateQR(link){
    let defaultLink = "https://google.com"
    if (!link){
        link = defaultLink;
        document.getElementById("qrlink").value = defaultLink;
    } 
    console.log(link);
    qr.makeCode(link);
  }

  const qrlinkbutton = document.getElementById("qrlinkbutton");
  qrlinkbutton.addEventListener("click", getLink)
  document.addEventListener("load", generateQR(""))