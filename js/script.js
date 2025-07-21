function enviarWhats(event) {
  event.preventDefault(); // Evita que a tela recarregue ao enviar o formulário

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "17996132110";

  const texto = `Olá! Me chamo ${nome}. Estava visitando seu portfólio e gostaria de conversar. Aqui está minha mensagem: "${mensagem}". Aguardo seu retorno, obrigado!`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  const menuLinks = document.querySelectorAll(".menu-link");
  const nav = document.querySelector(".navegacao");

  menuLinks.forEach((link, index) => {
    link.addEventListener("mouseenter", () => {
      nav.style.setProperty("--index", index + 1);
      nav.style.setProperty("--items", menuLinks.length);
      nav.style.setProperty("--width", `calc(100% / ${menuLinks.length})`);
      nav.style.setProperty(
        "--left",
        `calc(100% / ${menuLinks.length} * ${index})`
      );
      nav.style.setProperty("--opacity", "1");
      nav.classList.add("active-line");
    });

    link.addEventListener("mouseleave", () => {
      nav.classList.remove("active-line");
    });
  });

  window.open(url, "_blank");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});
