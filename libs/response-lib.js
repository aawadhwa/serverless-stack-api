export function success(body) {
    console.log('this is success');
    return buildResponse(200, body);
    }
export function failure(body) {
    console.log('this is failure');

    return buildResponse(500, body);
    }

function buildResponse(statusCode, body) {
return {
statusCode: statusCode,
headers: {
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Credentials": true
},
body: JSON.stringify(body)
};
 }