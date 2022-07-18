const div = document.querySelector('div')
const body = document.querySelector('body')
// body.append(memeForm)
const meme = document.querySelector('#meme')
const memeForm = document.querySelector('memeForm')
const section = document.querySelector('section')

div.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const removeButton = document.createElement("button")
    removeButton.innerText = "Delete"

    const newTextTop = document.createElement('h3')
    const image = document.createElement('img')
    const newTextBottom = document.createElement('h3')
    newTextTop.textContent = document.getElementById('top').value
    image.setAttribute('src', 'https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')
    newTextBottom.textContent = document.getElementById('bottom').value

    section.append(newTextTop)
    section.append(image)
    section.append(newTextBottom)

});

section.addEventListener('submit', function(e) {  // submitBtn instead of "section"
    const textTop = document.querySelector('top')
    const url = document.querySelector('pic')
    const textBottom = document.querySelector('bottom')

})




