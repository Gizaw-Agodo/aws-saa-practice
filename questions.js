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
];
