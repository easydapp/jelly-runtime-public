import { Chain } from './chain';

export type TokenBalance = {
    chain: Chain; // chain
    address?: string; // Main currency or designated token
    balance: number; // Minimum ownership
};

export type VerifiedTokenBalance = {
    chain: Chain; // chain
    address?: string; // Main currency or designated token
    balance: number; // Minimum ownership

    // =============== Verification information ===============
    identity: string; // Identity address
    message: string;
    signature: string;
};
