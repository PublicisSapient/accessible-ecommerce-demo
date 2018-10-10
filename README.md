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

### Sass Watch Task

You will need to install a recent version of [**Node**](https://nodejs.org) and [**NPM**](https://www.npmjs.com/).

* The setup here is quite similar to what is described here: https://webdesign.tutsplus.com/tutorials/watch-and-compile-sass-in-five-quick-steps--cms-28275 

* There are a few options now regarding the ouput of the compiled CSS:
    * **Global CSS:** (recommended) If the Sass file is named with a leading underscore, like `/components/accordion/_accordion.scss`, it can be added to the `@import` block inside `/scss/global.scss`, and the component styles will be bundled automatically into the `/css/global.css` file.
	* **Page-level CSS:** Each page under `/pages/` can have it's own specific CSS that is unique to that page. See the example at `pages/plp/plp.scss`. Sass files under these directories will be compiled to `/css/PAGE_NAME/SASS_FILENAME.css`
	* **Non-global component CSS:** This is similar to the original setup, but the output path is different. Sass files without leading underscores will be output to `/css/components/COMPONENT_NAME/SASS_FILENAME.css`

All you should need to do is run `npm run scss` and it *should* take care of the rest.

### JS Watch Task (Webpack)

* A webpack configuration has been set up to compile all of the JS from the `/components/` directories into `js/main.js`.

* The webpack setup allows us to ES6 modules to import files. This is useful for utility functions that can be shared across components. See `components/modal/modal.js` where the useful functions have been moved to `src/js/utils.js` and can be imported as needed.

* Page-specific JS files can be added under the `/pages/` directories and they will not be bundled into the `js/main.js`.

* In the long-run, we can move the Sass compilation over to webpack. Anyone who wants to can take on this task. The ES6 component setup can likely be cleaned up as well by someone with more knowledge on best-practices, and possibly a hot-reload option (although this is less ideal in a pair programming environment like a hackathon)

### DOCS! (Living styleguide/Component Library/Toolkit/blahblahblah)

Check them out: [Accessibility Docs](https://publicissapient.github.io/accessible-ecommerce-demo/docs/v1/index.html)

* These Docs have been created with [Fabricator](https://github.com/fbrctr/fabricator). The repo is no longer actively maintained but the framework was chosen because it still works and because of its hackability and ease-of-use compared to the infintie other options that exist. Because the repo isn't being maintained this project is using a forked version that we can modify as needed.

* More info on how to add to/edit/compile the docs will be coming soon, in the meantime please enjoy the WIP linked above.

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
	"tab_size": 4,
	"translate_tabs_to_spaces": false
}
`

### Quick Start for Development

1) Open Terminal on your computer (or Terminal equivalent).

2) Navigate to the directory where you want this repository code to be on your local computer using the `cd foldername` command.

3) Enter the following 4 lines in Terminal:

```bash
git clone https://github.com/PublicisSapient/accessible-ecommerce-demo.git
cd accessible-ecommerce-demo
npm install
npm run scss
```
### Generating Components and Pages
You can quickly get started creating a component or page by running the npm command 'generate'

```javascript
npm run generate
```

You'll then be prompted to choice if you're generating a component or page. Select the option you're building.

The next prompt will ask you for the component or page name. Type in the name, and hit enter.

Your component will be located in the `components` directory if you chose to build a component, or in the `pages` directory for pages.

NOTE: Hyphenated names aren't normalized for class names. So if you have a hyphenated name, you need to replace the hyphen and capitalize the second word. For example: `component-name` needs to be changed to `ComponentName`.

### Previewing your component

You can quickly and easily preview your component by navigating to your local site's preview.html page with the URL param: component=<your_component_name>.

For example:

```HTML
http://localhost:8080/preview.html?component=global-navigation
```
