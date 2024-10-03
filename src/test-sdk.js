try {
    const CamundaClient = require('@camunda8/sdk');
    console.log('Camunda 8 SDK installed successfully:', CamundaClient);
} catch (error) {
    console.error('Error loading the Camunda 8 SDK:', error.message);
}