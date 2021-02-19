// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@23!56789ABCDE'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {//Mot de passe de 14 caractères commençant par @ et conteant un ! en 4ème position
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)