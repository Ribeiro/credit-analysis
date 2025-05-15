import { TerminalRule } from '../terminal.rule';
import { CreditApplicationProcess } from '../../model/credit-application-process';
import { CreditRule } from '../interfaces/credit-rule.interface';

describe('TerminalRule', () => {
  let terminalRule: TerminalRule;
  let mockProcess: CreditApplicationProcess;

  beforeEach(() => {
    terminalRule = new TerminalRule();

    mockProcess = {
      dto: { name: 'John Doe', age: 30, cpf: '12345678900' },
      failures: [],
      addFailure: jest.fn(),
    } as unknown as CreditApplicationProcess;
  });

  it('should return itself on setNext', () => {
    const nextRule: CreditRule = {
      setNext: jest.fn(),
      evaluate: jest.fn(),
    };

    const result = terminalRule.setNext(nextRule);

    expect(result).toBe(terminalRule);
  });

  it('should do nothing when evaluate is called', async () => {
    await expect(terminalRule.evaluate(mockProcess)).resolves.toBeUndefined();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockProcess.addFailure).not.toHaveBeenCalled();
  });
});
