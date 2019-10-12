import { Controller, Post } from '@nestjs/common';
import { SettingsService } from '../global/settings/settings.service';

@Controller('settings')
export class SettingsController {

    constructor(private settingsSerivice: SettingsService) {}

    @Post()
    toggleErrors() {
        this.settingsSerivice.throw401 = !this.settingsSerivice.throw401;
        console.log('toggle error: ', this.settingsSerivice.throw401);
        return { errors: this.settingsSerivice.throw401 };
    }

}
