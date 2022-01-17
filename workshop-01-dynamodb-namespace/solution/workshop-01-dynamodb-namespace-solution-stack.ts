import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';


import * as _ from 'lodash';
import { RemovalPolicy } from '@aws-cdk/core';

//cdk docs - https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html
export class Workshop01DynamodbNamespaceSolutionStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //namespace your deployment with envName and serviceName
    const ENV_NAME = this.node.tryGetContext("ENV_NAME");
    const SERVICE_NAME = this.node.tryGetContext("SERVICE_NAME");

    if (_.isEmpty(ENV_NAME) || _.isEmpty(SERVICE_NAME)) {
      throw new Error('ENV_NAME or SERVICE_NAME context is missing...')
    }


    //dynamodb creation
    const dynamoDbTable = new dynamodb.Table(this, `${ENV_NAME}-${SERVICE_NAME}-workshop-domain-id`, {
      tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-solution-domain`,
      partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
      sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      serverSideEncryption: true, //enforcing encryption by default
      removalPolicy: RemovalPolicy.DESTROY
    });




    //multiple dynamodb creation
    let workshopTables = [{
      tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-solution-domain1`,
      partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
      sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
      envName: ENV_NAME,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      isstresaming: true
    },
    {
      tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-solution-domain2`,
      partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
      sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
      envName: ENV_NAME,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      isstresaming: true
    }, {
      tableName: `${ENV_NAME}-${SERVICE_NAME}-workshop-solution-domain3`,
      partitionKey: { name: `tenantBid`, type: dynamodb.AttributeType.STRING },
      sortKey: { name: `studentid`, type: dynamodb.AttributeType.STRING },
      envName: ENV_NAME,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      isstresaming: true
    }];


    workshopTables.forEach((workshopTable) => {

      const dynamoDbTable = new dynamodb.Table(this, `${workshopTable.tableName}`, {
        tableName: `${workshopTable.tableName}`,
        partitionKey: workshopTable.partitionKey,
        sortKey: workshopTable.sortKey,
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        serverSideEncryption: true,//enforcing encryption by default
        removalPolicy: RemovalPolicy.DESTROY
      });

      //Cloudformation Export -dynamodb table arn
      new cdk.CfnOutput(this, `${workshopTable.tableName}-output-arn`, {
        value: `${dynamoDbTable.tableArn}`,
        exportName: `${workshopTable.tableName}-arn`,
        description: `dynamodb table arn export for ${workshopTable.tableName}`
      });

    })

  }
}





























