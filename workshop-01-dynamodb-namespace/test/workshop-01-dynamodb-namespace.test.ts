import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import Workshop01DynamodbNamespace = require('../lib/workshop-01-dynamodb-namespace-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Workshop01DynamodbNamespace.Workshop01DynamodbNamespaceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
