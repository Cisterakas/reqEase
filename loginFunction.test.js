import { assert } from 'chai';
import { login } from './loginFunction.js';

describe('Login Function', () => {
    it('should log in successfully with valid credentials', () => {
        const result = login('student@example.com', '12345');
        assert.equal(result, 'student');
    });

    it('should log in successfully as admin with valid credentials', () => {
        const result = login('admin@example.com', '12345');
        assert.equal(result, 'admin');
    });

    it('should handle invalid credentials', () => {
        const result = login('invalid@example.com', 'invalid');
        assert.equal(result, 'invalid');
    });

    it('should handle empty email field', () => {
        const result = login('', '12345');
        assert.equal(result, 'invalid');
    });

    it('should handle empty password field', () => {
        const result = login('student@example.com', '');
        assert.equal(result, 'invalid');
    });

    it('should handle empty email and password fields', () => {
        const result = login('', '');
        assert.equal(result, 'invalid');
    });
});
