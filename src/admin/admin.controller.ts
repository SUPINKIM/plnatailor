import { AdminAccountService } from '@/database/admin-account/adminAccount.service';
import { CustomResponseType } from '@/types';
import { Controller, HttpCode, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller()
export class AdminController {
    constructor(private accountService: AdminAccountService) {}

    @Post()
    @HttpCode(201)
    async signup(@Req() req: Request, @Res() res: Response) {
        const { id, password } = req.body;
        await this.accountService.addAccount({ id, password });

        return res.json({
            data: {
                type: 'admin',
                id: '',
                items: [],
            },
            errors: {},
            meta: {},
        } as CustomResponseType<any>);
    }
}
