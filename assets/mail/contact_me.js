console.log('it works')


$(document).ready(function(){
    $('.submit').click(function (event){
    event.preventDefault()
    console.log('Clicked button')
    })
})
