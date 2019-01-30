
var p = document.getElementsByTagName('p')[0]
var input = document.querySelector('input')

addEventListener('keypress', function(event) {
    if (event.which === 0) {
        p.innerHTML = '<p>You pressed <span>' + event.key + '</span> and it\'s <span id=\'keycode\'>Key Code</span> is <span>' + event.keyCode + '</span></p>';
        var spans = document.getElementsByTagName('span')
        spans[0].style.color = 'crimsonred'
        spans[1].style.color = 'bluevoilet'
    }
    else {
        p.innerHTML = '<p>You pressed <span>' + event.key + '</span> and it\'s <span id=\'charcode\'>Char Code</span> is <span>' + event.which + '</span></p>';
    }    
})

input.addEventListener('keypress', function(event){
    if (event.which === 0) {
        p.innerHTML = '<p>You pressed <span>' + event.key + '</span> and it\'s <span id=\'keycode\'>Key Code</span> is <span>' + event.keyCode + '</span></p>';
        var spans = document.getElementsByTagName('span')
        spans[0].style.color = 'crimsonred'
        spans[1].style.color = 'bluevoilet'
        input.value = ''
    }
    else {
        p.innerHTML = '<p>You pressed <span>' + event.key + '</span> and it\'s <span id=\'charcode\'>Char Code</span> is <span>' + event.which + '</span></p>';
        input.value = ''
    }
})
