import { TimestampMills } from '../../common/time';
import { CombinedMetadata } from '../../model';
import { CombinedAnchor } from '../combined';
import { PublisherAnchor } from '../publisher';
import { DappAccess, DappAccessView } from './access';
import { DappCategory } from './category';
import { DappInfo } from './info';

export type DappAnchor = string; // dapp key

export type Dapp = {
    id: DappAnchor;

    created: TimestampMills;
    updated: TimestampMills;
    frozen?: TimestampMills;
    reason: string;

    access: DappAccess;

    accessed: number;
    called: number;
    collected: number;

    category: DappCategory;

    info: DappInfo;

    publisher: PublisherAnchor;

    combined: CombinedAnchor;

    metadata?: CombinedMetadata;
};

// ================== view ==================

export type DappView = {
    id: DappAnchor;

    created: TimestampMills;
    updated: TimestampMills;
    frozen?: TimestampMills;
    reason: string;

    access: DappAccessView;

    accessed: number;
    called: number;
    collected: number;

    category: DappCategory;

    info: DappInfo;

    publisher: PublisherAnchor;

    combined: CombinedAnchor;

    metadata?: CombinedMetadata;
};

// ================== view ==================

export type DappMetadata = {
    accessed: number;
    called: number;
    collected: number;

    category: DappCategory;

    info: DappInfo;
};
