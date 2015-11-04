/**
 * Created by Janaka on 04/11/2015.
 */

module.exports = function(socket)
{
        socket.on('login', function(data)
        {
            console.log(data);
            if(data.username=='user' && data.password=='1234')
                socket.emit('login',{state:'success'});
            else
                socket.emit('login',{state:'fail'});
        });

};