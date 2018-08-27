const AWS = require('aws-sdk')

module.export = businessName => {
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