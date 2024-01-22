const stream = require('stream');
function setupStreams(dataInputStream, dataQutputStream, callback) {
	// Write your code here
    let id =0;
    const transformStream=new stream.Transform({
        objectMode:true,
        transform(chunk,encoding,callback){
            const dataObject = JSON.parse(chunk);
            dataObject.id=id++;
            this.push(JSON.stringify(dataObject));
            callback();
        }
    })


}

let readable = new stream.Readable();
let writable = new stream.Writable({
    objectMode: true,
	write: (chunk, encoding, callback) => {
		console.log(chunk);
		callback(null, true);
	}
})

setupStreams(readable, writable, () => console.log("onEnd"));

readable.push('{ "log": "Request received" }');
readable. push(null) ;
module.exports.setupStreams = setupStreams;
