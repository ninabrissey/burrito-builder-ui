describe('Order page', () => {
  beforeEach(() => {
    cy.intercept('Get', 'http://localhost:3001/api/v1/orders', {
      orders: [
        {
          id: 1,
          name: 'Scott',
          ingredients: ['lettuce', 'pico de gallo', 'hot sauce', 'guacamole'],
        },
        {
          id: 2,
          name: 'Nina',
          ingredients: ['lettuce', 'guacamole'],
        },
        {
          id: 3,
          name: 'Kayla',
          ingredients: ['lettuce', 'pico de gallo', 'hot sauce', 'guacamole'],
        },
      ],
    });
    cy.visit('http://localhost:3000/');
  });

  it('should be able to get elements on the page', () => {
    cy.get('h1').contains('Burrito Builder');
    cy.get('input').should('have.attr', 'placeholder');
    cy.get('button').eq(0).contains('beans');
    cy.get('button').eq(1).contains('steak');
    cy.get('button').eq(2).contains('carnitas');
    cy.get('button').eq(3).contains('sofritas');
    cy.get('button').eq(4).contains('lettuce');
    cy.get('button').eq(5).contains('queso fresco');
    cy.get('button').eq(6).contains('pico de gallo');
    cy.get('button').eq(7).contains('hot sauce');
    cy.get('button').eq(8).contains('guacamole');
    cy.get('button').eq(9).contains('jalapenos');
    cy.get('button').eq(10).contains('cilantro');
    cy.get('button').eq(11).contains('sour cream');
    cy.get('p').eq(0).contains('add name to order');
    cy.get('p').eq(1).contains('Nothing selected - add items');
    cy.get('button').eq(12).contains('Submit Order');
    cy.get('div.order > h3').eq(2).contains('Kayla');
    cy.get('ul.ingredient-list');
    cy.get('li').eq(3).contains('guacamole');
    cy.get('li').eq(4).contains('lettuce');
  });
});
