import Form from './Form.svelte'

const heading = document.querySelector('header > h1')
if (heading) {
  heading.style.display = 'flex'
  heading.style.justifyContent = 'space-between'
  new Form({ target: heading })
}
