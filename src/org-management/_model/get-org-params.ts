import Utils from '../../_shared/utils';

export class GetOrgQueryParams {

    private readonly DEFAULT_PAGE_SIZE = 2;

    pageStart: number;
    pageSize: number;

    constructor(
        public name: string,
        public sort: string,
        public order: string,
        public page: string,
        public limit: string,
    ) {
        this.pageStart = parseInt(page + '', 10);
        this.pageSize = parseInt(limit + '', 10);

        if (isNaN(this.pageStart)) {
            this.pageStart = 0;
        }

        if (isNaN(this.pageSize)) {
            this.pageSize = this.DEFAULT_PAGE_SIZE;
        }
    }

    isNameSet(): boolean {
        return Utils.isDefined(this.name) && this.name !== '';
    }

    isSortSet(): boolean {
        return Utils.isDefined(this.sort) && this.sort !== '';
    }

    isOrderSet(): boolean {
        return Utils.isDefined(this.order) && this.order !== '';
    }

    isPageSet(): boolean {
        return Utils.isDefined(this.page) && this.page !== '';
    }

    isLimitSet(): boolean {
        return Utils.isDefined(this.limit) && this.limit !== '';
    }

}
