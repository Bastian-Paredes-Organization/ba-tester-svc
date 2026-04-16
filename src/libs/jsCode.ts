export const jsCodeHasCorrectSyntax = (jsCode: string) => {
  try {
    new Function(`return (async () => { ${jsCode} })`);
    return true;
  } catch {
    return false;
  }
};
