import { ComponentId } from '../../common/identity';
import { input_value_get_used_component, InputValue } from '../../common/refer';

export type ViewTextMetadata = {
    value: InputValue;
    href?: InputValue;
    style?: string;
};

export const view_text_metadata_get_used_component = (self: ViewTextMetadata): ComponentId[] => {
    const used: ComponentId[] = [];
    used.push(...input_value_get_used_component(self.value));
    if (self.href) used.push(...input_value_get_used_component(self.href));
    return used;
};

// ========================= style =========================

export type ViewTextMetadataStyle = {
    style?: {
        fontSize?: string;
        textAlign?: 'left' | 'center' | 'right';
        paddingTop?: string;
        paddingBottom?: string;
        color?: string;
    };
};
