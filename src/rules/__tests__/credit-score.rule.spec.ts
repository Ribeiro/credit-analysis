import { CreditScoreRule } from '../credit-score.rule';
import { CreditApplicationProcess } from '../../model/credit-application-process';

describe('CreditScoreRule', () => {
  const rule = new CreditScoreRule();

  it('should approve when credit score is 600 or higher', async () => {
    const process = new CreditApplicationProcess({
      name: 'Good Score',
      birthDate: '1990-01-01',
      document: '12345678900',
      income: 3000,
      creditScore: 700,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(true);
  });

  it('should reject when credit score is below 600', async () => {
    const process = new CreditApplicationProcess({
      name: 'Low Score',
      birthDate: '1990-01-01',
      document: '12345678900',
      income: 3000,
      creditScore: 550,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Score de crédito inferior a 600.');
  });
});
