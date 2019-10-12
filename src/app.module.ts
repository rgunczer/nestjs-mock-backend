import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrgManagementModule } from './org-management/org-management.module';
import { GlobalModule } from './global/global.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [OrgManagementModule, SettingsModule, GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
