const ethers = require("ethers");

// These constants must match the ones used in the smart contract.
const SIGNING_DOMAIN_NAME = "Pokebet-Voucher";
const SIGNING_DOMAIN_VERSION = "1";

class LazyMinter {
  constructor({ contract, signer }) {
    this.contract = contract;
    this.signer = signer;
  }

  async createBattle(winner, loser) {
    const voucher = { winner, loser };
    const domain = await this._signingDomain();
    const types = {
      Battle: [
        { name: "winner", type: "address" },
        { name: "loser", type: "address" },
      ],
    };
    const signature = await this.signer._signTypedData(domain, types, voucher);
    voucher.signature = signature;
    return {
      voucher,
    };
  }

  /**
   * @private
   * @returns {object} the EIP-721 signing domain, tied to the chainId of the signer
   */
  async _signingDomain() {
    if (this._domain != null) {
      return this._domain;
    }
    const chainId = await this.contract.getChainID();
    // const chainId = 97;
    this._domain = {
      name: SIGNING_DOMAIN_NAME,
      version: SIGNING_DOMAIN_VERSION,
      verifyingContract: this.contract.address,
      chainId,
    };
    return this._domain;
  }
}

module.exports = {
  LazyMinter,
};