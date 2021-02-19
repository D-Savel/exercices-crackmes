// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ù'

const crackme2 = (password) => {
  if (password.length === 1) { //Tout mot de passe d'un caractère
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme2(password)