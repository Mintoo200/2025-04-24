describe("homepage", () => {
    it("affiche un titre de niveau 1", () => {
        cy.visit('https://beta.gouv.fr/');

        cy.findByRole('heading', { level: 1 })
            .should('have.text', "Construisons ensemble les services publics numériques de demain")
    })
    it("recherche", () => {
        cy.visit('https://beta.gouv.fr/');

        cy.findByRole("searchbox").type('foo');
        cy.findByRole("button", { name: "Rechercher" }).click()

        cy.findByRole("heading", { level: 1 }).should('have.text', "Résultats")
        cy.findByText("Aucun résultat pour « foo »").should('be.visible')
    })
})
