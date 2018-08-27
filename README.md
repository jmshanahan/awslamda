# Introduction

This program uses a scraping method to generate some data and it writes it out to an AWS DynamoDB database using a Lamda function.
I was unable to run it on the server because of a slow upload internet service I could not upload it.but I could run it locally.

There was a number of issues with getting it going.
Firstly  to get DynamoDB running you must have a java runtime installed on your local machine.

I put the following lines into the yml file. Not sure if they were required or not.
plugins:
  - serverless-dynamodb-local
  - serverless-offline

You need to add dynamoDB as follows
serverless dynamodb install

Then I had permission problems.

I set my permissions with the following
sls config credentials --provider aws --key XXXX --secret XXXX --profile serverless-admin

This writes them out to ~/.aws/credentials

[serverless-admin]
aws_access_key_id = XXXX
aws_secret_access_key = XXXXXX

But to get to work I need to set them to default. I know this is a hack but I was only interested in getting the lamda function running.

[default]
aws_access_key_id = XXXXXXXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXX
