let ipAddress;
getIP()

async function getIP(){
    const endPoint = "https://api.ipify.org?format=json";
    try {
        const response = await fetch(endPoint);
        const result =await response.json();
        console.log(result.ip);
    } catch (error) {
        console.log(error)
    }
}

// fetch("https://api.ipify.org?format=json")
//   .then((response) => response.json())
//   .then((data) => console.log(data.ip));
