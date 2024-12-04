export type SingleEvmApi = {
    api: string;
};

export type OriginEvmApi = {
    abi: string;
    name: string;
};

export type EvmApi = { single: SingleEvmApi } | { origin: OriginEvmApi };

export const match_evm_api = <T>(
    self: EvmApi,
    {
        single,
        origin,
    }: {
        single: (single: SingleEvmApi) => T;
        origin: (origin: OriginEvmApi) => T;
    },
): T => {
    if ('single' in self) return single(self.single);
    if ('origin' in self) return origin(self.origin);
    throw new Error('invalid evm api');
};
