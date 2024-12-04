import { LinkType } from '@jellypack/types/lib/types';
import { LinkValue } from '@jellypack/types/lib/values';
import { ComponentId } from '../common/identity';
import { Endpoint } from '../common/lets';
import { ValidateForm } from '../common/validate';

export type ComponentForm = {
    id: ComponentId;
    inlets?: Endpoint[];
    metadata?: FormMetadata;
    output: LinkType;
};

export type FormMetadata = {
    name?: string;
    default?: LinkValue;
    validate?: ValidateForm;
    style?: string;
};

// ========================= style =========================

export type FormMetadataTextStyle = {
    label?: string;
    placeholder?: string;
    suffix?: string;
    style?: {
        borderRadius?: string;
        borderStyle?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataBoolStyle = {
    label?: string;
    trueText?: string;
    falseText?: string;
    style?: {
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataIntegerStyle = {
    label?: string;
    placeholder?: string;
    suffix?: string;
    style?: {
        borderRadius?: string;
        borderStyle?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataNumberStyle = {
    label?: string;
    placeholder?: string;
    suffix?: string;
    style?: {
        borderRadius?: string;
        borderStyle?: string;
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataArrayStyle = {
    label?: string;
    showIndex?: boolean;
    subtype?: string; // FormMetadataStyle; // Sub-type style
    style?: {
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataObjectStyle = {
    label?: string;
    subitems?: string[]; // FormMetadataStyle[]; // Sub-type style
    style?: {
        paddingTop?: string;
        paddingBottom?: string;
    };
};

export type FormMetadataStyle =
    | FormMetadataTextStyle
    | FormMetadataBoolStyle
    | FormMetadataIntegerStyle
    | FormMetadataNumberStyle
    | FormMetadataArrayStyle
    | FormMetadataObjectStyle;
