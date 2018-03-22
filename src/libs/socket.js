function jsonRpc(socket, data, cb) {
    let compose = {
        'jsonrpc': '2.0',
        'method': data.method,
        'params': data.params,
        'id': data.id
    };
    socket.on('jsonrpc', result => cb(null, result));
    socket.emit('jsonrpc', JSON.stringify(compose));
}
export { jsonRpc };