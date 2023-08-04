//this is back-end part
//ovde kopiras adrese i abi iz frontenda, odnosno iz projekta Backenda(drugog) koji ti sluzi kao ugovor -iz tog ugovora kopiraj
//abi i adrese i sacuvaj kao konstante
//U projekta backenda kucaj u konzoli npx hardhat node(ili yarn harhat node ukoliko ti je instaliran yarn), da bi zavrtela adrese
export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const abi =  [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "addPerson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "favoriteNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "nameToFavoriteNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "favoriteNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]