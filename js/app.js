let cardNr = document.querySelector('.cardNr')
let cardHr = document.querySelector('.cardHr')
let cardMnth = document.querySelector('.mnth')
let cardYr = document.querySelector('.yr')
let cvc = document.querySelector('.cvc-hr')

cardNr.addEventListener('input', () => {
  function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
  }
  document.querySelector('.card-num').innerHTML = format(cardNr.value)
})
cardHr.addEventListener('input', () => {
  document.querySelector('.card-hr').innerHTML = cardHr.value
})
cardMnth.addEventListener('input', () => {
  document.querySelector('.mm').innerHTML = cardMnth.value
})
cardYr.addEventListener('input', () => {
  document.querySelector('.yy').innerHTML = cardYr.value
})
cvc.addEventListener('input', () => {
  document.querySelector('.cvc').innerHTML = cvc.value
})







