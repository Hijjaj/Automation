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
    cy.get('.list-unstyled > :nth-child(3) > a').click();
    cy.get(':nth-child(2) > .o_wblog_post > .mb-2 > .o_record_cover_container > .o_record_cover_component').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.o_record_cover_component.o_record_cover_image').should('have.css', 'background-image').and('not.contain', 'none');
  });
});