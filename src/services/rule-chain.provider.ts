/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/services/rule-chain.provider.ts
import { CreditRule } from '../rules/interfaces/credit-rule.interface';
import { BaseRule } from '../rules/abstract/base.rule';
import 'reflect-metadata';
import * as path from 'path';
import * as glob from 'glob';

type Constructor<T> = new (...args: any[]) => T;

export class RuleChain {
  static async buildChain(): Promise<CreditRule> {
    const files = glob.sync(path.resolve(__dirname, '../rules/*.rule.{ts,js}'));

    const ruleInstances: BaseRule[] = [];

    for (const file of files) {
      const module = await import(file);
      for (const exported of Object.values(module)) {
        if (
          typeof exported === 'function' &&
          Reflect.getMetadata('creditRuleItem', exported)
        ) {
          const ConstructorClass = exported as Constructor<BaseRule>;
          const instance = new ConstructorClass();
          ruleInstances.push(instance);
        }
      }
    }

    for (let i = 0; i < ruleInstances.length - 1; i++) {
      ruleInstances[i].setNext(ruleInstances[i + 1]);
    }

    if (ruleInstances.length === 0) {
      throw new Error('Nenhuma regra encontrada com @CreditRuleItem');
    }

    return ruleInstances[0];
  }
}
