let getLetterGrade = (data) => {
  let hasHidden = data.menu.mods.str.match(/HD/g);
  let hasFlashlight = data.menu.mods.str.match(/FL/g);
  let letter = data.gameplay.hits.grade.current;
  if (letter === 'SS' && (hasHidden || hasFlashlight))
    return 'https://chino.is-a.dev/grade/ssh.png'
  if (letter === 'S' && (hasHidden || hasFlashlight))
    return 'https://chino.is-a.dev/grade/sh.png'
  return `https://chino.is-a.dev/grade/${letter.toLowerCase()}.png`
}
let resolveObjectPath = (obj, path) => {
  let pathArray = path.split('.');
  for (let prop of pathArray) {
    obj = obj[prop]
  }
  return obj
}
let checkRound = (time) => {
  if (time - Math.floor(time) < 0.5) {
    time = Math.floor(time);
  } else {
    time = Math.floor(time) + 1;
  }
}
module.exports = {
  getLetterGrade,
  resolveObjectPath,
  checkRound
}
