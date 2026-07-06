const questions = [
  {
    question:
      "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
    options: [
      "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
      "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.",
      "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 CrossRegion Replication to copy objects to the destination S3 bucket.",
      "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.",
    ],
    answer: 0,
    explanation:
      "S3 Transfer Acceleration provides fast global uploads directly into S3 with minimal operational overhead.",
  },
  {
    question:
      "A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture. What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?",
    options: [
      "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
      "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.",
      "Use Amazon Athena directly with Amazon S3 to run the queries as needed.",
      "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.",
    ],
    answer: 2,
    explanation:
      "Amazon Athena allows serverless SQL queries directly on S3 data with minimal operational overhead.",
  },
  {
    question:
      "A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations. Which solution meets these requirements with the LEAST amount of operational overhead?",
    options: [
      "Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.",
      "Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.",
      "Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.",
      "Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.",
    ],
    answer: 0,
    explanation:
      "aws:PrincipalOrgID restricts access to principals within the AWS Organization with minimal maintenance.",
  },
  {
    question:
      "An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet. Which solution will provide private network connectivity to Amazon S3?",
    options: [
      "Create a gateway VPC endpoint to the S3 bucket.",
      "Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.",
      "Create an instance profile on Amazon EC2 to allow S3 access.",
      "Create an Amazon API Gateway API with a private link to access the S3 endpoint.",
    ],
    answer: 0,
    explanation:
      "A Gateway VPC endpoint enables private connectivity between a VPC and S3 without internet access.",
  },
  {
    question:
      "A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported inconsistent document views. What should a solutions architect propose?",
    options: [
      "Copy the data so both EBS volumes contain all the documents",
      "Configure the Application Load Balancer to direct a user to the server with the documents",
      "Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS",
      "Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server",
    ],
    answer: 2,
    explanation:
      "Amazon EFS provides shared file storage across AZs ensuring consistent access to all documents.",
  },
  {
    question:
      "A company uses NFS to store large video files in on-premises network attached storage. The total storage is 70 TB. The company must migrate the video files to Amazon S3 as soon as possible while using the least possible network bandwidth. Which solution will meet these requirements?",
    options: [
      "Create an S3 bucket. Use AWS CLI to copy files over the network.",
      "Create an AWS Snowball Edge job and transfer data using the Snowball Edge device.",
      "Deploy an S3 File Gateway and transfer data over the network.",
      "Use AWS Direct Connect with S3 File Gateway for transfer.",
    ],
    answer: 1,
    explanation:
      "Snowball Edge is best for large-scale migration with minimal network bandwidth usage.",
  },
  {
    question:
      "A company has an application that ingests incoming messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution meets these requirements?",
    options: [
      "Persist the messages to Amazon Kinesis Data Analytics.",
      "Deploy ingestion on EC2 Auto Scaling group.",
      "Use Kinesis Data Streams with Lambda and DynamoDB.",
      "Publish messages to SNS topic with multiple SQS subscriptions.",
    ],
    answer: 3,
    explanation:
      "SNS with SQS fanout decouples systems and supports high-scale message distribution.",
  },
  {
    question:
      "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform has a primary server coordinating jobs across compute nodes. How should a solutions architect design the architecture?",
    options: [
      "Use SQS queue and scheduled scaling.",
      "Use SQS queue and scale based on queue size.",
      "Use EC2 and CloudTrail for job coordination.",
      "Use EventBridge and scale based on compute load.",
    ],
    answer: 1,
    explanation:
      "SQS + queue-based scaling provides resilient and scalable distributed processing.",
  },
  {
    question:
      "A company is running an SMB file server on-premises. Files are frequently accessed for 7 days then rarely accessed. Storage is nearly full. What solution meets requirements?",
    options: [
      "Use AWS DataSync only.",
      "Use S3 File Gateway with lifecycle policy to Glacier Deep Archive.",
      "Use Amazon FSx for Windows File Server.",
      "Use S3 directly from user computers.",
    ],
    answer: 1,
    explanation:
      "S3 File Gateway with lifecycle policies provides hybrid storage and cost optimization.",
  },
  {
    question:
      "A company is building an ecommerce application using API Gateway. Orders must be processed in the order received. Which solution meets requirements?",
    options: [
      "SNS topic with Lambda processing.",
      "SQS FIFO queue with Lambda processing.",
      "API Gateway authorizer blocking requests.",
      "SQS standard queue with Lambda processing.",
    ],
    answer: 1,
    explanation: "SQS FIFO ensures strict ordering of messages.",
  },
  {
    question:
      "A company wants to minimize operational overhead of credential management for EC2 applications connecting to Aurora. What should be done?",
    options: [
      "Use AWS Secrets Manager with automatic rotation.",
      "Use SSM Parameter Store with rotation.",
      "Store credentials in S3.",
      "Store credentials in EBS volumes.",
    ],
    answer: 0,
    explanation:
      "AWS Secrets Manager provides secure storage and automatic rotation for credentials.",
  },
  {
    question:
      "A global web application uses EC2 behind ALB and S3 for static content. How to improve performance and reduce latency?",
    options: [
      "CloudFront with S3 and ALB origins.",
      "CloudFront + Global Accelerator split origins.",
      "Global Accelerator only.",
      "Separate domains for ALB and S3.",
    ],
    answer: 0,
    explanation:
      "CloudFront improves latency for both static and dynamic content using edge caching.",
  },
  {
    question:
      "A company rotates RDS credentials across multiple Regions with least operational overhead. Which solution?",
    options: [
      "AWS Secrets Manager multi-Region replication with rotation.",
      "SSM Parameter Store multi-Region replication.",
      "S3 + Lambda rotation.",
      "DynamoDB + KMS rotation.",
    ],
    answer: 0,
    explanation:
      "Secrets Manager supports multi-Region replication and automated rotation.",
  },
  {
    question:
      "An ecommerce application uses MySQL on EC2. Read-heavy workload causes performance issues. What solution meets requirements?",
    options: [
      "Amazon Redshift single node.",
      "RDS Single-AZ with replicas.",
      "Amazon Aurora with Auto Scaling replicas.",
      "ElastiCache Memcached.",
    ],
    answer: 2,
    explanation:
      "Aurora with replicas scales read-heavy workloads and improves availability.",
  },
  {
    question:
      "A company needs traffic inspection and filtering similar to on-prem firewall. Which solution?",
    options: [
      "GuardDuty",
      "Traffic Mirroring",
      "AWS Network Firewall",
      "Firewall Manager",
    ],
    answer: 2,
    explanation:
      "AWS Network Firewall provides managed traffic inspection and filtering.",
  },
  {
    question:
      "A company needs reporting and visualization from S3 and RDS. Only management needs full access. Which solution?",
    options: [
      "QuickSight with IAM role sharing",
      "QuickSight with user/group permissions",
      "Glue ETL reports to S3",
      "Athena ETL reporting only",
    ],
    answer: 1,
    explanation:
      "QuickSight with users and groups provides controlled access to dashboards.",
  },
  {
    question:
      "A company needs EC2 instances to access S3 securely. What should be done?",
    options: [
      "Create IAM role and attach to EC2",
      "Use IAM policy attached to EC2",
      "Use IAM group",
      "Use IAM user on EC2",
    ],
    answer: 0,
    explanation:
      "IAM roles are the secure and recommended way for EC2 to access AWS services.",
  },
  {
    question:
      "An image processing system uses S3 and Lambda. Which combination meets durable, stateless processing requirements? (Choose two.)",
    options: [
      "SQS queue triggered by S3 events",
      "Lambda triggered by SQS queue",
      "Lambda tracking files in memory",
      "EC2 monitoring SQS queue",
      "EventBridge sending SNS notifications only",
    ],
    answer: [0, 1],
    explanation:
      "S3→SQS ensures durability and Lambda triggered by SQS ensures stateless scalable processing.",
  },
  {
    question:
      "A company wants to inspect all traffic to a web application before reaching web servers. What solution meets requirements with least overhead?",
    options: [
      "Network Load Balancer",
      "Application Load Balancer",
      "Transit Gateway",
      "Gateway Load Balancer",
    ],
    answer: 3,
    explanation:
      "Gateway Load Balancer is designed for inline traffic inspection appliances.",
  },
  {
    question:
      "A company wants fast cloning of EBS-backed production data into test environment. Which solution meets requirements?",
    options: [
      "EBS snapshots to instance store",
      "EBS Multi-Attach",
      "Initialize volumes after creation",
      "EBS Fast Snapshot Restore",
    ],
    answer: 3,
    explanation:
      "Fast Snapshot Restore provides immediate full-performance EBS volumes from snapshots.",
  },

  // question 22
  {
    question:
      "A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.",

    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 One Zone-Infrequent Access (S3 One Zone-IA)",
    ],

    answer: 1,

    explanation:
      "S3 Intelligent-Tiering automatically moves objects between access tiers to reduce costs while remaining multi-AZ resilient.",
  },

  // question 23
  {
    question:
      "A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely. Which storage solution will meet these requirements MOST cost-effectively?",

    options: [
      "Configure S3 Intelligent-Tiering to automatically migrate objects.",
      "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.",
      "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.",
      "Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.",
    ],

    answer: 1,

    explanation:
      "S3 Glacier Deep Archive is the lowest-cost storage class for long-term data that is rarely accessed.",
  },

  //question 24
  {
    question:
      "A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling. How should the solutions architect generate the information with the LEAST operational overhead?",

    options: [
      "Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.",
      "Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.",
      "Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.",
      "Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.",
    ],

    answer: 1,

    explanation:
      "AWS Cost Explorer provides built-in filtering and visualization for EC2 costs by instance type with minimal setup and operational effort.",
  },

  //Question 25
  {
    question:
      "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort. Which solution will meet these requirements?",

    options: [
      "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.",
      "Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.",
      "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).",
      "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.",
    ],

    answer: 3,

    explanation:
      "Using SQS decouples ingestion and processing, smooths traffic spikes, and improves scalability with minimal configuration effort.",
  },

  // question 26
  {
    question:
      "A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. What should a solutions architect do to accomplish this goal?",

    options: [
      "Turn on AWS Config with the appropriate rules.",
      "Turn on AWS Trusted Advisor with the appropriate checks.",
      "Turn on Amazon Inspector with the appropriate assessment template.",
      "Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).",
    ],

    answer: 0,

    explanation:
      "AWS Config continuously monitors and records configuration changes and can detect noncompliant S3 bucket settings.",
  },

  // question 27
  {
    question:
      "A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege. Which solution will meet these requirements?",

    options: [
      "Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.",
      "Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.",
      "Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.",
      "Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.",
    ],

    answer: 0,

    explanation:
      "CloudWatch dashboard sharing allows secure, read-only access without creating AWS accounts, following least privilege with minimal overhead.",
  },

  // question 28
  {
    question:
      "A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory. Which solution will meet these requirements?",

    options: [
      "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      "Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.",
      "Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.",
      "Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.",
    ],

    answer: 0,

    explanation:
      "AWS IAM Identity Center (AWS SSO) with a one-way trust to on-premises Active Directory enables centralized SSO across accounts while keeping AD as the identity source.",
  },

  // question 29
  {
    question:
      "A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto Scaling group. The company has deployments across multiple AWS Regions. The company needs to route users to the Region with the lowest latency. The company also needs automated failover between Regions. Which solution will meet these requirements?",

    options: [
      "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Use the NLB as an AWS Global Accelerator endpoint in each Region.",
      "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Use the ALB as an AWS Global Accelerator endpoint in each Region.",
      "Deploy a Network Load Balancer (NLB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 latency record that points to aliases for each NLB. Create an Amazon CloudFront distribution that uses the latency record as an origin.",
      "Deploy an Application Load Balancer (ALB) and an associated target group. Associate the target group with the Auto Scaling group. Create an Amazon Route 53 weighted record that points to aliases for each ALB. Deploy an Amazon CloudFront distribution that uses the weighted record as an origin.",
    ],

    answer: 0,

    explanation:
      "AWS Global Accelerator with Network Load Balancer supports UDP, provides lowest-latency routing and automatic failover across Regions.",
  },

  // question 30
  {
    question:
      "A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testing lasts for 48 hours once a month and is the only process that uses the database. The team wants to reduce the cost of running the tests without reducing the compute and memory attributes of the DB instance. Which solution meets these requirements MOST cost-effectively?",

    options: [
      "Stop the DB instance when tests are completed. Restart the DB instance when required.",
      "Use an Auto Scaling policy with the DB instance to automatically scale when tests are completed.",
      "Create a snapshot when tests are completed. Terminate the DB instance and restore the snapshot when required.",
      "Modify the DB instance to a low-capacity instance when tests are completed. Modify the DB instance again when required.",
    ],

    answer: 2,

    explanation:
      "RDS storage and snapshots are cheaper when the instance is not running. Since the DB is only used monthly, taking a snapshot and terminating the instance avoids ongoing compute charges while preserving full restore capability when needed.",
  },

  // question 31
];
