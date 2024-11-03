import kafka from './kafkaClient';

const admin = kafka.admin();

async function createTopic() {
    await admin.connect();
    await admin.createTopics({
        topics: [
            {
                topic: "topicName",
                numPartitions: 3, 
                replicationFactor: 1,
            },
        ],
    });
    await admin.disconnect();
}

createTopic().catch(console.error);
