$(function(){
	let socket = io.connect();
	$('#epic_btn').click( () => {
		socket.emit('button_clicked', { msg: 'I was sent from the client'})
		return false;
	})
	//listener
	socket.on('button_response', (data) => {
		$('#notes').append(`<h3>${data.msg}</h3>`);
	})
})