import {ethers } from "./ethers-5.6.esm.min.js"; //samo ovaj put ubacujemo iz fajla
//in front-end javascript we can't use require
//we are using ethers but in front-end addition
import { abi,  contractAddress } from "./constant.js";
//abi i contractAdress su kopirani iz drugog projekta koji nam sluzi kao backend

const connectButton =  document.getElementById('connectButton');
const withdrawButton =  document.getElementById('withdrawButton');
const fundButton =  document.getElementById('fundButton');
const balanceButton =  document.getElementById('balanceButton');

//posto smo stavili type = module u script fajlu, mozemo da stavimo ovde metod onclick
connectButton.onclick = connect;
withdrawButton.onclick = withdraw;
balanceButton.onclick = getBalance;
fundButton.onclick = fund;

async function connect(){
    if(typeof window.ethereum !== "undefined"){
        try {
            await ethereum.request({method: "eth_requestAccounts"});

        } catch (error) {
            console.log(error);
        }
        connectButton.innerHTML = "Connected";
        const accounts = await ethereum.request({method : "eth_accounts"})
        console.log(accounts);
    }
    else{
        connectButton.innerHTML = "Please install MetaMask";

    }
}


async function withdraw(){
    console.log('Withdrawing...');
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const transactionResponse = await contract.withdraw();
            await listenForTransactionMine(transactionResponse, provider);
        } catch (error) {
            console.log(error);
        }
    }

    else
    {
       withdrawButton.innerHTML = "Please install MetaMask";  
    }
}


async function fund(){
    const ethAmount = document.getElementById('ethAmount').value; 
    console.log(`Funding with ${ethAmount}...`);
    if(typeof window.ethereum !=="undefined"){

        //provider/ connection to the blockchain
        //signer /wallet / someone with some gas

        //contract that we are interacting with
        //abi,address
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            await listenForTransactionMine(transactionResponse, provider);
        } catch (error) {
            console.log(error);
        }


    
    }
    else{

        fundButton.innerHTML = "Please install MetaMask";
    }
}

async function getBalance(){
    if( typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        try {
            
        const balance = await provider.getBalance(contractAddress);
        console.log(ethers.utils.formatEther(balance));

        } catch (error) {
            console.log(error);
        }
    }

    else{
        balanceButton.innerHTML = 'Please install MetaMask';
    }
}

function listenForTransactionMine(transactionResponse, provider){
    console.log(`Mining ${transactionResponse.hash}`)

    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) =>{
                console.log(`Completed with ${transactionReceipt.confirmations } confirmations.`);
                resolve();
            })
        } catch (error) {
            reject(error);
        }
    } )
}