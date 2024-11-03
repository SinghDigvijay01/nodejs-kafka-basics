import kafka from './kafkaClient';

const consumer = kafka.consumer({groupId:"my-app1"});

async function consumerRun(){
    await consumer.connect();
    await consumer.subscribe({topic:"topicName",fromBeginning:true})
    await consumer.run({
        eachMessage:async({topic,partition,message}) =>{
          console.log({
            offset:message.offset,
            value:message?.value?.toString(),
            partition,
            topic
          })  
        }
    })
}

consumerRun().catch(console.error);

