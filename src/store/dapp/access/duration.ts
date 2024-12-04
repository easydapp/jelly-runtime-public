import { TimestampMills } from '../../../common/time';

export type AccessDuration = {
    start?: TimestampMills; // Start time, including
    end?: TimestampMills; // End time, not included
};

export type VerifiedAccessDuration = {
    start?: TimestampMills; // Start time, including
    end?: TimestampMills; // End time, not included

    // =============== Verification information ===============
};
