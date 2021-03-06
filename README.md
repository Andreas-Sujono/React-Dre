# React-Dre
A fully customized component library that summarizes all the great React libraries while maintaining the flexibility of functionality and styling that makes your frontend development much easier, initiated by An**DRE**as himself.

We compile other popular component libraries into this `React-Dre` where we add more functionality and flexibility of styling

## Installation

Get the current version:

```bash
npm install react-dre@<insert-current-version>
```

or

```bash
yarn add react-dre@<insert-current-version>
```

## Documentation
#### Current Version (Pre-Release): 0.2.3
Component
1) ClickOutsidehandler
2) CopyToClipboard (copy, UrlCopyCard)
3) LoadingBar (LoadingBar, FullPageLoadingBar)
4) Modal

## Future Development
* [x] ~~Modal~~ **VALIDATION-PHASE**
* [x] ~~ClickOutsidehandler~~ **VALIDATION-PHASE**
* [ ] Tooltip
* [ ] DropdownMenu
* [ ] Notifications --> Toast, popup
* [ ] Grid - **TESTING-PHASE**
* [ ] table
* [ ] Search bar - **TESTING-PHASE**
* [ ] Input --> Text(All HTML5 input type), Checkbox, radio, Textarea, date, time, dateTime, phoneNumber, country, switch toogle
* [x] ~~CopyToClipboard~~ **VALIDATION-PHASE**
* [x] ~~LoadingBar~~ **VALIDATION-PHASE**
* [ ] Confirmation (onCancel, onConfirm)
* [ ] Skeleton / Shimmer loading 
* [ ] Pagination
* [ ] Carousel
* [ ] Ellipsis label
* [ ] Progress bar
* [ ] Scroll animation
* [ ] Transition animation
* [ ] Autoscroll & scroller && LinkWithScroller (integrate with react-router-dom)
* [ ] Rich text editor (horizontal toolbar, vertical toolbar) --> insert Table, Image, Video
* [ ] Styles
    - Basic css styles: Font-size, Color, 
* [ ] more customize style (use props of **styles** and **classNames** and **defaultClassName** to add the flexibility)

#### Optimization
* [ ] create storybook documentation
* [ ] create website documentation
* [ ] create guidelines page
* [ ] optimize library by not injecting all components to 1 index.es, use different folders to produce different component dist file

    
## References
1) ClickOutsidehandler --> [https://github.com/airbnb/react-outside-click-handler](https://github.com/airbnb/react-outside-click-handler)
2) CopyToClipboard --> [https://github.com/sudodoki/copy-to-clipboard#readme](https://github.com/sudodoki/copy-to-clipboard#readme)
3) LoadingBar --> [https://github.com/fakiolinho/react-loading](https://github.com/fakiolinho/react-loading)

## Contributions
We welcome community support with both pull requests and reporting bugs. Please don't hesitate to jump in.
- developement phase: features reviewed --> features pulled --> must go through **TESTING-PHASE**  --> must go through **VALIDATION-PHASE** --> a stable release features. 

**TESTING-PHASE** will be tested by Andreas, while **VALIDATION-PHASE** must wait for at least 2 weeks of usage by all the maintainer of React-Dre

### Guidelines
- Use typescript to develop the component
- All the component must be fully customized in terms of functionality and styling
- use functional component and react hooks
- Use styled-component to style your component
- all exported component must be inside a `Named Exports` including the `Default Exports`, and must have 1 `Default Exports`
- all styled component must attach a className attribute, where only the container must start with `react-dre`
- all the styles props must be injected into 1 props called `styles`


#### Naming:
- for a container or wrapper, the name of styled component must be end with `Container`
- for a styled native html element that is not a container or a wrapper, the name of styled component must be start with `Styled` 
- all the props interface name must follow the format of `I` + \<componentName\> + `Props`

#### eslint important:
- use absolute import for accessing a parent element
- the order of the import is from the farthest to the nearest component

## Developers
This library is developed and maintained by:
- [Andreas Sujono](https://github.com/Andreas-Sujono)

<br/>
