import uuid from "uuid";
import AWS from "aws-sdk";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure } from "./libs/response-lib";

AWS.config.update({
    region: "ca-central-1" });

export async function  main(event, context, callback) {
    console.log('I am in main');
    const data = JSON.parse(event.body);
    console.log('i am after parsering');
    const params = {
        TableName: process.env.tableName,
        Item: {
            userId:event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
            }
    };

    try {
        await dynamoDbLib.call("put", params);
        return success({status: true});
    } catch(e) {
        return failure({status: false});
    }
}