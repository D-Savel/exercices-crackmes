
// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'//Mot d epasse égal à l'inverse du mot password1234

const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)