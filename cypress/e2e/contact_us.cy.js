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
    cy.get('.flex-grow-1 > .oe_structure > .oe_unmovable > .container > .oe_unremovable > strong').click();
    cy.get('#om35ldvr4ir').clear('h');
    cy.get('#om35ldvr4ir').type('hallo');
    cy.get('.mb-0 > .btn').click();
    /* ==== End Cypress Studio ==== */
    cy.get('#om35ldvr4ir').should('contain', 'isi nomor whatsapp hanya menggunakan angka saja');
  });
});