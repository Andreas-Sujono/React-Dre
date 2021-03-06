# Contributing

Thanks for vising this page. We welcome community support with pull requests, fixing issues, and reporting bugs. Please don't hesitate to jump in.

## Get started with your first pull request

You can improve this awesome react component library by contributing. To get started, you can check out the list of improvements, issues, or any outstanding pull requests. we are really GRATEFUL for any improvement you have made to this library.

#### Start from V0.3.0, we will use below convention
### PR naming
we have 4 different types of development which are: `BUGFIX`, `FEATURES`, `IMPROVEMENT`, and `DOCS`
- `BUGFIX`: like the name implies, it's for fixing the bug.
- `FEATURES`: it's for adding a NEW feature including: a new component, new config, new props, etc
- `IMPROVEMENT`: it's for improving the CURRENT features, for example: change the naming of the props, change the animation handler, etc
- `DOCS`: it's for everything that is related with the documentation, we WILL have 2 types of doucumentation, which are the storybook and the official documentation website (In Progress)

<br/>
To get started, you can see the list of future improvement in the `README.md`  and can create your first PR based on that. On the other hand, you can vew the list of issues and fix it by yourself. Your pull request naming must follows the below convention

- your pull request must starts with `[types]` and `[Component]`, and if your PR related with fixing any issue. you can append the issue number on your PR, For example: 
  - `[BUGFIX] [Modal] fix modal animation`
  - `[FEATURES] [Modal] add showAnimation props`
  - `[IMPROVEMENT] [config] improve changelog automation script`
  - `[DOCS] [storybook] add more Modal stories`
  - `[BUGFIX] [LoadingBar] [fix #23453] fix Loading animation`
  
### Commit Name
similar with PR naming, you must have the following prefix for the commit message:

- `[fixed] [component] ...`
- `[changed] [component] ...`
- `[added] [component] ...`
- `[removed] [component scope] ...`

only use `[fixed]...`, if you are fixing any issues mentioned in the github issue list

for Example:
- `[added] [Modal] transition animation`
- `[fixed] [Button] styling for buttonText`



## Coding guidelines
### General Guidelines
- Use typescript to develop the component
- All the component must be fully customized in terms of functionality and styling (that's the idea of why this library is created)
- use functional component and react hooks
- Use styled-component to style your component
- Please follow the current convention of folder of each component. Each component must be inside its own folder and must have at least 3 files (`index.ts`, `Component.tsx`, `Component.style.tsx`)
- Inside the `index.ts` for any component folder, every exported component or function must be inside a `named export` including the export default component
- All styled component must attach a className attribute (at least for the top most parent), where the top most container must start with `dre-.....`, the others are optional
- All the styles props must be injected into 1 props called `styles`
- Always use `memo` or `useCallback` or `useMemo`, inside a component or function or heavy data
- for styling that deal with number, do not use `px`, use `rem` or `em` INSTEAD. For example: `font-size: 1rem;`, `border-radius 0.25rem;`, `margin: 0.2rem;`

- **Important**: For the new component created, you must research the other library first and put it inside the `Readme` in the `References` section. You can reference this other library in terms of how to implement, what props are needed, etc

### Naming:
- For a container or wrapper, the name of styled component must ends with `Container`
- For a styled native html element that is not a container or a wrapper, the name of styled component must starts with `Styled` 
- All the interface name must starts with `I`, for example `IUser`, `IModalProps`

### eslint important:
- Use absolute import for accessing a parent element
- The order of the import is from the farthest to the nearest component
- Reduce the use of `eslint-disable` as much as possible


