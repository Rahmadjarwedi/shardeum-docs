import React, {useState} from 'react';
// import styled from "styled-components";

export default function connectToLiberty0() {

 const chainId = '0x1F91';
 const rpcURL = 'https://liberty20.shardeum.org/';
 const networkName = 'Shardeum Liberty 2.X';
 const currencyName = 'SHM';
 const currencySymbol = 'SHM';
 const explorerURL = 'https://explorer-liberty20.shardeum.org/';

//  const Button = styled.button `
//     background-color: black;
//     color: white;
//     font-size: 20px;
//     padding: 10px 60px;
//     border-radius: 5px;
//     margin: 10px 0px;
//     cursor: pointer;
//   `;

 const addNetwork = async () => {
   if (!window.ethereum) {
    alert("Metamask not detected! Install Metamask then try again.")
    // console.error('Metamask not detected');
    return;
   }
   if (window.ethereum.networkVersion == 8081) {
    alert("You are already connected to Liberty 2.X (chainId 8081).", )
    // console.error('Metamask not detected');
    return;
  }
  try{
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: chainId,
          chainName: networkName,
          rpcUrls: [rpcURL],
          blockExplorerUrls: [explorerURL],
          nativeCurrency: {
            name: currencyName,
            symbol: currencySymbol, // 2-6 characters long
            decimals: 18,
          },
        },
      ],
     });
  } catch (error) {
    alert("Failed to add the network. Try using Metamask or BitKeep instead of the Brave Wallet. Also try adding the network on https://chainlist.org/ or manually. Error log: " + error.message)
  }
   // refresh
   //  window.location.reload();
  };

  return (

    // <Button onClick={addNetwork}>Connect to Liberty 2.X</Button>    

    // <button onClick={addNetwork}>Connect to Liberty 2.X</button>    

    <button className="button buttonHighContrast" onClick={addNetwork}>Connect to Liberty 2.X</button>

  );

}