// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ddddddddddddd%'//1337 disible par 7 => 7 fois le caractère ascii 191()

const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {//Mot de passe pour lequel la somme des valeurs ascci de chacun des caractères du mdp est égale à 1337
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)