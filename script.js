function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    // var hora = 10
    // var hora = 15
    // var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`;

    // Mudar a imagem e o background com base no horário do dia
    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"; // Caminho para a imagem da manhã
        img.alt = "Foto da manhã";
        document.body.style.background = '#b4bec7';
    } else if (hora >= 12 && hora < 18) {
        img.src = "tarde.png"; // Caminho para a imagem da tarde
        img.alt = "Foto da tarde";
        document.body.style.background = '#fd8608';
    } else {
        img.src = "noite.png"; // Caminho para a imagem da noite
        img.alt = "Foto da noite";
        document.body.style.background = '#2e2a4d';
    }
}
