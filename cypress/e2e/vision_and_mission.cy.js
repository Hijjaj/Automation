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
    cy.get('.g-col-lg-3 > .list-unstyled > :nth-child(1) > a').click();
    cy.get('.text-lg-center > .o_default_snippet_text')
    .click()
    .wait(1000) 
    .then(() => {
    throw new Error('Klik pada elemen tidak menghasilkan perubahan apapun.');
  });
    /* ==== End Cypress Studio ==== */
  });
});