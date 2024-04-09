const {Camunda8} = require('@camunda8/sdk');
const {exampleWorker} = require('./workers/workers.js');

async function connect() {
  //For the training it's simple to pass the connection parameters in the constructor (replace with your cluster values)
  //In a real case scenario you may consider store connection parameters in environment variables
  const c8 = new Camunda8({
    CAMUNDA_OAUTH_URL: 'XYZ',
    ZEEBE_ADDRESS: 'XYZXYZXYZ',
    ZEEBE_CLIENT_ID: 'XYZXYZXYZXYZ',
    ZEEBE_CLIENT_SECRET: 'XYZXYZXYZXYZXYZXYZ',
  });

  return c8;
}

async function run() {
  const c8 = await connect();
  const zeebe = c8.getZeebeGrpcApiClient();
  //Get cluster info (to verify if the connection is succesful)
  const topology = await zeebe.topology();
  console.log(topology);

  //Add your workers here
  exampleWorker(zeebe);
}

run();
