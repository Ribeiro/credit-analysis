import { Module } from '@nestjs/common';
import { CreditAnalysisService } from '../services/credit-analysis.service';
import { CreditAnalysisController } from '../controllers/credit-analysis.controller';

@Module({
  providers: [CreditAnalysisService],
  controllers: [CreditAnalysisController],
})
export class CreditAnalysisModule {}
