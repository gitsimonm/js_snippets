async function saveJSON (data){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'});

    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const homeDir = require('os').homedir(); // See: https://www.npmjs.com/package/os
    const desktopDir = `${homeDir}/Desktop`;
    let path = desktopDir + '/data.json'

    try {
        const result = await fs.writeFile(path, buffer, error => {if(error){console.log(error)}});
    } catch (error) {
        console.log(error);
    }

    await new Promise(done => setTimeout(() => done(), 1000));
   
    return console.log('done')
};