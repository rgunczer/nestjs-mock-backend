import { Controller, Get, Post, Query, Param, Delete, Req, Request, Res, HttpException, HttpStatus } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { GetOrgQueryParams } from '../_model/get-org-params';
import { Organization } from '../_model/organization';
import { SettingsService } from '../../global/settings/settings.service';

@Controller('v1/organizations')
export class OrganizationsController {

    constructor(
        private organizationsService: OrganizationsService,
        private settingsService: SettingsService,
    ) {
    }

    @Get()
    getOrganizations(
        @Query('name') name: string,
        @Query('sort') sort: string,
        @Query('order') order: string,
        @Query('page') page: string,
        @Query('limit') limit: string,
    ): Organization[] {
        console.log('name', name);
        console.log('sort', sort);
        console.log('order', order);
        console.log('page', page);
        console.log('limit', limit);

        const params = new GetOrgQueryParams(name, sort, order, page, limit);

        if (this.settingsService.throw401) {
            // throw new HttpException(`Not found`, HttpStatus.UNAUTHORIZED);
            throw new HttpException({ id: '1', error: 'too long name' }, HttpStatus.BAD_REQUEST);
        }

        return this.organizationsService.getOrganizations(params);
    }

    @Post(':id/activate')
    activateOrg(@Param() params) {
        console.log('here we go: ', params.id);
        console.log('activate org...');
    }

    @Post(':id/deactivate')
    deactivateOrg(@Param() params) {
        console.log('here we go: ', params.id);
        console.log('DE-activate org...');
    }

    @Delete(':id')
    deleteOrg(@Param() params) {
        console.log('delete org: ', params.id);
    }


}
