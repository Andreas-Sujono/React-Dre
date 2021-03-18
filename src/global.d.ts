declare module '*.md' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}