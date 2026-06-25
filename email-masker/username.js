function maskUsername(username){
  
   if (username.length<3) {
    return username
  };

  const firstChar = username.slice(0,1); // if it was slice(0) the entire string would be returned so it ends up being daniel****l .
  const lastChar = username.slice(-1);
  const maskedUsername = firstChar  + '*'.repeat(username.length-2) + lastChar;

  return maskedUsername;
};

console.log(maskUsername('daniel'));
console.log(maskUsername('al'));