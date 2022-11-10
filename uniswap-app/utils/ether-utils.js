import { ethers } from "ethers";

export const toWei = (amount, decimals = 18) =>
  ethers.utils.parseUnits(amount, decimals).toString();

export const toEth = (amount, decimals = 18) =>
  ethers.utils.formatUnits(amount, decimals).toString();
