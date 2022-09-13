import AWS from "aws-sdk"
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
})

export const contentBucket = new AWS.S3()

