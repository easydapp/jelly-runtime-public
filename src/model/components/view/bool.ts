import { ComponentId } from '../../common/identity';
import { input_value_get_used_component, InputValue } from '../../common/refer';

export type ViewBoolMetadata = {
    value: InputValue;
    style?: string;
};

export const view_bool_metadata_get_used_component = (self: ViewBoolMetadata): ComponentId[] => {
    return input_value_get_used_component(self.value);
};

// ========================= style =========================

export type ViewBoolMetadataStyle = {
    label?: string;
    trueText?: string;
    falseText?: string;
    iconSize?: '44px' | '55px' | '66px';
};
