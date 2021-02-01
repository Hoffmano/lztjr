const name = document.getElementById('nome'),
  subject = document.getElementById('assunto'),
  email = document.getElementById('email'),
  message = document.getElementById('mensagem'),
  contact = document.getElementById('contact'),
  messageSent = document.getElementById('messageSent')
function setErrorFor(e, s) {
  const t = e.parentElement
  ;(t.querySelector('small').innerText = s), (t.className = 'form-group error')
}
function setSuccessFor(e) {
  const s = e.parentElement
  ;(s.querySelector('small').innerText = null),
    (s.className = 'form-group success')
}
function isEmail(e) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    e,
  )
}
console.log('msg' + message),
  contact.addEventListener('submit', e => {
    let s,
      t = []
    name.value.trim().length < 3
      ? (setErrorFor(name, (s = 'Insira um nome válido')), t.push(s))
      : setSuccessFor(name),
      email.value.trim().length < 3
        ? (setErrorFor(email, (s = 'Insira um email válido')), t.push(s))
        : isEmail(email.value)
        ? setSuccessFor(email)
        : (setErrorFor(email, s), t.push(s)),
      subject.value.trim().length < 3
        ? (setErrorFor(subject, (s = 'Insira um assunto válido')), t.push(s))
        : setSuccessFor(subject),
      message.value.trim().length < 3
        ? (setErrorFor(message, (s = 'Insira uma mensagem')), t.push(s))
        : setSuccessFor(message),
      t.length > 0
        ? (e.preventDefault(), (messageSent.className = 'message-notSent'))
        : (setTimeout(function () {
            ;(name.value = ''),
              (email.value = ''),
              (subject.value = ''),
              (message.value = '')
          }, 2e3),
          setTimeout(function () {
            ;(messageSent.className = 'message-sent'),
              (messageSent.innerText = 'Mensagem Enviada')
          }, 2200))
  })
