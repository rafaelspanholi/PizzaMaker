import { escolherMassa, escolherMolho, escolherTipo } from "../escolhas.js";

const {
  module: describe,
  test,
  hooks: { beforeEach },
} = QUnit;

const $ = (id)=> document.getElementById(id)
const isHidden = (id) => $(id).classList.contains('hidden');

describe("escolha massa", () => {
  test("quando escolher o radio 1", (assert) => {
    $('radioBase1').checked = true;    
    
    escolherMassa();

    assert.true($('imageBase').src.includes('Pizzaa-01'), 'radio1 deve trocar a imagem base para pizzaa-01');
  });
  
  test("quando escolher o radio 2", (assert) => {
    $('radioBase2').checked = true;    
    
    escolherMassa();

    assert.true($('imageBase').src.includes('Pizzaa-02'), 'radio2 deve trocar a imagem base para pizzaa-02');
  });
 
  test("quando escolher o radio 3", (assert) => {
    $('radioBase3').checked = true;    
    
    escolherMassa();

    assert.true($('imageBase').src.includes('Pizzaa-03'), 'radio3 deve trocar a imagem base para pizzaa-03');
  });
});

describe("escolha molho", () => {  
  test("quando escolher o radio red", (assert) => {
    $('radioRedSauce').checked = true;    
    
    assert.true(isHidden('imageRedSauce'), 'a imagem do molho vermelho deve ficar escondida por padrao');
    
    escolherMolho();
    
    assert.false(isHidden('imageRedSauce'), 'radio red deve mostrar a imagem do molho vermelho');
  }); 
  
  test("quando escolher o radio yellow", (assert) => {
    $('radioYellowSauce').checked = true;    
    
    assert.true(isHidden('imageYellowSauce'), 'a imagem do molho amarelo deve ficar escondida por padrao');
    
    escolherMolho();
    
    assert.false(isHidden('imageYellowSauce'), 'radio red deve mostrar a imagem do molho amarelo');
  });
  
  test("quando nenhum molho for escolhido", (assert) => {
    $('radioYellowSauce').checked = false;    
    $('radioRedSauce').checked = false;    
    
    escolherMolho();

    assert.true(isHidden('imageRedSauce'), 'a imagem do molho vermelho deve ficar escondida por padrao');
    assert.true(isHidden('imageYellowSauce'), 'a imagem do molho amarelo deve ficar escondida por padrao');
  });
});

describe("escolha tipo", () => {  
  test("quando nenhum tipo for escolhido", (assert) => {
    $('checkboxNon-veg').checked = false;    
    $('checkboxVeg').checked = false;    
    
    escolherTipo();

    assert.true(isHidden('imageVegNon-veg'), 'a imagem do recheio misto deve ficar escondida por padrao');
    assert.true(isHidden('imageVeg'), 'a imagem do recheio vegetariano deve ficar escondida por padrao');
    assert.true(isHidden('imageNon-veg'), 'a imagem do recheio não vegetariano deve ficar escondida por padrao');
  });

  test.todo("quando a opção vegetariana for escolhida", (assert) => {
    //TODO
  });
  test.todo("quando a opção de carne for escolhida", (assert) => {
    //TODO
  });
  test.todo("quando as duas opções forem escolhidas", (assert) => {
    //TODO
  });
});
