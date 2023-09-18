const { spec } = require('pactum');
const { faker } = require('@faker-js/faker');

let emailUser = faker.internet.email()
it('create user', async () => {
    await spec()
        .post('https://serverest.dev/usuarios')
        .withJson({
            "nome": "Fulano da Silva",
            "email":emailUser ,
            "password": "teste",
            "administrador": "true"
        })
});
