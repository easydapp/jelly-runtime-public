import { ComponentId } from './common/identity';
import { NodeTemplate } from './node/template';

export type TrimmedLinkComponent = {
    id: ComponentId;
};

export type TrimmedNodeDataTemplate = {
    component?: TrimmedLinkComponent;
    template?: NodeTemplate;
};

export type TrimmedNodeData = {
    node_id: string;
    data: TrimmedNodeDataTemplate;
};

export type TrimmedNode = {
    data: TrimmedNodeData;
};
