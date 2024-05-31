import metawallet from '../assets/projects/metawallet.webp'
import workerManagementSystem from '../assets/projects/worker_management_system.webp'
import voting from '../assets/projects/voting.webp'
import lottery from '../assets/projects/lottery.webp'
import crowdFunding from '../assets/projects/crowd_funding.webp'
import zooscapexr from '../assets/projects/zooscapexr.webp'
import leafy from '../assets/projects/leafy.webp'
import tictactoe from '../assets/projects/tictactoe.webp'

export const projectsDb = {
    "projects": [
        {
            "image": metawallet,
            "name": "MetaWallet",
            "description": "Ether Transfering Wallet webapp in Web3",
            "git": "https://github.com/gdevakrishnan/MetaWallet",
            "view": "https://meta-wallet-web3.netlify.app/"
        },
        {
            "image": workerManagementSystem,
            "name": "Workers Management System",
            "description": "Worker details management system using localstorage",
            "git": "https://github.com/gdevakrishnan/worker-management-system-localstorage",
            "view": "https://worker-management-system-localstorage.vercel.app/"
        }
    ],

    "web3projects": [
        {
            "image": crowdFunding,
            "name": "Crowd Funding System",
            "description": "Crowd Funding using Blockchain",
            "git": "https://github.com/gdevakrishnan/crowd-funding-contract",
            "view": "https://etherscan.io/address/0x355c2f0f75ed7a10d1c6986f76b2690e4f2caeb2"
        },
        {
            "image": voting,
            "name": "Voting System",
            "description": "Voting System using Blockchain",
            "git": "https://github.com/gdevakrishnan/voting-contract",
            "view": "https://etherscan.io/address/0x7aB7ABbA90E2aD1a8da9F8D17E1cB1e6bC55Aa40"
        },
        {
            "image": lottery,
            "name": "Lottery System",
            "description": "Lottery System using Blockchain",
            "git": "https://github.com/gdevakrishnan/lottery-contract",
            "view": "https://etherscan.io/address/0xDD6133A4bdD7271864201dfC179c05DD1E002EB8"
        }
    ],

    "contribution": [
        {
            "image": zooscapexr,
            "name": "ZooScape XR",
            "description": "Virtual Environments of animals using AR/VR",
            "git": "https://github.com/gdevakrishnan/ZooScapeXR/",
            "view": "https://zoo-scape-xr-mavericks.vercel.app/"
        }
    ],
    
    "miniprojects": [
        {
            "image": leafy,
            "name": "Leafy",
            "description": "Leafy a counting games for kids",
            "git": "https://github.com/gdevakrishnan/leafy",
            "view": "https://moms-leafy-game.vercel.app/"
        },
        {
            "image": tictactoe,
            "name": "Tic-Tac-Toe",
            "description": "Tic Tac Toe - (X/O) game",
            "git": "https://github.com/gdevakrishnan/tic_tac_toe_react",
            "view": "https://tic-tac-toe-gdks.vercel.app/"
        }
    ]
}