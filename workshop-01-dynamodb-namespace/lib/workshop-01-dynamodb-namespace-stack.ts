import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { TableEncryption } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import * as _ from 'lodash';

//Docs https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
export class Workshop01DynamodbNamespaceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }
}

// const ENV_NAME = this.node.tryGetContext("ENV_NAME");
//     const SERVICE_NAME = this.node.tryGetContext("SERVICE_NAME");

//     if (_.isEmpty(ENV_NAME) || _.isEmpty(SERVICE_NAME)) {
//       throw new Error('ENV_NAME or SERVICE_NAME context is missing...')
//     }

// const dynamoDbTable = new dynamodb.Table(this, `${ENV_NAME}-${SERVICE_NAME}-workshop-domain-id`, {
//   tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-domain`,
//   partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
//   sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
//   billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
//   serverSideEncryption: true, //enforcing encryption by default
//   removalPolicy: RemovalPolicy.DESTROY
// });

// let workshopTables = [{
//   tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-domain`,
//   partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
//   sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
//   envName: ENV_NAME,
//   billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
//   isstresaming: true
// }];

// workshopTables.forEach((workshopTable) => {

//   const dynamoDbTable = new dynamodb.Table(this, `${workshopTable.tableName}`, {
//     tableName: `${workshopTable.tableName}`,
//     partitionKey: workshopTable.partitionKey,
//     sortKey: workshopTable.sortKey,
//     billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
//     serverSideEncryption: true//enforcing encryption by default
//   });
// })
