function maskEmail(email){

    const index = email.indexOf('@');
    const username = email.slice(0,index);
    const domain = email.slice(index);

    const maskedEmail = username[0] + '*'.repeat(username.length-2) + username[username.length-1];

    return maskedEmail + domain;

};
const email = 'apple.pie@example.com';

console.log(maskEmail(email));
console.log(maskEmail('freecodecamp@example.com'));
console.log(maskEmail('info@test.dev'));
console.log(maskEmail('user@domain.org'));