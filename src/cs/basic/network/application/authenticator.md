checklist

1. Cloudauth stack
   1. Role
2. dns stack
3. Cluster stack

NLB -> ALB -> ECSFargate

certificate on ALB

Troubleshooting:

1. certificate pending

2. Connection timeout

3. Unauthorized client

   check relationship with CloudAuth

4. Task failed ELB health checks  in (target-group  arn:aws:elasticloadbalancing:us-west-2:499868860593:targetgroup/XbtObs-Appli-AE0MWWKPTHJM/c485b60e59482521)

   runtime dependency

   ```
   endpointConfig.setKeystoreConfig(new SelfSignedKeystoreConfig());
   ```

   

Image build 8443

