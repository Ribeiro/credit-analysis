// src/services/credit-analysis.service.ts
import { Injectable } from '@nestjs/common';
import { CreditApplicationDto } from '../dto/credit-application.dto';
import { RuleChain } from './rule-chain.provider';
import { CreditApplicationProcess } from '../model/credit-application-process';

@Injectable()
export class CreditAnalysisService {
  async analyze(app: CreditApplicationDto): Promise<{
    success: boolean;
    failures: { rule: string; reason: string }[];
  }> {
    const process = new CreditApplicationProcess(app);
    const chain = await RuleChain.buildChain();

    await chain.evaluate(process);

    return {
      success: process.isSuccessful(),
      failures: process.failures,
    };
  }
}
