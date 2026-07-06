const questions = [

{
    question: `A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents.

The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.

The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.

Which solution meets these requirements?`,

    options: [
        "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.",
        "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3",
        "bucket. Then remove the data from the origin S3 bucket.",
        "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 CrossRegion Replication to copy objects to the destination S3 bucket.",
        "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
    ],

    answer: 0,

    explanation:
        ` S3 Transfer Acceleration because:
        - ideally works with objects for long-distance transfer (uses Edge Locations)
        - can speed up content transfers to and from S3 as much as 50-500%
        - use cases: mobile & web application uploads and downloads, distributed office transfers, data exchange with trusted partners. Generally for sharing of large data sets between companies, customers can set up special access to their S3 buckets with accelerated uploads to speed data exchanges and the pace of innovation.
        `
},

{
    question: `A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket.
        Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing
        architecture.
        What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?`,

    options: [
        "Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.",
        "Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.",
        "Use Amazon Athena directly with Amazon S3 to run the queries as needed.",
        "Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed."
    ],

    answer: 1,

    explanation:
        "Amazon S3 is AWS's object storage service."
},

{
    question: "Which service is serverless?",

    options: [
        "EC2",
        "Lambda",
        "ECS",
        "Lightsail"
    ],

    answer: 1,

    explanation:
        "AWS Lambda lets you run code without managing servers."
}

];