const GRADE_URL = 'https://raw.githubusercontent.com/AutumnVN/gosu-rich-presence/main/grade/';
let getLetterGrade = (data) => {
  let hasHidden = data.menu.mods.str.match(/HD/g);
  let hasFlashlight = data.menu.mods.str.match(/FL/g);
  let letter = data.gameplay.hits.grade.current;
  if (letter === 'SS' && (hasHidden || hasFlashlight))
    return GRADE_URL + 'ssh.png'
  if (letter === 'S' && (hasHidden || hasFlashlight))
    return GRADE_URL + 'sh.png'
  return GRADE_URL + letter.toLowerCase() + '.png'
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
