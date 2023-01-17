describe ('[POST] Caminho feliz', () => {

    let urlBase = "http://localhost:8080/api/v1"
    let token = "Bearer fa49674d35d7d5aa2862bf8c45f50e361d6fe206444dfcf17d93cab978114be4"

    it.only('[POST] - Cadastro de usuários', () => {
        cy.request({
            method: 'POST',
            url: urlBase,
            headers: {
                "Authorization": token         },
            body: {
                "name": "Joao dsadAugusto Joao",
                "cpf": "female",
                "email": "PedrodsadasAugudssto22@15ce.com",
                "status": "active"
            }              
        }).should((response) => {
            expect(response.status).to.eq(201)
        }) 
})

describe('[POST] Caminhos negativos', () => {

it('[POST] - Tentando criar usuário com o campo name em branco', () => {
        cy.request({
            method: 'POST',
            url: urlBase,
            failOnStatusCode: false,
            headers: {
                "Authorization": token
            },
            body: {
                "name": "",
                "cpf": "female",
                "email": "Gato2155.ramakrishna@15ce.com",
                "status": "active"
            }              
        }).should((response) => {
            expect(response.status).to.eq(422)
        }) 
})
it('[POST] - Tentando criar usuário com o E-mail inválido', () => {
    cy.request({
        method: 'POST',
        url: urlBase,
        failOnStatusCode: false,
        headers: {
            "Authorization": token
        },
        body: {
            "name": "Pedro Joao",
            "cpf": "female",
            "email": "Pedro.joaoce,com",
            "status": "active"
        }              
    }).should((response) => {
        expect(response.status).to.eq(422)
    }) 
})
it('[POST] - Tentando criar usuário com caracteres especiais no campo name', () => {
    cy.request({
        method: 'POST',
        url: urlBase,
        failOnStatusCode: false,
        headers: {
            "Authorization": token
        },
        body: {
            "name": "!@$%  %¨&*",
            "cpf": "female",
            "email": "JooaoPaulo213.ramakrishna@15ce.com",
            "status": "active"
        }              
    }).should((response) => {
        expect(response.status).to.eq(422)
    }) 
})
it('[POST] - Tentando criar usuário com caracteres especiais no campo E-mail', () => {
    cy.request({
        method: 'POST',
        url: urlBase,
        failOnStatusCode: false,
        headers: {
            "Authorization": token
        },
        body: {
            "name": "Pedro Augusto",
            "cpf": "female",
            "email": "#@% #¨#&$",
            "status": "active"
        }              
    }).should((response) => {
        expect(response.status).to.eq(422)
    }) 
})
it('[POST] - Tentando criar usuário com o campo gender vazio', () => {
    cy.request({
        method: 'POST',
        url: urlBase,
        failOnStatusCode: false,
        headers: {
            "Authorization": token
        },
        body: {
            "name": "Pedro Augusto",
            "cpf": "",
            "email": "Pedro Augusto123456.ramakrishna@15ce.com",
            "status": "active"
        }              
    }).should((response) => {
        expect(response.status).to.eq(422)
    }) 
})

})

})