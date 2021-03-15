# React-Dre
A fully customized component library that summarizes all the great React libraries while maintaining the functionality and flexibility of styling that makes your frontend development much easier, initiated by An**DRE**as himself.

We compile other popular component libraries into this one library `React-Dre` where we add more functionality and flexibility of styling

## Installation

Get the current version:

```bash
npm install react-dre@<insert-current-version>
```

or

```bash
yarn add react-dre@<insert-current-version>
```

## How to use
you can import any component directly from `react-dre`, for example: 
- `import { Modal } from 'react-dre'`

BUT

we recommend you to import the component from the component modules itself, for example:
- `import { Modal } from 'react-dre/Modal'`


## Documentation
#### Current Version (Pre-Release): 0.2.13
Full Documentation and how to use each component is IN PROGRESS

**Component**
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
* [ ] add unit test for all the components
* [ ] ~~optimize library by not injecting all components to 1 index.es, use different folders to produce different component dist file~~

    
## References

We aware that there are tons of other component library out there. Therefore, to make this library the best one. We need to research other library functionality before include it inside `React-dre`
1) ClickOutsidehandler --> [https://github.com/airbnb/react-outside-click-handler](https://github.com/airbnb/react-outside-click-handler)
2) CopyToClipboard --> [https://github.com/sudodoki/copy-to-clipboard#readme](https://github.com/sudodoki/copy-to-clipboard#readme)
3) LoadingBar --> [https://github.com/fakiolinho/react-loading](https://github.com/fakiolinho/react-loading)
4) Modal --> react-modal

## Contributions
We welcome community support with both pull requests and reporting bugs. Please don't hesitate to jump in.

#### Development cycle
1) Features reviewed 
2) Features must go through the **TESTING-PHASE**, where we test all the component functionality
3) Features pulled and can be used experimentally
4) Features must go through the **VALIDATION-PHASE**, where people can use commercially and reports bug if any
5) Features is included in the next stable release features. 

**TESTING-PHASE** will be tested by Andreas, while **VALIDATION-PHASE** must wait for at least 2 weeks of usage by all the maintainer of React-Dre

For more info, please visit [CONTRIBUTING.md](https://github.com/Andreas-Sujono/React-Dre/blob/master/CONTRIBUTING.md)

## Developers and Maintainers
This library is developed and maintained by:
- [Andreas Sujono](https://github.com/Andreas-Sujono)

<br/>
