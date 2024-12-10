// Import ethers.js if needed
// const { ethers } = require('ethers'); (for Node.js environments)

window.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connectButton');
  const userInfo = document.getElementById('userInfo');
  const accountDisplay = document.getElementById('account');

  async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        // Display account information
        accountDisplay.textContent = account;
        userInfo.style.display = 'block';

        console.log('Connected Account:', account);
      } catch (error) {
        alert('User rejected connection or an error occurred');
        console.error(error);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
  }

  connectButton.addEventListener('click', connectMetaMask);
});
