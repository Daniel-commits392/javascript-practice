function maskPhoneNumber(phonenumber){
    const startNo = phonenumber.slice(0,2)
    const endNo = phonenumber.slice(phonenumber.length-2);
    const maskedNumber = startNo + '*'.repeat(phonenumber.length-4) + endNo;

    return maskedNumber
};
const phonenumber = '0719349587'
console.log(maskPhoneNumber(phonenumber));
console.log(maskPhoneNumber('0791234567'));
console.log(maskPhoneNumber('06473674784857'))