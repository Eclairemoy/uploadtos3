import * as dotenv from 'dotenv'
import * as fs from'fs';
import fetch from 'node-fetch';

dotenv.config()

// make sure that this is a relay file
const getEndpoint = 'your-presigned-url-relayapp/file-to-download.extension'

export default async function decryptFile(req, res){

  const params = {
    'response-content-disposition': 'inline',
    'X-Amz-Security-Token': '*******',
    'X-Amz-Signature':'*******',
    'X-Amz-Algorithm':'AWS4-HMAC-SHA256',
    'X-Amz-Date':'*******',
    'X-Amz-SignedHeaders':'host',
    'X-Amz-Expires':'*******',
    'X-Amz-Credential':'*******'
  };

  const urlParams = new URLSearchParams(params);
  const requestUrl = `${getEndpoint}?${urlParams.toString()}`;

  const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Accept': '*/*', 
      },
    });

  console.log(response);
  response.body.pipe(fs.createWriteStream("your-filename.extension"))

return res.status(200).json("ok")
};
