async function exampleWorker(zeebe) {
  console.log(`Creating worker...`);
  zeebe.createWorker({
    taskType: 'example',
    taskHandler: (job) => {
      console.log(`handling job of type ${job.type}`);
      return job.complete({
        serviceTaskOutcome: 'We did it!',
      });
    },
  });
}
module.exports = {exampleWorker};
