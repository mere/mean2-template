// This file only exists to solve TypeScript compiler errors when using "module" from
// CommonJS to allow for relative TemplateUrl and StyleUrl paths.

// This can be removed once this issue is resolved by the Angular 2 team.

declare var module: {
    id: string;
};