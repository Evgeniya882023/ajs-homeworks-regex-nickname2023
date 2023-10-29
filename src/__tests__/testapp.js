import Validator from '../app';

test('Верный логин - из латинских букв', () => {
  const login = new Validator('Totoshka');

  expect(login.validateUsername()).toBe(true);
});

test('Верный логин - из латинских букв + допускаются тире', () => {
  const login = new Validator('bip-bip');

  expect(login.validateUsername()).toBe(true);
});

test('Верный логин - из латинских букв + допускаются тире и нижнее подчеркивание', () => {
  const login = new Validator('Test_lesson-a');

  expect(login.validateUsername()).toBe(true);
});

test('Верный логин - из латинских букв и цифр', () => {
  const login = new Validator('Evgen88m');

  expect(login.validateUsername()).toBe(true);
});

test('Верный логин - Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире', () => {
  const login = new Validator('Ab123-hA');

  expect(login.validateUsername()).toBe(true);
});

test('Верный логин - еще вариант Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире', () => {
  const login = new Validator('Pa444-444hg');

  expect(login.validateUsername()).toBe(true);
});

test('НЕВЕРНЫЙ логин - имя не должно заканчиваться цифрами', () => {
  const login = new Validator('Evgen88');

  expect(login.validateUsername()).toBe(false);
});

test('НЕВЕРНЫЙ логин - имя не должно заканчиваться цифрами и начинаться с символов', () => {
  const login = new Validator('_Evgen88');

  expect(login.validateUsername()).toBe(false);
});

test('НЕВЕРНЫЙ логин - имя не должно заканчиваться символами нижнего подчеркивания', () => {
  const login = new Validator('Evgen_');

  expect(login.validateUsername()).toBe(false);
});

test('НЕВЕРНЫЙ логин - имя не должно заканчиваться символами', () => {
  const login = new Validator('Ev_g-shA$');

  expect(login.validateUsername()).toBe(false);
});
