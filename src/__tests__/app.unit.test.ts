import { greetingUppercase } from './../app';

test('formats the greeting correctly', () => {
  expect(greetingUppercase('world')).toMatchSnapshot();
});
