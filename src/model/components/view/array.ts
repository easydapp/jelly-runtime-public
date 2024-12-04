import { ComponentId } from '../../common/identity';
import { input_value_get_used_component, InputValue } from '../../common/refer';
import { InnerViewMetadata } from './inner';

export type ViewArrayMetadata = {
    value: InputValue;
    inner: InnerViewMetadata;
    style?: string;
};

export const view_array_metadata_get_used_component = (self: ViewArrayMetadata): ComponentId[] => {
    return input_value_get_used_component(self.value);
};

// ========================= style =========================

export type ViewArrayMetadataStyle = {
    direction?: 'row' | 'column';
};
