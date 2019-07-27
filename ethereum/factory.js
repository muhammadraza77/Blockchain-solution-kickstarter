import web3 from './web3';
import factory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(factory.interface),
    '0x4b7c2c7bf5FB00535eddCC291e819E1684ea0F42'
    );

export default instance;