// Array que contém os nomes das imagens do carrossel
const images = ["imagens/img1.jpg", "imagens/img2.jpg", "imagens/img3.jpg"];
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

const gruposMusculares = [
  "Peitoral", 
  "Bíceps", 
  "Pernas", 
  "Costas", 
  "Cardio", 
  "Abdômen", 
  "Antebraços", 
  "Glúteos", 
  "Ombros", 
  "Tríceps"
];

const equipamentos = [
  "Banco", 
  "Máquina", 
  "Peso Corporal", 
  "Halteres",
  "Barra",
  "Elásticos",
  "Máquina de Cardio",
  "Bola de Exercício",
  "Barra EZ",
  "Rolo de Espuma",
  "Kettlebell"
];
const exercicios = [
  // Peitoral
  { nome: "Supino Reto", grupoMuscular: "Peitoral", equipamento: "Banco", descricao: "Exercício para peito", linkVideo: "https://exemplo.com/supino-reto" },
  { nome: "Peck Deck", grupoMuscular: "Peitoral", equipamento: "Máquina", descricao: "Exercício para peito", linkVideo: "https://exemplo.com/peck-deck" },
  { nome: "Flexão de Braço", grupoMuscular: "Peitoral", equipamento: "Peso Corporal", descricao: "Flexão de braço para peito e tríceps", linkVideo: "https://exemplo.com/flexao-braco" },
  { nome: "Crucifixo Inclinado", grupoMuscular: "Peitoral", equipamento: "Halteres", descricao: "Exercício de peito em banco inclinado", linkVideo: "https://exemplo.com/crucifixo-inclinado" },
  { nome: "Pullover", grupoMuscular: "Peitoral", equipamento: "Halteres", descricao: "Exercício de peito e dorsais", linkVideo: "https://exemplo.com/pullover" },
  { nome: "Supino Inclinado", grupoMuscular: "Peitoral", equipamento: "Banco", descricao: "Supino em banco inclinado para parte superior do peito", linkVideo: "https://exemplo.com/supino-inclinado" },
  { nome: "Flexão de Braço com Bola", grupoMuscular: "Peitoral", equipamento: "Bola de Exercício", descricao: "Flexão de braço com os pés sobre a bola", linkVideo: "https://exemplo.com/flexao-bola" },

  // Bíceps
  { nome: "Rosca Direta", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", linkVideo: "https://exemplo.com/rosca-direta" },
  { nome: "Rosca Martelo", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", linkVideo: "https://exemplo.com/rosca-martelo" },
  { nome: "Rosca Concentrada", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", linkVideo: "https://exemplo.com/rosca-concentrada" },
  { nome: "Rosca Scott", grupoMuscular: "Bíceps", equipamento: "Máquina", descricao: "Exercício para bíceps", linkVideo: "https://exemplo.com/rosca-scott" },
  { nome: "Rosca Inversa", grupoMuscular: "Bíceps", equipamento: "Barra", descricao: "Exercício para bíceps", linkVideo: "https://exemplo.com/rosca-inversa" },
  { nome: "Rosca com Barra EZ", grupoMuscular: "Bíceps", equipamento: "Barra EZ", descricao: "Rosca com barra EZ para bíceps", linkVideo: "https://exemplo.com/rosca-barra-ez" },

  // Pernas
  { nome: "Agachamento Livre", grupoMuscular: "Pernas", equipamento: "Peso Corporal", descricao: "Exercício para pernas", linkVideo: "https://exemplo.com/agachamento-livre" },
  { nome: "Leg Press", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para pernas", linkVideo: "https://exemplo.com/leg-press" },
  { nome: "Cadeira Extensora", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para pernas", linkVideo: "https://exemplo.com/cadeira-extensora" },
  { nome: "Afundo", grupoMuscular: "Pernas", equipamento: "Halteres", descricao: "Exercício unilateral para pernas", linkVideo: "https://exemplo.com/afundo" },
  { nome: "Flexão de Joelhos", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para isquiotibiais", linkVideo: "https://exemplo.com/flexao-joelhos" },
  { nome: "Agachamento com Peso Corporal", grupoMuscular: "Pernas", equipamento: "Peso Corporal", descricao: "Agachamento usando apenas o peso do corpo", linkVideo: "https://exemplo.com/agachamento-peso-corporal" },
  { nome: "Swing com Kettlebell", grupoMuscular: "Pernas", equipamento: "Kettlebell", descricao: "Swing com kettlebell para pernas e costas", linkVideo: "https://exemplo.com/swing-kettlebell" },

  // Costas
  { nome: "Puxada Frontal", grupoMuscular: "Costas", equipamento: "Máquina", descricao: "Exercício para costas", linkVideo: "https://exemplo.com/puxada-frontal" },
  { nome: "Remada Curvada", grupoMuscular: "Costas", equipamento: "Halteres", descricao: "Exercício para costas", linkVideo: "https://exemplo.com/remada-curvada" },
  { nome: "Levantamento Terra", grupoMuscular: "Costas", equipamento: "Barra", descricao: "Exercício para costas e pernas", linkVideo: "https://exemplo.com/levantamento-terra" },
  { nome: "Puxada Costas", grupoMuscular: "Costas", equipamento: "Máquina", descricao: "Exercício para costas", linkVideo: "https://exemplo.com/puxada-costas" },
  { nome: "Remada Alta", grupoMuscular: "Costas", equipamento: "Halteres", descricao: "Exercício para parte superior das costas", linkVideo: "https://exemplo.com/remada-alta" },

  // Cardio
  { nome: "Corrida", grupoMuscular: "Cardio", equipamento: "Máquina de Cardio", descricao: "Corrida para treino cardiovascular", linkVideo: "https://exemplo.com/corrida" },
  { nome: "Bicicleta Ergométrica", grupoMuscular: "Cardio", equipamento: "Máquina de Cardio", descricao: "Bicicleta para cardio", linkVideo: "https://exemplo.com/bicicleta" },
  { nome: "Pular Corda", grupoMuscular: "Cardio", equipamento: "Peso Corporal", descricao: "Pular corda para cardio", linkVideo: "https://exemplo.com/pular-corda" },

  // Abdômen
  { nome: "Prancha", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício isométrico para abdômen", linkVideo: "https://exemplo.com/prancha" },
  { nome: "Abdominal Crunch", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício para abdômen", linkVideo: "https://exemplo.com/abdominal-crunch" },
  { nome: "Elevação de Pernas", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício para abdômen", linkVideo: "https://exemplo.com/elevacao-pernas" },
  { nome: "Russian Twist", grupoMuscular: "Abdômen", equipamento: "Halteres", descricao: "Exercício para oblíquos", linkVideo: "https://exemplo.com/russian-twist" },

  // Antebraços
  { nome: "Rosca Inversa", grupoMuscular: "Antebraços", equipamento: "Barra", descricao: "Exercício para antebraços", linkVideo: "https://exemplo.com/rosca-inversa" },

  // Glúteos
  { nome: "Elevação de Quadril", grupoMuscular: "Glúteos", equipamento: "Peso Corporal", descricao: "Exercício para glúteos", linkVideo: "https://exemplo.com/elevacao-quadril" },
  { nome: "Agachamento Sumô", grupoMuscular: "Glúteos", equipamento: "Halteres", descricao: "Exercício para glúteos", linkVideo: "https://exemplo.com/agachamento-sumo" },

  // Ombros
  { nome: "Desenvolvimento com Halteres", grupoMuscular: "Ombros", equipamento: "Halteres", descricao: "Exercício para ombros", linkVideo: "https://exemplo.com/desenvolvimento-halteres" },
  { nome: "Elevação Lateral", grupoMuscular: "Ombros", equipamento: "Halteres", descricao: "Exercício para ombros", linkVideo: "https://exemplo.com/elevacao-lateral" },

  // Tríceps
  { nome: "Tríceps Testa", grupoMuscular: "Tríceps", equipamento: "Halteres", descricao: "Exercício para tríceps", linkVideo: "https://exemplo.com/triceps-testa" },
  { nome: "Mergulho", grupoMuscular: "Tríceps", equipamento: "Banco", descricao: "Exercício para tríceps", linkVideo: "https://exemplo.com/mergulho" }
];

// Variáveis para armazenar filtros ativos
let activeMuscleGroup = null;
let activeEquipment = null;
let cart = []; // Lista do carrinho

function addToCart(nomeExercicio) {
  const series = prompt(`Quantas séries deseja para o exercício "${nomeExercicio}"?`, "3");
  if (!series || isNaN(series) || series <= 0) {
    alert("Número de séries inválido.");
    return;
  }

  // Verifica se o exercício já está no carrinho
  const existingItem = cart.find(item => item.nome === nomeExercicio);
  if (existingItem) {
    alert("Este exercício já está no carrinho!");
    return;
  }
   // Adiciona o exercício com séries ao carrinho
   cart.push({ nome: nomeExercicio, series });

   // Atualiza a lista no DOM
   const cartList = document.getElementById("cart-list");
   const listItem = document.createElement("li");
   listItem.innerHTML = `${nomeExercicio} - Séries: ${series}`;
   cartList.appendChild(listItem);
 
   // Feedback para o usuário
   alert(`O exercício "${nomeExercicio}" com ${series} séries foi adicionado ao carrinho!`);
 }

 function clearCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Remove todos os itens do carrinho
  cart = []; // Esvazia o array do carrinho
  alert("O carrinho foi limpo!");
}

// Exibe exercícios na lista
function displayExercises(exerciciosParaMostrar) {
  const exerciseList = document.getElementById("exercise-list");
  exerciseList.innerHTML = ""; // Limpa a lista de exercícios antes de exibir
  if (exerciciosParaMostrar.length === 0) {
    exerciseList.innerHTML = "<p>Nenhum exercício encontrado.</p>";
    return;
  }
  exerciciosParaMostrar.forEach(exercicio => {
    const exerciseItem = document.createElement("div");
    exerciseItem.className = "exercise-item";
    exerciseItem.innerHTML = `
      <h3>${exercicio.nome}</h3>
      <p><strong>Grupo Muscular:</strong> ${exercicio.grupoMuscular}</p>
      <p><strong>Equipamento:</strong> ${exercicio.equipamento}</p>
      <p>${exercicio.descricao}</p>
      <img class="thumbnail" src="${exercicio.linkVideo}" alt="${exercicio.nome}">
      <a href="${exercicio.linkVideoFull}" target="_blank">Ver Vídeo</a>
      <button onclick="addToCart('${exercicio.nome}')">Adicionar ao Carrinho</button>
    `;
    exerciseList.appendChild(exerciseItem);
  });
}

// Filtra exercícios com base no grupo muscular, equipamento e busca simultaneamente
function filterExercises() {
  const searchValue = document.getElementById("search-input").value.toLowerCase();

  const filteredExercises = exercicios.filter((e) => {
    const matchesMuscleGroup = activeMuscleGroup ? e.grupoMuscular === activeMuscleGroup : true;
    const matchesEquipment = activeEquipment ? e.equipamento === activeEquipment : true;
    const matchesSearch = e.nome.toLowerCase().includes(searchValue);

    return matchesMuscleGroup && matchesEquipment && matchesSearch;
  });

  displayExercises(filteredExercises);
}

// Atualiza o filtro para grupo muscular
function filterByMuscleGroup(grupo) {
  // Ativa ou desativa o filtro de grupo muscular
  activeMuscleGroup = activeMuscleGroup === grupo ? null : grupo;
  filterExercises();

    // Faz a tela rolar para a seção de equipamentos
  const equipmentSection = document.querySelector(".equipamentos");
  equipmentSection.scrollIntoView({ behavior: "smooth" });

}

// Atualiza o filtro para equipamento
function filterByEquipment(equipamento) {
  // Ativa ou desativa o filtro de equipamento
  activeEquipment = activeEquipment === equipamento ? null : equipamento;
  filterExercises();

  const exercisesSection = document.querySelector(".exercicios-disponiveis");
  exercisesSection.scrollIntoView({ behavior: "smooth" });

}

// Popula os filtros de grupo muscular
function populateMuscleGroupFilters() {
  const filterContainer = document.getElementById("muscle-group-filters");
  gruposMusculares.forEach(grupo => {
    const div = document.createElement("div");
    div.className = "filter-item";
    div.innerText = grupo;
    div.onclick = () => filterByMuscleGroup(grupo);
    filterContainer.appendChild(div);
  });
}

// Popula os filtros de equipamentos
function populateEquipmentFilters() {
  const filterContainer = document.getElementById("equipment-filters");
  equipamentos.forEach(equipamento => {
    const div = document.createElement("div");
    div.className = "filter-item";
    div.innerText = equipamento;
    div.onclick = () => filterByEquipment(equipamento);
    filterContainer.appendChild(div);
  });
}

// Exibe exercícios na lista
function displayExercises(exerciciosParaMostrar) {
    const exerciseList = document.getElementById("exercise-list");
    exerciseList.innerHTML = ""; // Limpa a lista de exercícios antes de exibir
    if (exerciciosParaMostrar.length === 0) {
      exerciseList.innerHTML = "<p>Nenhum exercício encontrado.</p>";
      return;
    }else{
        exerciciosParaMostrar.forEach(exercicio => {
            const exerciseItem = document.createElement("div");
            exerciseItem.className = "exercise-item";
            exerciseItem.innerHTML = `
              <h3>${exercicio.nome}</h3>
              <p><strong>Grupo Muscular:</strong> ${exercicio.grupoMuscular}</p>
              <p><strong>Equipamento:</strong> ${exercicio.equipamento}</p>
              <p>${exercicio.descricao}</p>
              <img class="thumbnail" src="${exercicio.linkVideo}" alt="${exercicio.nome}">
              <a href="${exercicio.linkVideoFull}" target="_blank">Ver Vídeo</a>
              <button onclick="addToCart('${exercicio.nome}')">Adicionar ao Carrinho</button>
            `;
            exerciseList.appendChild(exerciseItem);
          });
    }
}

// Função para adicionar exercício ao carrinho
function addToCart(nomeExercicio) {
  // Verifica se o exercício já está no carrinho
  if (cart.includes(nomeExercicio)) {
    alert("Este exercício já foi adicionado ao carrinho!");
    return;
  }

  // Adiciona o exercício ao carrinho
  cart.push(nomeExercicio);
  
  // Atualiza a lista no DOM
  const cartList = document.getElementById("cart-list");
  const listItem = document.createElement("li");
  listItem.innerText = nomeExercicio;
  cartList.appendChild(listItem);

  // Feedback para o usuário
  alert(`O exercício "${nomeExercicio}" foi adicionado ao carrinho!`);
}

// Função de busca dinâmica
document.getElementById("search-input").addEventListener("input", filterExercises);

// Inicializa a página
window.onload = () => {
  populateMuscleGroupFilters();
  populateEquipmentFilters();
  displayExercises(exercicios); // Mostra todos os exercícios inicialmente
};

