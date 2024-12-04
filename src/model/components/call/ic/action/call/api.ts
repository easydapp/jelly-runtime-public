import { IDL } from '@dfinity/candid';
import {
    InternetComputerApi,
    match_internet_computer_api_async,
} from '../../../../../../store/api/content/ic';
import {
    mapping_func,
    mapping_service,
    WrappedCandidType,
    WrappedCandidTypeFunction,
} from '../../../../../../wasm/candid';
import { parse_func_candid_by_remote, parse_service_candid_by_remote } from './candid_by_remote';

export const parse_ic_api = async (
    api: InternetComputerApi,
    handle: (
        _method_: string | undefined,
        _func_: IDL.FuncClass | undefined,
        _arg_: WrappedCandidType[] | undefined,
        _ret_: WrappedCandidType[] | undefined,
    ) => void,
    parse_service_candid = parse_service_candid_by_remote,
    parse_func_candid = parse_func_candid_by_remote,
) => {
    let _method_: string | undefined = undefined;
    let _func_: IDL.FuncClass | undefined = undefined;
    let _arg_: WrappedCandidType[] | undefined = undefined;
    let _ret_: WrappedCandidType[] | undefined = undefined;

    await match_internet_computer_api_async(api, {
        single: async (single) => {
            const [name, wrapped_func] = await parse_func_candid(single.api, (s) => s, true);
            _func_ = mapping_func(wrapped_func);
            _method_ = name;
            _arg_ = wrapped_func.args ?? [];
            _ret_ = wrapped_func.rets ?? [];
        },
        origin: async (origin) => {
            const service = await parse_service_candid(origin.candid, (s) => s, true);
            const methods = mapping_service(service);
            _method_ = origin.method;
            _func_ = methods.find((item) => item.name === _method_)?.func;
            const func = (() => {
                const m: [string, WrappedCandidTypeFunction] | undefined = (
                    service.methods ?? []
                ).find((s) => s[0] === _method_);
                if (!m) return undefined;
                return m[1];
            })();
            _arg_ = func?.args;
            _ret_ = func?.rets;
        },
    });

    handle(_method_, _func_, _arg_, _ret_);
};

// console.debug(
//     'call ic func arg',
//     func.argTypes.map((s) => s.name),
// );
// console.debug(
//     'call ic func ret',
//     func.retTypes.map((s) => s.name),
// );

// const js = match_internet_computer_api<string>(api, {
//     single: (single) => single.js,
//     origin: (origin) => origin.js,
// });
// const code = `data:text/javascript;charset=utf-8,${encodeURIComponent(js)}`;
// const idl2 = await eval(`import("${code}")`);
// const methodList = await parseOptions(idl2, canister_id);
// console.debug(`🚀 ~ call: ~ methodList:`, methodList, idl2);
// const func2: any = methodList.find((item) => item.name === method)!.func;
// console.debug(
//     'call ic func2 arg',
//     func2.argTypes.map((s: any) => s.name),
// );
// console.debug(
//     'call ic func2 ret',
//     func2.retTypes.map((s: any) => s.name),
// );
// let actor: any = undefined;
// try {
//     actor = await identity_metadata.creator(idl2.idlFactory, canister_id); // Get ACTOR
// } catch (e) {
//     throw handle_error(identity_metadata, e);
// }
