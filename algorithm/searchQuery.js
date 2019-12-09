const file = require('../wordCounts.json')

const iterateWord = (query) => {
    // file.forEach(element => {
        const firstPage = Object.keys(file)
        
        // console.log('Object.keys(key): ', Object.keys(file))
        Object.keys(file).forEach(function(key) {
            // console.log('key: ', key);
            file[key].forEach(element => {
                console.log('element: ', element);
                
            });
            // console.log(key, file[key]);
            let arr = Object.values(key)
            let max = Math.max(...arr)
            // console.log( `Max value: ${max}` )

        })
          
        //   })





    // for (var key in validation_messages) {
    //     // skip loop if the property is from prototype
    //     if (!validation_messages.hasOwnProperty(key)) continue;
    
    //     var obj = validation_messages[key];
    //     for (var prop in obj) {
    //         // skip loop if the property is from prototype
    //         if (!obj.hasOwnProperty(prop)) continue;
    
    //         // your code
    //         alert(prop + " = " + obj[prop]);
    //     }
    // }

// console.log( `Max value: ${max}` )
}

iterateWord('java')