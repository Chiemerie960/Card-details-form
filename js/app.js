let cardNr = document.querySelector('.cardNr')
let cardHr = document.querySelector('.cardHr')
let cardMnth = document.querySelector('.mnth')
let cardYr = document.querySelector('.yr')
let cvc = document.querySelector('.cvc-hr')
let x = document.querySelector('.card-num')
let y = document.querySelector('.card-hr')
let a = document.querySelector('.mm')
let b = document.querySelector('.yy')
let c = document.querySelector('.cvc')
cardNr.addEventListener('input', () => {
  function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}
x.innerHTML = format(cardNr.value)
})
cardHr.addEventListener('input', () => {
  y.innerHTML = cardHr.value
})
cardMnth.addEventListener('input', ()=> {
  a.innerHTML = cardMnth.value
})
cardYr.addEventListener('input', ()=> {
  b.innerHTML = cardYr.value
})
cvc.addEventListener('input', ()=> {
  c.innerHTML = cvc.value
})
