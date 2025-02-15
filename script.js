function getRandomNumber() {
    let randomNumber = (Math.random() * 19 + 1).toFixed(2);
    document.getElementById("randomNumber").innerText = randomNumber;
}

function getRandomImage() {
    let images = [
        "https://i.ibb.co/Q3jDhqyn/photo-5244719169876909356-x.jpg",
        "https://i.ibb.co/nqSBLcdk/photo-5244719169876909353-x.jpg",
        "https://i.ibb.co/Qv2BxQcz/photo-5244719169876909354-x.jpg",  // Добавь свои картинки сюда
        "https://i.ibb.co/jkyY88dW/photo-5244719169876909352-x.jpg",
        "https://i.ibb.co/k6cvVr0v/photo-5244719169876909346-x.jpg",
        "https://i.ibb.co/yBGkKD7L/photo-5244719169876909345-x.jpg",
        "https://i.ibb.co/jPys2TwL/photo-5244719169876909344-x.jpg",
        "https://i.ibb.co/bgL26s35/photo-5244719169876909343-x.jpg",
        "https://i.ibb.co/prJCTb40/photo-5244719169876909340-x.jpg",
        "https://i.ibb.co/gLmGD2X8/photo-5244719169876909338-x.jpg",
        "https://i.ibb.co/203d41TG/photo-5244719169876909337-x.jpg",
        "https://i.ibb.co/LDNnRQVh/photo-5244719169876909333-x.jpg",
        "https://i.ibb.co/ynPBmkk7/photo-5244719169876909330-x.jpg",
        "https://i.ibb.co/N21PcFC9/photo-5244719169876909328-x.jpg",
        "https://i.ibb.co/B53d3Krm/photo-5244719169876909326-x.jpg",
        "https://i.ibb.co/7xPC0Qg8/photo-5244719169876909322-x.jpg",
        "https://i.ibb.co/KxpVmLM6/photo-5244719169876909320-x.jpg",
        "https://i.ibb.co/6JHFrLmT/photo-5244719169876909319-x.jpg",
        "https://i.ibb.co/qMxGSwLM/photo-5244719169876909316-x.jpg",
        "https://i.ibb.co/Jj1X381s/photo-5244719169876909317-x.jpg",
        "https://i.ibb.co/PsRKcX5z/photo-5244719169876909309-x.jpg",
        "https://i.ibb.co/QjX2bs28/photo-5244719169876909303-x.jpg",
        "https://i.ibb.co/n4Shzgj/photo-5244719169876909304-x.jpg",
        "https://i.ibb.co/cS5C7NS1/photo-5244719169876909308-x.jpg"
    ];
    let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("randomImage").src = images[randomIndex];
}
