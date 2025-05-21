describe('template spec', () => {
  it('passes', () => {
    cy.on('window:before:load', (win) => {
      win.gtag = function() {
        console.log('Cypress stubbed gtag called with:', ...arguments);
      };
      win.dataLayer = win.dataLayer || [];
    });
    cy.visit('https://javan.co.id/en/homepage');
    let initialUrl;
    cy.url().then((url) => {
      initialUrl = url;
    });
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.g-col-lg-3 > .list-unstyled > :nth-child(1) > a').click();
    cy.get('.text-lg-center > .o_default_snippet_text').click();
    /* ==== End Cypress Studio ==== */
    cy.url().should('not.eq', initialUrl);
  });
});