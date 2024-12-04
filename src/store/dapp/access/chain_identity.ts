import { Chain } from './chain';

export type ChainIdentity = {
    chain: Chain; // chain
    identity: string; // Identity address
};

export type VerifiedChainIdentity = {
    chain: Chain; // chain
    identity: string; // Identity address

    // =============== Verification information ===============
    message: string;
    signature: string;
};
