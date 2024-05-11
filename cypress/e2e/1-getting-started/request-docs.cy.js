describe('Document request page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
      cy.visit('http://localhost:5173/reqDoc'); // Assuming your document request page URL is '/document-request'
    });
  
    it('Selecting Quantity of Documents', () => {
      // Increment quantity for the first document
      cy.get('.div-62').eq(0).find('.img-5').click();
  
      // Assert the quantity changes
      cy.get('.div-62').eq(0).find('span').should('have.text', '1');
    });
  
    it('Selecting Different Quantities for Different Documents', () => {
      // Increment quantity for the first document
      cy.get('.div-62').eq(0).find('.img-5').click();
      // Increment quantity for the second document
      cy.get('.div-62').eq(1).find('.img-5').click();
  
      // Assert the quantity changes
      cy.get('.div-62').eq(0).find('span').should('have.text', '1');
      cy.get('.div-62').eq(1).find('span').should('have.text', '1');
    });
  
    it('Attempting to Proceed Without Requesting Any Document', () => {
      // Click the "Next" button without selecting any document quantity
      cy.get('.div-391').click();
  
      // Assert an alert message appears
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Please request at least one document.');
      });
    });
    it('Proceeding to Next Page After Selecting Documents', () => {
        // Increment quantity for the first document
        cy.get('.div-62').eq(0).find('.img-5').click();
      
        // Click the "Next" button
        cy.get('.div-391').click();
      
        // Assert the URL changes to the shipping page
        cy.url().should('include', '/shipping');
      
        // Assert a success alert message appears
        cy.on('window:alert', (str) => {
          expect(str).to.equal('Document request created successfully!');
        });
      });
  });