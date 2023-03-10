# Desafio QA Loja Integrada


Foi proposto o desafio para que fosse automatizado alguns cenários de testes que eu julgasse necesário para a implementação da Feature Cupom dentro do Carrinho, então resolvi automatizar os testes regressivos. Para a automação utilizei js com cypress e também criei uma pipeline com GitHub Actions para que todos os testes sejam executados quando houver uma PR e também, cada 60min de segunda a sexta e o resultado da execução é enviado para um canal no slack.
 Os cenários criados foram os seguintes :
 - Validar Fluxo do carrinho ao adicionar o Cupom FRETEGRATIS 
 objetivo desse teste é validar se quando o cupom é adicionado o Carrinho fica com Frete grátis
- Validar Fluxo do carrinho ao adicionar o Cupom AJJFLWBHH
objetivo desse teste é validar se quando o cupom de 5% é adicionado corretamente no Carrinho
- Validar Fluxo do carrinho ao adicionar o Cupom 10OFF
objetivo desse teste é validar se quando o cupom de 1% é adicionado corretamente no Carrinho
- Validar Fluxo do carrinho ao adicionar o Cupom 30REAIS
objetivo desse teste é validar se quando o cupom de R$ 30,00 é adicionado corretamente no Carrinho
- Validar Fluxo do carrinho ao adicionar um Cupom inválido
Objetivo desse teste é validação de cupom inválido está funcionando corretamente
- Validar Fluxo do carrinho ao remover o cupom de quando já houver produtos no carrinho
Objetivo desse teste é validar se ao remover o cupom do carrinho o fluxo de finalização da compra não é afetado

# Como conifgurar e executar o projeto
 Para o projeto ser executado é necessário que o Node e o Cypress estejam instalado
 - Como instalar o Node [link](https://nodejs.org/en/)
