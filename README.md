<!-- accessible-ecommerce-demo README 2.0 - START -->
<!-- Snazzy new logo here
<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>

  <br>
  <br>
</div>  
-->
<!-- accessible-ecommerce-demo README 2.0 - END -->



# accessible-ecommerce-demo

A truly accessible demo eCommerce website brought to you by Publicis.Sapient.

**This project is currently in alpha status.** This means that anything could change at any time. Additionally, it means that your feedback will have an impact on how the project evolves, so please feel free to [open issues](https://github.com/PublicisSapient/accessible-ecommerce-demo/issues).

## Accessibility Criteria

We are supporting the following:

*	[NVDA](https://www.nvaccess.org/) for Mozilla Firefox
*	VoiceOver for Safari
*	Talkback for Android Chrome

<!--
## Todo
* Their templating, styling, linting, etc. sections where they indicate which tools they are using
* Their note on contributing
* Their core team section with photos
-->

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Contributing](#contributing)
4. [Core Team](#core-team)

<!--
1. [Install](#install)
2. [Introduction](#introduction)
3. [Concepts](#concepts)
4. [Contributing](#contributing)
5. [Support](#support)
6. [Core Team](#core-team)
7. [Sponsoring](#sponsoring)
8. [Premium Partners](#premium-partners)
9. [Other Backers and Sponsors](#other-backers-and-sponsors)
10. [Gold Sponsors](#gold-sponsors)
11. [Silver Sponsors](#silver-sponsors)
12. [Bronze Sponsors](#bronze-sponsors)
13. [Backers](#backers)
14. [Special Thanks](#special-thanks-to)
-->

## Introduction

The Accessible eStore is an iterative, interactive prototype of an e‑commerce storefront. It explores concepts in designing and developing for the web considering accessibility first. Web accessibility is more of a journey than a destination. In that spirit, this experience will evolve based on our continued learning and user feedback.

### What our demo is, and what it is not

**It is intended to be fully keyboard navigable and screen reader-friendly in its current state.** Navigate with your tab key to discover hidden wayfinding cues, and note how we tried to provide screen reader users with the appropriate amount of context and information as they navigated through the site. Let us know if you experience any issues or have suggestions.

**It is not fully designed.** Think of it as an interactive desktop wireframe right now. We are working out all of the interactions first, then applying an eye-catching design later.
It is not fully functional at the moment. For example, right now you can’t add an item to your cart. We plan to make that work shortly. This is as far as we got for Global Accessibility Awareness Day.

**It is not representative of today’s best coding standards – yet.** This code came out of multiple hackathon sessions. The point of the demo today is to showcase how an accessible e‑commerce website should feel and behave. We will clean up the code later.

**It is not perfect.** We didn’t want to waste time trying to make it perfect before getting it out there. The danger would be that it would never be perfect enough. Edward de Bono said it best: **“An idea that is developed and put into action is more important than an idea that exists only as an idea.”**

## Setup
Setup

## Contributing
Contribution

## Core Team
Core Teammembers





<!-- accessible-ecommerce-demo README 1.0 - START -->

# accessible-ecommerce-demo

A truly accessible demo eCommerce website brought to you by Publicis.Sapient.

**This project is currently in alpha status.** This means that anything could change at any time. Additionally, it means that your feedback will have an impact on how the project evolves, so please feel free to [open issues](https://github.com/PublicisSapient/accessible-ecommerce-demo/issues).

## Accessibility Criteria

We are supporting the following:

*	[NVDA](https://www.nvaccess.org/) for Mozilla Firefox
*	VoiceOver for Safari
*	Talkback for Android Chrome


## Production Notes

### BEM

Please review the [BEM documentation](http://getbem.com/naming/) in preparation for the hackathon.

### GIT Flow

Please branch off of the default branch. The default branch is currently `dev`

Creating a new branch as follows. The general nomenclature for a branch should be 'feature/feature-name', 'defect/defect-id', 'hotfix/hotfix-date'. Ex) Create a feature by running the following in your terminal:
`
git branch -b feature/carousel
`

Please be sure to provide detailed comments within your commits as follows:

`
git commit -m "Title of the commit" -m "Detailed comment"
`

Open up a pull request from your working branch into `dev`, and have your partner approve and merge the branch within GitHub.

### Developer Syntax Settings
These settings override both User and Default settings for the HTML syntax. Please add these to your IDE syntax overrides.
`
{
	"tab_size": 2,
	"translate_tabs_to_spaces": true
}
`
We're also using ESLint, and there's some config files for that already in the repo that your IDE should be able to pick up.

## Initial Setup

1) Open Terminal on your computer (or Terminal equivalent).

2) Navigate to the directory where you want this repository code to be on your local computer using the `cd foldername` command.

3) Enter the following 3 lines in Terminal:

```bash
git clone https://github.com/PublicisSapient/accessible-ecommerce-demo.git
cd accessible-ecommerce-demo
npm install
```

## Development
After completing the initial setup, you can simply run the following in Terminal:

```bash
npm start
```
And a local server will be started with hot-reloading/injection for js and scss files. 

### Parcel.js 
The project is using Parcel.js as a bundler/transpiler, which should auto-magically bundle any of the files that are embedded, linked or imported. There are some limitations, like the pre-compiled handlebars templates. See how the `sprites.svg` file is referenced in those templates for examples of how the relative paths need to be changed in these cases. 

### Handlebars.js
We are using handlebars for templating and dynamic component re-rendering. See codebase for examples, detailed usage notes will be added later, but there was some distinctions made between a render-once template (like replacing placeholder blocks on a page for header/footer, or larger component blocks). These templates are usually inserted using `element.outerHTML`, so that the placeholder DOM element is replaced entirely. For components like the product grid or pagination—which need to be re-rendered any time the data changes—`element.innerHTML` is used.

### Icons
There's a single sprites.svg file that has (almost) all of the site's icons in it. These can be imported and styled individually. See codebase for examples, usage notes will be added later.

### PouchDB
We're using PouchDB to create an in-browser database via the Indexed DB API. Usage notes will be added later.

### CSS
The header/main nav and PLP page are using CSS Grid and Flexbox. CSS Grid is amazing to work with, so exploration of these is encouraged! We don't need to support IE!

### Automated testing with Pa11y
An automated accessibility test can be run to look for major accessibility or HTML validity errors. The test is run using pa11y-ci (https://github.com/pa11y/pa11y-ci).

To run the test, stop any runner parcel server (Control + C) enter the following into Terminal:
```bash
npm run test
```
This process will 
* delete the dist folder, 
* build files to a new dist folder with a local url structure (as opposed to normal build process that prepends urls with a Github specific path),
* spin up a server on http://127.0.0.1:8080, 
* run the pa11y tests, and 
* shut down the server. 

Any errors will be displayed in Terminal.

## Deployment
To deploy to the public site, run the following in Terminal:
```bash
npm run build
npm run deploy
```
This can be done from any working branch, but ideally would should be run from `dev` or `master`. 
*NB: These two lines will be simplified into a single command in the next update

<!-- accessible-ecommerce-demo README 1.0 - END -->
