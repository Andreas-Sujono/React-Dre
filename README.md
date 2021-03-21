<p align="center">
<img
  alt="Logo of React Dre UI"
  src="https://andreas-sujono.github.io/React-Dre/assets/logo-with-name.png"
  style={{ margin: 'auto', display: 'block' }}
/>
</p>


# React-Dre
A fully customized component library that summarizes all the great React libraries out there while maintaining the functionality and flexibility of styling.

We compile other popular component libraries like `React-Bootstrap`, `Material UI`, `Ant Design`, `Semantic UI`, `Circuit UI`, and many more  into this one library where we add more functionality and flexibility of styling

## Installation

Get the latest version:

```bash
npm install react-dre@latest
```

or

```bash
yarn add react-dre@latest
```

## How to use
you can import any component directly from `react-dre`, for example: 
- `import { Modal } from 'react-dre'`

**BUT**

we recommend you to import the component from the component modules itself to reduce the bundle size, for example:
- `import { Modal } from 'react-dre/Modal'`

### To know what component is available and how to use it, visit our official storybook documentation here [https://andreas-sujono.github.io/React-Dre/](https://andreas-sujono.github.io/React-Dre/)


## Documentation
#### Current Version (Pre-Release): 0.2.14
Full Documentation and how to use each component is (IN PROGRESS)

- Storybook: [https://andreas-sujono.github.io/React-Dre/](https://andreas-sujono.github.io/React-Dre/)

**Component**
1) ClickOutsidehandler
2) CopyToClipboard (copy, UrlCopyCard)
3) LoadingBar (LoadingBar, FullPageLoadingBar)
4) Modal
5) Button

## Future Development
* [x] ~~Modal~~ --> **VALIDATION-PHASE**
* [x] ~~ClickOutsidehandler~~ --> **VALIDATION-PHASE**
* [ ] Tooltip
* [ ] DropdownMenu
* [ ] Notifications (toast, popup, snackbar, etc)
* [ ] Grid --> **TESTING-PHASE**
* [ ] table
* [ ] Search bar --> - **TESTING-PHASE**
* [ ] Input --> Text(All HTML5 input type), Checkbox, radio, Textarea, date, time, dateTime, phoneNumber, country, switch toogle
* [x] ~~CopyToClipboard~~ -->  **VALIDATION-PHASE**
* [x] ~~LoadingBar~~ --> **VALIDATION-PHASE**
* [ ] Confirmation (onCancel, onConfirm)
* [ ] Skeleton / Shimmer loading 
* [ ] Pagination
* [ ] Carousel
* [ ] Ellipsis label
* [ ] Progress bar
* [ ] Scroll animation (see `react-scroll`)
* [ ] Transition animation
* [ ] Autoscroll & scroller && LinkWithScroller (integrate with react-router-dom)
* [ ] Rich text editor (horizontal toolbar, vertical toolbar) --> insert Table, Image, Video
* [ ] Styles
    - Basic css styles: Font-size, Color, 
    - CSS styling distribution file
* [ ] more customize style (use props of **styles** and **classNames** and **defaultClassName** to add the flexibility)

#### Optimization
* [ ] create storybook documentation
* [ ] create website documentation
* [ ] create guidelines page
* [ ] add unit test for all the components
* [x] ~~optimize library by not injecting all components to 1 index.es, use different folders to produce different component dist file~~
* [ ] optimize component that is heavy, for ex: Icon --> we can separate it into its own component like `@react-dre/icon`
* [ ] create script to release and changelog, see material UI for the example
* [ ] optimize bundle size
    
## References

We aware that there are tons of other component library out there. Therefore, to make this library the best one. We need to research other library functionality before include it inside `React-dre`

**Similar component libary**, these 5 will be our main references :
1) React-bootstrap
2) Material-ui
3) Ant design
4) Semantic UI
3) Circuit-UI

<br/>

**Component reference**:
1) ClickOutsidehandler --> [https://github.com/airbnb/react-outside-click-handler](https://github.com/airbnb/react-outside-click-handler)
2) CopyToClipboard --> [https://github.com/sudodoki/copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)
3) LoadingBar --> [https://github.com/fakiolinho/react-loading](https://github.com/fakiolinho/react-loading)
4) Modal --> [https://github.com/reactjs/react-modal](https://github.com/reactjs/react-modal)

## Contributions
We welcome community support with pull requests, fixing issues, and reporting bugs. Please don't hesitate to jump in.

#### Development cycle
1) Features reviewed 
2) Features must go through the **TESTING-PHASE**, where we test all the component functionality
3) Features pulled and can be used experimentally
4) Features must go through the **VALIDATION-PHASE**, where people can use commercially and reports bug if any
5) Features is included in the next stable release features. 

For more info, please visit [CONTRIBUTING.md](https://github.com/Andreas-Sujono/React-Dre/blob/master/CONTRIBUTING.md)

## Developers and Maintainers
This library is developed and maintained by:
- [Andreas Sujono](https://github.com/Andreas-Sujono)

<br/>
