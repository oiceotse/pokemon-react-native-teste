## Explicação arquitetura ##
A arquitetura demonstrada é baseada em FDD(feature driven development), onde divido minha aplicação em modules e features.
Na nossa aplicação do pokemon, tivemos apenas 1 module (Main), que corresponde as funcionalidades principais do app.
Tivemos 2 funcionalidades: Home e Welcome. A primeira lista todos os pokemons, e a segunda é uma tela de boas vindas da aplicação.

O app está totalmente coberto pelo redux, persisto os pokemons na store, o app pode ser usado offline também, uma vez que tenha carregado qualquer pokemon;

Uma aplicação desse porte não precisaria da metade da estrutura apresentada aqui, mas fiz questão de densenvolve-la para fins de demonstração da escalabilidade que o produto pode ter, fora divisões de camadas que um app deve ter para melhor manutenibilidade;

Os pokemons são carregados de 20 em 20, ao chegar no final, carrega-se mais 20, cumprindo assim o requisito de lazyload.

ps: gostaria de ter feito algo mais bem acabado com animações e etc... mas pelo prazo de 2 dias, decidi fazer algo mais simples visualmente, mas com uma arquitetura bem sólida e construida. 
