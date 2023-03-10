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
    cy.wait(30)
    // Adcionando o Cupom
    cy.get('#usarCupom').type('FRETEGRATIS')
    cy.get('#btn-cupom').click()
    // Adicionando mais um item ao carrinho
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

  it('Validar Fluxo do carrinho ao adicionar o Cupom AJJFLWBHH', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('250')
    cy.get('.quantidade > .botao').click()
    cy.wait(30)
    // Adcionando o Cupom
    cy.get('#usarCupom').type('AJJFLWBHH ')
    cy.get('#btn-cupom').click()
    // Adicionando mais um item ao carrinho
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Validando se o Cupom foi adicionado
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    // Validando se após a conclusão do pedidoo cupom permaneceu adicionado
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("AJJFLWBHH")

  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom 10OFF ', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('250')
    cy.get('.quantidade > .botao').click()
    cy.wait(30)
    // Adcionando o Cupom
    cy.get('#usarCupom').type('10OFF')
    cy.get('#btn-cupom').click()
    // Adicionando mais um item ao carrinho
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Validando se o Cupom foi adicionado
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    // Validando se após a conclusão do pedidoo cupom permaneceu adicionado
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("10OFF")

  })

  it('Validar Fluxo do carrinho ao adicionar o Cupom 30REAIS ', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('250')
    cy.get('.quantidade > .botao').click()
    cy.wait(30)
    cy.get('#usarCupom').type('30REAIS')
    cy.get('#btn-cupom').click()
    // Adicionando mais um item ao carrinho
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Validando se o Cupom foi adicionado
    cy.get('.cupom-codigo').should("exist")
    cy.get('.cupom-valor').should('exist')
    cy.get('.span12 > .principal').click()
    // Validando se após a conclusão do pedidoo cupom permaneceu adicionado
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').contains("30REAIS")

  })

  it('Validar Fluxo do carrinho ao adicionar um Cupom inválido ', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('250')
    cy.get('.quantidade > .botao').click()
    cy.wait(30)
    //Adicionando Cupom inválido
    cy.get('#usarCupom').type('cupominválido')
    cy.get('#btn-cupom').click()
    //Validando que retornou a mensagem que o Cupom não foi encontrado
    cy.get('.alert-danger').contains('Cupom não encontrado.')
    //Validando se o campo para digitar o cupom continua invisível e em branco
    cy.get('#usarCupom').should('be.visible')
    cy.get('#usarCupom').should("have.value", "")
    cy.get('.span12 > .principal').click()
    //Validando conclusão do carrinho sem o cupom e se ele de fato não permaneceu no pedido
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').should('not.exist')

  })

  it('Validar Fluxo do carrinho ao remover o cupom de quando já houver produtos no carrinho ', () => {
    // Acessando tela principal do site e selecionando o item
    cy.title().should('be.equal', 'QA Store Desafio')
    cy.get(':nth-child(4) > .row-fluid > :nth-child(2) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Adicionando quantidade ao item
    cy.get('.input-mini').clear().type('250')
    cy.get('.quantidade > .botao').click()
    cy.wait(30)
    // Adicionando o Cupom
    cy.get('#usarCupom').type('30REAIS')
    cy.get('#btn-cupom').click()
    // Adicionando mais um item ao carrinho
    cy.get('.span12 > [href="https://qastoredesafio.lojaintegrada.com.br/"]').click()
    cy.get(':nth-child(1) > ul > :nth-child(4) > .listagem-item > .produto-sobrepor').click()
    cy.get('.input-small').type('58062135')
    cy.get('div.principal > .acoes-produto > .comprar > .botao').click()
    // Marcando a opção de entrega
    cy.get(':nth-child(2) > .radio > input').click()
    // Removendo Cupom
    cy.get('.text-error').click()
    // Validando se o Cupom foi Removido e se o campo permanece em branco
    cy.get('#usarCupom').should('be.visible')
    cy.get('#usarCupom').should("have.value", "")
    // Validando se de fato o cupom foi removido
    cy.get('.cupom-sucesso > .cor-secundaria').should('not.exist')
    cy.get('.span12 > .principal').click()
    // Validando se após a conlusão do carrinho o Cupom de fato não está mais adicionado
    cy.get('#id_email_login').should('exist')
    cy.get('.cupom-codigo').should('not.exist')


  })

})