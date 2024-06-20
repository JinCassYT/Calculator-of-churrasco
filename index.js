document.getElementById('calcular').addEventListener('click', function () {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);
  const carneBovina = (homens * 0.5 + mulheres * 0.3 + criancas * 0.2).toFixed(
    1
  );
  const deFrango = (homens * 0.2 + mulheres * 0.2 + criancas * 0.1).toFixed(1);
  const deLinguica = (homens * 0.2 + mulheres * 0.2 + criancas * 0.2).toFixed(
    1
  );
  const deRefrigerante = (
    homens * 0.3 +
    mulheres * 0.4 +
    criancas * 0.2
  ).toFixed(1);
  const deCerveja = (homens * 0.8 + mulheres * 0.5).toFixed(1);

  const resultado = ` 
       <p>${carneBovina}KG de carne bovina</p>
        <p>${deFrango}KG de frango</p>
        <p>${deLinguica}KG de linguiça</p>
        <p>${deRefrigerante}L de refrigerante</p>
        <p>${deCerveja}L de cerveja</p>
    
    
    `;
  document.getElementById(
    'resultado'
  ).innerHTML = `<h3>Quantidade de itens a serem comprados:</h3>${resultado}`;
});
