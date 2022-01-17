#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Workshop01DynamodbNamespaceSolutionStack } from '../solution/workshop-01-dynamodb-namespace-solution-stack';
import { Tag } from '@aws-cdk/core';

const app = new cdk.App();

//Get env in to stack
//Namespace the stack name
new Workshop01DynamodbNamespaceSolutionStack(app, 'Workshop01DynamodbNamespaceStack');

// const wrkshop01DynamodbNamespaceStack = new Workshop01DynamodbNamespaceStack(app, `${ENV_NAME}-${SERVICE_NAME}-dynamodb-namespace-stack`);

// const ENV_NAME = app.node.tryGetContext("ENV_NAME");
// const SERVICE_NAME = app.node.tryGetContext("SERVICE_NAME");

// const tags = [
//     { key: 'engineer', value: 'dsheth' },
//     { key: 'cb_program', value: 'financial_aid_software' },
//     { key: 'accessibility', value: 'privae' },
//     { key: 'data_classification', value: 'proprietary' },
//     {
//         key: 'team_lead', value: 'bdakshinamurthy'
//     },
//     {
//         key: 'env', value: 'dev'
//     },
//     {
//         key: 'asset_id', value: 'PFCL-MS-DR-SERVICE'
//     },
//     {
//         key: 'lifecycle', value: 'nonprod'
//     },
//     {
//         key: 'provisioned_by', value: 'cdk'
//     },
//     {
//         key: 'system_id', value: 'PFCL'
//     }
// ];

// //Add All Tags
// for (const tag of tags) {
//     Tag.add(wrkshop01DynamodbNamespaceStack, tag.key, tag.value);
// }
// //Tag the entier stack
