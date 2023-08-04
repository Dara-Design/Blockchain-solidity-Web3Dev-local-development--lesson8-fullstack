#Requirements
git
You'll know you've installed it right if you can run:
git --version
Metamask
This is a browser extension that lets you interact with the blockchain.
Nodejs
You'll know you've installed nodejs right if you can run:
node --version And get an ouput like: vx.x.x
Yarn instead of npm
You'll know you've installed yarn right if you can run:
yarn --version And get an output like: x.x.x
You might need to install it with npm


----------------------------------------------
When building Dapps, you usually have two repositories:
1-for smart contracts
2-for front end/website

console->sources-> MetaMask, what's injected in our browser from extensions
kucaj u konzoli browsera: window. ethereum //only exists if you have a MetaMask extension in your browser
https://docs.metamask.io/wallet/reference/provider-api/
We connect our MetaMask through eth_requestAccounts method

https://www.youtube.com/watch?v=pdsYCkUWrgQ -How to Connect your Smart Contracts to Metamask | Full Stack Web3

--------------
You need to add a new network in MetaMask -localhost
-------
window.solana // for other wallets
..these wallets have connections to blockchain node connected to  them - so we do our connections with blockchain through them

---------------------------------------------------
ALCHEMY and FIRA are examples of third-party blockchains that you can interact with and basically rent -but you need them to create a provider, or a node to send your transactions to --they are usually used in the back-end, for front-end we use wallets for connecting to node- such as MetaMask or Solana
---------------------------
Da bi napravili dapps(decentalised apllications) iliti blokčein aplikacije moramo imati 1)frontend deo, koji podrazumeva sajt iliti interfejs aplikacijei backend koji podrazumeva ugovor.Frontend deo sa nodom blokčejna se obicno povezuje preko walleta, iliti novcanika klijenta -MetaMask, Phantom ili neko drugi.Prvo se radi instaliranje tih ekstenzija u browseru, koji ubacuju snippet MetaMask-a u sourse browsera, kao i objekat window.ethereum u konzolu(za Phantom je window.solana objekat za neki drugi wallet neki drugi objekat itd.).Ovaj objekat(window.ethereum) je jako vazan jer sadrzi metode koji nam omogucavaju interakciju sa nodom blockchaina - kao sto je eth_requestAccounts metod kojim povezujemo novcanik sa aplikacijom



Backend deo je standardan projekat sa ugovorom(contract) koji moramo da izgradimo(deploy) da bi dobili abi ugovora, koji prekopiramo zajedno sa adresom ugovora(contractAddress) na koji je ugovor otpremljen U nas frontend deo projekta (constant.js u ovom slucaju) i to je nasa poveznica izmedju dva repozitorijuma(projekta) koji cine nasu aplikaciju.

---------------------------------------------------------
Ovde smo se povezali hardhat network sa MetaMaskom  i to tako sto smo isli na kreiranje nove mreze(network), ubacili http://127.0.0.1:8545/ kao Rcp_URL i za chain network 31337; import new account- kopiras private key iz gomile laznih racuna koji smo pokrenuli sa:  npx hadrhat node; ovo radimo  ukoliko nam trebaju fake ETH na racunu za testiranje i prebacivanje ETH
