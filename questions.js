const questions = [
  // question 1
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
  // question 2
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
  // question 3
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

  // question 21
  {
    question:
      "An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours. Which solution will meet these requirements with the LEAST operational overhead?",

    options: [
      "Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.",
      "Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.",
      "Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.",
      "Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.",
    ],

    answer: 3,

    explanation:
      "S3, CloudFront, API Gateway, Lambda, and DynamoDB provide a fully serverless, highly scalable solution with minimal operational overhead.",
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
  {
  "question": "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
  "options": [
    "Use AWS Config rules to define and detect resources that are not properly tagged.",
    "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
    "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
    "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code."
  ],
  "answer": 0,
  "explanation": "AWS Config provides managed rules to automatically evaluate and detect non-compliant resources based on tagging policies with minimal operational overhead."
},

// question 32 
{
  "question": "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
  "options": [
    "Containerize the website and host it in AWS Fargate.",
    "Create an Amazon S3 bucket and host the website there.",
    "Deploy a web server on an Amazon EC2 instance to host the website.",
    "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework."
  ],
  "answer": 1,
  "explanation": "Amazon S3 static website hosting is the most cost-effective option for static content like HTML, CSS, JavaScript, and images because it has no server management overhead and very low operational cost."
},

// question 33 
{
  "question": "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
  "options": [
    "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.",
    "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
    "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.",
    "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3"
  ],
  "answer": 2,
  "explanation": "Amazon Kinesis Data Streams with AWS Lambda enables real-time processing at scale, allowing sensitive data to be removed before storing into DynamoDB while also supporting near-real-time sharing with multiple consumers."
},

// question 34 
{
  "question": "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?",
  "options": [
    "Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.",
    "Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.",
    "Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.",
    "Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls."
  ],
  "answer": 1,
  "explanation": "AWS Config is used to track configuration changes of AWS resources, while AWS CloudTrail records API calls and account activity for auditing and compliance."
}, 

// question 35 
{
  "question": "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
  "options": [
    "Enable Amazon GuardDuty on the account.",
    "Enable Amazon Inspector on the EC2 instances.",
    "Enable AWS Shield and assign Amazon Route 53 to it.",
    "Enable AWS Shield Advanced and assign the ELB to it."
  ],
  "answer": 3,
  "explanation": "AWS Shield Advanced provides enhanced DDoS protection for internet-facing resources such as Elastic Load Balancers, offering detection and mitigation for large-scale attacks."
},

// question 36
{
  "question": "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?",
  "options": [
    "Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
    "Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.",
    "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
    "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets."
  ],
  "answer": 1,
  "explanation": "A multi-Region customer managed AWS KMS key is designed for exactly this use case, allowing the same key material to be used across Regions with low operational overhead while supporting S3 replication and encryption/decryption consistency."
}, 

// question 37 
{
  "question": "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?",
  "options": [
    "Use the EC2 serial console to directly access the terminal interface of each instance for administration.",
    "Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.",
    "Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.",
    "Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel."
  ],
  "answer": 1,
  "explanation": "AWS Systems Manager Session Manager provides secure, auditable, and agent-based access to EC2 instances without requiring SSH keys, bastion hosts, or inbound ports, making it the lowest operational overhead option aligned with AWS best practices."
}, 

// question 38 
{
  "question": "A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website. Which solution meets these requirements MOST cost-effectively?",
  "options": [
    "Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.",
    "Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.",
    "Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.",
    "Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint."
  ],
  "answer": 2,
  "explanation": "Amazon CloudFront is the most cost-effective solution for global content delivery of static websites hosted on S3, as it caches content at edge locations, reducing latency and origin load."
}, 

// question 39
{
  "question": "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website. The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?",
  "options": [
    "Change the storage type to Provisioned IOPS SSD.",
    "Change the DB instance to a memory optimized instance class.",
    "Change the DB instance to a burstable performance instance class.",
    "Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication"
  ],
  "answer": 0,
  "explanation": "Provisioned IOPS SSD (io1/io2) provides consistent high-performance storage with guaranteed IOPS, which resolves storage bottlenecks causing slow insert operations in RDS."
}, 

// question 40 
{
  "question": "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?",
  "options": [
    "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
    "Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
    "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts to an Amazon OpenSearch Service cluster. Set up the OpenSearch cluster to take manual snapshots every day and delete data older than 14 days.",
    "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, set the message retention period to 14 days, and use consumers to process and archive messages to Amazon S3."
  ],
  "answer": 0,
  "explanation": "Amazon Kinesis Data Firehose provides a fully managed, highly available ingestion service that automatically delivers streaming data to Amazon S3. Using S3 Lifecycle policies allows automatic archival to Glacier after 14 days with minimal operational overhead."
}, 

// question 41
{
  "question": "A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible. Which solution will meet these requirements with the LEAST operational overhead?",
  "options": [
    "Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
    "Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
    "Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.",
    "Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete."
  ],
  "answer": 1,
  "explanation": "Amazon AppFlow is a fully managed service for securely transferring data between SaaS applications and AWS services like S3, removing the need for EC2-based ingestion and improving performance with minimal operational overhead. S3 event notifications to SNS handle the upload completion notification separately."
}, 

//question 42
{
  "question": "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
  "options": [
    "Launch the NAT gateway in each Availability Zone.",
    "Replace the NAT gateway with a NAT instance.",
    "Deploy a gateway VPC endpoint for Amazon S3.",
    "Provision an EC2 Dedicated Host to run the EC2 instances"
  ],
  "answer": 2,
  "explanation": "A Gateway VPC Endpoint for Amazon S3 allows private connectivity between EC2 instances and S3 without using a NAT gateway, eliminating NAT data processing and data transfer charges while reducing cost."
}, 

// question 43
{
  "question": "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users. Which solution meets these requirements?",
  "options": [
    "Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.",
    "Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.",
    "Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.",
    "Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account."
  ],
  "answer": 1,
  "explanation": "AWS Direct Connect provides a dedicated private network connection between on-premises and AWS, reducing internet bandwidth usage while ensuring reliable, high-throughput, and consistent backups to Amazon S3."
}, 

// question 44 
{
  "question": "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
  "options": [
    "Enable versioning on the S3 bucket.",
    "Enable MFA Delete on the S3 bucket.",
    "Create a bucket policy on the S3 bucket.",
    "Enable default encryption on the S3 bucket.",
    "Create a lifecycle policy for the objects in the S3 bucket"
  ],
  "answer": 1,
  "explanation": "Enabling versioning protects against accidental deletion by allowing recovery of previous versions of objects, and MFA Delete adds an extra layer of protection by requiring multi-factor authentication to permanently delete objects or disable versioning."
}, 

// question 45 
{
  "question": "A company has a data ingestion workflow that consists of the following: • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
  "options": [
    "Deploy the Lambda function in multiple Availability Zones.",
    "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.",
    "Increase the CPU and memory that are allocated to the Lambda function.",
    "Increase provisioned throughput for the Lambda function.",
    "Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue."
  ],
  "answer": 1,
  "explanation": "Introducing an SQS queue between SNS and Lambda provides durable message storage and decoupling, preventing data loss during transient failures. Configuring Lambda to poll and process messages from SQS ensures reliable retry and at-least-once processing until successful ingestion."
},

// question 46
{
  "question": "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?",
  "options": [
    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.",
    "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
    "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII."
  ],
  "answer": 1,
  "explanation": "Amazon Macie is a fully managed service designed to automatically discover and classify sensitive data (PII) in S3. It integrates with Amazon SNS for alerts and minimizes development and operational effort compared to custom solutions."
}, 

// question 47 
{
  "question": "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?",
  "options": [
    "Purchase Reserved Instances that specify the Region needed.",
    "Create an On-Demand Capacity Reservation that specifies the Region needed.",
    "Purchase Reserved Instances that specify the Region and three Availability Zones needed.",
    "Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed."
  ],
  "answer": 3,
  "explanation": "On-Demand Capacity Reservations allow you to reserve EC2 capacity in specific Availability Zones for a specific duration, ensuring guaranteed availability for short-term needs like a 1-week event."
}, 

// question 48 
{
  "question": "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location. What should a solutions architect do to meet these requirements?",
  "options": [
    "Move the catalog to Amazon ElastiCache for Redis.",
    "Deploy a larger EC2 instance with a larger instance store.",
    "Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.",
    "Move the catalog to an Amazon Elastic File System (Amazon EFS) file system."
  ],
  "answer": 3,
  "explanation": "Amazon EFS provides a highly available, durable, and scalable shared file storage solution across multiple Availability Zones, making it suitable to replace ephemeral EC2 instance store for persistent data like a catalog."
}, 

// question 49 
{
  "question": "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable. Which solution will meet these requirements MOST cost-effectively?",
  "options": [
    "Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.",
    "Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.",
    "Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
    "Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive."
  ],
  "answer": 1,
  "explanation": "S3 Intelligent-Tiering optimizes cost for frequently and infrequently accessed data automatically. Lifecycle policies moving data to Glacier after 1 year reduce long-term cost, while Athena enables fast querying of recent data in S3, and Glacier Select allows limited querying of archived data, balancing performance and cost effectively."
}, 

// question 50
{
  "question": "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
  "options": [
    "Create an AWS Lambda function to apply the patch to all EC2 instances.",
    "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
    "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.",
    "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances."
  ],
  "answer": 3,
  "explanation": "AWS Systems Manager Run Command allows immediate, large-scale execution of custom commands across thousands of EC2 instances without waiting for maintenance windows or patch baselines, making it the fastest way to remediate a critical vulnerability."
}, 

// question 51 


];
