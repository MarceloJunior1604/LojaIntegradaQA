/// <reference types="Cypress" />

describe('Implementação Cupom', () => {
  beforeEach(() => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/')

  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom FRETEGRATIS', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.wait(5)
    // Adcionando o Cupom
    cy.get('#usarCupom').type('FRETEGRATIS')
    cy.get('#btn-cupom').click()
    // // Adicionando mais um item ao carrinho
     cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
     cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
     cy.get('.input-small').type('58062135')
     cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Validando se o Cupom foi adicionado
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-sucesso > .cor-secundaria').should("exist")
    cy.get('.cupom-valor > .cor-secundaria').should("exist")
    // Validando se após a conclusão do pedidoo cupom permaneceu adicionado
    cy.contains('Frete Grátis').should('be.visible')
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("FRETEGRATIS")

  })
})