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
        socket.emit('form_submission', {user: name});
        return false;
    })
    socket.on('form_response', (data) =>{
        $('#notes').append(`<h3>${data.msg}</h3>`);
    })
})