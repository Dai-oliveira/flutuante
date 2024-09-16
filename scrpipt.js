let img = document.getElementById('floatingImage');
let direction = 1;  // 1 para descer, -1 para subir
let topPos = 0;

function moveImage() {
    if (topPos >= 100) {
        direction = -1;  // Se chegou ao limite inferior, começa a subir
    } else if (topPos <= 0) {
        direction = 1;   // Se chegou ao limite superior, começa a descer
    }

    topPos += direction; // Atualiza a posição

    img.style.top = topPos + "px";  // Move a imagem
}

setInterval(moveImage, 10);  // Move a imagem a cada 10ms