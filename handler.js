'use strict';

const {getPage, parsePage, saveRatingsToDB} = require("./utils");

module.exports.scrape = (event, context , callback) => {
  //1. fetch yelp page
  getPage(event)
  .then(page => parsePage(page)).then(yelpData => saveRatingsToDB(yelpData, event))
  //2. parse this page

  //3. Save ratings data to our db

  const response ={
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

module.exports.scrape = (event, context , callback) => {
  const fakeDatabaseResults = ["bestia-los-angeles","république-los-angeles-2","the-morrison-los-angeles"];
  
  fakeDatabaseResults.forEach( businessName => 
  deployScrapers(businessName));

}
