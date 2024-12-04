export type AbiType = 'function' | 'constructor' | 'receive' | 'fallback' | 'event' | 'error';

export type AbiParam = {
    name: string;
    type: string;
    internalType?: string;
    components?: AbiParam[];
    indexed?: boolean;
};

export type AbiStateMutability = 'pure' | 'view' | 'nonpayable' | 'payable';

export type AbiItem = {
    type: AbiType;
    name?: string;
    inputs?: AbiParam[];
    outputs?: AbiParam[];
    stateMutability?: AbiStateMutability;
    anonymous?: boolean;
};
