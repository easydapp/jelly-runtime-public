import { ComponentId } from '../../common/identity';
import { input_value_get_used_component, InputValue } from '../../common/refer';

export type ViewImageMetadata = {
    value: InputValue;
    href?: InputValue;
    style?: string;
};

export const view_image_metadata_get_used_component = (self: ViewImageMetadata): ComponentId[] => {
    const used: ComponentId[] = [];
    used.push(...input_value_get_used_component(self.value));
    if (self.href) used.push(...input_value_get_used_component(self.href));
    return used;
};

// ========================= style =========================

export type ViewImageMetadataStyle = {
    style?: {
        borderRadius?: string;
    };
};
