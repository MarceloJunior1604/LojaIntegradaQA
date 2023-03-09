/// <reference types="Cypress" />

describe('Implementação Cupom', () => {
  beforeEach(() => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/')

  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom FRETEGRATIS', () => {

    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.get('#usarCupom').type('FRETEGRATIS')
    cy.get('#btn-cupom').click()
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get(':nth-child(2) > .radio > input').click()
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-sucesso > .cor-secundaria').should("exist")
    cy.get('.cupom-valor > .cor-secundaria').should("exist")
    cy.contains('Frete Grátis').should('be.visible')
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("FRETEGRATIS")


  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom AJJFLWBHH', () => {

    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.get('#usarCupom').type('AJJFLWBHH ')
    cy.get('#btn-cupom').click()
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get(':nth-child(2) > .radio > input').click()
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("AJJFLWBHH")


  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom 10OFF ', () => {

    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.get('#usarCupom').type('10OFF')
    cy.get('#btn-cupom').click()
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get(':nth-child(2) > .radio > input').click()
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("10OFF")


  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom 30REAIS ', () => {

    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.get('#usarCupom').type('30REAIS')
    cy.get('#btn-cupom').click()
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get(':nth-child(2) > .radio > input').click()
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("30REAIS")

  })

  it('Validar Fluxo do carrinho ao adicionar um Cupom inválido ', () => {

    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    cy.get(':nth-child(2) > .radio > input').click()
    cy.get('.input-mini').clear().type('200')
    cy.get('.quantidade > .botao').click()
    cy.get('#usarCupom').type('cupominválido')
    cy.get('#btn-cupom').click()
    cy.get('.alert-danger').contains('Cupom não encontrado.')
    cy.get('#usarCupom').should('be.visible')
    cy.get('#usarCupom').should("have.value", "")
    cy.get('.span12 > .principal').click()
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').should('not.exist')
   
  })

  it('Validar Fluxo do carrinho ao remover o cupom de quando já houver produtos no carrinho ', () => {

   

  })

})