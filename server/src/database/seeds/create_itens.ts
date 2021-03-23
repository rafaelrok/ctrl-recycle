import { Knex } from 'knex';

export async function seed(Knex: Knex) {
    Knex('itens').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilha e Batarias', image: 'bateria.svg' },
        { title: 'Papeis e Papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
}