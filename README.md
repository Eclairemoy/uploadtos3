# Upload an Encrypted File to S3 Using Next.js

This project provides a simple interface to upload files to an AWS S3 bucket using Node.js. Created to go alone with [this guide](https://docs.evervault.com/guides/file-to-s3).

## Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine
* An AWS account with access to S3
* AWS credentials (Access Key ID and Secret Access Key)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Eclairemoy/uploadtos3.git
cd uploadtos3/src
```



### 2. Install Dependencies

Ensure you're in the `src` directory and run:

```bash
npm install
```



### 3. Configure AWS Credentials

Create a `.env` file in the `src` directory with the following content:

```env
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_s3_bucket_name
```



Replace `your_access_key_id`, `your_secret_access_key`, `your_aws_region`, and `your_s3_bucket_name` with your actual AWS credentials and desired S3 bucket information.

### 4. Add a Sample File

Place a sample file you wish to upload in the `src` directory. For example, `sample.txt`.

### 5. Run the Upload Script

Execute the upload script using Node.js:([Stack Overflow][1])

```bash
node upload.js sample.txt
```



This command will upload `sample.txt` to the specified S3 bucket.

## Notes

* Ensure your AWS credentials have the necessary permissions to upload files to the specified S3 bucket.
* The script assumes the file to upload is located in the same directory (`src`).
* You can modify the script to handle different directories or multiple files as needed.

---

For more details and advanced configurations, refer to the [AWS SDK for JavaScript Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/).

---

[1]: https://stackoverflow.com/questions/17930204/simple-file-upload-to-s3-using-aws-sdk-and-node-express?utm_source=chatgpt.com "Simple file upload to S3 using aws-sdk and Node/Express"
