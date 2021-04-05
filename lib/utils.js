export const craSocialLinks = {
  facebook:
    "https://www.facebook.com/Club-de-Recherche-Acad%C3%A9mique-310130176356323/",
  github: "https://github.com/faouziMohamed",
  githubRepo() {
    return `${this.github}/cra`;
  },
};

export function Capitalize({ children }) {
  return children.replace(/^\w/, (c) => c.toUpperCase());
}

export function CapitalizeAll({ children }) {
  return children.replace(/\w\S*/g, (word) =>
    Capitalize({ children: `${word}` }),
  );
}
