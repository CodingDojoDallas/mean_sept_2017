$(function(){
    let socket = io.connect();
    $('#newEvent').click( () => {
        socket.emit('button_clicked', {msg: 'I was sent from the client'})
    })
    // listener
    socket.on('button_response', (data) =>{
        $('#notes').append(`<h3>${data.msg}</h3>`);
    })
    $('form').submit( () => {
        let name = $('#name').val();
        let location = $('#location').val();
        let language = $('#language').val();
        let comment = $('#comment').val();
        socket.emit('form_submission', {name: name, location:location, language:language, comment:comment});
        return false;
    })
    socket.on('form_response', (data) =>{
        $('#notes').append(`<h3>${data.msg}</h3>`);
    })
})