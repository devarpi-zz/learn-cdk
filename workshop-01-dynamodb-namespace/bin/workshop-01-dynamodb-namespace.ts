#!/usr/bin/env node
import 'source-map-support/register';
import { Tags } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

import { Workshop01DynamodbNamespaceSolutionStack } from '../solution/workshop-01-dynamodb-namespace-solution-stack';
const app = new cdk.App();

//Get env in to stack
//Namespace the stack name
const wrkshop01DynamodbNamespaceStack = new Workshop01DynamodbNamespaceSolutionStack(
  app,
  'Workshop01DynamodbNamespaceStack'
);

// const wrkshop01DynamodbNamespaceStack = new Workshop01DynamodbNamespaceStack(app, `${ENV_NAME}-${SERVICE_NAME}-dynamodb-namespace-stack`);

// const ENV_NAME = app.node.tryGetContext("ENV_NAME");
// const SERVICE_NAME = app.node.tryGetContext("SERVICE_NAME");

const tags = [
  { key: 'engineer', value: 'dsheth' }, 
  { key: 'accessibility', value: 'privae' },
  { key: 'data_classification', value: 'proprietary' },
  {
    key: 'team_lead',
    value: 'dsheth',
  },
  {
    key: 'env',
    value: 'dev',
  },
  {
    key: 'asset_id',
    value: 'my-frist-cdk-app',
  },
  {
    key: 'lifecycle',
    value: 'nonprod',
  },
  {
    key: 'provisioned_by',
    value: 'cdk',
  },
  {
    key: 'system_id',
    value: 'learn-cdk',
  },
];

//Add All Tags
for (const tag of tags) {
  Tags.of(wrkshop01DynamodbNamespaceStack).add(tag.key, tag.value);
}
//Tag the entier stack
