export const greetingUppercase = (name: string): string => {
  const uppercase = `Hello ${name}!`.toUpperCase();
  console.log(uppercase);
  return uppercase;
};
