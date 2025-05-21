describe('template spec', () => {
  it('passes', () => {
    cy.on('window:before:load', (win) => {
      win.gtag = function() {
        console.log('Cypress stubbed gtag called with:', ...arguments);
      };
      win.dataLayer = win.dataLayer || [];
    });
    cy.visit('https://javan.co.id/en/homepage');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#top_menu > :nth-child(4) > .nav-link > span').click();
    cy.get('#top_menu > :nth-child(4) > .dropdown-menu > :nth-child(4) > .dropdown-item > span').click();
    cy.get('#ozp7022vqhe').clear('h');
    cy.get('#ozp7022vqhe').type('hallo');
    cy.get('.mb-0 > .btn').click();
    /* ==== End Cypress Studio ==== */
    cy.get('#ozp7022vqhe').should('contain', 'isi nomor whatsapp hanya menggunakan angka saja');
  });
});