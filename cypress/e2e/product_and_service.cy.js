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
    cy.get('.list-unstyled > :nth-child(4) > a').click();
    let initialUrl;
    cy.url().then((url) => {
    initialUrl = url;
    });
    cy.get('#nav_tabs_content_1733451435092_356 > .oe_structure > .s_banner > .container > .row > .justify-content-center > [style="text-align: center;"] > .btn').click();
    cy.url().should('not.eq', initialUrl);
    cy.get('#nav_tabs_content_1733451435092_357 > .oe_structure > .s_banner > .container > .row > .justify-content-center > [style="text-align: center;"] > .btn').click();
    cy.get('#nav_tabs_link_1733451435092_358').click();
    cy.get('h6 > .btn').click();
    cy.get('#nav_tabs_link_1733451435092_360').click();
    cy.get('#nav_tabs_content_1733451435092_360 > .oe_structure > .s_banner > .container > .row > .justify-content-center > [style="text-align: center;"] > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
});