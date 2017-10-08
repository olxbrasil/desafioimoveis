import {age, currency, percentage} from './MaskHelper';

test('age mask', () => {
  const maskedSingleAge = age(1);
  const maskedPluralAge = age(2);
  expect(maskedSingleAge).toBe('1 ano');
  expect(maskedPluralAge).toBe('2 anos');
});

test('currency', () => {
  const maskedMoney = currency('10000');
  const maskedFloatMoney = currency('200.56');
  expect(maskedMoney).toBe('R$ 10.000,00');
  expect(maskedFloatMoney).toBe('R$ 200,56');
});

test('percentage', () => {
  const maskedPercentage = percentage('20.5');
  expect(maskedPercentage).toBe('20,5%');
})