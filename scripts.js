function injectImage() {
    const img = document.createElement("img");

    img.src =
        "https://www.lakemerritt.org/uploads/7/7/2/9/7729843/imgp2225.jpg";

    img.style.width = "500px";

    const container = document.getElementById("bird-appears");

    container.innerHTML = '';
    container.appendChild(img)
}

