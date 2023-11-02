import futebol from './data/fooball/brazilian_times.json' assert {
  type: "json"
}

const arquivo = futebol.clubs;

const divRoot = document.getElementById("root");
const selectClubes = document.getElementById("clubes");
const botaoSelecionar = document.getElementById("botaoSelecionar");

// Função para exibir os dados do clube selecionado
function exibirClube(clubeCode) {
  const clube = arquivo.find((c) => c.code === clubeCode);

  if (clube) {
    const { name, code, country, logo, history } = clube;
    const clubHtml = `
      <div>
      <img class="imagemSelecionado" src="${logo}" alt="${name} Logo">
        <h2>${name}</h2>
        <p>${code}</p>
        <p>Estado : ${country}</p>
        <p>${history}</p>
        </div>
    `;
    divRoot.innerHTML = clubHtml;
  } else {
    divRoot.innerHTML = "<p>Clube não encontrado.</p>";
  }
}

// Adicionar um ouvinte de evento ao botão "Selecionar"
botaoSelecionar.addEventListener("click", () => {
  const selectedValue = selectClubes.value;
  exibirClube(selectedValue);
});
