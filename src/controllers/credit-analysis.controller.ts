import { Body, Controller, Post } from '@nestjs/common';
import { CreditAnalysisService } from '../services/credit-analysis.service';
import { CreditApplicationDto } from '../dto/credit-application.dto';

@Controller('credit-analysis')
export class CreditAnalysisController {
  constructor(private readonly creditAnalysisService: CreditAnalysisService) {}

  @Post('evaluate')
  async evaluate(@Body() dto: CreditApplicationDto) {
    const result = await this.creditAnalysisService.analyze(dto);
    return result;
  }
}
