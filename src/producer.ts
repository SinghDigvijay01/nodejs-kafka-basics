import kafka from './kafkaClient';

const producer = kafka.producer();

async function producerRun(){
    await producer.connect();
    await producer.send({
        topic:"topicName",
        messages:[{
            value:"message",
            key:"key1"
        }]
    });  
}

producerRun().catch(console.error);

