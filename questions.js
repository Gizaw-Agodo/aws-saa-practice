const questions = [
 // quesiton 1
  {
    "question": "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.",
    "options": [
      "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
      "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.",
      "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 CrossRegion Replication to copy objects to the destination S3 bucket.",
      "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
    ],
    "answer": 0,
    "explanation": "S3 Transfer Acceleration optimizes global uploads directly into S3 with minimal operational overhead."
  },
  {
    "question": "A company needs to analyze JSON log files stored in Amazon S3 with simple on-demand queries and minimal changes to architecture.",
    "options": [
      "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
      "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.",
      "Use Amazon Athena directly with Amazon S3 to run the queries as needed.",
      "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed."
    ],
    "answer": 2,
    "explanation": "Amazon Athena allows serverless SQL queries directly on S3 data with minimal operational overhead."
  },
  {
    "question": "A company wants to limit access to an S3 bucket to only users within its AWS Organization.",
    "options": [
      "Add the aws:PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.",
      "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.",
      "Use AWS CloudTrail to monitor account events and update the S3 bucket policy accordingly.",
      "Tag each user and use aws:PrincipalTag in the S3 bucket policy."
    ],
    "answer": 0,
    "explanation": "aws:PrincipalOrgID restricts access to principals within an AWS Organization with minimal overhead."
  },
  {
    "question": "An EC2 instance needs private access to an S3 bucket without internet connectivity.",
    "options": [
      "Create a gateway VPC endpoint to the S3 bucket.",
      "Stream logs to CloudWatch Logs and export to S3.",
      "Create an instance profile for EC2.",
      "Create an API Gateway with private link to S3."
    ],
    "answer": 0,
    "explanation": "Gateway VPC endpoints provide private connectivity to S3 without internet access."
  },
  {
    "question": "Users see only partial documents when using two EC2 instances with separate EBS volumes behind an ALB.",
    "options": [
      "Copy data so both EBS volumes contain all documents.",
      "Configure ALB to direct user to correct server.",
      "Copy data to Amazon EFS and use shared storage.",
      "Send request to both servers via ALB."
    ],
    "answer": 2,
    "explanation": "Amazon EFS provides shared storage across instances ensuring consistent file visibility."
  },
  {
    "question": "Migrate 70 TB NFS data to S3 using least bandwidth and fastest method.",
    "options": [
      "Use AWS CLI over internet.",
      "Use AWS Snowball Edge device.",
      "Use S3 File Gateway over public internet.",
      "Use Direct Connect with File Gateway."
    ],
    "answer": 1,
    "explanation": "Snowball Edge is best for large-scale offline migration with minimal bandwidth usage."
  },
  {
    "question": "Decouple system handling 100,000 messages/sec with multiple consumers.",
    "options": [
      "Kinesis Data Analytics",
      "EC2 Auto Scaling ingestion",
      "Kinesis Data Streams single shard + DynamoDB",
      "SNS topic with multiple SQS subscriptions"
    ],
    "answer": 3,
    "explanation": "SNS with SQS fanout enables scalable decoupling for multiple consumers."
  },
  {
    "question": "Modernize batch job system with queue-based scaling.",
    "options": [
      "SQS queue + EC2 ASG scheduled scaling",
      "SQS queue + ASG scaling based on queue size",
      "CloudTrail as job destination",
      "EventBridge with compute load scaling"
    ],
    "answer": 1,
    "explanation": "Scaling based on SQS queue depth is the most resilient and scalable pattern."
  },
  {
    "question": "SMB file server with hot data for 7 days, then infrequent access.",
    "options": [
      "AWS DataSync",
      "S3 File Gateway + lifecycle to Glacier Deep Archive",
      "FSx for Windows File Server",
      "S3 client per user"
    ],
    "answer": 1,
    "explanation": "S3 File Gateway provides SMB access with lifecycle tiering to reduce cost."
  },
  {
    "question": "Ensure order processing in exact sequence for ecommerce orders.",
    "options": [
      "SNS topic",
      "SQS FIFO queue with Lambda",
      "API Gateway blocking",
      "SQS standard queue"
    ],
    "answer": 1,
    "explanation": "SQS FIFO guarantees strict ordering and exactly-once processing."
  },
  {
    "question": "Minimize overhead for managing database credentials in EC2.",
    "options": [
      "AWS Secrets Manager with rotation",
      "SSM Parameter Store with rotation",
      "Store in S3",
      "Store in EBS volume"
    ],
    "answer": 0,
    "explanation": "Secrets Manager provides secure storage with automatic rotation and low operational overhead."
  },
  {
    "question": "Improve performance for static and dynamic content globally.",
    "options": [
      "CloudFront with S3 and ALB origins + Route 53",
      "CloudFront + ALB + Global Accelerator + S3 endpoint",
      "CloudFront ALB + GA endpoints",
      "Separate domains for static and dynamic content"
    ],
    "answer": 0,
    "explanation": "CloudFront caching + ALB origin improves latency for both static and dynamic content."
  },
  {
    "question": "Rotate RDS credentials across multiple Regions with least overhead.",
    "options": [
      "AWS Secrets Manager multi-Region replication",
      "SSM Parameter Store",
      "S3 + Lambda rotation",
      "DynamoDB + KMS keys"
    ],
    "answer": 0,
    "explanation": "Secrets Manager supports multi-Region replication and automatic rotation."
  },
  {
    "question": "Auto scaling database for read-heavy MySQL workload.",
    "options": [
      "Redshift single node",
      "RDS Single-AZ with readers",
      "Aurora with Auto Scaling replicas",
      "ElastiCache Memcached"
    ],
    "answer": 2,
    "explanation": "Aurora replicas auto scale to handle read-heavy workloads with high availability."
  },
  {
    "question": "Implement traffic inspection similar to on-prem firewall appliance.",
    "options": [
      "GuardDuty",
      "Traffic Mirroring",
      "AWS Network Firewall",
      "Firewall Manager"
    ],
    "answer": 2,
    "explanation": "AWS Network Firewall provides managed stateful traffic inspection and filtering."
  },
  {
    "question": "Data visualization across S3 and RDS with access control.",
    "options": [
      "QuickSight with IAM roles",
      "QuickSight with users and groups",
      "Glue + ETL + S3 reports",
      "Glue + Athena + S3 reports"
    ],
    "answer": 1,
    "explanation": "QuickSight with users and groups enables fine-grained access control for dashboards."
  },
  {
    "question": "Allow EC2 instances to access S3 securely.",
    "options": [
      "IAM role attached to EC2",
      "IAM policy attached to EC2",
      "IAM group",
      "IAM user on EC2"
    ],
    "answer": 0,
    "explanation": "IAM roles for EC2 provide secure temporary credentials for S3 access."
  },
  {
    "question": "Serverless image processing pipeline using S3 and Lambda. (Choose two)",
    "options": [
      "SQS triggered by S3 events",
      "Lambda uses SQS as event source",
      "Lambda polls S3 directly",
      "EC2 monitors SQS",
      "EventBridge SNS email alert"
    ],
    "answer": [0, 1],
    "explanation": "S3 → SQS decouples ingestion and Lambda consumes SQS for scalable processing."
  },
  {
    "question": "Inspect all traffic to web application before reaching web servers.",
    "options": [
      "NLB inspection",
      "ALB inspection",
      "Transit Gateway inspection",
      "Gateway Load Balancer"
    ],
    "answer": 3,
    "explanation": "Gateway Load Balancer integrates third-party appliances for traffic inspection."
  },
  {
    "question": "Fast cloning of EBS-backed production data for test environment.",
    "options": [
      "Snapshot to instance store",
      "EBS Multi-Attach",
      "Snapshot then restore manually",
      "Fast Snapshot Restore"
    ],
    "answer": 3,
    "explanation": "EBS Fast Snapshot Restore enables immediate volume initialization for fast cloning."
  },

// question 21
{
  "question": "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?",

  "options": [
    "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.",
    "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.",
    "Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.",
    "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB."
  ],

  "answer": 3,

  "explanation": "S3, CloudFront, API Gateway, Lambda, and DynamoDB provide a fully serverless, highly scalable solution with minimal operational overhead."
},

// question 22
{
  "question": "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.",

  "options": [
    "S3 Standard",
    "S3 Intelligent-Tiering",
    "S3 Standard-Infrequent Access (S3 Standard-IA)",
    "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
  ],

  "answer": 1,

  "explanation": "S3 Intelligent-Tiering automatically moves objects between access tiers to reduce costs while remaining multi-AZ resilient."
},

// question 23
{
  "question": "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?",

  "options": [
    "Configure S3 Intelligent-Tiering to automatically migrate objects.",
    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.",
    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.",
    "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month."
  ],

  "answer": 1,

  "explanation": "S3 Glacier Deep Archive is the lowest-cost storage class for long-term data that is rarely accessed."
},

//question 24
{
  "question": "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?",

  "options": [
    "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.",
    "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.",
    "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.",
    "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types."
  ],

  "answer": 1,

  "explanation": "AWS Cost Explorer provides built-in filtering and visualization for EC2 costs by instance type with minimal setup and operational effort."
},

//Question 25
{
  "question": "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",

  "options": [
    "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.",
    "Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).",
    "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
  ],

  "answer": 3,

  "explanation": "Using SQS decouples ingestion and processing, smooths traffic spikes, and improves scalability with minimal configuration effort."
}, 

// question 26
{
  "question": "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",

  "options": [
    "Turn on AWS Config with the appropriate rules.",
    "Turn on AWS Trusted Advisor with the appropriate checks.",
    "Turn on Amazon Inspector with the appropriate assessment template.",
    "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events)."
  ],

  "answer": 0,

  "explanation": "AWS Config continuously monitors and records configuration changes and can detect noncompliant S3 bucket settings."
}, 

// question 27 
{
  "question": "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",

  "options": [
    "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
    "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.",
    "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
    "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard."
  ],

  "answer": 0,

  "explanation": "CloudWatch dashboard sharing allows secure, read-only access without creating AWS accounts, following least privilege with minimal overhead."
}, 

// question 28 
{
  "question": "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",

  "options": [
    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
    "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
    "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
    "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console."
  ],

  "answer": 0,

  "explanation": "AWS IAM Identity Center (AWS SSO) with a one-way trust to on-premises Active Directory enables centralized SSO across accounts while keeping AD as the identity source."
},

// question 29 
{
  "question": "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",

  "options": [
    "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.",
    "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
    "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.",
    "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin."
  ],

  "answer": 0,

  "explanation": "AWS Global Accelerator with Network Load Balancer supports UDP, provides lowest-latency routing and automatic failover across Regions."
}, 

// question 30 
{
  "question": "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",

  "options": [
    "Stop the DB instance when tests are completed. Restart the DB instance when required.",
    "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
    "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.",
    "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required."
  ],

  "answer": 2,

  "explanation": "RDS storage and snapshots are cheaper when the instance is not running. Since the DB is only used monthly, taking a snapshot and terminating the instance avoids ongoing compute charges while preserving full restore capability when needed."
}, 

// question 31


];