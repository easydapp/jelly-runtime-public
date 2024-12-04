import { ActorSubclass, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';

// Plug interface
export interface PlugInterface {
    isConnected: () => Promise<boolean>;
    requestConnect: (_?: {
        whitelist?: string[]; // ['canister-id'],
        host?: string; // 'https://network-address',
        onConnectionUpdate?: () => void;
        timeout?: number; // ms, default 2 minutes
    }) => Promise<void>;
    sessionManager: {
        sessionData: {
            principalId: string;
            accountId: string;
            agent: HttpAgent;
        };
        onConnectionUpdate: () => void;
    };

    principalId?: string;
    accountId?: string;
    agent?: HttpAgent;
    createActor: <T>(_: {
        canisterId: string;
        interfaceFactory: IDL.InterfaceFactory;
    }) => Promise<ActorSubclass<T>>;

    disconnect: () => Promise<void>;
}
