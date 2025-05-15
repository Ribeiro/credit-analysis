/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreditRule } from './interfaces/credit-rule.interface';
import { CreditApplicationProcess } from '../model/credit-application-process';

export class TerminalRule implements CreditRule {
  setNext(_: CreditRule): CreditRule {
    return this;
  }

  async evaluate(_: CreditApplicationProcess): Promise<void> {}
}
