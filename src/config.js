// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: {
        request: true,
        requestObjects: [
          'request'
        ],
        response: true,
        responseObjects: [
          'response'
        ],
    },
 
    intentMap: {
       'AMAZON.StopIntent': 'END',
       'AMAZON.CancelIntent': 'END',
       'AMAZON.NoIntent': 'END',
       'AMAZON.YesIntent': 'YesIntent',
    },
 
    db: {
         FileDb: {
             pathToFile: '../db/db.json',
         }
     },
 };
 