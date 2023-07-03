function verificaPalindromo(palavra) {
  const reversedString = palavra.split("").reverse().join("");
  return palavra === reversedString 
}
