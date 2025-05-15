import { AgeRule } from '../age.rule';
import { CreditApplicationProcess } from '../../model/credit-application-process';

describe('AgeRule', () => {
  const rule = new AgeRule();

  it('should approve when age is within valid range', async () => {
    const process = new CreditApplicationProcess({
      name: 'Valid Applicant',
      birthDate: '1990-01-01',
      document: '12345678900',
      income: 3000,
      creditScore: 600,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(true);
  });

  it('should reject when age is below 18', async () => {
    const today = new Date();
    const birthDate = new Date(
      today.getFullYear() - 17,
      today.getMonth(),
      today.getDate() + 1,
    );

    const process = new CreditApplicationProcess({
      name: 'Too Young',
      birthDate: birthDate.toISOString().split('T')[0],
      document: '12345678900',
      income: 3000,
      creditScore: 600,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Idade mínima é 18 anos.');
  });

  it('should reject when age is above 65', async () => {
    const birthDate = new Date();
    birthDate.setFullYear(birthDate.getFullYear() - 66);

    const process = new CreditApplicationProcess({
      name: 'Too Old',
      birthDate: birthDate.toISOString().split('T')[0],
      document: '12345678900',
      income: 3000,
      creditScore: 600,
    });

    const result = await rule['check'](process);
    expect(result.success).toBe(false);
    expect(result.reason).toBe('Idade máxima é 65 anos.');
  });
});
