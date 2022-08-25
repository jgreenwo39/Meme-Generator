const form = document.querySelector('#create-meme');
const imgInput = document.querySelector('#img');
const topInput = document.querySelector('#text-top');
const btmInput = document.querySelector('#text-bottom');
const btmSection = document.querySelector('#btm-section');
const button = document.querySelector('#submit-form');
const div = document.querySelector('#add-meme');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    debugger;
    console.log(imgInput.value);
    console.log(topInput.value);
    console.log(btmInput.value);

    const newImage = document.createElement('img');
    newImage.classList.add('thumbnail');
    newImage.setAttribute('src', imgInput.value);
    imgInput.value = '';

    const topText = document.createElement('div');
    topText.classList.add('upperText');
    topText.innerText = topInput.value;
    topInput.value = '';

    const btmText = document.createElement('div');
    btmText.classList.add('lowerText');
    btmText.innerText = btmInput.value;
    btmInput.value = '';

    const rmBtn = document.createElement('button');
    rmBtn.classList.add('meme-btn');
    rmBtn.innerText = 'delete';
    
//     I want to append these to the new image
    div.append(newImage);
    div.append(topText);
    div.append(btmText);
    div.append(rmBtn);
    

})




