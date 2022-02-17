
const request = require('request');
const fs = require('fs');
const args = process.argv;
const URL = args[2];
const CreateFile = args[3];
if(args.length >= 4){
  request(URL, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    fs.writeFile(CreateFile,body,(error) => {

      if(error) {
        console.log('failed to write to file');
        process.exit();
      } else {
        fs.stat(CreateFile,(error,stats)=> {
          if(error) {
            console.log("Couldn't get created file stats");
          } else {
            console.log(`Downloaded and saved ${stats.size} bytes to ${CreateFile}`);
          }
        });
      }
      
    });

  });
}
