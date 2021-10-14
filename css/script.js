updateCounter();

function updateCounter() {
  fetch(
    "https://api.countapi.xyz/update/azupuri-kaba-resume-website/kaba/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      counterElement.innerHTML = res.value;
    });
}

counterElement = document.getElementsByClassName("count")[0];