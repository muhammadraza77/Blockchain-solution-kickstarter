const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(
		'pistol razor feel advice library stay unfair eager receive net barrel tilt',
		'https://rinkeby.infura.io/v3/73d445e3cb214218b21a3386a5149036');
const web3=new Web3(provider);


const deploy=async ()=>{
	const accounts=await web3.eth.getAccounts();

	console.log('Deploying from this account ',accounts[0]);

    // console.log(compiledFactory.bytecode);
  	const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  		.deploy({data:'0x'+compiledFactory.bytecode})
  		.send({from:accounts[0],gas: '1000000'});
  	

	  console.log('deployed address:  ',result.options.address);		
	  
	  
}

deploy();

// // // const HDWalletProvider = require('truffle-hdwallet-provider');
// const Web3 = require('web3');
// const compiledFactory = require('./build/CampaignFactory.json');

// // // const provider = new HDWalletProvider(
// // //   'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
// // //   'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
// // // );
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log('Attempting to deploy from account', accounts[0]);

//   const result = await new web3.eth.Contract(
//     JSON.parse(compiledFactory.interface)
//   )
//     .deploy({ data: '0x'+compiledFactory.bytecode })
//     .send({ gas: '1000000', from: accounts[0] });

//   console.log('Contract deployed to', result.options.address);
// };
// deploy();