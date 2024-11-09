
CodeCommit

ada credentials update --account=499868860593 --provider=conduit region=us-west-2 --partition=aws --role=IibsAdminAccess-DO-NOT-DELETE --once

aws --region us-west-2 codecommit create-repository --repository-name XbtObservatory-devo
{
    "repositoryMetadata": {
        "accountId": "499868860593",
        "repositoryId": "9b7ccc7d-04d5-413e-9f52-1ee591042b98",
        "repositoryName": "XbtObservatory-devo",
        "lastModifiedDate": "2024-07-09T16:10:37.552000+08:00",
        "creationDate": "2024-07-09T16:10:37.552000+08:00",
        "cloneUrlHttp": "https://git-codecommit.us-west-2.amazonaws.com/v1/repos/XbtObservatory-devo",
        "cloneUrlSsh": "ssh://git-codecommit.us-west-2.amazonaws.com/v1/repos/XbtObservatory-devo",
        "Arn": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatory-devo",
        "kmsKeyId": "arn:aws:kms:us-west-2:499868860593:key/00b06c40-a325-4e13-9d38-94c3b36d2eba"
    }
}

aws iam create-role --role-name PicaPicaRole \
   --assume-role-policy-document file://picapica-trust-policy.json
{
    "Role": {
        "Path": "/",
        "RoleName": "PicaPicaRole",
        "RoleId": "AROAXIYUBQCYTROYUTZWC",
        "Arn": "arn:aws:iam::499868860593:role/PicaPicaRole",
        "CreateDate": "2024-07-09T08:18:27+00:00",
        "AssumeRolePolicyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "",
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "prod.picapica.aws.internal"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
    }
}

aws iam get-role --role-name PicaPicaRole

---

picarole要加`events:*`, `picapica:*`

---

codebuild内不能build brazil/peru：解决方案-BATS

brazil-runtime-exec picapica -e prod-sentry create-replica-v2 CodeCommit arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent GitFarm XbtObservatoryJavaAgent arn:aws:iam::499868860593:role/PicaPicaRole --ignore-non-empty-destination
{
  "replica": {
    "sourceType": "CodeCommit",
    "sourceId": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent",
    "destinationType": "GitFarm",
    "destinationId": "XbtObservatoryJavaAgent",
    "awsAccountName": "xbtms-observatory-global-devo",
    "lastReplicatedSourceChangeDateUTC": 1721320622302,
    "viewDestinationLink": "https://code.amazon.com/packages/XbtObservatoryJavaAgent",
    "status": "Creating",
    "permittedActions": [
      "deleteReplica",
      "viewInDestinationSystem"
    ],
    "creationDate": 1721320622090
  },
  "__type": "com.amazon.aws.picapica.configurationservice#CreateReplicaV2Output"
}

error：把request id存进去（X-Amzn-RequestId）

error message给用户的目的：

javax.annotation.processing.Processor
META-INF/services/annotationname

brazil-runtime-exec picapica -e prod-sentry create-replica-v2 CodeCommit <CodeCommit-Repository-ARN> GitFarm <GitFarmRepositoryName> arn:aws:iam::<your source AWS account ID>:role/PicaPicaRole --ignore-non-empty-destination

brazil-runtime-exec picapica -e prod-sentry delete-replica-v2 GitFarm XbtObservatoryJavaAgent --source-type CodeCommit --source-id arn:aws:iam::499868860593:role/PicaPicaRole


arn:aws:codecommit:us-west-2:499868860593:PicaPicaRole

steps

1. code build pipeline
2. PicaPica rev replication
3. code build brazil package dependencies


## Exceptions

### 1. SourceReadAccessDenied

brazil-runtime-exec picapica -e prod-sentry get-replica-v2 GitFarm XbtObservatoryJavaAgent
{
  "replica": {
    "sourceType": "CodeCommit",
    "sourceId": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent",
    "destinationType": "GitFarm",
    "destinationId": "XbtObservatoryJavaAgent",
    "awsAccountName": "xbtms-observatory-global-devo",
    "lastReplicatedSourceChangeDateUTC": 1722515010166,
    "viewDestinationLink": "https://code.amazon.com/packages/XbtObservatoryJavaAgent",
    "status": "SourceReadAccessDenied",
    "statusReason": "PicaPica is denied access to read from source, please grant 'ppgfa-p' POSIX system account read access on your source repository",
    "permittedActions": [
      "deleteReplica",
      "viewInDestinationSystem"
    ],
    "creationDate": 1722512948427
  },
  "__type": "com.amazon.aws.picapica.configurationservice#GetReplicaV2Output"
}

