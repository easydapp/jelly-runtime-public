import { ComponentId } from '../common/identity';

export type ComponentParam = {
    id: ComponentId;
    metadata: ParamMetadata;
};

export type ParamMetadata = {
    name: string;
    default?: string;
};
