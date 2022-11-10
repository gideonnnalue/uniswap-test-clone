import { ethers } from "ethers";
import UniswapABI from "./Uniswap.json";
import CustomTokenABI from "./CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(address, CustomTokenABI.abi, signer);
    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract('0x1A24eDbc91EdfB493160759c3187cC5c93EF35EE', UniswapABI.abi, signer);
    return contractReader;
  }
};

// const address = "0x1A24eDbc91EdfB493160759c3187cC5c93EF35EE";
