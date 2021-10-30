
feetch("https://52gmtwhz23.execute-api.us-east-1.amazonaws.com/Prod/put")
    .then(() => fetch("https://52gmtwhz23.execute-api.us-east-1.amazonaws.com/Prod/get"))
    .then(response => response.json())
    .then((resumeHttp) => {
        document.getElementById("Website_Views").innerText = resumehttp.count;
    })
