document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form')
  const result = document.getElementById('result')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = form.elements['name'].value

    result.innerText = name

    form.reset()
  })
})
