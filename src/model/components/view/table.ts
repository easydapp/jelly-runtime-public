import { ComponentId } from '../../common/identity';
import { input_value_get_used_component, InputValue } from '../../common/refer';

export type ViewTableMetadata = {
    value: InputValue;
    style?: string;
};

export const view_table_metadata_get_used_component = (self: ViewTableMetadata): ComponentId[] => {
    return input_value_get_used_component(self.value);
};

// ========================= style =========================

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ViewTableMetadataStyle = {
    style?: {
        fontSize?: string;
        border?: string;
        textAlign: 'left' | 'center' | 'right';
        paddingTop?: string;
        paddingBottom?: string;
        color?: string;
    };
};
