import { Module, Global } from '@nestjs/common';
import { SettingsService } from './settings/settings.service';

@Global()
@Module({
    providers: [
        SettingsService,
    ],
    exports: [
        SettingsService,
    ],
})
export class GlobalModule {}
