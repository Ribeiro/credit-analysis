/* eslint-disable @typescript-eslint/require-await */
import { BaseRule } from './base.rule';
import { CreditApplicationProcess } from '../model/credit-application-process';

export class AgeRule extends BaseRule {
  readonly name = 'AgeRule';

  protected async check(
    process: CreditApplicationProcess,
  ): Promise<{ success: boolean; reason?: string }> {
    const birthDate = new Date(process.application.birthDate);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      return { success: false, reason: 'Idade mínima é 18 anos.' };
    }

    if (age > 65) {
      return { success: false, reason: 'Idade máxima é 65 anos.' };
    }

    return { success: true };
  }
}
