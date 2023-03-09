export const abi: any = [
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: false,
		  internalType: "address",
		  name: "winner",
		  type: "address"
		},
		{
		  indexed: false,
		  internalType: "address",
		  name: "loser",
		  type: "address"
		},
		{
		  indexed: false,
		  internalType: "uint256",
		  name: "winningsAmount",
		  type: "uint256"
		}
	  ],
	  name: "BattleEnded",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: false,
		  internalType: "uint8",
		  name: "version",
		  type: "uint8"
		}
	  ],
	  name: "Initialized",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: false,
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "Paused",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: true,
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  indexed: true,
		  internalType: "bytes32",
		  name: "previousAdminRole",
		  type: "bytes32"
		},
		{
		  indexed: true,
		  internalType: "bytes32",
		  name: "newAdminRole",
		  type: "bytes32"
		}
	  ],
	  name: "RoleAdminChanged",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: true,
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  indexed: true,
		  internalType: "address",
		  name: "account",
		  type: "address"
		},
		{
		  indexed: true,
		  internalType: "address",
		  name: "sender",
		  type: "address"
		}
	  ],
	  name: "RoleGranted",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: true,
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  indexed: true,
		  internalType: "address",
		  name: "account",
		  type: "address"
		},
		{
		  indexed: true,
		  internalType: "address",
		  name: "sender",
		  type: "address"
		}
	  ],
	  name: "RoleRevoked",
	  type: "event"
	},
	{
	  anonymous: false,
	  inputs: [
		{
		  indexed: false,
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "Unpaused",
	  type: "event"
	},
	{
	  inputs: [],
	  name: "DEFAULT_ADMIN_ROLE",
	  outputs: [
		{
		  internalType: "bytes32",
		  name: "",
		  type: "bytes32"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "amountStored",
	  outputs: [
		{
		  internalType: "uint256",
		  name: "",
		  type: "uint256"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "battleRoomFee",
	  outputs: [
		{
		  internalType: "uint256",
		  name: "",
		  type: "uint256"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "creator",
	  outputs: [
		{
		  internalType: "address",
		  name: "",
		  type: "address"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "creatorRoyalty",
	  outputs: [
		{
		  internalType: "uint256",
		  name: "",
		  type: "uint256"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  components: [
			{
			  internalType: "address",
			  name: "winner",
			  type: "address"
			},
			{
			  internalType: "address",
			  name: "loser",
			  type: "address"
			},
			{
			  internalType: "bytes",
			  name: "signature",
			  type: "bytes"
			}
		  ],
		  internalType: "struct EscrowUpgradeable.Battle",
		  name: "battle",
		  type: "tuple"
		}
	  ],
	  name: "endBattleRoom",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "enterBattleRoom",
	  outputs: [],
	  stateMutability: "payable",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "gameServer",
	  outputs: [
		{
		  internalType: "address",
		  name: "",
		  type: "address"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "getChainID",
	  outputs: [
		{
		  internalType: "uint256",
		  name: "",
		  type: "uint256"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		}
	  ],
	  name: "getRoleAdmin",
	  outputs: [
		{
		  internalType: "bytes32",
		  name: "",
		  type: "bytes32"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "_player",
		  type: "address"
		}
	  ],
	  name: "getStatus",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "grantRole",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "hasRole",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "",
		  type: "address"
		}
	  ],
	  name: "inBattlePlayers",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "uint256",
		  name: "_battleRoomFee",
		  type: "uint256"
		}
	  ],
	  name: "initialize",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "pause",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "paused",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "_player",
		  type: "address"
		}
	  ],
	  name: "refundPlayer",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "_player1",
		  type: "address"
		},
		{
		  internalType: "address",
		  name: "_player2",
		  type: "address"
		}
	  ],
	  name: "refundPlayers",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "renounceRole",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes32",
		  name: "role",
		  type: "bytes32"
		},
		{
		  internalType: "address",
		  name: "account",
		  type: "address"
		}
	  ],
	  name: "revokeRole",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "_creator",
		  type: "address"
		}
	  ],
	  name: "setCreator",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "uint256",
		  name: "_creatorRoyalty",
		  type: "uint256"
		}
	  ],
	  name: "setCreatorRoyalty",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "uint256",
		  name: "_battleRoomFee",
		  type: "uint256"
		}
	  ],
	  name: "setRoomFee",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "address",
		  name: "_gameServer",
		  type: "address"
		}
	  ],
	  name: "setServer",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	},
	{
	  inputs: [
		{
		  internalType: "bytes4",
		  name: "interfaceId",
		  type: "bytes4"
		}
	  ],
	  name: "supportsInterface",
	  outputs: [
		{
		  internalType: "bool",
		  name: "",
		  type: "bool"
		}
	  ],
	  stateMutability: "view",
	  type: "function"
	},
	{
	  inputs: [],
	  name: "unpause",
	  outputs: [],
	  stateMutability: "nonpayable",
	  type: "function"
	}
  ]