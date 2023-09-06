  /* Creates the QR code. Has default values*/
  var qr = new QRCode(document.getElementById("qrcode"), {
    colorDark : "#FFFFFF",
    colorLight : "#00B9E8",
    correctLevel : QRCode.CorrectLevel.H
});

  /* Gets the colors from the inputs*/
  function getColors(){
    let color1 = document.getElementById("qrColor1").value;
    let color2 = document.getElementById("qrColor2").value;
    qr._htOption.colorDark = color1;
    qr._htOption.colorLight = color2;
    document.getElementById("qrcode").children[1].style.backgroundColor = color2;
  }

  function getLink(){
    let link = document.getElementById("qrlink").value;
    getColors();
    generateQR(link);
  }

  /* Generates the QR code */
  function generateQR(link){
    let defaultLink = "https://google.com";
    if (!link){
        link = defaultLink;
        document.getElementById("qrlink").value = defaultLink;
    } 
    qr.makeCode(link)
  }

  /* Gets the src of the qr img and starts the download of said img */
  function getQRImg(){
    let src = document.getElementById("qrcode").children[1].getAttribute("src");
    downloadImage(src);
  }

  /* To download the QR Image */
  async function downloadImage(imageSrc, nameOfDownload = 'my-qrcode.png') {
    
    const response = await fetch(imageSrc);
    const blobImage = await response.blob();
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }

  /* Starts the funtions by pressing the key Enter*/
  document.getElementById("qrlink").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getLink();
    }
  });

  /* Calls */
  const qrlinkbutton = document.getElementById("qrlinkbutton");
  qrlinkbutton.addEventListener("click", getLink);
  document.addEventListener("load", generateQR(""));
  const qrdownloadbutton = document.getElementById("qrdownload");
  qrdownloadbutton.addEventListener("click", getQRImg);
