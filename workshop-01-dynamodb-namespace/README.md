# Welcome to your CDK TypeScript workshop-01-dynamodb-namespace!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Getting Started](#getting-started)
- [CDK Commands and it's Usage](#cdk-commands)
- [cdk.json and context](#cdk-context)
- [namespace & context](#cdk-namespace)
- [dynamodb using cdk](#cdk-dynamodb)
- [Typical cdk project structure](#cdk-structure)

<a name="getting-started"></a>
## Getting Started

This workshop is going to cover following two items.
    1. CDK basics
        - CDK Commands
        - cdk configuration file. cdk.json
        - context in cdk
        - typical cdk project structure
    2. How you namespace your stack while using cdk?
    3. One simple aws service- dynamodb

<a name="cdk-commands"></a>
## CDK Commands and it's Usage
```

* Deployment using cdk
    cdk deploy --require-approval=never --profile cb-powerfaidscloud-nonprod-dev-cli <STACK_NAME>  <example - dev-mssecurityheader-stack>
* Diff using ckd
    cdk diff --profile cb-powerfaidscloud-nonprod-dev-cli <STACK_NAME>  <example -dev-mssecurityheader-stack>
* list stack using cdk
    cdk ls --profile cb-powerfaidscloud-nonprod-dev-cli <STACK_NAME>  <example -dev-mssecurityheader-stack>
* Destroy stack using cdk
    cdk destroy --profile cb-powerfaidscloud-nonprod-dev-cli <STACK_NAME>  <example -dev-mssecurityheader-stack>
* Not CDK, SAM conversion using cdk
    cdk synth --no-staging > ./sam/template.yaml
  
```

<a name="cdk-context"></a>
## cdk.json and context
```
{
    "app": "npx ts-node bin/workshop-01-dynamodb-namespace.ts",
    "context": {
        "@aws-cdk/core:enableStackNameDuplicates": "true",
        "aws-cdk:enableDiffNoFail": "true"
    }
}
```

<a name="cdk-namespace"></a>
## namespace & context
via context inside cdk.json/context.json external properties can be supplied. 
If I want to compare stage_vars in serverless, all custom properties we specify in stage_var file can go inside context of cdk.json file

<a name="cdk-dynamodb"></a>
dynamodb using cdk - docs : https://docs.aws.amazon.com/cdk/api/latest/docs/aws-dynamodb-readme.html


<a name="cdk-structure"></a>
## Typical cdk project structure

```
├── README.md
├── bin
│   └── workshop-01-dynamodb-namespace.ts
├── cdk.json
├── jest.config.js
├── lib
│   └── workshop-01-dynamodb-namespace-stack.ts
├── package-lock.json
├── package.json
├── test
│   └── workshop-01-dynamodb-namespace.test.ts
└── tsconfig.json
```