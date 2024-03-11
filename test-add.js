

import * as chai from 'chai';
import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';

//ADDITION TEST CASES

const assert = chai.assert;
describe('add function', () => {

  it('should add two numbers correctly', () => {

    // Arrange

    const num1 = 3;

    const num2 = 7;

    // Act

    const result = add(num1, num2);
    

    // Assert

    assert.equal(result, 10);

  });


  it('should handle negative numbers', () => {

    // Arrange

    const num1 = -5;

    const num2 = 3;

    // Act

    const result = add(num1, num2);

    // Assert

    assert.equal(result, -2);

  });

  // Add more test cases as needed

});

//SUBTRACTION TEST CASES

describe('substract function', () => {

    it('should subtract two numbers correctly', () => {
  
      // Arrange
  
      const num1 = 3;
  
      const num2 = 7;
  
      // Act
  
      const result = subtract(num1, num2);
      
  
      // Assert
  
      assert.equal(result, -4);
  
    });
  
  
    it('should handle negative numbers', () => {
  
      // Arrange
  
      const num1 = 5;
  
      const num2 = -3;
  
      // Act
  
      const result = subtract(num1, num2);
  
      // Assert
  
      assert.equal(result, 8);
  
    });
  
    // Add more test cases as needed
  
  });
  
  
  //MULTIPLICATION TEST CASES

describe('multiplication function', () => {

    it('should multiply two numbers correctly', () => {
  
      // Arrange
  
      const num1 = 3;
  
      const num2 = 3;
  
      // Act
  
      const result = multiply(num1, num2);
      
  
      // Assert
  
      assert.equal(result, 9);
  
    });
  
  
    it('should handle negative numbers', () => {
  
      // Arrange
  
      const num1 = 1;
  
      const num2 = -3;
  
      // Act
  
      const result = multiply(num1, num2);
  
      // Assert
  
      assert.equal(result, -3);
  
    });
  
    // Add more test cases as needed
  
  });
  
  

