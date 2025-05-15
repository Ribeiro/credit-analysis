import { CreditApplicationDto } from '../dto/credit-application.dto';
import { RuleFailure } from '../rules/interfaces/rule-failure.interface';

export class CreditApplicationProcess {
  constructor(
    public readonly application: CreditApplicationDto,
    public readonly failures: RuleFailure[] = [],
  ) {}

  addFailure(rule: string, reason: string) {
    this.failures.push({ rule, reason });
  }

  isSuccessful(): boolean {
    return this.failures.length === 0;
  }
}
