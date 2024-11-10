// Array que contém os nomes das imagens do carrossel
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0; // Índice da imagem atual

// Função para exibir a imagem no carrossel
function showImage(index) {
  const carouselImage = document.getElementById("carouselImage");

  // Remove a classe "active" para a imagem atual, tornando-a invisível
  carouselImage.classList.remove("active");

  // Usa um pequeno atraso para criar um efeito de transição suave
  setTimeout(() => {
    carouselImage.src = images[index]; // Atualiza a imagem com o novo índice
    carouselImage.classList.add("active"); // Adiciona a classe "active" para tornar a nova imagem visível
  }, 500); // Tempo de atraso para a transição suave (ajustável)
}

// Função que avança para a próxima imagem no carrossel
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e volta ao início se chegar ao final
  showImage(currentIndex); // Exibe a próxima imagem
}

// Define o intervalo para alternar automaticamente as imagens a cada 3 segundos
setInterval(nextImage, 3000); // 3000 ms = 3 segundos
