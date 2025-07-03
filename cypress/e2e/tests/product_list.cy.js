describe('Product List Page', () => {
  beforeEach(() => {
    cy.visit('index.html');
  });

  it('TC01 - Verify table loads with items', () => {
    cy.get('table').should('exist');
    cy.get('th').contains('Item Id');
    cy.get('th').contains('Item Name');
  });

  it('TC02 - Verify Edit Images navigation', () => {
    cy.contains('Edit Images').first().click();
    cy.url().should('include', 'upload.html?itemId=');
  });

  it('TC03 - Verify table column headers', () => {
    cy.get('th').contains('Item Id');
    cy.get('th').contains('Item Name');
    cy.get('th').contains('Nº Colors');
    cy.get('th').contains('Nº Fabrics');
    cy.get('th').contains('Nº Images');
  });
});