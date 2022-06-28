describe('welcome page spec', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/');
  });

  it('shows welcome page', () => {
    cy.get('.welcome-image');
    cy.get('.welcome-text');
    cy.get('.get-started');
  });

  it('should navigate to sign-in page', () => {
    cy.get('.get-started').click();
    cy.get('.sign-in');
  });

  //it('shows tab 3', () => {
  //  cy.get('.tab3').click();
  //});

  //it('goes back to tab 1', () => {
  //  cy.get('.tab1').click();
  //  cy.get('.welcome-image');
  //  cy.get('.welcome-text');
  //  cy.get('.get-started');
  //});
})

// https://devdactic.com/ionic-e2e-tests-cypress/
// npx cypress run --record --key 22280890-6bea-4dd1-a69b-26afe9ee90ba
