import { CreditApplicationProcess } from '../../model/credit-application-process';

export interface CreditRule {
  setNext(rule: CreditRule): CreditRule;
  evaluate(process: CreditApplicationProcess): Promise<void>;
}
