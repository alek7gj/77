describe('Edit Images Page', () => {
  beforeEach(() => {
    cy.visit('upload.html?itemId=1');
  });

  it('TC05 - Verify item details appear', () => {
    cy.contains('Item ID: 1');
    cy.contains('Name: Classic Tee');
  });

  it('TC06 - Verify color/fabric table loads', () => {
    cy.get('table').should('exist');
    cy.contains('th', 'Blue');
    cy.contains('th', 'Green');
    cy.contains('th', 'Red');
    cy.contains('td', 'Cotton');
    cy.contains('td', 'Polyester');
  });
});