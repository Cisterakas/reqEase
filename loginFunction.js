export function login(email, password) {
    if (email === 'student@example.com' && password === '12345') {
        return 'student';
    } else if (email === 'admin@example.com' && password === '12345') {
        return 'admin';
    } else {
        return 'invalid';
    }
}
