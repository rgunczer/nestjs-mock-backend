import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations/organizations.service';
import { OrganizationsController } from './organizations/organizations.controller';

@Module({
  providers: [OrganizationsService],
  controllers: [OrganizationsController]
})
export class OrgManagementModule {}
