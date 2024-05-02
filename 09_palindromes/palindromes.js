const palindromes = function (string) {
   const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

   let stringCleaned = string
      .toLowerCase()
      .split("")
      .filter((character) => alphanumerical.includes(character))
      .join("");

   let stringReversed = stringCleaned.split("").reverse().join("");

   return stringCleaned === stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
