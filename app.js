const quoteDiv = document.getElementById('quote')
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quoteDiv.innerHTML += `<p> ${quote.quote}</p>`
})
const reloadButton = document.querySelector('.reload');
function reloadPage(){
    location.reload();
}
reloadButton.addEventListener('click', reloadPage);