import { deepClone } from '../../../../../common/clones';
import { CallingData, EvmActionData } from '../../../../../runtime/calling';
import { RuntimeValues } from '../../../../../runtime/value';
import { InputValue } from '../../../../common/refer';
import { ComponentIdentityEvmValue } from '../../../identity/evm';

export const call_evm_sign_action = async (
    sign: InputValue,
    runtime_values: RuntimeValues,
    calling: CallingData,
    identity_metadata: ComponentIdentityEvmValue,
) => {
    const message = runtime_values.find_input_value<string>(sign, 'text');
    if (message === undefined) return undefined;
    const key: EvmActionData = {
        sign: {
            chain: identity_metadata.chain,
            account: identity_metadata.account,
            message,
        },
    };
    let signature: string;
    let call_index; // ! Call serial number
    try {
        call_index = calling.start({ evm: deepClone(key) }); // ! Start call
        signature = await identity_metadata.signer.signMessage(message);
        calling.result(call_index, deepClone(signature)); // ! Save the call result
    } catch (e) {
        const message = `${e}`;
        console.debug(`🚀 ~ sign: ~ message:`, message);
        if (0 <= message.indexOf('User rejected the request')) return undefined;
        throw e;
    } finally {
        calling.over(call_index!); // ! End call
    }
    return signature;
};
