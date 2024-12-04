import { LinkType } from '@jellypack/types/lib/types';
import { LinkValue } from '@jellypack/types/lib/values';
import { ComponentId } from '../common/identity';

export type ComponentConst = {
    id: ComponentId;
    metadata: ConstMetadata;
    output: LinkType;
};

export type ConstMetadata = {
    value: LinkValue;
};
