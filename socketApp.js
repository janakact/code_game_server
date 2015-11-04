/**
 * Created by Janaka on 04/11/2015.
 */

module.exports = function(socket)
{
        socket.on('new', function(data)
        {
            console.log(data);
        });

};