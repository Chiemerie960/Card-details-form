let cardNr = document.querySelector('.cardNr')
let cardHr = document.querySelector('.cardHr')
let i = document.querySelector('.card-hr')
let x = document.querySelector('.card-num')
cardNr.addEventListener('input', () => {
  function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}
x.innerHTML = format(cardNr.value)
})
cardHr.addEventListener('input', () => {
  i.innerHTML = cardHr.value
})