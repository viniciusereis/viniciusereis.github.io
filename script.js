function listaDeFilmes() {

  const movies = [
    {
      title: 'Harry Potter',
      synopsis: 'As aventuras de um jovem bruxo em Hogwarts.',
      year: '2001 - 2011',
    },
    {
      title: 'As Vantagens de Ser Invisível',
      synopsis: 'Um estudante introvertido encontra seu lugar no mundo.',
      year: '2012',
    },
    {
      title: 'Com amor, Simon',
      synopsis: 'Um adolescente tem que tomar coragem para se assumir diante de seus colegas de classe, após um e-mail que cai em mãos errada.',
      year: '2018',
    },
  ];

  const moviesListContainer = document.getElementById('movies-list');

  movies.map(movie => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Sinopse:</strong> ${movie.synopsis}</p>
        <p><strong>Ano:</strong> ${movie.year}</p>`;
    moviesListContainer.appendChild(listItem);
  });
}
listaDeFilmes();

function listaDeSeries() {

  const series = [
    {
      title: "Grey's anatomy",
      synopsis: 'Série médica onde um grupo de jovens médicos iniciam sua carreira no hospital Grace Mercy West em Seattle',
      year: '2005',
    },
    {
      title: 'Shooter(Atirador)',
      synopsis: `A série segue a história de Bob Lee Swagger,
            um atirador de elite e veterano de guerra, que é arrastado de volta à 
            ação depois de descobrir um plano para assassinar o presidente dos Estados Unidos.
            Ele deve lutar para limpar seu nome e proteger sua família.`,
      year: '2016',
    },
    {
      title: 'Designated Survivor(Sobrevivente Desegnado)',
      synopsis: `Após a morte por atentado do presidente e de vários altos membros do governo, 
    o tímido ministro Tom Kirkman é subtamente obrigado a liderar um governo onde reina o caos`,
      year: '2019',
    },
  ];
//Pegando o id serie-list da tag UL no html para fazer o codigo a partir dela.
  const seriesListContainer = document.getElementById('series-list');

  series.forEach(serie => {
    const listItem = document.createElement('li');//Criar a lista no html
    listItem.innerHTML = `<h2>${serie.title}</h2>
  <p><strong>Sinopse</strong>${serie.synopsis}</p>
  <p><strong>Ano</strong>${serie.year}</p>`;
//appendChild para adicionar o elemento na arvore DOM
    seriesListContainer.appendChild(listItem);
  })
}
listaDeSeries();