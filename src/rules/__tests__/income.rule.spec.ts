import { IncomeRule } from '../income.rule';
import { CreditApplicationProcess } from '../../model/credit-application-process';

describe('IncomeRule', () => {
  const rule = new IncomeRule();

  it('should approve when income is above or equal to 2000', async () => {
    const process = new CreditApplicationProcess({
      name: 'Good Income',
      birthDate: '1990-01-01',
      document: '12345678900',
      income: 2500,
      creditScore: 650,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(true);
  });

  it('should reject when income is below 2000', async () => {
    const process = new CreditApplicationProcess({
      name: 'Low Income',
      birthDate: '1990-01-01',
      document: '12345678900',
      income: 1400,
      creditScore: 650,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Renda mínima é R$1500.');
  });
});
