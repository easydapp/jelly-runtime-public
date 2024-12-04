import { Chain } from './chain';

export type NFTOwner = {
    chain: Chain;
    address: string; // Specify NFT contract
    token_id?: string; // Any NFT or specified NFT
};

export type VerifiedNFTOwner = {
    chain: Chain;
    address: string; // Specify NFT contract
    token_id?: string; // Any NFT or specified NFT

    // =============== Verification information ===============
    identity: string; // Identity address
    message: string;
    signature: string;
};
