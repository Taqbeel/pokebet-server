// const ethers = require("ethers");
import ethers from "ethers";
import Web3 from 'web3';

// import { HttpProvider } from '@types/web3';

const web3 = new Web3('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
const httpProvider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');

// These constants must match the ones used in the smart contract.
const SIGNING_DOMAIN_NAME = "Pokebet-Voucher";
const SIGNING_DOMAIN_VERSION = "1";

export default class LazyMinter {
  contract: ethers.Contract;
  signer: ethers.Signer;

  // constructor(contract: ethers.Contract, signer: ethers.Signer) {
  constructor(contract: any, signer: any) {
    this.contract = contract;
    this.signer = signer;
  }

  async createBattle(winner: string, loser: string) {
    // {
    //   domain: {
    //     // Defining the chain aka Rinkeby testnet or Ethereum Main Net
    //     chainId: 1,
    //     // Give a user friendly name to the specific contract you are signing for.
    //     name: "Ether Mail",
    //     // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
    //     verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    //     // Just let's you know the latest version. Definitely make sure the field name is correct.
    //     version: "1"
    //   },
    
    //   // Defining the message signing data content.
    //   message: {
    //     /*
    //      - Anything you want. Just a JSON Blob that encodes the data you want to send
    //      - No required fields
    //      - This is DApp Specific
    //      - Be as explicit as possible when building out the message schema.
    //     */
    //     contents: "Hello, Bob!",
    //     attachedMoneyInEth: 4.2,
    //     from: {
    //       name: "Cow",
    //       wallets: [
    //         "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
    //         "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"
    //       ]
    //     },
    //     to: [
    //       {
    //         name: "Bob",
    //         wallets: [
    //           "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
    //           "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
    //           "0xB0B0b0b0b0b0B000000000000000000000000000"
    //         ]
    //       }
    //     ]
    //   },
    //   types: {
    //     // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
    //     EIP712Domain: [
    //       { name: "name", type: "string" },
    //       { name: "version", type: "string" },
    //       { name: "chainId", type: "uint256" },
    //       { name: "verifyingContract", type: "address" }
    //     ],
    //     // Not an EIP712Domain definition
    //     Group: [
    //       { name: "name", type: "string" },
    //       { name: "members", type: "Person[]" }
    //     ],
    //     // Refer to PrimaryType
    //     Mail: [
    //       { name: "from", type: "Person" },
    //       { name: "to", type: "Person[]" },
    //       { name: "contents", type: "string" }
    //     ],
    //     // Not an EIP712Domain definition
    //     Person: [
    //       { name: "name", type: "string" },
    //       { name: "wallets", type: "address[]" }
    //     ]
    //   }
    // };

    const voucher: any = { winner, loser };
    const domain: any = await this._signingDomain();
    const types: any = {
      Battle: [
        { name: "winner", type: "address" },
        { name: "loser", type: "address" },
      ],
    };
    const signature: any = await this.signer.signTypedData(domain, types, voucher);
    voucher.signature = signature;


    var msg = {
      domain: domain,
      message: voucher,
      types: types
    }
    var msgParams = JSON.stringify(msg);
    var from = web3.eth.accounts;
    var params = [from, msgParams];
    var method = 'eth_signTypedData_v4';

    // const provider = web3.currentProvider as httpProvider;

    // httpProvider.send(
    //   {
    //     method,
    //     params,
    //     // from,
    //   },
    //   function (err: any, result: any) {
    //     if (err) return console.dir(err);
    //     if (result.error) {
    //       alert(result.error.message);
    //     }
    //     if (result.error) return console.error('ERROR', result);
    //     console.log('TYPED SIGNED:' + JSON.stringify(result.result));
    //   }
    // );

    return {
      voucher,
    };
  }

  /**
   * @private
   * @returns {object} the EIP-721 signing domain, tied to the chainId of the signer
   */
  async _signingDomain() {
    let _domain: any;
    // if (_domain != null) {
    //   return _domain;
    // }
    // const chainId = await this.contract.getChainID();
    const chainId = 5;
    console.log('SIGNING_DOMAIN_NAME', SIGNING_DOMAIN_NAME);
    console.log('SIGNING_DOMAIN_VERSION', SIGNING_DOMAIN_VERSION);
    console.log('this.contract.address', this.contract.address);

    _domain = {
      name: SIGNING_DOMAIN_NAME,
      version: SIGNING_DOMAIN_VERSION,
      verifyingContract: this.contract.address,
      chainId,
    };
    console.log('_domain', _domain);
    return _domain;
  }
}

// module.exports = {
//   LazyMinter,
// };