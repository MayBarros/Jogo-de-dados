# Projeto - Jogo de Lançamento de Dados

O site tem como objetivo simular o lançamento de dados. 
Ele disponibiliza uma API REST que permite aos usuários realizar essa simulação utilizando métodos HTTP (GET, POST, PUT, DELETE). 
A API suporta a escolha diferentes tipos de dados, são 4, 6, 8, 10, 12, 20 e 100 lados.
Para escolher o dado desejado, o usuário faz uma requisição GET, passando um parâmetro que indica a quantidade de lados do dado a ser lançado. 
O sistema então retorna um valor aleatório correspondente ao resultado do lançamento.

## Funcionalidades

O site permite rolar dados com um número específico de lados, incluindo:

- **D4**: Dado de 4 lados
- **D6**: Dado de 6 lados
- **D8**: Dado de 8 lados
- **D10**: Dado de 10 lados
- **D12**: Dado de 12 lados
- **D20**: Dado de 20 lados
- **D100**: Dado de 100 lados

## Como Funciona

1. **Escolha do Dado**: O usuário pode escolher o tipo de dado (por exemplo, `/roll/6` para um dado de 6 lados).

2. **Requisição GET**: O usuário envia uma requisição no formato `GET /roll/:diceType`, onde `:diceType` representa o número de lados do dado (por exemplo, `/roll/6` para um dado de 6 lados).

3. **Verificação**: O servidor verifica se o tipo de dado solicitado está na lista de dados válidos (4, 6, 8, 10, 12, 20 ou 100 lados).

4. **Resultado**: Se for válido, o resultado aparecerá na tela dentro do intervalo de lados escolhido. Caso contrário, retorna uma mensagem de erro com status 400.

### Exemplo de Resposta

- **Dado Escolhido**: "D6"
- **Resultado**: 3

