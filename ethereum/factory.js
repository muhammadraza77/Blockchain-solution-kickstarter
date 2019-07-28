import web3 from './web3';
import factory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(factory.interface),
    '0x9B8Cf39534E9506B1f24C3F8cdBcA6DfcD2ebd2A'
    );

export default instance;