import { Injectable } from '@nestjs/common';
import { GetOrgQueryParams } from '../_model/get-org-params';
import { Organization } from '../_model/organization';

import { orderBy, Many } from 'lodash';

const organizations: Organization[] = [
    {
        id: 1,
        devname: 'aaa',
        name: 'apple',
        active: false,
    },
    {
        id: 2,
        devname: 'bbb',
        name: 'kiwi',
        active: false,
    },
    {
        id: 3,
        devname: 'ccc',
        name: 'orange',
        active: false,
    },
    {
        id: 4,
        devname: 'ddd',
        name: 'dotappige',
        active: false,
    },
];

@Injectable()
export class OrganizationsService {
    getOrganizations(query: GetOrgQueryParams): Organization[] {
        let orgs = organizations;

        if (query.isNameSet()) {
            orgs = organizations.filter(x => {
                const ret = x.name.search(query.name) !== -1;
                return ret;
            });
        }

        if (
            query.isSortSet() && query.isOrderSet()
        ) {
            orgs = orderBy(orgs, query.sort, query.order as Many<'asc' | 'desc'>);
        }

        const from = query.pageStart * query.pageSize;
        const pagedOrgs = orgs.slice(from, from + query.pageSize);
        return pagedOrgs;
    }
}
