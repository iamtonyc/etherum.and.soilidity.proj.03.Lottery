const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const {interface, bytecode} =require('./compile');


const provider = new HDWalletProvider (
	//'device six chalk axis ship state gossip reward cost another wait parade',
	'away local large execute slush height invite fitness saddle before credit sign',
	'https://goerli.infura.io/v3/425e2fa3e737495db08c6b1dc3611ea2'
);

const web3= new Web3(provider);

const deploy = async ()=>{
	const accounts =await  web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result =await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode})
		.send({gas: '1000000', from :accounts[0]});

	console.log('Contract deployed to ', result.options.address);

};
deploy();