Reason: permission 不够

Solution: permission tab ffpa-p posix, PiacPicaRole permission

### 2. Reference not matched

brazil-runtime-exec picapica -e prod-sentry get-replica-v2 GitFarm XbtObservatoryJavaAgent
{
  "replica": {
    "sourceType": "CodeCommit",
    "sourceId": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent",
    "destinationType": "GitFarm",
    "destinationId": "XbtObservatoryJavaAgent",
    "awsAccountName": "xbtms-observatory-global-devo",
    "lastReplicatedSourceChangeDateUTC": 1722515359212,
    "viewDestinationLink": "https://code.amazon.com/packages/XbtObservatoryJavaAgent",
    "status": "Failed",
    "statusReason": "Reference refs/heads/laudawei-test:edf3db79707509190cefb75e40bc7ffb8e4e97cf from source not matched in destination, found refs/heads/laudawei-test:327457a6392cefb3c8e733592b7a36417df296db instead",
    "permittedActions": [
      "deleteReplica",
      "viewInDestinationSystem"
    ],
    "creationDate": 1722515040738
  },
  "__type": "com.amazon.aws.picapica.configurationservice#GetReplicaV2Output"
}

内容不一致导致的，先同步一下内容，再重新试一次

### 3. ForcePushDenied

brazil-runtime-exec picapica -e prod-sentry get-replica-v2 GitFarm XbtObservatoryJavaAgent
{
  "replica": {
    "sourceType": "CodeCommit",
    "sourceId": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent",
    "destinationType": "GitFarm",
    "destinationId": "XbtObservatoryJavaAgent",
    "awsAccountName": "xbtms-observatory-global-devo",
    "lastReplicatedSourceChangeDateUTC": 1722516738179,
    "viewDestinationLink": "https://code.amazon.com/packages/XbtObservatoryJavaAgent",
    "status": "ForcePushDenied",
    "statusReason": "Force push is not allowed for this replica. https://tiny.amazon.com/1exn2pflk",
    "permittedActions": [
      "deleteReplica",
      "viewInDestinationSystem"
    ],
    "creationDate": 1722515040738
  },
  "__type": "com.amazon.aws.picapica.configurationservice#GetReplicaV2Output"
}

---

Replication fails with "Reference refs/namespaces/snapshot/refs/namespaces/ppgfa-p/refs/namespaces/<<date and time>>/refs/heads/head:<<commit_ID>> from source not found in destination". What can I do to fix it?

It mostly happens if you used CRUX to create a Code Review on CodeCommit repository, after CodeCommit to GitFarm replication goes out-of-sync state. The change brought by CRUX can only be pushed to GitFarm repository by picapica robot user, as a human user identity is not permitted to do so. This results in broken synchronization between source and destination repositories.

For mitigation:

    Use git ls-remote to list all the references in both CodeCommit and GitFarm repositories. 
    Compare the results and figure out the unique references created by CRUX which is present in CodeCommit side and is not present in GitFarm side. Such reference should look like
    <commit_id>    refs/namespaces/snapshot/refs/namespaces/ppgfa-p/refs/namespaces/<<date and time>>/refs/heads/head
    Delete those references in CodeCommit repositories by using the following command (for multiple references, run the command for each reference). Make sure remote origin points to the CodeCommit repository.
    git push origin :refs/namespaces/snapshot/refs/namespaces/ppgfa-p/refs/namespaces/<<date and time>>/refs/heads/head
    Where refs/namespaces/snapshot/refs/namespaces/ppgfa-p/refs/namespaces/<date and time>/refs/heads/head is the path of your reference
    Follow these instructions to reset the replication again.

if success, I will output

brazil-runtime-exec picapica -e prod-sentry get-replica-v2 GitFarm XbtObservatoryJavaAgent
{
  "replica": {
    "sourceType": "CodeCommit",
    "sourceId": "arn:aws:codecommit:us-west-2:499868860593:XbtObservatoryJavaAgent",
    "destinationType": "GitFarm",
    "destinationId": "XbtObservatoryJavaAgent",
    "awsAccountName": "xbtms-observatory-global-devo",
    "lastReplicatedSourceChangeDateUTC": 1722574395195,
    "viewDestinationLink": "https://code.amazon.com/packages/XbtObservatoryJavaAgent",
    "status": "UpToDate",
    "permittedActions": [
      "deleteReplica",
      "viewInDestinationSystem"
    ],
    "creationDate": 1722574328672
  },
  "__type": "com.amazon.aws.picapica.configurationservice#GetReplicaV2Output"
}