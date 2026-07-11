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
    question:
      "A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check. What should a solutions architect do to accomplish this?",
    options: [
      "Use AWS Config rules to define and detect resources that are not properly tagged.",
      "Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.",
      "Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.",
      "Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.",
    ],
    answer: 0,
    explanation:
      "AWS Config provides managed rules to automatically evaluate and detect non-compliant resources based on tagging policies with minimal operational overhead.",
  },

  // question 32
  {
    question:
      "A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. Which method is the MOST cost-effective for hosting the website?",
    options: [
      "Containerize the website and host it in AWS Fargate.",
      "Create an Amazon S3 bucket and host the website there.",
      "Deploy a web server on an Amazon EC2 instance to host the website.",
      "Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.",
    ],
    answer: 1,
    explanation:
      "Amazon S3 static website hosting is the most cost-effective option for static content like HTML, CSS, JavaScript, and images because it has no server management overhead and very low operational cost.",
  },

  // question 33
  {
    question:
      "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to meet these requirements?",
    options: [
      "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.",
      "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.",
      "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.",
      "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3",
    ],
    answer: 2,
    explanation:
      "Amazon Kinesis Data Streams with AWS Lambda enables real-time processing at scale, allowing sensitive data to be removed before storing into DynamoDB while also supporting near-real-time sharing with multiple consumers.",
  },

  // question 34
  {
    question:
      "A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources. What should a solutions architect do to meet these requirements?",
    options: [
      "Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.",
      "Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.",
      "Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.",
      "Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.",
    ],
    answer: 1,
    explanation:
      "AWS Config is used to track configuration changes of AWS resources, while AWS CloudTrail records API calls and account activity for auditing and compliance.",
  },

  // question 35
  {
    question:
      "A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks. Which solution meets these requirements?",
    options: [
      "Enable Amazon GuardDuty on the account.",
      "Enable Amazon Inspector on the EC2 instances.",
      "Enable AWS Shield and assign Amazon Route 53 to it.",
      "Enable AWS Shield Advanced and assign the ELB to it.",
    ],
    answer: 3,
    explanation:
      "AWS Shield Advanced provides enhanced DDoS protection for internet-facing resources such as Elastic Load Balancers, offering detection and mitigation for large-scale attacks.",
  },

  // question 36
  {
    question:
      "A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
      "Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.",
      "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.",
      "Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.",
    ],
    answer: 1,
    explanation:
      "A multi-Region customer managed AWS KMS key is designed for exactly this use case, allowing the same key material to be used across Regions with low operational overhead while supporting S3 replication and encryption/decryption consistency.",
  },

  // question 37
  {
    question:
      "A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use the EC2 serial console to directly access the terminal interface of each instance for administration.",
      "Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.",
      "Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.",
      "Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.",
    ],
    answer: 1,
    explanation:
      "AWS Systems Manager Session Manager provides secure, auditable, and agent-based access to EC2 instances without requiring SSH keys, bastion hosts, or inbound ports, making it the lowest operational overhead option aligned with AWS best practices.",
  },

  // question 38
  {
    question:
      "A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.",
      "Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.",
      "Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.",
      "Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.",
    ],
    answer: 2,
    explanation:
      "Amazon CloudFront is the most cost-effective solution for global content delivery of static websites hosted on S3, as it caches content at edge locations, reducing latency and origin load.",
  },

  // question 39
  {
    question:
      "A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website. The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem. Which solution addresses this performance issue?",
    options: [
      "Change the storage type to Provisioned IOPS SSD.",
      "Change the DB instance to a memory optimized instance class.",
      "Change the DB instance to a burstable performance instance class.",
      "Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication",
    ],
    answer: 0,
    explanation:
      "Provisioned IOPS SSD (io1/io2) provides consistent high-performance storage with guaranteed IOPS, which resolves storage bottlenecks causing slow insert operations in RDS.",
  },

  // question 40
  {
    question:
      "A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis. The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days. What is the MOST operationally efficient solution that meets these requirements?",
    options: [
      "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
      "Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.",
      "Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts to an Amazon OpenSearch Service cluster. Set up the OpenSearch cluster to take manual snapshots every day and delete data older than 14 days.",
      "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, set the message retention period to 14 days, and use consumers to process and archive messages to Amazon S3.",
    ],
    answer: 0,
    explanation:
      "Amazon Kinesis Data Firehose provides a fully managed, highly available ingestion service that automatically delivers streaming data to Amazon S3. Using S3 Lifecycle policies allows automatic archival to Glacier after 14 days with minimal operational overhead.",
  },

  // question 41
  {
    question:
      "A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
      "Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.",
      "Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.",
    ],
    answer: 1,
    explanation:
      "Amazon AppFlow is a fully managed service for securely transferring data between SaaS applications and AWS services like S3, removing the need for EC2-based ingestion and improving performance with minimal operational overhead. S3 event notifications to SNS handle the upload completion notification separately.",
  },

  //question 42
  {
    question:
      "A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges. What is the MOST cost-effective way for the company to avoid Regional data transfer charges?",
    options: [
      "Launch the NAT gateway in each Availability Zone.",
      "Replace the NAT gateway with a NAT instance.",
      "Deploy a gateway VPC endpoint for Amazon S3.",
      "Provision an EC2 Dedicated Host to run the EC2 instances",
    ],
    answer: 2,
    explanation:
      "A Gateway VPC Endpoint for Amazon S3 allows private connectivity between EC2 instances and S3 without using a NAT gateway, eliminating NAT data processing and data transfer charges while reducing cost.",
  },

  // question 43
  {
    question:
      "A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users. Which solution meets these requirements?",
    options: [
      "Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.",
      "Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.",
      "Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.",
      "Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.",
    ],
    answer: 1,
    explanation:
      "AWS Direct Connect provides a dedicated private network connection between on-premises and AWS, reducing internet bandwidth usage while ensuring reliable, high-throughput, and consistent backups to Amazon S3.",
  },

  // question 44
  {
    question:
      "A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Enable versioning on the S3 bucket.",
      "Enable MFA Delete on the S3 bucket.",
      "Create a bucket policy on the S3 bucket.",
      "Enable default encryption on the S3 bucket.",
      "Create a lifecycle policy for the objects in the S3 bucket",
    ],
    answer: 1,
    explanation:
      "Enabling versioning protects against accidental deletion by allowing recovery of previous versions of objects, and MFA Delete adds an extra layer of protection by requiring multi-factor authentication to permanently delete objects or disable versioning.",
  },

  // question 45
  {
    question:
      "A company has a data ingestion workflow that consists of the following: • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)",
    options: [
      "Deploy the Lambda function in multiple Availability Zones.",
      "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.",
      "Increase the CPU and memory that are allocated to the Lambda function.",
      "Increase provisioned throughput for the Lambda function.",
      "Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.",
    ],
    answer: 1,
    explanation:
      "Introducing an SQS queue between SNS and Lambda provides durable message storage and decoupling, preventing data loss during transient failures. Configuring Lambda to poll and process messages from SQS ensures reliable retry and at-least-once processing until successful ingestion.",
  },

  // question 46
  {
    question:
      "A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size. Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation. What should a solutions architect do to meet these requirements with the LEAST development effort?",
    options: [
      "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.",
      "Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
      "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.",
      "Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.",
    ],
    answer: 1,
    explanation:
      "Amazon Macie is a fully managed service designed to automatically discover and classify sensitive data (PII) in S3. It integrates with Amazon SNS for alerts and minimizes development and operational effort compared to custom solutions.",
  },

  // question 47
  {
    question:
      "A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. What should the company do to guarantee the EC2 capacity?",
    options: [
      "Purchase Reserved Instances that specify the Region needed.",
      "Create an On-Demand Capacity Reservation that specifies the Region needed.",
      "Purchase Reserved Instances that specify the Region and three Availability Zones needed.",
      "Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.",
    ],
    answer: 3,
    explanation:
      "On-Demand Capacity Reservations allow you to reserve EC2 capacity in specific Availability Zones for a specific duration, ensuring guaranteed availability for short-term needs like a 1-week event.",
  },

  // question 48
  {
    question:
      "A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location. What should a solutions architect do to meet these requirements?",
    options: [
      "Move the catalog to Amazon ElastiCache for Redis.",
      "Deploy a larger EC2 instance with a larger instance store.",
      "Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.",
      "Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.",
    ],
    answer: 3,
    explanation:
      "Amazon EFS provides a highly available, durable, and scalable shared file storage solution across multiple Availability Zones, making it suitable to replace ephemeral EC2 instance store for persistent data like a catalog.",
  },

  // question 49
  {
    question:
      "A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.",
      "Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.",
      "Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.",
      "Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.",
    ],
    answer: 1,
    explanation:
      "S3 Intelligent-Tiering optimizes cost for frequently and infrequently accessed data automatically. Lifecycle policies moving data to Glacier after 1 year reduce long-term cost, while Athena enables fast querying of recent data in S3, and Glacier Select allows limited querying of archived data, balancing performance and cost effectively.",
  },

  // question 50
  {
    question:
      "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
    options: [
      "Create an AWS Lambda function to apply the patch to all EC2 instances.",
      "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.",
      "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.",
      "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.",
    ],
    answer: 3,
    explanation:
      "AWS Systems Manager Run Command allows immediate, large-scale execution of custom commands across thousands of EC2 instances without waiting for maintenance windows or patch baselines, making it the fastest way to remediate a critical vulnerability.",
  },

  // question 51
  {
    question:
      "A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Configure the application to send the data to Amazon Kinesis Data Firehose.",
      "Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.",
      "Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.",
    ],
    answer: 3,
    explanation:
      "Use Amazon EventBridge to schedule a daily AWS Lambda invocation that retrieves the statistics from the REST API, formats them into HTML, and uses Amazon SES to send the report to multiple email recipients.",
  },

  // question 52
  {
    question:
      "A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically, is highly available, and requires minimum operational overhead. Which solution will meet these requirements?",
    options: [
      "Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.",
      "Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.",
      "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.",
      "Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.",
    ],
    answer: 2,
    explanation:
      "Amazon EFS provides a scalable, highly available, shared POSIX file system that automatically grows and can be mounted by multiple EC2 instances across multiple Availability Zones, making it ideal for standard file system storage with minimal operational overhead.",
  },

  // question 53
  {
    question:
      "A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency. Which solution will meet these requirements?",
    options: [
      "Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.",
      "Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.",
      "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.",
      "Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.",
    ],
    answer: 2,
    explanation:
      "S3 Object Lock in Compliance mode prevents anyone—including root users—from deleting or modifying objects during the retention period. An S3 Lifecycle policy transitions the data from S3 Standard to Glacier Deep Archive after 1 year for cost-effective long-term archival with maximum durability.",
  },

  // question 54
  {
    question:
      "A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files. What should a solutions architect do to meet these requirements?",
    options: [
      "Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.",
      "Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.",
      "Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.",
      "Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.",
    ],
    answer: 2,
    explanation:
      "Amazon FSx for Windows File Server provides fully managed, highly available Windows SMB file shares with Multi-AZ deployment, preserving existing Windows file access while eliminating the need for manual synchronization.",
  },

  // question 55
  {
    question:
      "A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases. Which solution will meet these requirements?",
    options: [
      "Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.",
      "Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.",
      "Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.",
      "Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.",
    ],
    answer: 2,
    explanation:
      "Use a security group on the RDS DB instances that allows inbound traffic only from the security group attached to EC2 instances in the private subnets. This restricts database access to only the private application servers.",
  },

  // question 56
  {
    question:
      "A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS. Which solution will meet these requirements?",
    options: [
      'Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company\'s domain name into AWS Certificate Manager (ACM).',
      "Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.",
      "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.",
      "Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.",
    ],
    answer: 2,
    explanation:
      "For a Regional API Gateway custom domain, the ACM certificate must be in the same AWS Region as the API (ca-central-1). Associate the custom domain with the Regional endpoint and create a Route 53 alias record pointing to the API Gateway endpoint.",
  },

  // question 57
  {
    question:
      "A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort. What should a solutions architect do to meet these requirements?",
    options: [
      "Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.",
      "Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.",
      "Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.",
      "Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.",
    ],
    answer: 1,
    explanation:
      "Amazon Rekognition provides a fully managed image moderation feature that can detect inappropriate or unsafe content with minimal development effort. It also supports confidence scoring, allowing human review for low-confidence predictions.",
  },

  // question 58
  {
    question:
      "A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload. What should a solutions architect do to meet these requirements?",
    options: [
      "Use Amazon EC2 instances, and install Docker on the instances.",
      "Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.",
      "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.",
      "Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).",
    ],
    answer: 2,
    explanation:
      "Amazon ECS with AWS Fargate removes the need to manage or provision underlying EC2 instances, allowing the company to focus only on application-level container management while AWS handles infrastructure scaling and availability.",
  },

  // question 59
  {
    question:
      "A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day. What should a solutions architect do to transmit and process the clickstream data?",
    options: [
      "Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.",
      "Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.",
      "Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket, run an AWS Lambda function to process the data for analysis.",
      "Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.",
    ],
    answer: 3,
    explanation:
      "Amazon Kinesis Data Streams with Kinesis Data Firehose provides a fully managed, highly scalable solution for ingesting and delivering large-scale streaming clickstream data to Amazon S3 and Amazon Redshift for analytics with minimal operational overhead.",
  },

  // question 60
  {
    question:
      "A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS. What should a solutions architect do to meet this requirement?",
    options: [
      "Update the ALB's network ACL to accept only HTTPS traffic.",
      "Create a rule that replaces the HTTP in the URL with HTTPS.",
      "Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.",
      "Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).",
    ],
    answer: 2,
    explanation:
      "An Application Load Balancer can use listener rules to redirect HTTP traffic to HTTPS, ensuring all requests are automatically upgraded to a secure connection without changing the application or infrastructure.",
  },

  // question 61
  {
    question:
      "A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.",
      "Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.",
      "Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.",
      "Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.",
    ],
    answer: 2,
    explanation:
      "AWS Secrets Manager securely stores database credentials, supports built-in automatic rotation for Amazon RDS, and allows EC2 instances to retrieve secrets through an IAM role with minimal operational overhead.",
  },

  // question 62
  {
    question:
      "A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires. What should a solutions architect do to meet these requirements?",
    options: [
      "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
      "Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
      "Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.",
      "Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.",
    ],
    answer: 3,
    explanation:
      "Because the certificate is issued by an external CA, it must be imported into ACM. ACM does not automatically renew imported certificates, so use EventBridge to notify before expiration and manually import the renewed certificate each year.",
  },

  // question 63
  {
    question:
      "A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.",
      "Save the .pdf files to Amazon DynamoDB. Use the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.",
      "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
      "Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.",
    ],
    answer: 0,
    explanation:
      "Amazon S3 with S3 event notifications and AWS Lambda provides a fully managed, serverless, and highly scalable solution. Original and converted files are stored durably in S3 with minimal operational cost and automatic scaling.",
  },

  // question 64
  {
    question:
      "A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day. The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS. What should a solutions architect do to meet these requirements?",
    options: [
      "Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.",
      "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.",
      "Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway, depending on each workload's location.",
      "Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.",
    ],
    answer: 3,
    explanation:
      "Amazon FSx File Gateway provides low-latency local access for on-premises Windows clients while storing data in Amazon FSx for Windows File Server. It preserves existing SMB access patterns, supports hybrid access, and minimizes operational overhead.",
  },

  // question 65
  {
    question:
      "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.",
      "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.",
      "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
      "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.",
    ],
    answer: 2,
    explanation:
      "Amazon Textract can extract text from PDF and JPEG documents, and Amazon Comprehend Medical is designed to identify protected health information (PHI) from medical text. This fully managed combination requires the least operational overhead.",
  },

  // question 66
  {
    question:
      "A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days. Which storage solution is MOST cost-effective?",
    options: [
      "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.",
      "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.",
      "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.",
      "Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.",
    ],
    answer: 2,
    explanation:
      "S3 Standard-IA is the most cost-effective option because the files require immediate access but are rarely accessed after 30 days. S3 Glacier is not suitable because it has retrieval delays, and One Zone-IA is less appropriate because the data is critical and requires high durability.",
  },

  // question 67
  {
    question:
      "A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages. What should a solutions architect do to ensure messages are being processed once only?",
    options: [
      "Use the CreateQueue API call to create a new queue.",
      "Use the AddPermission API call to add appropriate permissions.",
      "Use the ReceiveMessage API call to set an appropriate wait time.",
      "Use the ChangeMessageVisibility API call to increase the visibility timeout.",
    ],
    answer: 3,
    explanation:
      "The duplicate records occur when a message takes longer to process than the SQS visibility timeout. The message becomes visible again and another EC2 instance processes it. Increasing the visibility timeout gives the application enough time to process and delete the message, preventing duplicate processing.",
  },

  // question 68
  {
    question:
      "A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails. What should the solutions architect do to meet these requirements?",
    options: [
      "Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.",
      "Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.",
      "Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.",
      "Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.",
    ],
    answer: 0,
    explanation:
      "AWS Direct Connect provides consistent low-latency private connectivity. A VPN connection can be used as a lower-cost backup solution when Direct Connect fails, accepting slower performance during failover.",
  },

  // question 69
  {
    question:
      "A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data. Which solution will meet these requirements with the LEAST operational effort?",
    options: [
      "Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.",
      "Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.",
      "Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.",
      "Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.",
    ],
    answer: 1,
    explanation:
      "Using multiple Availability Zones for EC2 instances and configuring Aurora PostgreSQL as Multi-AZ provides high availability with automatic failover and minimal downtime. RDS Proxy improves database connection management and reduces application impact during failovers with minimal operational effort.",
  },

  // question 70
  {
    question:
      "A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service. The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code. What should a solutions architect do to meet these requirements?",
    options: [
      "Enable HTTP health checks on the NLB, supplying the URL of the company's application.",
      "Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected, the application will restart.",
      "Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.",
      "Create an Amazon CloudWatch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.",
    ],
    answer: 2,
    explanation:
      "An Application Load Balancer provides HTTP-level health checks that can verify whether the application itself is responding correctly. When integrated with an Auto Scaling group, unhealthy EC2 instances can be automatically replaced, improving availability without requiring custom scripts or code.",
  },

  // question 71
  {
    question:
      "A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour. What should the solutions architect recommend to meet these requirements?",
    options: [
      "Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.",
      "Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.",
      "Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.",
      "Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.",
    ],
    answer: 1,
    explanation:
      "DynamoDB point-in-time recovery (PITR) provides continuous backups and allows restoring a table to any second within the last 35 days. It meets the 15-minute RPO requirement and can restore the table within the required recovery time.",
  },

  // question 72
  {
    question:
      "A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs. How can the solutions architect meet this requirement?",
    options: [
      "Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.",
      "Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.",
      "Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.",
      "Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.",
    ],
    answer: 3,
    explanation:
      "An Amazon S3 VPC gateway endpoint provides private connectivity between resources in a VPC and Amazon S3 without using a NAT gateway or internet gateway. This avoids data transfer charges associated with internet-based access and reduces costs.",
  },

  // question 73
  {
    question:
      "A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Replace the current security group of the bastion host with one that only allows inbound access from the application instances.",
      "Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.",
      "Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.",
      "Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.",
      "Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.",
    ],
    answer: 2,
    explanation:
      "The bastion host is in a public subnet, so SSH access from the on-premises network over the internet must be allowed using the company's external/public IP range. The application instances are in a private subnet, so they should only allow SSH access from the bastion host's private IP address (or bastion security group), not its public IP address.",
  },

  // question 74
  {
    question:
      "A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company. How should security groups be configured in this situation? (Choose two.)",
    options: [
      "Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.",
      "Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.",
      "Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.",
      "Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.",
      "Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.",
    ],
    answer: 0,
    explanation:
      "The web tier is public-facing, so its security group should allow HTTPS inbound traffic (port 443) from the internet. The database tier should only accept SQL Server traffic (port 1433) from the web tier security group, ensuring the database is not directly accessible from the internet.",
  },

  // question 75
  {
    question:
      "A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application. Which solution meets these requirements and is the MOST operationally efficient?",
    options: [
      "Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.",
      "Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.",
      "Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.",
      "Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.",
    ],
    answer: 0,
    explanation:
      "Amazon API Gateway with AWS Lambda provides a serverless application layer, and Amazon SQS decouples application components by buffering messages when one tier is overloaded. This prevents transaction loss and improves scalability with minimal operational overhead.",
  },

  // question 76
  {
    question:
      "A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive. Which solution offers the MOST reliable data transfer?",
    options: [
      "AWS DataSync over public internet",
      "AWS DataSync over AWS Direct Connect",
      "AWS Database Migration Service (AWS DMS) over public internet",
      "AWS Database Migration Service (AWS DMS) over AWS Direct Connect",
    ],
    answer: 1,
    explanation:
      "AWS DataSync is designed for transferring large amounts of file data between on-premises storage systems and Amazon S3. Using DataSync over AWS Direct Connect provides a secure, private, and reliable connection with consistent performance for transferring sensitive 10 TB daily datasets.",
  },

  // question 77
  {
    question:
      "A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.",
      "Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.",
      "Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.",
      "Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.",
    ],
    answer: 2,
    explanation:
      "Amazon API Gateway provides a fully managed API endpoint, Kinesis Data Streams enables real-time ingestion, and Kinesis Data Firehose with Lambda transformations provides a serverless way to process and deliver streaming data to Amazon S3 with minimal operational overhead.",
  },

  // question 78
  {
    question:
      "A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years. What is the MOST operationally efficient solution that meets these requirements?",
    options: [
      "Use DynamoDB point-in-time recovery to back up the table continuously.",
      "Use AWS Backup to create backup schedules and retention policies for the table.",
      "Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.",
    ],
    answer: 1,
    explanation:
      "AWS Backup provides a centralized, fully managed backup solution with scheduled backups and configurable retention policies, including long-term retention such as 7 years. It minimizes operational overhead compared with custom backup solutions.",
  },

  // question 79
  {
    question:
      "A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly. What should a solutions architect recommend?",
    options: [
      "Create a DynamoDB table in on-demand capacity mode.",
      "Create a DynamoDB table with a global secondary index.",
      "Create a DynamoDB table with provisioned capacity and auto scaling.",
      "Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.",
    ],
    answer: 0,
    explanation:
      "DynamoDB on-demand capacity mode is best for unpredictable workloads with sudden traffic spikes because it automatically scales capacity without requiring manual provisioning. It is also cost-effective for tables with low usage periods because charges are based on actual read and write requests.",
  },

  // question 80
  {
    question:
      "A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs to share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots. What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?",
    options: [
      "Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
      "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.",
      "Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.",
      "Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account. Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.",
    ],
    answer: 1,
    explanation:
      "The most secure approach is to share the AMI only with the MSP Partner's AWS account by modifying the AMI launchPermission property and updating the KMS key policy to allow that account to use the encryption key. This keeps the AMI private and avoids exposing the snapshots publicly.",
  },

  // question 81
  {
    question:
      "A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored. Which design should the solutions architect use?",
    options: [
      "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.",
      "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.",
      "Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.",
      "Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.",
    ],
    answer: 2,
    explanation:
      "Amazon SQS provides durable message storage and loose coupling between producers and consumers. A stateless Auto Scaling group should scale based on the SQS queue depth, and launch templates are the recommended replacement for launch configurations.",
  },

  // question 82
  {
    question:
      "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate. What should a solutions architect recommend to meet this requirement?",
    options: [
      "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.",
      "Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.",
      "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).",
    ],
    answer: 3,
    explanation:
      "ACM emits EventBridge events when imported certificates are approaching expiration. An EventBridge rule can detect certificates expiring within 30 days, trigger a Lambda function, and send an SNS notification with minimal operational overhead.",
  },

  // question 83
  {
    question:
      "A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed. What should the solutions architect recommend?",
    options: [
      "Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.",
      "Move the website to Amazon S3. Use Cross-Region Replication between Regions.",
      "Use Amazon CloudFront with a custom origin pointing to the on-premises servers.",
      "Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.",
    ],
    answer: 2,
    explanation:
      "Amazon CloudFront can use the existing on-premises servers as a custom origin, caching content at edge locations worldwide to reduce latency for European users without moving the backend from the United States.",
  },

  // question 84
  {
    question:
      "A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours. The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use. Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?",
    options: [
      "Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.",
      "Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.",
      "Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.",
      "Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.",
    ],
    answer: 1,
    explanation:
      "Production instances run continuously for 24 hours a day, so Reserved Instances provide the best cost savings for steady workloads. Development and test instances run only part of the day and are stopped when unused, making On-Demand Instances more cost-effective because there is no long-term commitment.",
  },

  // question 85
  {
    question:
      "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored. What should a solutions architect do to meet this requirement?",
    options: [
      "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.",
      "Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.",
      "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.",
      "Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.",
    ],
    answer: 0,
    explanation:
      "Amazon S3 Object Lock provides write-once-read-many (WORM) protection, preventing objects from being modified or deleted for a defined retention period. S3 Versioning is required when using Object Lock to preserve object versions.",
  },

  // question 86
  {
    question:
      "A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently. Which solution meets these requirements?",
    options: [
      "Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.",
      "Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.",
      "Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.",
      "Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.",
    ],
    answer: 0,
    explanation:
      "AWS Secrets Manager is designed to securely store database credentials and supports automatic rotation of secrets for services such as Amazon RDS. Granting the web servers IAM permissions to retrieve the secret provides secure access without managing credentials manually.",
  },

  // question 87
  {
    question:
      "A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event. A solutions architect needs to design a solution that stores customer data that is created during database upgrades. Which solution will meet these requirements?",
    options: [
      "Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.",
      "Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.",
      "Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.",
      "Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.",
    ],
    answer: 3,
    explanation:
      "Amazon SQS provides durable message storage and decouples Lambda from the database. Customer data can be placed in the FIFO queue during database upgrades and processed later when the database becomes available, preventing data loss.",
  },

  // question 88
  {
    question:
      "A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible. Which solution will meet these requirements?",
    options: [
      "Configure the Requester Pays feature on the company's S3 bucket.",
      "Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.",
      "Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.",
      "Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.",
    ],
    answer: 0,
    explanation:
      "S3 Requester Pays shifts data transfer and request costs to the requester. This is the most cost-effective solution when sharing large amounts of S3 data with another organization because the marketing firm pays for accessing the data.",
  },

  // question 89
  {
    question:
      "A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution. What should a solutions architect do to secure the audit documents?",
    options: [
      "Enable the versioning and MFA Delete features on the S3 bucket.",
      "Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.",
      "Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.",
      "Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.",
    ],
    answer: 0,
    explanation:
      "Enabling S3 Versioning protects objects by keeping previous versions, and MFA Delete adds an extra authentication requirement before permanently deleting object versions. Together, they provide protection against accidental deletion.",
  },

  // question 90
  {
    question:
      "A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours. The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue. Which solution will meet this requirement with the LEAST operational overhead?",
    options: [
      "Modify the DB instance to be a Multi-AZ deployment.",
      "Create a read replica of the database. Configure the script to query only the read replica.",
      "Instruct the development team to manually export the entries in the database at the end of each day.",
      "Use Amazon ElastiCache to cache the common queries that the script runs against the database.",
    ],
    answer: 1,
    explanation:
      "A read replica allows read-heavy workloads to be offloaded from the primary RDS database. By directing the reporting script to the read replica, development tasks will not be impacted, and RDS manages replication automatically with minimal operational overhead.",
  },

  // question 91
  {
    question:
      "A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet. Which solution will meet these requirements?",
    options: [
      "Configure an S3 gateway endpoint.",
      "Create an S3 bucket in a private subnet.",
      "Create an S3 bucket in the same AWS Region as the EC2 instances.",
      "Configure a NAT gateway in the same subnet as the EC2 instances.",
    ],
    answer: 0,
    explanation:
      "An S3 gateway VPC endpoint provides private connectivity from a VPC to Amazon S3 without requiring internet access, NAT gateways, or public IP addresses. Traffic stays within the AWS network.",
  },

  // question 92
  {
    question:
      "A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC. Which combination of steps should a solutions architect take to accomplish this? (Choose two.)",
    options: [
      "Configure a VPC gateway endpoint for Amazon S3 within the VPC.",
      "Create a bucket policy to make the objects in the S3 bucket public.",
      "Create a bucket policy that limits access to only the application tier running in the VPC.",
      "Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.",
      "Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.",
    ],
    answer: 2,
    explanation:
      "An S3 gateway VPC endpoint allows private access from EC2 instances in the VPC to Amazon S3 without using the internet. A restrictive S3 bucket policy can limit access to only the application's VPC or IAM role, following the principle of least privilege.",
  },

  // question 93
  {
    question:
      "A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability. The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes. A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay. Which solution meets these requirements?",
    options: [
      "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.",
      "Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.",
      "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.",
      "Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.",
    ],
    answer: 1,
    explanation:
      "Amazon Aurora MySQL database cloning creates fast, space-efficient copies of production databases without copying all data, allowing the staging environment to be created quickly without impacting production performance. Aurora Replicas can handle heavy read workloads, improving availability and scalability.",
  },

  // question 94
  {
    question:
      "A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis. Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files. Which solution meets these requirements with the LEAST operational overhead?",
    options: [
      "Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.",
      "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.",
      "Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.",
      "Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.",
    ],
    answer: 2,
    explanation:
      "Amazon S3 event notifications with Amazon SQS and AWS Lambda provide a serverless, scalable, and low-maintenance solution. Lambda automatically scales based on demand, processes files quickly after upload, and avoids managing EC2 instances or other infrastructure.",
  },

  // question 95
  {
    question:
      "An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly. What should the solutions architect recommend?",
    options: [
      "Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.",
      "Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.",
      "Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.",
      "Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.",
    ],
    answer: 3,
    explanation:
      "Amazon RDS read replicas allow read traffic to be separated from write traffic by offloading queries to replica databases. Configuring the read replicas with the same compute and storage resources ensures they can handle a similar workload as the source database. Multi-AZ is for high availability, not read scaling.",
  },

  // question 96
  {
    question:
      "An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly. What should the solutions architect recommend?",
    options: [
      "Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.",
      "Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.",
      "Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.",
      "Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.",
    ],
    answer: 3,
    explanation:
      "Amazon RDS read replicas allow read traffic to be separated from write traffic by offloading queries to replica databases. Configuring the read replicas with the same compute and storage resources ensures they can handle a similar workload as the source database. Multi-AZ is for high availability, not read scaling.",
  },

  // question 97
  {
    question:
      "A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control. Which solution will satisfy these requirements?",
    options: [
      "Configure Amazon EFS storage and set the Active Directory domain for authentication.",
      "Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.",
      "Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.",
      "Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.",
    ],
    answer: 3,
    explanation:
      "Amazon FSx for Windows File Server is designed for Windows-based workloads such as Microsoft SharePoint. It provides fully managed SMB file storage, supports Microsoft Active Directory integration for authentication and permissions, and offers Multi-AZ deployments for high availability. EFS is Linux-based and does not support SMB/Windows ACL requirements.",
  },

  // question 98
  {
    question:
      "An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email. Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages. What should the solutions architect do to resolve this issue with the LEAST operational overhead?",
    options: [
      "Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.",
      "Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.",
      "Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.",
      "Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.",
    ],
    answer: 2,
    explanation:
      "When Lambda polls messages from SQS, the message remains hidden only for the duration of the visibility timeout. If Lambda processing takes longer than this timeout, SQS makes the message visible again, causing Lambda to process it a second time. Increasing the SQS visibility timeout to be longer than the Lambda function timeout plus batch window timeout prevents duplicate processing. This requires no application code changes and has the least operational overhead.",
  },

  // question 99
  {
    question:
      "A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution meets these requirements?",
    options: [
      "Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.",
      "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.",
      "Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.",
      "Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.",
    ],
    answer: 3,
    explanation:
      "Amazon FSx for Lustre is a fully managed file system designed for high-performance workloads such as gaming, machine learning, and HPC. It supports native Lustre clients, making it the correct choice. Amazon EFS does not support Lustre, and Storage Gateway file shares use protocols such as SMB/NFS, not Lustre.",
  },

  // question 100
  {
    question:
      "A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.",
      "Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.",
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.",
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.",
    ],
    answer: 2,
    explanation:
      "AWS KMS provides secure, managed encryption and decryption operations with fine-grained IAM permissions. Amazon S3 provides highly durable and highly available storage for encrypted objects. This combination requires less operational overhead than managing custom encryption code or storing data on EBS volumes.",
  },

  // question 101
  {
    question:
      "A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates. What should the solutions architect do to enable Internet access for the private subnets?",
    options: [
      "Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.",
      "Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.",
      "Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.",
      "Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.",
    ],
    answer: 0,
    explanation:
      "Private subnets with IPv4 addresses require a NAT gateway in a public subnet to access the internet while preventing inbound internet connections. For high availability, AWS recommends deploying one NAT gateway per Availability Zone and configuring each private subnet route table to use the NAT gateway in the same AZ. Egress-only internet gateways are only for IPv6 traffic, not IPv4.",
  },

  // question 102
  {
    question:
      "A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system. Which combination of steps should a solutions architect take to automate this task? (Choose two.)",
    options: [
      "Launch the EC2 instance into the same Availability Zone as the EFS file system.",
      "Install an AWS DataSync agent in the on-premises data center.",
      "Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.",
      "Manually use an operating system copy command to push the data to the EC2 instance.",
      "Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.",
    ],
    answer: 4,
    explanation:
      "AWS DataSync is designed to automate and accelerate data transfers between on-premises storage and AWS storage services such as Amazon EFS. Because the source is an on-premises NFS-based file system, the correct approach is to deploy a DataSync agent in the on-premises environment and configure a DataSync location for the NFS/SFTP server. Manual copy commands and EBS volumes do not provide an automated migration solution.",
  },

  // question 103
  {
    question:
      "A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run. What should the solutions architect do to prevent AWS Glue from reprocessing old data?",
    options: [
      "Edit the job to use job bookmarks.",
      "Edit the job to delete data after the data is processed.",
      "Edit the job by setting the NumberOfWorkers field to 1.",
      "Use a FindMatches machine learning (ML) transform.",
    ],
    answer: 0,
    explanation:
      "AWS Glue job bookmarks track the data that has already been processed during previous runs. When enabled, Glue remembers the state of the job and processes only new data added since the last successful run. This avoids reprocessing old files without requiring manual deletion or additional infrastructure.",
  },

  // question 104
  {
    question:
      "A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website. Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)",
    options: [
      "Use AWS Shield Advanced to stop the DDoS attack.",
      "Configure Amazon GuardDuty to automatically block the attackers.",
      "Configure the website to use Amazon CloudFront for both static and dynamic content.",
      "Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.",
      "Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.",
    ],
    answer: 0,
    explanation:
      "AWS Shield Advanced provides enhanced DDoS protection for AWS resources such as EC2, Elastic Load Balancing, CloudFront, and Route 53. Amazon CloudFront helps absorb and distribute traffic across AWS edge locations, reducing the impact of large-scale DDoS attacks. GuardDuty detects threats but does not automatically block DDoS attackers, and manually blocking thousands of IP addresses is not scalable.",
  },

  // question 105
  {
    question:
      "A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function. Which solution meets these requirements?",
    options: [
      "Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.",
      "Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.",
      "Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.",
      "Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.",
    ],
    answer: 3,
    explanation:
      "When an AWS service such as Amazon EventBridge invokes a Lambda function, the permission is granted through a Lambda resource-based policy, not the Lambda execution role. The policy should allow only the required action (lambda:InvokeFunction) and only the required principal (events.amazonaws.com). This follows the principle of least privilege.",
  },

  // question 106
  {
    question:
      "A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year. Which solution meets these requirements and is the MOST operationally efficient?",
    options: [
      "Server-side encryption with customer-provided keys (SSE-C)",
      "Server-side encryption with Amazon S3 managed keys (SSE-S3)",
      "Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation",
      "Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation",
    ],
    answer: 3,
    explanation:
      "SSE-KMS provides encryption at rest using AWS Key Management Service. AWS KMS automatically logs key usage through AWS CloudTrail, supporting auditing requirements. Automatic key rotation can be enabled to rotate customer managed KMS keys every year, minimizing operational overhead. SSE-S3 does not provide customer-controlled key usage auditing, and SSE-C requires manual key management.",
  },

  // question 107
  {
    question:
      "A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API. Which action meets these requirements for storing and retrieving location data?",
    options: [
      "Use Amazon Athena with Amazon S3.",
      "Use Amazon API Gateway with AWS Lambda.",
      "Use Amazon QuickSight with Amazon Redshift.",
      "Use Amazon API Gateway with Amazon Kinesis Data Analytics.",
    ],
    answer: 1,
    explanation:
      "Amazon API Gateway provides a REST API interface, and AWS Lambda can process incoming requests and retrieve/store location data in a serverless architecture. This combination supports the application tier requirement with minimal operational overhead. Athena, QuickSight, and Redshift are analytics services and do not directly provide REST API access for real-time application requests.",
  },

  //question 108
  {
    question:
      "A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems. Which design should a solutions architect recommend?",
    options: [
      "Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.",
      "Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS FIFO queue) for the targets to consume.",
      "Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.",
      "Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.",
    ],
    answer: 3,
    explanation:
      "Amazon SNS with multiple SQS subscriptions is the standard fan-out pattern. SNS can distribute a single event to multiple SQS queues, allowing each target system to process the message independently. Lambda functions can then consume from each queue and update the target systems. RDS event notifications are for operational events (such as backups or failures), not for detecting row-level database changes, so in a real architecture this would typically use database change streams or application events.",
  },

  // question 109
  {
    question:
      "A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability to delete the objects. What should a solutions architect do to meet these requirements?",
    options: [
      "Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.",
      "Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.",
      "Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.",
      "Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.",
    ],
    answer: 3,
    explanation:
      "S3 Object Lock with legal hold is designed for situations where objects must remain immutable for an unknown period of time. A legal hold prevents deletion or modification until it is explicitly removed. By granting only specific users the s3:PutObjectLegalHold permission, the company controls who can remove the hold and then delete the objects. Governance mode with a fixed retention period does not satisfy the requirement because the retention duration is unspecified.",
  },

  // question 110
  {
    question:
      "A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website. The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads. Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Configure the application to upload images to S3 Glacier.",
      "Configure the web server to upload the original images to Amazon S3.",
      "Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL.",
      "Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.",
    ],
    answer: 3,
    explanation:
      "Using S3 presigned URLs allows users to upload images directly to Amazon S3, removing the EC2 web servers from the upload path and improving performance by reducing application coupling. S3 Event Notifications can trigger a Lambda function immediately after upload to resize the image asynchronously. This serverless event-driven design reduces operational overhead and improves scalability.",
  },

  // question 111
  {
    question:
      "A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?",
    options: [
      "Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.",
      "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.",
      "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.",
      "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.",
    ],
    answer: 3,
    explanation:
      "Amazon MQ with active/standby brokers provides a highly available managed message broker across multiple Availability Zones. An Auto Scaling group running consumer EC2 instances across multiple AZs ensures consumers remain available and can automatically replace failed instances. Amazon RDS for MySQL Multi-AZ provides automatic failover for the database with minimal operational overhead. This combination delivers the highest availability while using managed AWS services.",
  },

  // question 112
  {
    question:
      "A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.",
      "Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.",
      "Use AWS Lambda with new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.",
      "Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.",
    ],
    answer: 0,
    explanation:
      "AWS Fargate lets the company run existing containers without managing EC2 instances. Amazon ECS with Fargate supports Service Auto Scaling and integrates with an Application Load Balancer for high availability and scalability. This approach requires minimal code changes and the least operational overhead. Using EC2 requires server management, Lambda requires application redesign, and AWS ParallelCluster is intended for HPC workloads rather than web applications.",
  },

  // question 113
  {
    question:
      "A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible. The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.",
      "Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.",
      "Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.",
      "Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.",
    ],
    answer: 3,
    explanation:
      "The company has no available network bandwidth, so a physical device is required. A 50 TB dataset is too large for Snowcone, making Snowball Edge Storage Optimized the appropriate choice. Because the transformation job is a custom application (not an ETL job suitable for AWS Glue), the simplest approach is to migrate the data with Snowball Edge and then run the existing application on an Amazon EC2 instance in AWS. This minimizes development effort and operational overhead.",
  },

  // question 114
  {
    question:
      "A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata. The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base. Which solution meets these requirements?",
    options: [
      "Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.",
      "Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.",
      "Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.",
      "Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.",
    ],
    answer: 2,
    explanation:
      "AWS Lambda automatically scales to handle varying numbers of image-processing requests without requiring server management. Amazon S3 is the ideal storage service for image files because it is highly durable, scalable, and cost-effective. Amazon DynamoDB remains the appropriate choice for storing image metadata. This serverless architecture provides the best scalability with the least operational overhead.",
  },

  // question 115
  {
    question:
      "A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access. A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet. Which change to the network architecture should a solutions architect recommend to meet this requirement?",
    options: [
      "Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.",
      "Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.",
      "Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.",
      "Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.",
    ],
    answer: 2,
    explanation:
      "An Amazon S3 VPC gateway endpoint allows EC2 instances to access Amazon S3 entirely over the AWS private network without traversing the public internet. Because the instances require no other internet access, moving them to private subnets and using an S3 VPC endpoint satisfies the security requirement. NAT gateways still use the internet gateway for S3 access, security groups do not change the network path, and AWS Direct Connect is intended for on-premises connectivity, not VPC-to-S3 communication.",
  },

  // question 116
  {
    question:
      "A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants a new solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security. Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)",
    options: [
      "Configure Amazon CloudFront in front of the website to use HTTPS functionality.",
      "Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.",
      "Create and deploy an AWS Lambda function to manage and serve the website content.",
      "Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.",
      "Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.",
    ],
    answer: 3,
    explanation:
      "A static website hosted on Amazon S3 eliminates the need to manage CMS servers, operating systems, and patching, resulting in very low operational overhead. Placing Amazon CloudFront in front of the S3 website provides HTTPS support, global caching, DDoS protection through AWS Shield Standard, improved performance, and enhanced security. AWS WAF does not provide HTTPS, Lambda is unnecessary for a static site, and EC2 with Auto Scaling requires significantly more management.",
  },

  // question 117
  {
    question:
      "A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time. Which solution will meet this requirement with the LEAST operational overhead?",
    options: [
      "Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).",
      "Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).",
      "Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery stream's source. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.",
      "Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).",
    ],
    answer: 0,
    explanation:
      "CloudWatch Logs subscription filters can stream log events from a CloudWatch Logs log group directly to Amazon OpenSearch Service in near real time. This requires the least operational overhead because the logs are already stored in CloudWatch Logs and no additional application changes, custom Lambda code, or log agents are required.",
  },

  // question 118
  {
    question:
      "A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution. Which storage solution meets these requirements MOST cost-effectively?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon OpenSearch Service (Amazon Elasticsearch Service)",
      "Amazon S3",
    ],
    answer: 3,
    explanation:
      "Amazon S3 is the most cost-effective solution for storing 900 TB of text documents because it provides virtually unlimited scalability, high durability, and automatic scaling without requiring storage management. S3 is designed for large-scale object storage and can handle unpredictable access patterns and high demand. EBS is tied to individual EC2 instances and does not scale easily to hundreds of terabytes, EFS is a shared file system but is more expensive, and OpenSearch Service is for search and analytics workloads rather than document storage.",
  },

  // question 119
  {
    question:
      "A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks. Which solution will meet these requirements with the LEAST amount of administrative effort?",
    options: [
      "Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.",
      "Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.",
      "Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage.",
      "Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.",
    ],
    answer: 0,
    explanation:
      "AWS WAF provides protection against SQL injection and cross-site scripting (XSS) attacks. For Amazon API Gateway Regional endpoints, create AWS WAF Regional web ACLs in each Region and associate them with the API Gateway stages. AWS Shield is for DDoS protection and does not provide SQL injection or XSS filtering. AWS Firewall Manager can centrally manage WAF rules across accounts, but it adds additional setup requirements and is not the expected solution for this scenario.",
  },

  // question 120
  {
    question:
      "A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB. Which solution can the company use to route traffic to all the EC2 instances?",
    options: [
      "Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.",
      "Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.",
      "Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.",
      "Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.",
    ],
    answer: 1,
    explanation:
      "AWS Global Accelerator is designed to improve availability and performance for global applications by providing static anycast IP addresses and routing traffic to optimal regional endpoints over the AWS global network. It supports Network Load Balancers as endpoints and can distribute traffic across multiple Regions. This solution allows users in the US and Europe to reach the closest healthy NLB while maintaining high availability.",
  },

  // question 121
  {
    question:
      "A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance. What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?",
    options: [
      "Encrypt a copy of the latest DB snapshot. Replace the existing DB instance by restoring the encrypted snapshot.",
      "Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.",
      "Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS). Restore the encrypted snapshot to an existing DB instance.",
      "Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).",
    ],
    answer: 0,
    explanation:
      "Amazon RDS encryption cannot be enabled on an existing unencrypted DB instance. The correct approach is to create an encrypted copy of the latest DB snapshot by using AWS KMS and then restore that encrypted snapshot to create a new encrypted DB instance. Replace the original DB instance with the new encrypted instance. Future automated snapshots of the encrypted DB instance will also be encrypted automatically.",
  },

  // question 122
  {
    question:
      "A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications. What should a solutions architect do to reduce the operational burden?",
    options: [
      "Use multi-factor authentication (MFA) to protect the encryption keys.",
      "Use AWS Key Management Service (AWS KMS) to protect the encryption keys.",
      "Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.",
      "Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.",
    ],
    answer: 1,
    explanation:
      "AWS Key Management Service (AWS KMS) is a fully managed key management service that enables developers to create, store, rotate, and use encryption keys with minimal operational overhead. KMS integrates with many AWS services and provides centralized key management, auditing through AWS CloudTrail, and fine-grained access control using IAM policies. MFA and IAM help secure access but do not manage encryption keys, and ACM is designed for SSL/TLS certificates rather than data encryption keys.",
  },

  // question 123
  {
    question:
      "A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination. There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit. What should a solutions architect do to increase the application's performance?",
    options: [
      "Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.",
      "Create an Amazon S3 bucket. Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.",
      "Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.",
      "Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.",
    ],
    answer: 3,
    explanation:
      "Import the existing SSL certificate into AWS Certificate Manager (ACM) and configure an Application Load Balancer (ALB) with an HTTPS listener to perform SSL/TLS termination. The ALB offloads encryption and decryption from the EC2 instances, reducing CPU utilization and improving application performance. This is the AWS-recommended approach for SSL offloading.",
  },

  // question 124
  {
    question:
      "A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job. What should the solutions architect recommend?",
    options: [
      "Implement EC2 Spot Instances.",
      "Purchase EC2 Reserved Instances.",
      "Implement EC2 On-Demand Instances.",
      "Implement the processing on AWS Lambda.",
    ],
    answer: 0,
    explanation:
      "EC2 Spot Instances are ideal for fault-tolerant, stateless, interruptible batch workloads. Because the job can be stopped and restarted without negative impact, it can tolerate Spot Instance interruptions while benefiting from significant cost savings. Reserved Instances are intended for predictable long-running workloads, On-Demand Instances are more expensive, and AWS Lambda has a maximum execution time of 15 minutes, which cannot support a job that typically runs for over 60 minutes.",
  },

  // question 125
  {
    question:
      "A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available. Which combination of configuration options will meet these requirements? (Choose two.)",
    options: [
      "Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.",
      "Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.",
      "Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.",
      "Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.",
      "Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.",
    ],
    answer: 0,
    explanation:
      "The EC2 instances and RDS database should not be publicly accessible, so the EC2 instances should run in private subnets and the RDS Multi-AZ database should also be deployed in private subnets. The Application Load Balancer must be internet-facing, so it should be placed in public subnets across multiple Availability Zones. The private EC2 instances can access the internet for payment processing through NAT gateways located in the public subnets. This provides high availability and keeps backend resources private.",
  },

  // question 126
  {
    question:
      "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable. Which solution will meet these requirements?",
    options: [
      "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.",
      "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.",
      "Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.",
      "Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.",
    ],
    answer: 1,
    explanation:
      "The data from the most recent 2 years must remain highly available and immediately retrievable, so it should stay in S3 Standard. After 2 years, the data can be moved to S3 Glacier Deep Archive, which is designed for long-term retention at the lowest storage cost. S3 Glacier Deep Archive is suitable for data that must be retained for many years but does not require frequent access. Moving data immediately would violate the availability requirement, and S3 One Zone-IA does not provide the required maximum resiliency.",
  },

  // question 127
  {
    question:
      "A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore. Which set of services should a solutions architect recommend to meet these requirements?",
    options: [
      "Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage",
      "Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage",
      "Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage",
      "Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage",
    ],
    answer: 0,
    explanation:
      "Amazon EBS provides high-performance block storage suitable for intensive video processing workloads requiring maximum I/O performance. Amazon S3 provides highly durable, scalable object storage for large amounts of media content. Amazon S3 Glacier is designed for low-cost long-term archival storage. EC2 instance store provides very high performance but is temporary storage and not suitable for durable data. EFS is a shared file system but is not the best choice for the required durable object storage scale.",
  },

  // question 128
  {
    question:
      "A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead. What should a solutions architect do to meet these requirements?",
    options: [
      "Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.",
      "Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.",
      "Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.",
      "Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.",
    ],
    answer: 0,
    explanation:
      "Spot Instances provide significant cost savings and are appropriate for stateless, fault-tolerant workloads that can handle interruptions. An EC2 Auto Scaling group can automatically launch and replace instances as needed, reducing operational overhead. Amazon EKS managed node groups add Kubernetes management complexity and are unnecessary when the requirement is simply to run containers cost-effectively.",
  },

  // question 129
  {
    question:
      "A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure. Which combination of actions should the solutions architect take to accomplish this? (Choose two.)",
    options: [
      "Migrate the PostgreSQL database to Amazon Aurora.",
      "Migrate the web application to be hosted on Amazon EC2 instances.",
      "Set up an Amazon CloudFront distribution for the web application content.",
      "Set up Amazon ElastiCache between the web application and the PostgreSQL database.",
      "Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).",
    ],
    answer: 0,
    explanation:
      "AWS Fargate with Amazon ECS removes the need to manage container hosts, allowing the company to run containers without managing servers or capacity planning. Amazon Aurora PostgreSQL-compatible edition is a managed relational database service that reduces database administration overhead while providing scalability and high availability. EC2 would still require infrastructure management, CloudFront only improves content delivery, and ElastiCache may improve performance but does not address the main operational overhead problem.",
  },

  // question 130
  {
    question:
      "An application runs on Amazon EC2 instances across multiple Availability Zones. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%. What should a solutions architect do to maintain the desired performance across all instances in the group?",
    options: [
      "Use a simple scaling policy to dynamically scale the Auto Scaling group.",
      "Use a target tracking policy to dynamically scale the Auto Scaling group.",
      "Use an AWS Lambda function to update the desired Auto Scaling group capacity.",
      "Use scheduled scaling actions to scale up and scale down the Auto Scaling group.",
    ],
    answer: 1,
    explanation:
      "A target tracking scaling policy is designed to maintain a specific metric value, such as average CPU utilization at 40%. Amazon EC2 Auto Scaling automatically adjusts the number of instances to keep the target metric near the desired value. Simple scaling requires manually defined CloudWatch alarms and scaling adjustments, Lambda adds unnecessary complexity, and scheduled scaling is only suitable for predictable usage patterns.",
  },

  // question 131
  {
    question:
      "A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL. What should a solutions architect do to meet these requirements?",
    options: [
      "Write individual policies for each S3 bucket to grant read permission for only CloudFront access.",
      "Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.",
      "Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).",
      "Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.",
    ],
    answer: 3,
    explanation:
      "An Origin Access Identity (OAI) allows CloudFront to access private S3 bucket content while preventing users from accessing objects directly through the S3 URL. The S3 bucket policy grants read access only to the OAI, forcing all requests to go through CloudFront. This provides secure content delivery while maintaining the required architecture.",
  },

  // question 132
  {
    question:
      "A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time. Which combination should a solutions architect recommend to meet these requirements?",
    options: [
      "Amazon CloudFront and Amazon S3",
      "AWS Lambda and Amazon DynamoDB",
      "Application Load Balancer with Amazon EC2 Auto Scaling",
      "Amazon Route 53 with internal Application Load Balancers",
    ],
    answer: 0,
    explanation:
      "Amazon S3 provides highly scalable, durable, and cost-effective storage for static files such as historical performance reports. Amazon CloudFront provides a global content delivery network (CDN) that caches files at edge locations close to users, reducing latency and improving response times worldwide. This serverless solution requires no infrastructure provisioning or management.",
  },

  // question 133
  {
    question:
      "A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system. Which solution will meet these requirements?",
    options: [
      "Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.",
      "Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.",
      "Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.",
      "Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.",
    ],
    answer: 2,
    explanation:
      "Amazon RDS Custom for Oracle is designed for workloads that require both managed database capabilities and access to the underlying operating system. It reduces operational overhead compared with managing Oracle on EC2 while still allowing OS-level customization. A cross-Region read replica provides a disaster recovery option. Standard Amazon RDS for Oracle does not provide operating system access, and EC2 would require much more operational management.",
  },

  // question 134
  {
    question:
      "A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon Athena to query the data.",
      "Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.",
      "Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.",
      "Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.",
    ],
    answer: 0,
    explanation:
      "Amazon Athena is a serverless, SQL-based query service that can analyze data directly in Amazon S3 without requiring database infrastructure. SSE-KMS with AWS KMS multi-Region keys provides encryption with centralized key management and allows encrypted objects to be replicated across Regions using S3 Cross-Region Replication. This solution provides the required encryption, replication, SQL analysis, and the least operational overhead.",
  },

  // question 135
  {
    question:
      "A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC. Which solution will meet these requirements?",
    options: [
      "Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.",
      "Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.",
      "Create a NAT gateway in a public subnet of the company's VPC. Update the route table to connect to the target service.",
      "Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.",
    ],
    answer: 3,
    explanation:
      "AWS PrivateLink is designed for private connectivity between a consumer VPC and a service provider's VPC. The provider creates an endpoint service, and the consumer creates a VPC endpoint to access only that specific service. Traffic stays on the AWS private network, and communication is initiated from the company's VPC only. VPC peering provides broader network access between VPCs and is not restricted to a single service.",
  },

  // question 136
  {
    question:
      "A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database. Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Create an ongoing replication task.",
      "Create a database backup of the on-premises database.",
      "Create an AWS Database Migration Service (AWS DMS) replication server.",
      "Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.",
    ],
    answer: 2,
    explanation:
      "AWS Database Migration Service (AWS DMS) supports continuous database migration with minimal downtime. The solution requires creating a DMS replication server to handle the migration process and an ongoing replication task to continuously capture changes from the on-premises PostgreSQL database and apply them to Aurora PostgreSQL. Backups do not provide synchronization, AWS SCT is mainly for schema conversion between different database engines, and EventBridge is not required for replication.",
  },

  // question 137
  {
    question:
      "A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators. Which solution will meet these requirements?",
    options: [
      "Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.",
      "Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.",
      "Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.",
      "Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.",
    ],
    answer: 1,
    explanation:
      "AWS recommends that the root user email address be a distribution list controlled by multiple administrators rather than a single person's email. This prevents missing important AWS notifications. AWS Organizations also allows administrators to configure alternate contacts (such as billing, operations, and security contacts) so notifications can be directed to the appropriate account administrators without sharing root access.",
  },

  // question 138
  {
    question:
      "A company runs its ecommerce application on AWS. Every new order is published as a message in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone. The company needs to redesign its architecture to provide the highest availability with the least operational overhead. What should a solutions architect do to meet these requirements?",
    options: [
      "Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.",
      "Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.",
      "Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.",
      "Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.",
    ],
    answer: 1,
    explanation:
      "Amazon MQ for RabbitMQ provides managed message brokers with active/standby deployment across multiple Availability Zones, reducing operational overhead compared with managing RabbitMQ on EC2. EC2 Auto Scaling across multiple AZs improves application availability. Amazon RDS for PostgreSQL Multi-AZ provides managed database high availability with automatic failover. This combination provides the highest availability with the least operational effort.",
  },

  // question 139
  {
    question:
      "A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket. The reporting team wants to move the files automatically to the analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines. What should a solutions architect do to meet these requirements with the LEAST operational overhead?",
    options: [
      "Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.",
      "Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.",
      "Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.",
      "Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.",
    ],
    answer: 3,
    explanation:
      "Amazon S3 Cross-Region Replication (CRR) or Same-Region Replication (SRR) can automatically copy objects between S3 buckets without requiring custom code. After replication creates objects in the analysis bucket, Amazon EventBridge can detect ObjectCreated events and invoke multiple targets such as AWS Lambda and SageMaker Pipelines. This provides the least operational overhead because S3 handles the file movement automatically and EventBridge provides flexible event routing to multiple services.",
  },

  // question 140
  {
    question:
      "A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture. The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year. Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)",
    options: [
      "Use Spot Instances for the data ingestion layer",
      "Use On-Demand Instances for the data ingestion layer",
      "Purchase a 1-year Compute Savings Plan for the front end and API layer.",
      "Purchase 1-year All Upfront Reserved Instances for the data ingestion layer.",
      "Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.",
    ],
    answer: 0,
    explanation:
      "Spot Instances are the most cost-effective choice for the EC2 data ingestion layer because the workload is unpredictable and can tolerate interruptions. Reserved Instances are not suitable because the EC2 usage is sporadic. For Fargate and Lambda, a Compute Savings Plan provides discounts across multiple compute services including Amazon EC2, AWS Fargate, and AWS Lambda, making it more appropriate than an EC2 Instance Savings Plan.",
  },

  // question 141
  {
    question:
      "A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible. How should a solutions architect design the application to ensure the LEAST amount of latency for all users?",
    options: [
      "Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.",
      "Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.",
      "Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.",
      "Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.",
    ],
    answer: 0,
    explanation:
      "Amazon CloudFront provides the lowest latency by caching and serving both static and dynamic content through a global network of edge locations. CloudFront can use an Application Load Balancer as an origin and optimize delivery over AWS's global infrastructure. Deploying multiple Regions adds operational complexity and is not necessary because CloudFront already provides global content distribution.",
  },

  // question 142
  {
    question:
      "A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints. What should a solutions architect do to meet these requirements?",
    options: [
      "Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.",
      "Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.",
      "Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.",
      "Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.",
    ],
    answer: 2,
    explanation:
      "AWS Global Accelerator is designed for low-latency global applications by routing user traffic to the nearest AWS edge location and providing static anycast IP addresses. It supports TCP and UDP protocols and can route traffic to Network Load Balancers, which are optimized for high-performance UDP workloads. EC2 Auto Scaling provides scalability and high availability for the application tier.",
  },

  // question 143
  {
    question:
      "A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead. Which solution will meet these requirements?",
    options: [
      "Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.",
      "Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.",
      "Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.",
      "Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.",
    ],
    answer: 3,
    explanation:
      "Amazon ECS allows the company to break the monolithic application into smaller containerized services (microservices) while keeping much of the existing application code. Each team can manage separate services independently. ECS with an Application Load Balancer provides high scalability and reduces operational overhead compared with managing EC2 instances directly. Lambda would require significant code changes because applications must be redesigned into functions.",
  },

  // question 144
  {
    question:
      "A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilization metrics are spiking when monthly reports run. What is the MOST cost-effective solution?",
    options: [
      "Migrate the monthly reporting to Amazon Redshift.",
      "Migrate the monthly reporting to an Aurora Replica.",
      "Migrate the Aurora database to a larger instance class.",
      "Increase the Provisioned IOPS on the Aurora instance.",
    ],
    answer: 1,
    explanation:
      "Aurora Replicas are designed to offload read-heavy workloads from the primary Aurora database. Since the performance issue is caused by reporting queries increasing ReadIOPS and CPU utilization, moving monthly reports to an Aurora Replica reduces the load on the primary database with minimal cost and operational overhead. Increasing instance size or IOPS increases cost, while Redshift would be unnecessary for this requirement.",
  },

  // question 145
  {
    question:
      "A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly. Which solution will meet these requirements MOST cost-effectively?",
    options: [
      "Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.",
      "Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.",
      "Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.",
      "Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.",
    ],
    answer: 0,
    explanation:
      "The best solution is to separate the database from the application layer by moving MySQL to Amazon RDS and then create multiple EC2 instances behind an Application Load Balancer. This provides horizontal scaling and distributes traffic across instances. Option D introduces Spot Instances, which can be interrupted and are not ideal for a website requiring seamless scaling and availability. Route 53 weighted routing is not a replacement for a load balancer, and changing instance size does not provide true scalability.",
  },

  // question 146
  {
    question:
      "A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends. The company wants to minimize its EC2 costs without affecting the availability of the application. Which solution will meet these requirements?",
    options: [
      "Use Spot Instances for the entire workload.",
      "Use Reserved Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.",
      "Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.",
      "Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.",
    ],
    answer: 1,
    explanation:
      "Reserved Instances provide a cost discount for predictable baseline usage, such as the application's steady overnight traffic. Spot Instances are suitable for additional capacity during peak periods because the application is stateless and can tolerate interruptions. Using this combination minimizes costs while maintaining availability through the Auto Scaling group and Load Balancer.",
  },

  // question 147
  {
    question:
      "A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month. Which storage option meets these requirements MOST cost-effectively?",
    options: [
      "Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.",
      "Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.",
      "Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.",
      "Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.",
    ],
    answer: 1,
    explanation:
      "Amazon S3 with S3 Lifecycle policies is the most cost-effective solution. S3 is suitable for storing large amounts of log data, and lifecycle rules can automatically transition objects older than one month to S3 Glacier Deep Archive for long-term, low-cost retention. AWS Backup is not needed for this use case, and CloudWatch Logs is more expensive for storing 10 TB+ of long-term log data.",
  },

  // question 148
  {
    question:
      "A company has a data ingestion workflow that includes the following components: An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries. An AWS Lambda function that processes and stores the data. The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job. What should a solutions architect do to ensure that all notifications are eventually processed?",
    options: [
      "Configure the Lambda function for deployment across multiple Availability Zones.",
      "Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.",
      "Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.",
      "Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.",
    ],
    answer: 3,
    explanation:
      "Using Amazon SQS as an on-failure destination provides durable storage for failed notifications. If the Lambda function fails because of temporary network issues, the failed messages are stored in the SQS queue and can be processed later, ensuring that no notifications are lost. SNS retries alone are not sufficient because if all retries fail, the message can still be lost unless a dead-letter queue or failure destination is configured.",
  },

  // question 149
  {
    question:
      "A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead. How should a solutions architect accomplish this?",
    options: [
      "Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.",
      "Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.",
    ],
    answer: 0,
    explanation:
      "Amazon SQS FIFO queues preserve the exact order of messages and provide exactly-once processing, making them suitable when event order must be maintained. Lambda can consume messages directly from the FIFO queue, providing a serverless and low-operational-overhead processing solution. Standard SQS queues do not guarantee ordering, and SNS alone does not provide message ordering.",
  },

  // question 150
  {
    question:
      "A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms. What should the solutions architect do to meet these requirements?",
    options: [
      "Create Amazon CloudWatch composite alarms where possible.",
      "Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.",
      "Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.",
      "Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.",
    ],
    answer: 0,
    explanation:
      "Amazon CloudWatch composite alarms allow multiple CloudWatch alarms to be combined using logical operators such as AND and OR. In this scenario, the company only wants an alarm when both CPU utilization is high and disk read IOPS are high at the same time. A composite alarm reduces false alarms by requiring multiple conditions to be true before triggering an action.",
  },

  // question 151
  {
    question:
      "A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet. Which solutions will meet these requirements? (Choose two.)",
    options: [
      "Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.",
      "Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.",
      "Use AWS Organizations to configure service control policies (SCPs) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.",
      "Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.",
      "Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.",
    ],
    answer: 0,
    explanation:
      "AWS Control Tower provides preventive guardrails, including Region deny (data residency) guardrails, built on AWS Organizations. AWS Organizations SCPs can also enforce restrictions that prevent VPCs from gaining internet access and limit the use of AWS Regions to only ap-northeast-3. AWS WAF does not control VPC internet connectivity, network ACLs are not an organization-wide preventive control, and AWS Config only detects noncompliance rather than preventing it.",
  },

  // question 152
  {
    question:
      "A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs. What should a solutions architect do to meet these requirements?",
    options: [
      "Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.",
      "Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.",
      "Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.",
      "Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.",
    ],
    answer: 3,
    explanation:
      "Use EventBridge scheduled rules to invoke Lambda functions that start and stop the Amazon RDS DB instance automatically based on the application's usage schedule. This serverless approach minimizes operational overhead and reduces database costs by running the DB instance only during the required 12-hour period each day.",
  },

  // question 153
  {
    question:
      "A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users. Which action should the company take to meet these requirements MOST cost-effectively?",
    options: [
      "Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.",
      "Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.",
      "Configure S3 Inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.",
      "Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.",
    ],
    answer: 3,
    explanation:
      "The access pattern is known: objects are frequently accessed for the first 90 days and infrequently accessed afterward. An S3 Lifecycle policy can automatically transition objects from S3 Standard to S3 Standard-IA after 90 days, providing the lowest-cost solution with minimal operational overhead. S3 Intelligent-Tiering is more appropriate when access patterns are unknown or unpredictable.",
  },

  // question 154
  {
    question:
      "A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date. Which solution will meet these requirements?",
    options: [
      "Use S3 Object Lock in governance mode with a legal hold of 1 year.",
      "Use S3 Object Lock in compliance mode with a retention period of 365 days.",
      "Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.",
      "Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.",
    ],
    answer: 1,
    explanation:
      "S3 Object Lock in Compliance mode enforces write-once-read-many (WORM) protection. Objects cannot be modified or deleted by any user, including the root user, until the retention period expires. Setting a retention period of 365 days satisfies the requirement to retain every file for at least 1 year while preventing modification or deletion.",
  },

  // question 155
  {
    question:
      "A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically. Which solution will meet these requirements?",
    options: [
      "Use AWS DataSync to connect the S3 buckets to the web application.",
      "Deploy AWS Global Accelerator to connect the S3 buckets to the web application.",
      "Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.",
      "Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.",
    ],
    answer: 2,
    explanation:
      "Amazon CloudFront is the ideal solution for caching content stored in Amazon S3 and delivering it with low latency through a global network of edge locations. CloudFront also supports secure delivery of confidential content by using features such as Origin Access Control (OAC) or Origin Access Identity (OAI), signed URLs, and signed cookies.",
  },

  // question 156
  {
    question:
      "A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs). Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
    options: [
      "Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.",
      "Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.",
      "Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.",
      "Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.",
      "Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.",
    ],
    answer: 0,
    explanation:
      "AWS Lake Formation with AWS Glue provides a managed, low-operational-overhead way to ingest, catalog, transform, and store data from multiple batch and streaming sources into Amazon S3 in an optimized format such as Apache Parquet. Amazon Athena is ideal for running one-time SQL queries directly against the data in S3, and Amazon QuickSight can use the queried data to create KPI dashboards.",
  },

  // question 157
  {
    question:
      "A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Take a manual snapshot of the DB cluster.",
      "Create a lifecycle policy for the automated backups.",
      "Configure automated backup retention for 5 years.",
      "Configure an Amazon CloudWatch Logs export for the DB cluster.",
      "Use AWS Backup to take the backups and to keep the backups for 5 years.",
    ],
    answer: 3,
    explanation:
      "AWS Backup can be used to create and manage backups with a defined retention period of 5 years, meeting the requirement to store database data for 5 years and automatically delete backups afterward. Amazon CloudWatch Logs export should be enabled for Aurora PostgreSQL audit logs so database activity logs can be retained indefinitely. Aurora automated backups cannot be retained for 5 years, and manual snapshots do not provide automatic expiration.",
  },

  // question 158
  {
    question:
      "A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience. Which service will improve the performance of both the real-time and on-demand streaming?",
    options: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "Amazon Route 53",
      "Amazon S3 Transfer Acceleration",
    ],
    answer: 0,
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that uses a global network of edge locations to deliver content with low latency. It supports both live streaming and on-demand video streaming by caching and delivering content closer to viewers around the world. AWS Global Accelerator improves performance for TCP/UDP applications but does not cache video content, making it less suitable for streaming workloads.",
  },

  // question 159
  {
    question:
      "A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets. Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)",
    options: [
      "Create a usage plan with an API key that is shared with genuine users only.",
      "Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.",
      "Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.",
      "Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.",
      "Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.",
    ],
    answer: 0,
    explanation:
      "API Gateway usage plans with API keys can control and limit access for known, legitimate users. AWS WAF can inspect incoming requests and block malicious traffic such as botnet-generated requests before they reach API Gateway and Lambda. Lambda-side filtering is inefficient because the requests already consume resources, private APIs are not suitable for public applications, and creating IAM roles for every user is not a scalable authentication approach.",
  },

  // question 160
  {
    question:
      "An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Amazon OpenSearch Service (Amazon Elasticsearch Service)",
      "Amazon S3 Glacier",
      "Amazon S3 Standard",
      "Amazon RDS for PostgreSQL",
    ],
    answer: 2,
    explanation:
      "Amazon S3 Standard is the most cost-effective choice because the data is small (300 MB/month), needs immediate access in milliseconds, and only needs to be retained for 30 days. S3 Glacier is designed for archival data and has retrieval delays, while OpenSearch and RDS are unnecessary for simple JSON backup storage.",
  },

  // question 161
  {
    question:
      "A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead. Which solution will meet these requirements?",
    options: [
      "Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.",
      "Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.",
      "Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.",
      "Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.",
    ],
    answer: 1,
    explanation:
      "AWS Lambda provides automatic scaling, high availability, and minimal operational overhead because the company does not need to manage servers. S3 event notifications can trigger the Lambda function whenever JSON documents arrive, allowing the application to process thousands of executions per day. Aurora provides a highly available managed database for storing results.",
  },

  // question 162
  {
    question:
      "A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use. The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files. Which combination of AWS services meets these requirements?",
    options: [
      "Amazon FSx for Lustre integrated with Amazon S3",
      "Amazon FSx for Windows File Server integrated with Amazon S3",
      "Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume",
    ],
    answer: 0,
    explanation:
      "Amazon FSx for Lustre is designed for high-performance computing workloads that require a fast shared file system. It supports Linux clients and can be integrated with Amazon S3, allowing data to be imported from S3 for processing and exported back to S3 for persistent storage and long-term analytics. It provides the high throughput and low latency required by HPC workloads running across many EC2 instances.",
  },

  // question 163
  {
    question:
      "A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead. Which solution will meet these requirements?",
    options: [
      "Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.",
      "Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.",
      "Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.",
      "Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.",
    ],
    answer: 0,
    explanation:
      "Amazon ECS with the AWS Fargate launch type provides a fully managed container environment where AWS manages the underlying servers. This minimizes operational overhead because the company does not need to provision, patch, or scale EC2 instances. Amazon ECR stores container images, and ECS Service Auto Scaling with target tracking automatically adjusts the number of running containers based on demand.",
  },

  // question 164
  {
    question:
      "A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed. If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages. Which solution meets these requirements and is the MOST operationally efficient?",
    options: [
      "Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.",
      "Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).",
      "Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.",
      "Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.",
    ],
    answer: 2,
    explanation:
      "Amazon SQS is designed for decoupling applications through message queues. It can handle the message volume, retain messages for delayed processing, and prevent failed messages from blocking other messages. A dead-letter queue (DLQ) stores messages that cannot be successfully processed after retries, allowing investigation and later reprocessing. This provides the least operational overhead compared with managing Redis, Kinesis consumers, or SNS-only messaging.",
  },

  // question 165
  {
    question:
      "A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF. How should the solutions architect comply with these requirements?",
    options: [
      "Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.",
      "Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.",
      "Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.",
      "Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.",
    ],
    answer: 3,
    explanation:
      "AWS WAF integrates with Amazon CloudFront distributions. Requests are inspected by AWS WAF before CloudFront forwards allowed requests to the S3 origin. Using an Origin Access Identity (OAI) restricts direct access to the S3 bucket so users can only access content through CloudFront. This provides both security and controlled content delivery.",
  },

  // question 166
  {
    question:
      "Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution. Which action should the solutions architect take to accomplish this?",
    options: [
      "Generate presigned URLs for the files.",
      "Use cross-Region replication to all Regions.",
      "Use the geoproximity feature of Amazon Route 53.",
      "Use Amazon CloudFront with the S3 bucket as its origin.",
    ],
    answer: 3,
    explanation:
      "Amazon CloudFront is the best solution for globally distributing static content stored in Amazon S3. CloudFront caches content at edge locations around the world, reducing latency and allowing millions of users to access the reports efficiently. Cross-Region replication is unnecessary because CloudFront already provides global content delivery.",
  },

  // question 167
  {
    question:
      "A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Use Spot Instances exclusively to handle the maximum capacity required.",
      "Use Reserved Instances exclusively to handle the maximum capacity required.",
      "Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.",
      "Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.",
    ],
    answer: 2,
    explanation:
      "Reserved Instances provide cost savings for predictable baseline workloads, while Spot Instances provide low-cost additional capacity for unpredictable spikes. Because the application processes messages from SQS and can run in parallel, it can use extra Spot capacity to handle intermittent traffic. Using only Spot Instances risks interruptions, and using only Reserved or On-Demand Instances would be more expensive.",
  },

  // question 168
  {
    question:
      "A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained. What should a solutions architect do to accomplish this?",
    options: [
      "Create an ACL to provide access to the services or actions.",
      "Create a security group to allow accounts and attach it to user groups.",
      "Create cross-account roles in each account to deny access to the services or actions.",
      "Create a service control policy in the root organizational unit to deny access to the services or actions.",
    ],
    answer: 3,
    explanation:
      "AWS Organizations service control policies (SCPs) allow centralized control over the maximum permissions available for accounts in an organization. Applying an SCP at the root organizational unit affects all AWS accounts below it, providing a scalable solution with a single location to manage restrictions. SCPs do not grant permissions; they set permission boundaries for accounts.",
  },

  // question 169
  {
    question:
      "A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application. What should the solutions architect do to meet this requirement?",
    options: [
      "Add an Amazon Inspector agent to the ALB.",
      "Configure Amazon Macie to prevent attacks.",
      "Enable AWS Shield Advanced to prevent attacks.",
      "Configure Amazon GuardDuty to monitor the ALB.",
    ],
    answer: 2,
    explanation:
      "AWS Shield Advanced provides enhanced DDoS protection for AWS resources including Application Load Balancers. It offers advanced detection, mitigation capabilities, and protection against large-scale DDoS attacks. Amazon Inspector identifies vulnerabilities, Macie protects sensitive data, and GuardDuty provides threat detection but they do not provide DDoS protection.",
  },

  // question 170
  {
    question:
      "A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only. Which configuration will meet this requirement?",
    options: [
      "Configure the security group for the EC2 instances.",
      "Configure the security group on the Application Load Balancer.",
      "Configure AWS WAF on the Application Load Balancer in a VPC.",
      "Configure the network ACL for the subnet that contains the EC2 instances.",
    ],
    answer: 2,
    explanation:
      "AWS WAF supports geographic (geo match) rules that can allow or block requests based on the country where the request originates. Associating AWS WAF with the Application Load Balancer allows filtering before traffic reaches the EC2 instances. Security groups and network ACLs operate at the network level and cannot identify user countries.",
  },

  // question 171
  {
    question:
      "A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic. What should the solutions architect do to accomplish this?",
    options: [
      "Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.",
      "Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.",
      "Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.",
      "Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.",
    ],
    answer: 1,
    explanation:
      "Amazon API Gateway combined with AWS Lambda provides a fully serverless architecture that automatically scales to handle seasonal spikes in traffic. Lambda runs the tax computation only when requests arrive, eliminating server management and minimizing costs during periods of low demand while providing virtually unlimited scalability.",
  },

  // question 172
  {
    question:
      "A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should be protected throughout the entire application stack, and access to the information should be restricted to certain applications. Which action should the solutions architect take?",
    options: [
      "Configure a CloudFront signed URL.",
      "Configure a CloudFront signed cookie.",
      "Configure a CloudFront field-level encryption profile.",
      "Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.",
    ],
    answer: 2,
    explanation:
      "CloudFront field-level encryption provides an additional layer of security by encrypting specific sensitive fields in user requests before they are forwarded through the application stack. Only designated applications with the appropriate private key can decrypt the protected fields. Signed URLs and signed cookies control access to content, while HTTPS only encrypts data in transit but does not provide field-level protection.",
  },

  // question 173
  {
    question:
      "A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users. The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin. Which solution meets these requirements MOST cost-effectively?",
    options: [
      "Deploy an AWS Global Accelerator accelerator in front of the web servers.",
      "Deploy an Amazon CloudFront web distribution in front of the S3 bucket.",
      "Deploy an Amazon ElastiCache for Redis instance in front of the web servers.",
      "Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.",
    ],
    answer: 1,
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) designed to cache and deliver static content such as videos and images from edge locations around the world. This reduces requests directly reaching the S3 origin, improves performance for global users, and is more cost-effective than using caching services designed for application data.",
  },

  // question 174
  {
    question:
      "A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application. Which architecture should the solutions architect choose that provides high availability?",
    options: [
      "Create an Auto Scaling group that uses three instances across each of two Regions.",
      "Modify the Auto Scaling group to use three instances across each of two Availability Zones.",
      "Create an Auto Scaling template that can be used to quickly create more instances in another Region.",
      "Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.",
    ],
    answer: 1,
    explanation:
      "Deploying the EC2 instances across multiple Availability Zones within the same Region provides high availability by allowing the application to continue running if one Availability Zone fails. An Auto Scaling group can automatically distribute instances across the selected Availability Zones, and the Application Load Balancer can route traffic to healthy instances.",
  },

  // question 175
  {
    question:
      "An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers. A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application. Which solution will meet these requirements?",
    options: [
      "Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.",
      "Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.",
      "Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.",
      "Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.",
    ],
    answer: 1,
    explanation:
      "Amazon RDS Proxy is designed to handle large numbers of database connections from applications such as AWS Lambda. It pools and reuses database connections, reducing the connection overhead on Aurora PostgreSQL and improving application scalability during traffic spikes. This requires minimal application changes because only the database endpoint used by Lambda needs to be changed.",
  },

  // question 176
  {
    question:
      "An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table. What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?",
    options: [
      "Use a VPC endpoint for DynamoDB.",
      "Use a NAT gateway in a public subnet.",
      "Use a NAT instance in a private subnet.",
      "Use the internet gateway attached to the VPC.",
    ],
    answer: 0,
    explanation:
      "A VPC endpoint for DynamoDB allows resources in private subnets to access DynamoDB directly through the AWS network without requiring internet access. This keeps traffic private and avoids routing through NAT gateways or internet gateways, providing the most secure and efficient solution.",
  },

  // question 177
  {
    question:
      "An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application. What should a solutions architect recommend to meet this requirement?",
    options: [
      "Use Amazon ElastiCache for Redis.",
      "Use Amazon DynamoDB Accelerator (DAX).",
      "Replicate data by using DynamoDB global tables.",
      "Use Amazon ElastiCache for Memcached with Auto Discovery enabled.",
    ],
    answer: 1,
    explanation:
      "Amazon DynamoDB Accelerator (DAX) is a fully managed, in-memory cache specifically designed for DynamoDB. It improves read performance by reducing latency from milliseconds to microseconds and requires minimal application changes because it is API-compatible with DynamoDB. ElastiCache solutions would require application changes to integrate caching logic.",
  },

  // question 178
  {
    question:
      "A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.",
      "Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.",
      "Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.",
      "Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.",
    ],
    answer: 0,
    explanation:
      "AWS Backup provides a centralized, managed backup solution that supports both Amazon EC2 and Amazon RDS resources and can automatically copy backups across AWS Regions. It requires the least operational overhead because backup policies and cross-Region copy rules can be managed from a single service.",
  },

  // question 179
  {
    question:
      "A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store. What should the solutions architect do to meet this requirement?",
    options: [
      "Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.",
      "Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.",
      "Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.",
      "Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.",
    ],
    answer: 0,
    explanation:
      "The recommended approach is to attach an IAM role to the EC2 instance that grants permission to read the SecureString parameter in AWS Systems Manager Parameter Store and allows decrypt access to the AWS KMS key used to encrypt the parameter. IAM roles are preferred over attaching policies directly to instances because they provide temporary credentials and better security management.",
  },

  // question 180
  {
    question:
      "A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks. Which combination of solutions provides the MOST protection? (Choose two.)",
    options: [
      "Use AWS WAF to protect the NLB.",
      "Use AWS Shield Advanced with the NLB.",
      "Use AWS WAF to protect Amazon API Gateway.",
      "Use Amazon GuardDuty with AWS Shield Standard.",
      "Use AWS Shield Standard with Amazon API Gateway.",
    ],
    answer: 2,
    explanation:
      "AWS WAF protects Amazon API Gateway from web exploits such as SQL injection and cross-site scripting by filtering malicious HTTP requests. AWS Shield Advanced provides enhanced DDoS protection and mitigation against large and sophisticated attacks for resources such as Network Load Balancers. AWS WAF cannot be directly associated with an NLB, and Shield Standard does not provide the advanced DDoS protection required.",
  },

  // question 181
  {
    question:
      "A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances. The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS). What should a solutions architect recommend for communication between the microservices?",
    options: [
      "Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.",
      "Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.",
      "Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.",
    ],
    answer: 0,
    explanation:
      "Amazon SQS is the best choice for communication between microservices when processing can happen asynchronously and the order of results does not matter. SQS decouples producers and consumers, allows independent scaling of microservices, and provides reliable message delivery with minimal operational overhead. SNS is mainly for pub/sub fan-out, while DynamoDB Streams and Lambda are not appropriate for general microservice communication.",
  },

  // question 182
  {
    question:
      "A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes. Which solution meets these requirements?",
    options: [
      "Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.",
      "Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.",
      "Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.",
      "Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.",
    ],
    answer: 1,
    explanation:
      "Amazon RDS for MySQL with Multi-AZ enabled provides synchronous replication to a standby database in another Availability Zone. This ensures that every transaction is stored on multiple nodes and provides automatic failover with minimal data loss. Read replicas use asynchronous replication and are mainly for scaling read workloads, not high availability.",
  },

  // question 183
  {
    question:
      "A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand. Which solution will meet these requirements?",
    options: [
      "Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.",
      "Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.",
      "Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.",
      "Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.",
    ],
    answer: 0,
    explanation:
      "Amazon S3, API Gateway, Lambda, DynamoDB on-demand capacity, and CloudFront provide a fully serverless architecture with minimal server maintenance and patching. DynamoDB on-demand automatically scales read and write capacity based on traffic demand without capacity planning, while Lambda and API Gateway provide built-in high availability and automatic scaling.",
  },

  // question 184
  {
    question:
      "A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway. A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center. Which solution will meet these requirements?",
    options: [
      "Configure the Lambda function to run in the VPC with the appropriate security group.",
      "Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.",
      "Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.",
      "Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.",
    ],
    answer: 0,
    explanation:
      "A Lambda function must be configured to run inside the VPC to access resources in a private subnet or on-premises network through Direct Connect. When Lambda is connected to the VPC, it uses elastic network interfaces in the selected subnets and follows the VPC routing configuration, allowing it to reach the on-premises database through the existing Direct Connect connection.",
  },

  // question 185
  {
    question:
      "A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3. How can a solutions architect ensure that the application has permission to access Amazon S3?",
    options: [
      "Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.",
      "Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.",
      "Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.",
      "Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.",
    ],
    answer: 1,
    explanation:
      "Amazon ECS task roles allow containers to securely access AWS services. The solutions architect should create an IAM role with the required Amazon S3 permissions and specify it as the taskRoleArn in the ECS task definition. The ECS agent then provides temporary credentials to the running container. Security groups do not control IAM permissions to S3, and using IAM users inside applications is not recommended.",
  },

  // question 186
  {
    question:
      "A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zones. What should a solutions architect do to meet this requirement?",
    options: [
      "Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.",
      "Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.",
      "Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.",
      "Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.",
    ],
    answer: 1,
    explanation:
      "Amazon FSx for Windows File Server provides a fully managed native Windows file system that supports SMB protocol, Active Directory integration, and shared access from multiple Windows EC2 instances across Availability Zones. Amazon EFS is designed for Linux workloads using NFS, EBS volumes cannot be attached and shared across multiple EC2 instances in this way, and Storage Gateway is intended mainly for hybrid storage use cases.",
  },

  // question 187
  {
    question:
      "A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible. Which solutions meet these requirements? (Choose two.)",
    options: [
      "Create an Amazon RDS DB instance in Multi-AZ mode.",
      "Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.",
      "Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.",
      "Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.",
      "Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.",
    ],
    answer: 0,
    explanation:
      "Amazon RDS Multi-AZ provides high availability through synchronous replication and automatic failover with minimal administration. Amazon ECS with the Fargate launch type is fully managed, removing the need to provision and maintain EC2 instances while allowing containers to scale automatically. ECS with EC2 launch type requires more infrastructure management, and read replicas are primarily for scaling reads rather than providing automatic failover.",
  },

  // question 188
  {
    question:
      "A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead. Which solution will meet these requirements?",
    options: [
      "Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.",
      "Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.",
      "Launch an Amazon EC2 instance in a private subnet in a VPC. Instruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script on the EC2 instance to upload files to the S3 data lake.",
      "Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.",
    ],
    answer: 0,
    explanation:
      "AWS Transfer Family provides a fully managed SFTP service that integrates directly with Amazon S3. It provides high availability, eliminates the need to manage servers, and minimizes operational overhead. The partner can upload files using SFTP while the data is stored directly in the S3 data lake.",
  },

  // question 189
  {
    question:
      "A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year. Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)",
    options: [
      "Store the documents in Amazon S3. Use S3 Object Lock in governance mode.",
      "Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.",
      "Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.",
      "Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.",
    ],
    answer: 1,
    explanation:
      "S3 Object Lock in compliance mode prevents objects from being overwritten or deleted during the retention period, even by users with administrative privileges, making it suitable for regulatory and immutable document storage. AWS KMS customer managed keys support automatic annual key rotation, providing encryption at rest with minimal operational overhead. SSE-S3 does not allow customer-controlled key rotation, and imported keys require manual management.",
  },

  // question 190
  {
    question:
      "A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will meet these requirements?",
    options: [
      "Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.",
      "Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.",
      "Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.",
      "Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.",
    ],
    answer: 1,
    explanation:
      "AWS Elastic Beanstalk is a managed platform service that supports Java and PHP applications. It automatically handles infrastructure provisioning, load balancing, scaling, and application health monitoring. Elastic Beanstalk environments allow developers to create separate environments and use URL swapping to test new features and deploy changes with minimal operational overhead.",
  },

  // question 191
  {
    question:
      "A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries. What should a solutions architect do to meet these requirements?",
    options: [
      "Create a read replica. Move reporting queries to the read replica.",
      "Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.",
      "Migrate the ordering application to Amazon DynamoDB with on-demand capacity.",
      "Schedule the reporting queries for non-peak hours.",
    ],
    answer: 0,
    explanation:
      "Amazon RDS read replicas are designed to offload read-heavy workloads from the primary database instance. Moving reporting queries to a read replica separates the reporting workload from the transactional ordering workload, preventing performance degradation and reducing timeouts while allowing employees to continue running reports.",
  },

  // question 192
  {
    question:
      "A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud. A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency. Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Write the document information to an Amazon EC2 instance that runs a MySQL database.",
      "Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.",
      "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.",
      "Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.",
    ],
    answer: 3,
    explanation:
      "Amazon Textract is designed to extract text from scanned documents, while Amazon Comprehend Medical can identify and extract medical information from the text. Using Lambda triggered by S3 uploads provides automatic scaling with minimal operational overhead. Storing the processed documents in Amazon S3 and querying them with Amazon Athena provides a serverless SQL query capability without managing databases.",
  },

  // question 193
  {
    question:
      "A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability. What should the solutions architect do to meet this requirement?",
    options: [
      "Add Amazon RDS read replicas.",
      "Use Amazon ElastiCache for Redis.",
      "Use Amazon Route 53 DNS caching.",
      "Use Amazon ElastiCache for Memcached.",
    ],
    answer: 1,
    explanation:
      "Amazon ElastiCache for Redis reduces database read load by caching frequently accessed data in memory. Redis provides high availability features such as replication and Multi-AZ support with automatic failover. RDS read replicas can offload reads but require application changes to direct read traffic, while DNS caching does not reduce database queries and Memcached does not provide the same high availability capabilities as Redis.",
  },

  // question 194
  {
    question:
      "A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs. Which solution will meet these requirements?",
    options: [
      "Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.",
      "Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.",
      "Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.",
      "Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.",
    ],
    answer: 0,
    explanation:
      "For a database running on EC2 that requires high availability and automatic failover, deploying database instances across multiple Availability Zones with replication and clustering provides continuous availability. A Multi-AZ design within the same Region provides lower failover time and protects against Availability Zone failures. A single EC2 instance with backups or automatic recovery does not provide database-level automatic failover.",
  },

  // question 195
  {
    question:
      "A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs. What should a solutions architect do to meet these requirements?",
    options: [
      "Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.",
      "Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.",
      "Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.",
      "Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.",
    ],
    answer: 2,
    explanation:
      "Amazon SQS provides a durable message queue that decouples the order system from the EC2 processing instances. Messages remain in the queue until they are successfully processed, allowing the application to recover from failures without losing orders or requiring users to resubmit requests. An Auto Scaling group ensures processing capacity can recover and scale automatically.",
  },

  // question 196
  {
    question:
      "A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort. Which solution meets these requirements?",
    options: [
      "Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.",
      "Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.",
      "Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.",
      "Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created. Configure DynamoDB to use the attribute as the TTL attribute.",
    ],
    answer: 3,
    explanation:
      "Amazon DynamoDB Time to Live (TTL) is designed to automatically delete expired items with minimal operational overhead. The application should add a timestamp attribute that represents when the item should expire (current time plus 30 days) and configure that attribute as the TTL attribute. DynamoDB will automatically remove expired items, reducing storage costs without requiring additional servers, Lambda functions, or maintenance.",
  },

  // question 197
  {
    question:
      "A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available. Which combination of actions should the company take to meet these requirements? (Choose two.)",
    options: [
      "Refactor the application as serverless with AWS Lambda functions running .NET Core.",
      "Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.",
      "Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).",
      "Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.",
    ],
    answer: 3,
    explanation:
      "AWS Elastic Beanstalk supports .NET applications and provides a managed platform with built-in deployment, scaling, and Multi-AZ high availability capabilities, requiring minimal application changes. Amazon RDS for Oracle supports Oracle databases with Multi-AZ deployments, allowing the company to migrate the database while maintaining compatibility and reducing development effort. Refactoring to Lambda or migrating to DynamoDB would require significant application changes.",
  },

  // question 198
  {
    question:
      "A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead. Which solution meets these requirements?",
    options: [
      "Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.",
      "Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage.",
      "Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.",
      "Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.",
    ],
    answer: 3,
    explanation:
      "Amazon EKS is the best choice because the company is already using Kubernetes and cannot change the deployment method. AWS Fargate reduces operational overhead by removing the need to manage worker nodes. Amazon DocumentDB is MongoDB-compatible, allowing the company to migrate the database with minimal or no code changes. ECS and DynamoDB would require changes to the container orchestration and database access patterns.",
  },

  // question 199
  {
    question:
      "A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes. Which solution will meet these requirements?",
    options: [
      "Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.",
      "Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.",
      "Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.",
      "Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.",
    ],
    answer: 1,
    explanation:
      "Amazon Transcribe supports speech-to-text conversion and can identify multiple speakers through speaker diarization. The generated transcript files can be stored in Amazon S3 for long-term retention, and Amazon Athena can run SQL queries directly on data stored in S3 for analysis without requiring database infrastructure. Amazon Rekognition is for image and video analysis, Amazon Translate is for language translation, and Amazon Textract is for document text extraction.",
  },

  // question 200
  {
    question:
      "A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.",
      "For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.",
      "Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.",
      "Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.",
    ],
    answer: 3,
    explanation:
      "Amazon API Gateway has built-in integration with Amazon Cognito user pools through a Cognito user pool authorizer. API Gateway can automatically validate Cognito-issued JSON Web Tokens (JWTs) and control access to the REST API without requiring custom Lambda authorization logic. This provides the least operational overhead.",
  },

  // question 201
  {
    question:
      "A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis. What should a solutions architect do to meet these requirements?",
    options: [
      "Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.",
      "Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving.",
      "Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.",
      "Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.",
    ],
    answer: 1,
    explanation:
      "Amazon Pinpoint is designed for customer communications through channels such as SMS, email, and push notifications. It supports two-way SMS messaging, allowing users to reply, and can send events to Amazon Kinesis for real-time processing and long-term storage/analysis. This requires less operational overhead than building a custom messaging solution.",
  },

  // question 202
  {
    question:
      "A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.",
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket.",
      "Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.",
      "Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.",
    ],
    answer: 1,
    explanation:
      "AWS KMS customer managed keys support automatic annual key rotation and allow customers to control key policies and usage. By configuring S3 bucket default encryption to use the KMS key, all objects are automatically encrypted at rest. This provides the required yearly key rotation with minimal operational overhead. SSE-S3 does not provide customer-controlled rotation settings, and manually rotating keys increases operational effort.",
  },

  // question 203
  {
    question:
      "The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database. As the company expands, customers report that their meeting invitations are taking longer to arrive. What should a solutions architect recommend to resolve this issue?",
    options: [
      "Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.",
      "Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.",
      "Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.",
      "Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue.",
    ],
    answer: 3,
    explanation:
      "The delay is occurring in the application that processes messages from the SQS queue and sends meeting invitations. Scaling this application based on SQS queue depth allows more EC2 instances to process messages when the queue grows, reducing invitation delays. DAX, API Gateway, and CloudFront do not address the bottleneck in message processing.",
  },

  // question 204
  {
    question:
      "An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS. The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead. Which solution will meet these requirements?",
    options: [
      "Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.",
      "Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.",
      "Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access.",
      "Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.",
    ],
    answer: 2,
    explanation:
      "AWS Lake Formation is designed to build and manage data lakes with centralized, fine-grained access control. It can integrate data stored in Amazon S3 and Amazon RDS through AWS Glue connections and crawlers, while allowing teams to query the data using analytics services such as Athena. This minimizes operational overhead compared with managing custom data movement pipelines or database permissions.",
  },

  // question 205
  {
    question:
      "A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents. The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin. Which solution will meet these requirements?",
    options: [
      "Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.",
      "Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.",
      "Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI.",
      "Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.",
    ],
    answer: 2,
    explanation:
      "Amazon S3 is the most cost-effective and resilient origin for a static website delivered through CloudFront. A private S3 bucket with a CloudFront Origin Access Identity (OAI) prevents direct public access while allowing CloudFront to retrieve objects securely. S3 provides high durability, scalability, and requires no server management. EC2, Lightsail, and AWS Transfer for SFTP add unnecessary operational overhead and cost.",
  },

  // question 206
  {
    question:
      "A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.",
      "Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.",
      "Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected.",
      "Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.",
    ],
    answer: 2,
    explanation:
      "AWS CloudTrail records API activity, and Amazon EventBridge can automatically receive CloudTrail events in near real time. Creating an EventBridge rule that matches the EC2 CreateImage API call and sends the event to an SNS topic provides an automated alerting solution with the least operational overhead. The other options require custom log processing, Athena queries, or additional services that are unnecessary.",
  },

  // question 207
  {
    question:
      "A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices. The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests. What should a solutions architect do to address this issue without impacting existing users?",
    options: [
      "Add throttling on the API Gateway with server-side throttling limits.",
      "Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.",
      "Create a secondary index in DynamoDB for the table with the user requests.",
      "Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.",
    ],
    answer: 3,
    explanation:
      "Amazon SQS provides a durable buffer between API Gateway and DynamoDB, allowing requests to be queued during traffic spikes instead of being lost. Lambda can process messages from the queue at a rate DynamoDB can handle. API Gateway throttling rejects requests, DAX accelerates reads (not writes), and a secondary index does not improve write throughput.",
  },

  // question 208
  {
    question:
      "A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket. Which solution will meet these requirements?",
    options: [
      "Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
      "Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
      "Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
      "Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.",
    ],
    answer: 1,
    explanation:
      "A gateway VPC endpoint for Amazon S3 keeps all traffic between the EC2 instance and S3 on the AWS network without using the public internet. An S3 bucket policy can restrict access to only the EC2 instance's IAM role. Interface endpoints are not the standard solution for S3 in this scenario, and manually routing to S3 IP addresses is unsupported and unreliable.",
  },

  // question 209
  {
    question:
      "A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed. What should the solutions architect do to ensure that the architecture supports distributed session data management?",
    options: [
      "Use Amazon ElastiCache to manage and store session data.",
      "Use session affinity (sticky sessions) of the ALB to manage session data.",
      "Use Session Manager from AWS Systems Manager to manage the session.",
      "Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.",
    ],
    answer: 0,
    explanation:
      "Amazon ElastiCache provides a shared, in-memory data store that all EC2 instances can access, making it ideal for distributed session management in an auto scaling environment. Sticky sessions depend on a specific instance and can fail when instances are terminated. AWS Systems Manager Session Manager is for remote administration, and AWS STS GetSessionToken provides temporary credentials, not application session management.",
  },

  // question 210
  {
    question:
      "A company offers a food delivery service that is growing rapidly. Because of the growth, the company’s order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following: • A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application • Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event. A solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company’s AWS resources. Which solution meets these requirements?",
    options: [
      "Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group’s minimum capacity according to peak workload values.",
      "Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.",
      "Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.",
      "Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric.",
    ],
    answer: 3,
    explanation:
      "Using Amazon SQS decouples order collection from order fulfillment so requests are not lost during scaling events. Scaling the Auto Scaling groups based on backlog per instance ensures capacity matches the actual queue workload, optimizing resource utilization. CPU utilization alone is not a reliable scaling metric for queue-based workloads, and SQS does not send notifications suitable for Auto Scaling decisions.",
  },

  // question 211
  {
    question:
      "A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of “application” and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components. Which solution meets these requirements?",
    options: [
      "Use AWS CloudTrail to generate a list of resources with the application tag.",
      "Use the AWS CLI to query each service across all Regions to report the tagged components.",
      "Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.",
      "Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag.",
    ],
    answer: 3,
    explanation:
      "AWS Resource Groups Tag Editor is designed to quickly find and manage AWS resources based on tags across multiple services and Regions. CloudTrail records API activity, not resource tags. Querying every service with the AWS CLI is operationally complex, and CloudWatch Logs Insights searches log data, not AWS resource tags.",
  },

  // question 212
  {
    question:
      "A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB. The S3 access pattern for the data is variable and changes rapidly. The data must be immediately available and must remain accessible for up to 3 months. The company needs the most cost-effective solution that will not increase retrieval time. Which S3 storage class should the company use to meet these requirements?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Glacier Instant Retrieval",
      "S3 Standard",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
    ],
    answer: 0,
    explanation:
      "S3 Intelligent-Tiering is the most cost-effective choice for data with unpredictable access patterns. It automatically moves objects between storage tiers to reduce costs while maintaining immediate access with no retrieval delay. Glacier Instant Retrieval is intended for rarely accessed data, S3 Standard is more expensive for variable access patterns, and Standard-IA is best for predictable infrequent access.",
  },

  // question 213
  {
    question:
      "A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment. What should a solutions architect recommend to meet these requirements?",
    options: [
      "Configure AWS WAF rules and associate them with the ALB.",
      "Deploy the application using Amazon S3 with public hosting enabled.",
      "Deploy AWS Shield Advanced and add the ALB as a protected resource.",
      "Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.",
    ],
    answer: 0,
    explanation:
      "AWS WAF protects web applications from common application-layer attacks such as SQL injection and cross-site scripting (XSS). It is a fully managed service that integrates directly with an ALB, minimizing operational overhead. S3 hosting is unrelated, Shield Advanced focuses on DDoS protection rather than application-layer filtering, and managing a third-party firewall on EC2 increases operational responsibility.",
  },

  // question 214
  {
    question:
      "A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket. Which solution will meet these requirements with the LEAST development effort?",
    options: [
      "Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.",
      "Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step.",
      "Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.",
      "Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.",
    ],
    answer: 1,
    explanation:
      "AWS Glue is a fully managed ETL service that can automatically discover CSV data with a crawler and convert it to Apache Parquet with minimal development effort. EMR and AWS Batch require more custom code and infrastructure management, while Lambda is not ideal for processing hundreds of potentially large files due to execution time and resource limits.",
  },

  // question 215
  {
    question:
      "A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer. What should a solutions architect do to migrate and store the data at the LOWEST cost?",
    options: [
      "Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.",
      "Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.",
      "Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.",
      "Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier.",
    ],
    answer: 0,
    explanation:
      "700 TB cannot be transferred over a 500 Mbps connection within one month, so AWS Snowball is the most practical and cost-effective migration method. After the data is in Amazon S3, a lifecycle policy can transition it to S3 Glacier Deep Archive, the lowest-cost storage class for long-term archival with infrequent access. VPN, Direct Connect, and DataSync over the available network bandwidth cannot complete the migration within the required timeframe.",
  },

  // question 216
  {
    question:
      "A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all objects that are added to the S3 bucket in the future. Which solution will meet these requirements with the LEAST amount of effort?",
    options: [
      "Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all existing objects to temporary local storage. Upload the objects to the new S3 bucket.",
      "Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt those objects.",
      "Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on versioning for the S3 bucket.",
      "Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket’s objects. Sort by the encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to every unencrypted object in the S3 bucket.",
    ],
    answer: 1,
    explanation:
      "Enable S3 default encryption to automatically encrypt all new objects. Existing objects are not encrypted retroactively, so use S3 Inventory to identify unencrypted objects and S3 Batch Operations with the copy operation to encrypt them in bulk. The other options require unnecessary manual work or do not encrypt existing objects.",
  },

  // question 217
  {
    question:
      "A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy. What should a solutions architect do to meet these requirements?",
    options: [
      "Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region.",
      "Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.",
      "Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.",
      "Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.",
    ],
    answer: 0,
    explanation:
      "The requirements match a warm standby (active-passive) disaster recovery strategy. Deploying the infrastructure in a secondary Region with Route 53 active-passive failover and an Aurora cross-Region replica provides recovery within the allowed RTO and RPO without needing to serve production traffic during normal operation. The other options either use unnecessary active-active architecture or rely on backups, which result in longer recovery times.",
  },

  // question 218
  {
    question:
      "A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all traffic. A solutions architect needs to make the web server accessible from everywhere on port 443. Which combination of steps will accomplish this task? (Choose two.)",
    options: [
      "Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0.",
      "Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.",
      "Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0.",
      "Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 32768-65535 to destination 0.0.0.0/0",
    ],
    answer: 3,
    explanation:
      "A security group must allow inbound HTTPS (TCP 443) from anywhere. Because network ACLs are stateless, they must allow inbound TCP 443 and outbound ephemeral ports (32768–65535) for return traffic. Option C only updates inbound rules, Option D incorrectly allows outbound 443 instead of ephemeral ports, and Option B is invalid because security groups do not have outbound destination rules for inbound traffic.",
  },

  // question 219
  {
    question:
      "A company’s application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application. Which solution will resolve these issues in the MOST operationally efficient way?",
    options: [
      "Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.",
      "Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.",
      "Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.",
      "Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning.",
    ],
    answer: 3,
    explanation:
      "The application is memory-intensive, so R5 memory-optimized instances are a better fit than M5 instances. Making the change in CloudFormation is operationally efficient and keeps the infrastructure as code. EC2 does not provide built-in memory metrics, so the CloudWatch agent is required to collect memory and application metrics for monitoring and future capacity planning. T3 instances are not suitable for memory-intensive workloads, and manually scaling an Auto Scaling group is less efficient.",
  },

  // question 220
  {
    question:
      "A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made. Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?",
    options: [
      "An AWS Glue job",
      "An AWS Lambda function",
      "A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)",
      "A containerized service hosted in Amazon ECS with Amazon EC2",
    ],
    answer: 1,
    explanation:
      "AWS Lambda is the most cost-effective choice for workloads with unpredictable or infrequent requests because it charges only for execution time. It integrates directly with API Gateway and can process asynchronous requests within seconds. AWS Glue is for ETL workloads, while EKS and ECS on EC2 require continuously running infrastructure, increasing costs.",
  },

  // question 221
  {
    question:
      "A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able to access all the files concurrently. Which storage solution meets these requirements MOST cost-effectively?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon EC2 instance store",
      "Amazon S3",
    ],
    answer: 3,
    explanation:
      "Amazon S3 is the most cost-effective storage for long-term log retention. It provides virtually unlimited durability, supports concurrent access by multiple applications, and can use lifecycle policies to reduce storage costs over the 7-year retention period. EBS is block storage for a single instance, EFS is more expensive for archival storage, and EC2 instance store is temporary and loses data when the instance stops or terminates.",
  },

  // question 222
  {
    question:
      "A company has hired an external vendor to perform work in the company’s AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company’s AWS account. How should a solutions architect grant this access to the vendor?",
    options: [
      "Create an IAM role in the company’s account to delegate access to the vendor’s IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires.",
      "Create an IAM user in the company’s account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.",
      "Create an IAM group in the company’s account. Add the tool’s IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.",
      "Create a new identity provider by choosing “AWS account” as the provider type in the IAM console. Supply the vendor’s AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires.",
    ],
    answer: 0,
    explanation:
      "Use cross-account IAM roles to grant secure access to another AWS account. Create an IAM role in the company's account, grant the vendor's AWS account permission to assume it, and attach only the required permissions. This follows AWS best practices by avoiding long-term credentials. IAM users and groups cannot be shared across AWS accounts, and an AWS account is not configured as an IAM identity provider.",
  },

  // question 223
  {
    question:
      "A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the internet. Which combination of steps should the solutions architect take to accomplish this goal? (Choose two.)",
    options: [
      "Attach an IAM role that has sufficient privileges to the EKS pod.",
      "Attach an IAM user that has sufficient privileges to the EKS pod.",
      "Allow outbound connectivity to the DynamoDB table through the private subnets’ network ACLs.",
      "Create a VPC endpoint for DynamoDB.",
    ],
    answer: 3,
    explanation:
      "Use an IAM role for the EKS pod (IAM Roles for Service Accounts - IRSA) to securely grant permissions without storing credentials. Create a DynamoDB gateway VPC endpoint so traffic stays within the AWS network and does not traverse the public internet. IAM users and embedded access keys are not AWS best practices, and network ACLs alone do not provide private connectivity to DynamoDB.",
  },

  // question 224
  {
    question:
      "A company recently migrated its web application to AWS by rehosting the application on Amazon EC2 instances in a single AWS Region. The company wants to redesign its application architecture to be highly available and fault tolerant. Traffic must reach all running EC2 instances randomly. Which combination of steps should the company take to meet these requirements? (Choose two.)",
    options: [
      "Create an Amazon Route 53 failover routing policy.",
      "Create an Amazon Route 53 multivalue answer routing policy.",
      "Launch three EC2 instances: two instances in one Availability Zone and one instance in another Availability Zone.",
      "Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone.",
    ],
    answer: 3,
    explanation:
      "Route 53 multivalue answer routing returns multiple healthy IP addresses and distributes traffic randomly among them. Deploying an equal number of EC2 instances across two Availability Zones provides high availability and fault tolerance if one AZ fails. Failover routing is for active-passive architectures, weighted routing is for traffic weighting rather than random distribution, and placing more instances in one AZ reduces fault tolerance.",
  },

  // question 225
  {
    question:
      "A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL. Which solution will meet these requirements with the LEAST operational overhead?",
    options: [
      "Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket.",
      "Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster.",
      "Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.",
      "Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.",
    ],
    answer: 0,
    explanation:
      "Amazon Kinesis Data Streams can ingest large-scale streaming data, and storing the data in Amazon S3 provides virtually unlimited, highly available storage. Data in S3 can be queried on demand with SQL using services such as Amazon Athena, making this the lowest operational overhead for petabyte-scale analytics. Redshift requires cluster management, Lambda is not an analytics solution, and EC2 with RDS does not scale cost-effectively to petabytes.",
  },

  // question 226
  {
    question:
      "A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead. Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)",
    options: [
      "Use AWS Glue to process the raw data in Amazon S3.",
      "Use Amazon Route 53 to route traffic to different EC2 instances.",
      "Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.",
      "Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3.",
    ],
    answer: 3,
    explanation:
      "Amazon API Gateway, Kinesis Data Streams, and Kinesis Data Firehose provide a fully managed, highly scalable ingestion pipeline that can handle millions of devices and deliver data to Amazon S3 with minimal operational overhead. AWS Glue can then process and transform the data already stored in S3. The EC2- and SQS-based options require managing compute infrastructure and are less operationally efficient.",
  },

  // question 227
  {
    question:
      "A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years. After the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained consistent. Which solution will delete objects that are older than 3 years in the MOST cost-effective manner?",
    options: [
      "Configure the organization’s centralized CloudTrail trail to expire objects after 3 years.",
      "Configure the S3 Lifecycle policy to delete previous versions as well as current versions.",
      "Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years.",
      "Configure the parent account as the owner of all objects that are delivered to the S3 bucket.",
    ],
    answer: 1,
    explanation:
      "With S3 Versioning enabled, deleting only current versions leaves previous versions in the bucket, causing the object count to continue growing. Updating the S3 Lifecycle policy to expire both current and previous object versions automatically removes all data older than 3 years at the lowest cost. The other options do not address versioned objects or require unnecessary operational effort.",
  },

  // question 228
  {
    question:
      "A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API fluctuates. During periods of heavy traffic, the API often returns timeout errors. After an inspection of the logs, the company determines that the database is not capable of processing the volume of write traffic that comes from the API. A solutions architect must minimize the number of connections to the database and must ensure that data is not lost during periods of heavy traffic. Which solution will meet these requirements?",
    options: [
      "Increase the size of the DB instance to an instance type that has more available memory.",
      "Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS DB instances.",
      "Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database.",
      "Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.",
    ],
    answer: 2,
    explanation:
      "Amazon SQS buffers incoming requests during traffic spikes so data is not lost. AWS Lambda processes messages from the queue at a controlled rate, reducing the number of concurrent database connections and preventing overload. Increasing the DB size may not solve traffic spikes, Multi-AZ is for high availability rather than write scaling, and SNS does not durably buffer messages for later processing.",
  },

  // question 229
  {
    question:
      "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
    options: [
      "Migrate the databases to Amazon Aurora Serverless for Aurora MySQL.",
      "Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.",
      "Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.",
      "Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment.",
    ],
    answer: 0,
    explanation:
      "Amazon Aurora Serverless for Aurora MySQL automatically scales compute capacity based on demand while providing high performance, durability, and managed replication with minimal operational effort. Aurora PostgreSQL is incompatible with existing MySQL databases, and managing databases on EC2—even with Auto Scaling—does not simplify database replication or scaling.",
  },

  // question 230
  {
    question:
      "A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the company’s application. A solutions architect wants to implement a solution that is highly available, fault tolerant, and automatically scalable. What should the solutions architect recommend?",
    options: [
      "Remove the two NAT instances and replace them with two NAT gateways in the same Availability Zone.",
      "Use Auto Scaling groups with Network Load Balancers for the NAT instances in different Availability Zones.",
      "Remove the two NAT instances and replace them with two NAT gateways in different Availability Zones.",
      "Replace the two NAT instances with Spot Instances in different Availability Zones and deploy a Network Load Balancer.",
    ],
    answer: 2,
    explanation:
      "NAT Gateways are managed services that automatically scale and provide high availability within an Availability Zone. Deploying one NAT Gateway in each Availability Zone provides fault tolerance and follows AWS best practices. Using the same AZ creates a single point of failure, while NAT instances require ongoing management and do not scale automatically.",
  },

  // question 231
  {
    question:
      "An application runs on an Amazon EC2 instance that has an Elastic IP address in VPC A. The application requires access to a database in VPC B. Both VPCs are in the same AWS account. Which solution will provide the required access MOST securely?",
    options: [
      "Create a DB instance security group that allows all traffic from the public IP address of the application server in VPC A.",
      "Configure a VPC peering connection between VPC A and VPC B.",
      "Make the DB instance publicly accessible. Assign a public IP address to the DB instance.",
      "Launch an EC2 instance with an Elastic IP address into VPC B. Proxy all requests through the new EC2 instance.",
    ],
    answer: 1,
    explanation:
      "A VPC peering connection enables private communication between VPCs without routing traffic over the public internet, making it the most secure solution. Allowing access through public IPs or making the database publicly accessible increases security risk, and adding a proxy EC2 instance introduces unnecessary complexity and operational overhead.",
  },

  // question 232
  {
    question:
      "A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is isolated in its own VPC. The company’s operations team needs to be notified when RDP or SSH access to an environment has been established.",
    options: [
      "Configure Amazon CloudWatch Application Insights to create AWS Systems Manager OpsItems when RDP or SSH access is detected.",
      "Configure the EC2 instances with an IAM instance profile that has an IAM role with the AmazonSSMManagedInstanceCore policy attached.",
      "Publish VPC flow logs to Amazon CloudWatch Logs. Create required metric filters. Create an Amazon CloudWatch metric alarm with a notification action for when the alarm is in the ALARM state.",
      "Configure an Amazon EventBridge rule to listen for events of type EC2 Instance State-change Notification. Configure an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the operations team to the topic.",
    ],
    answer: 2,
    explanation:
      "VPC Flow Logs capture network traffic, including SSH (port 22) and RDP (port 3389) connections. By sending the logs to CloudWatch Logs, creating metric filters for these ports, and configuring a CloudWatch alarm with an SNS notification, the operations team can be alerted whenever SSH or RDP access is established. The other options do not detect remote access sessions.",
  },

  // question 233
  {
    question:
      "A solutions architect has created a new AWS account and must secure AWS account root user access. Which combination of actions will accomplish this? (Choose two.)",
    options: [
      "Ensure the root user uses a strong password.",
      "Enable multi-factor authentication to the root user.",
      "Store root user access keys in an encrypted Amazon S3 bucket.",
      "Apply the required permissions to the root user with an inline policy document.",
    ],
    answer: 1,
    explanation:
      "The AWS root user should be protected with a strong password and multi-factor authentication (MFA). These are AWS security best practices. Avoid creating or using root access keys whenever possible. The root user cannot be added to IAM groups or have IAM policies attached because it already has full permissions.",
  },

  // question 234
  {
    question:
      "A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the application must be encrypted at rest and in transit. Which solution will meet these requirements?",
    options: [
      "Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.",
      "Use the AWS root account to log in to the AWS Management Console. Upload the company’s encryption certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit for the account.",
      "Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit.",
      "Use BitLocker to encrypt all data at rest. Import the company’s TLS certificate keys to AWS Key Management Service (AWS KMS) Attach the KMS keys to the ALB to encrypt data in transit.",
    ],
    answer: 2,
    explanation:
      "AWS KMS is used to encrypt EBS volumes and Amazon Aurora storage at rest. AWS Certificate Manager (ACM) provides SSL/TLS certificates that are attached to the Application Load Balancer (ALB) to encrypt data in transit. The other options incorrectly swap the roles of KMS and ACM or describe unsupported approaches.",
  },

  // question 235
  {
    question:
      "A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several applications that write to the same tables. The applications need to be migrated one by one with a month in between each migration. Management has expressed concerns that the database has a high number of reads and writes. The data must be kept in sync across both databases throughout the migration. What should a solutions architect recommend?",
    options: [
      "Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task and a table mapping to select all tables.",
      "Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.",
      "Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a memory optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.",
      "Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select the largest tables.",
    ],
    answer: 2,
    explanation:
      "Because the migration is from Oracle to Aurora PostgreSQL, use the AWS Schema Conversion Tool (SCT) to convert the database schema. Then use AWS DMS with a full load plus CDC task to perform the initial migration and continuously replicate changes so both databases stay synchronized during the phased application migration. A memory-optimized DMS replication instance is recommended for workloads with high volumes of reads and writes.",
  },

  // question 236
  {
    question:
      "A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the front-end layer, another EC2 instance for the application layer, and a third EC2 instance for a MySQL database. A solutions architect must design a scalable and highly available solution that requires the least amount of change to the application. Which solution meets these requirements?",
    options: [
      "Use Amazon S3 to host the front-end layer. Use AWS Lambda functions for the application layer. Move the database to an Amazon DynamoDB table. Use Amazon S3 to store and serve users’ images.",
      "Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS DB instance with multiple read replicas to serve users’ images.",
      "Use Amazon S3 to host the front-end layer. Use a fleet of EC2 instances in an Auto Scaling group for the application layer. Move the database to a memory optimized instance type to store and serve users’ images.",
      "Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS Multi-AZ DB instance. Use Amazon S3 to store and serve users’ images.",
    ],
    answer: 3,
    explanation:
      "AWS Elastic Beanstalk provides a highly available, load-balanced environment for the existing EC2-based application with minimal code changes. Amazon RDS Multi-AZ provides high availability for the MySQL database, and Amazon S3 is the best place to store and serve user images. The other options require major application changes or use services that are not appropriate for the workload.",
  },

  // question 237
  {
    question:
      "An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPC-B. Both VPCs are in separate AWS accounts. The network administrator needs to design a solution to configure secure access to EC2 instance in VPC-B from VPC-A. The connectivity should not have a single point of failure or bandwidth concerns. Which solution will meet these requirements?",
    options: [
      "Set up a VPC peering connection between VPC-A and VPC-B.",
      "Set up VPC gateway endpoints for the EC2 instance running in VPC-B.",
      "Attach a virtual private gateway to VPC-B and set up routing from VPC-A.",
      "Create a private virtual interface (VIF) for the EC2 instance running in VPC-B and add appropriate routes from VPC-A.",
    ],
    answer: 0,
    explanation:
      "VPC peering provides secure, private connectivity between VPCs, including across different AWS accounts. It uses the AWS backbone network, has no single point of failure, and does not introduce bandwidth bottlenecks beyond the limits of the VPC infrastructure. Gateway endpoints are only for supported AWS services such as S3 and DynamoDB, a virtual private gateway is for VPN/Direct Connect, and a private VIF is used with AWS Direct Connect, not for EC2-to-EC2 communication between VPCs.",
  },

  // question 238
  {
    question:
      "A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each account. What should a solutions architect do to meet this requirement MOST cost-effectively?",
    options: [
      "Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.",
      "Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.",
      "Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2 instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.",
      "Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.",
    ],
    answer: 2,
    explanation:
      "AWS Budgets is the simplest and most cost-effective service for monitoring monthly AWS costs and usage. It can track EC2 costs per account, compare them against a defined threshold, and automatically send notifications through Amazon SNS when the threshold is exceeded. The other options require more operational effort or do not provide built-in budget alerts.",
  },

  // question 239
  {
    question:
      "A solutions architect needs to design a new microservice for a company’s application. Clients must be able to call an HTTPS endpoint to reach the microservice. The microservice also must use AWS Identity and Access Management (IAM) to authenticate calls. The solutions architect will write the logic for this microservice by using a single AWS Lambda function that is written in Go 1.x. Which solution will deploy the function in the MOST operationally efficient way?",
    options: [
      "Create an Amazon API Gateway REST API. Configure the method to use the Lambda function. Enable IAM authentication on the API.",
      "Create a Lambda function URL for the function. Specify AWS_IAM as the authentication type.",
      "Create an Amazon CloudFront distribution. Deploy the function to Lambda@Edge. Integrate IAM authentication logic into the Lambda@Edge function.",
      "Create an Amazon CloudFront distribution. Deploy the function to CloudFront Functions. Specify AWS_IAM as the authentication type.",
    ],
    answer: 1,
    explanation:
      "A Lambda function URL provides a built-in HTTPS endpoint for a single Lambda function with minimal configuration. By setting the authentication type to AWS_IAM, the function can be securely invoked using IAM authentication without the additional management overhead of API Gateway. Lambda@Edge and CloudFront Functions are not designed for this use case.",
  },

  // question 240
  {
    question:
      "A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate office users query the data warehouse using a visualization tool. The average size of a query returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500 KB. Result sets returned by the data warehouse are not cached. Which solution provides the LOWEST data transfer egress cost for the company?",
    options: [
      "Host the visualization tool on premises and query the data warehouse directly over the internet.",
      "Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet.",
      "Host the visualization tool on premises and query the data warehouse directly over a Direct Connect connection at a location in the same AWS Region.",
      "Host the visualization tool in the same AWS Region as the data warehouse and access it over a Direct Connect connection at a location in the same Region.",
    ],
    answer: 1,
    explanation:
      "Hosting the visualization tool in the same AWS Region as the data warehouse keeps the large 50 MB query results within AWS, avoiding data transfer charges for those results. Only the much smaller 500 KB web pages are sent over the internet to users, minimizing egress costs. The other options transfer the large query results outside AWS, resulting in higher data transfer charges.",
  },

  // question 241
  {
    question:
      "An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times. Which solution will meet these requirements with the LEAST amount of operational overhead?",
    options: [
      "Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances.",
      "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on.",
      "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in another Region.",
      "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to be copied to another Region.",
    ],
    answer: 2,
    explanation:
      "An Amazon RDS for PostgreSQL cross-Region read replica keeps the database online in another AWS Region with minimal operational effort. Multi-AZ provides high availability only within a single Region, snapshots are not continuously available, and managing PostgreSQL on EC2 requires significantly more administration.",
  },

  // question 242
  {
    question:
      "A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP addresses of all healthy EC2 instances be returned in response to DNS queries. Which policy should be used to meet this requirement?",
    options: [
      "Simple routing policy",
      "Latency routing policy",
      "Multivalue routing policy",
      "Geolocation routing policy",
    ],
    answer: 2,
    explanation:
      "A Route 53 multivalue routing policy returns multiple healthy IP addresses in response to DNS queries and performs health checks to ensure only healthy endpoints are returned. Simple routing does not perform health-based filtering, latency routing chooses the lowest-latency endpoint, and geolocation routing routes users based on their geographic location.",
  },

  // question 243
  {
    question:
      "A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the country for their on-premises, file-based applications. The data files are stored in an Amazon S3 bucket that has read-only permissions for each clinic. What should a solutions architect recommend to meet these requirements?",
    options: [
      "Deploy an AWS Storage Gateway file gateway as a virtual machine (VM) on premises at each clinic",
      "Migrate the files to each clinic’s on-premises applications by using AWS DataSync for processing.",
      "Deploy an AWS Storage Gateway volume gateway as a virtual machine (VM) on premises at each clinic.",
      "Attach an Amazon Elastic File System (Amazon EFS) file system to each clinic’s on-premises servers",
    ],
    answer: 0,
    explanation:
      "AWS Storage Gateway File Gateway provides on-premises applications with low-latency access to files stored in Amazon S3 by caching frequently accessed data locally. It presents a standard file interface (NFS/SMB), making it ideal for file-based applications. AWS DataSync is for data transfer, Volume Gateway provides block storage rather than file storage, and Amazon EFS is not designed for direct on-premises access in this scenario.",
  },

  // question 244
  {
    question:
      "A company is using a content management system that runs on a single Amazon EC2 instance. The EC2 instance contains both the web server and the database software. The company must make its website platform highly available and must enable the website to scale to meet user demand. What should a solutions architect recommend to meet these requirements?",
    options: [
      "Move the database to Amazon RDS, and enable automatic backups. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer in the Availability Zone, and set the two instances as targets.",
      "Migrate the database to an Amazon Aurora instance with a read replica in the same Availability Zone as the existing EC2 instance. Manually launch another EC2 instance in the same Availability Zone. Configure an Application Load Balancer, and set the two EC2 instances as targets.",
      "Move the database to Amazon Aurora with a read replica in another Availability Zone. Create an Amazon Machine Image (AMI) from the EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.",
      "Move the database to a separate EC2 instance, and schedule backups to Amazon S3. Create an Amazon Machine Image (AMI) from the original EC2 instance. Configure an Application Load Balancer in two Availability Zones. Attach an Auto Scaling group that uses the AMI across two Availability Zones.",
    ],
    answer: 2,
    explanation:
      "Moving the database to Amazon Aurora improves availability and durability, while a read replica in another Availability Zone provides additional resilience. Creating an AMI of the web server and using an Auto Scaling group behind an Application Load Balancer across two Availability Zones makes the application highly available and scalable. The other options keep resources in a single Availability Zone or continue to rely on self-managed databases.",
  },

  // question 245
  {
    question:
      "A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances in a single target group. The instances are in an Auto Scaling group for each environment. The company requires a development environment and a production environment. The production environment will have periods of high traffic. Which solution will configure the development environment MOST cost-effectively?",
    options: [
      "Reconfigure the target group in the development environment to have only one EC2 instance as a target.",
      "Change the ALB balancing algorithm to least outstanding requests.",
      "Reduce the size of the EC2 instances in both environments.",
      "Reduce the maximum number of EC2 instances in the development environment’s Auto Scaling group.",
    ],
    answer: 3,
    explanation:
      "Reducing the maximum size of the Auto Scaling group in the development environment limits the number of EC2 instances that can be launched, reducing costs while still allowing Auto Scaling to operate. Keeping at least two instances maintains high availability. Reducing the target group to one instance removes redundancy, changing the load-balancing algorithm does not reduce costs, and reducing instance sizes in production could affect performance during high traffic.",
  },

  // question 246
  {
    question:
      "A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. A solutions architect implements an internet-facing Application Load Balancer (ALB) and specifies the EC2 instances as the target group. However, the internet traffic is not reaching the EC2 instances. How should the solutions architect reconfigure the architecture to resolve this issue?",
    options: [
      "Replace the ALB with a Network Load Balancer. Configure a NAT gateway in a public subnet to allow internet traffic.",
      "Move the EC2 instances to public subnets. Add a rule to the EC2 instances’ security groups to allow outbound traffic to 0.0.0.0/0.",
      "Update the route tables for the EC2 instances’ subnets to send 0.0.0.0/0 traffic through the internet gateway route. Add a rule to the EC2 instances’ security groups to allow outbound traffic to 0.0.0.0/0.",
      "Create public subnets in each Availability Zone. Associate the public subnets with the ALB. Update the route tables for the public subnets with a route to the private subnets.",
    ],
    answer: 3,
    explanation:
      "An internet-facing Application Load Balancer must be deployed in public subnets that have a route to an Internet Gateway. The EC2 instances should remain in private subnets, where they receive traffic from the ALB. A NAT Gateway provides outbound internet access only, EC2 instances do not need to be in public subnets, and private subnets should not have a route to an Internet Gateway.",
  },

  // question 247
  {
    question:
      "A company has deployed a database in Amazon RDS for MySQL. Due to increased transactions, the database support team is reporting slow reads against the DB instance and recommends adding a read replica. Which combination of actions should a solutions architect take before implementing this change? (Choose two.)",
    options: [
      "Enable binlog replication on the RDS primary node.",
      "Choose a failover priority for the source DB instance.",
      "Create a global table and specify the AWS Regions where the table will be available.",
      "Enable automatic backups on the source instance by setting the backup retention period to a value other than 0",
    ],
    answer: 3,
    explanation:
      "MySQL read replicas use binary log (binlog) replication, so binary logging must be enabled. In Amazon RDS, enabling automated backups (backup retention period greater than 0) is also required before creating a read replica. Failover priority is for Multi-AZ deployments, global tables are a DynamoDB feature, and long-running transactions do not need to complete before creating a read replica.",
  },

  // question 248
  {
    question:
      "A company runs analytics software on Amazon EC2 instances. The software accepts job requests from users to process data that has been uploaded to Amazon S3. Users report that some submitted data is not being processed. Amazon CloudWatch reveals that the EC2 instances have a consistent CPU utilization at or near 100%. The company wants to improve system performance and scale the system based on user load. What should a solutions architect do to meet these requirements?",
    options: [
      "Create a copy of the instance. Place all instances behind an Application Load Balancer.",
      "Create an S3 VPC endpoint for Amazon S3. Update the software to reference the endpoint.",
      "Stop the EC2 instances. Modify the instance type to one with a more powerful CPU and more memory. Restart the instances.",
      "Route incoming requests to Amazon Simple Queue Service (Amazon SQS). Configure an EC2 Auto Scaling group based on queue size. Update the software to read from the queue.",
    ],
    answer: 3,
    explanation:
      "Using Amazon SQS decouples job submission from processing, ensuring requests are not lost during periods of high load. Scaling the EC2 Auto Scaling group based on the SQS queue size matches compute capacity to demand. An ALB does not solve asynchronous job processing, a VPC endpoint only changes network routing, and increasing the instance size provides only temporary vertical scaling.",
  },

  // question 249
  {
    question:
      "A company is implementing a shared storage solution for a media application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed. Which AWS solution meets these requirements?",
    options: [
      "Create an AWS Storage Gateway volume gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.",
      "Create an AWS Storage Gateway tape gateway. Configure tapes to use Amazon S3. Connect the application server to the tape gateway.",
      "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.",
      "Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system.",
    ],
    answer: 3,
    explanation:
      "Amazon FSx for Windows File Server is a fully managed SMB file storage service that provides native Windows file shares with high availability and scalability. Storage Gateway is primarily for hybrid storage scenarios, Tape Gateway is for backup workloads, and running a Windows file server on EC2 requires ongoing management.",
  },

  // question 250
  {
    question:
      "A company’s security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed intermittently. What should a solutions architect do to meet these requirements when configuring the logs?",
    options: [
      "Use Amazon CloudWatch as the target. Set the CloudWatch log group with an expiration of 90 days",
      "Use Amazon Kinesis as the target. Configure the Kinesis stream to always retain the logs for 90 days.",
      "Use AWS CloudTrail as the target. Configure CloudTrail to save to an Amazon S3 bucket, and enable S3 Intelligent-Tiering.",
      "Use Amazon S3 as the target. Enable an S3 Lifecycle policy to transition the logs to S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days.",
    ],
    answer: 3,
    explanation:
      "Storing VPC Flow Logs in Amazon S3 with a lifecycle policy to transition them to S3 Standard-IA after 90 days is the most cost-effective solution. S3 is ideal for long-term log storage, and Standard-IA reduces storage costs for data that is accessed infrequently while remaining immediately available. CloudWatch log expiration would delete the logs, Kinesis is not a long-term storage solution, and CloudTrail does not store VPC Flow Logs.",
  },
];
