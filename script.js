getIP()
const currentIp = document.getElementById('ipAddress');

async function populateIPintoVar(){
  ipAddress
}

async function getIP() {
  const endPoint = "https://api.ipify.org?format=json";
  try {
    const response = await fetch(endPoint);
    const result = await response.json();
    currentIp.innerText = result.ip;
    ipAddress = result.ip
    const getStartedButton = document.getElementById("getStarted");
    getStartedButton.addEventListener("click", () => {
      document.cookie = `ip=${ipAddress}; path=./locationDetails/main-page.html`;
      window.location.href = "./locationDetails/main-page.html";
    });
    console.log(ipAddress);
  } catch (error) {
    console.log(error);
  }
}
