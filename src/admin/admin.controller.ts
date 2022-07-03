import { AdminAccountService } from '@/database/admin-account/adminAccount.service';
import { Controller, HttpCode, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AdminController {
    constructor(private accountService: AdminAccountService) {}

    @Post()
    @HttpCode(201)
    async signup(@Res() res: Response) {
        await this.accountService.addAccount();

        return res.json({ success: 'ok' });
    }
}
