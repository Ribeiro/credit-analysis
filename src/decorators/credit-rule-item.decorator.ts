/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export function CreditRuleItem(): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata('creditRuleItem', true, target);
  };
}
