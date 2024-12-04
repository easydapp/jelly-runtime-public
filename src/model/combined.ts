import { LinkType } from '@jellypack/types/lib/types';
import { ApiDataAnchor } from '../store/api';
import { CodeDataAnchor } from '../store/code';
import { CombinedAnchor } from '../store/combined';
import { ComponentId } from './common/identity';
import { IdentityInnerMetadata } from './components/identity';
import { InteractionInnerMetadata } from './components/interaction';

export type CombinedMetadata = {
    params?: ComponentParamRequired[];
    identities?: ComponentIdentityRequired[];

    forms?: ComponentFormRequired[];
    interactions?: ComponentInteractionRequired[];

    code_anchors?: CodeDataAnchor[];
    apis_anchors?: ApiDataAnchor[];
    combined_anchors?: CombinedAnchor[];

    output?: LinkType;
};

// param
export type ComponentParamRequired = {
    id: ComponentId;
    name: string;
    default?: string;
};

// form
export type ComponentFormRequired = {
    id: ComponentId;
    name?: string;
    output: LinkType;
};

// identity
export type ComponentIdentityRequired = {
    id: ComponentId;
    name?: string;
    metadata: IdentityInnerMetadata;
};

// interaction
export type ComponentInteractionRequired = {
    id: ComponentId;
    name?: string;
    metadata: InteractionInnerMetadata;
};
