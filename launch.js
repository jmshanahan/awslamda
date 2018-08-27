const request = require('request-promise')
const AWS = require('aws-sdk')

const list = ["bestia-los-angeles","république-los-angeles-2","the-morrison-los-angeles"];

function deployScraper(businessName){
    const lamda = new AWS.Lambda({
        region:"eu-west-1"
    })
    const params = {
        FunctionName:"yelp-scraper-dev-scrape",
        InvocationType:"RequestResponse",
        LogType:"Tail",
        Payload: JSON.stringify(businessName)
    }
    return lamda.invoke(params, function(error, data){
        if(error){
            console.error(JSON.stringify(error));
            return new Error(`Error scraping : ${JSON.stringify(error)}`);
        }else if(data){
            console.log(data)
            return JSON.stringify(data);
        }
    })
}

function swarm(arr){
    arr.forEach(businessName => deployScraper(businessName));
}

swarm(list);