# accessible-ecommerce-demo

A truly accessible demo eCommerce website brought to you by SapientRazorfish.

**This project is currently in alpha status.** This means that anything could change at any time. Additionally, it means that your feedback will have an impact on how the project evolves, so please feel free to [open issues](https://github.com/SapientRazorfish/accessible-ecommerce-demo/issues).

## Accessibility Criteria

We are supporting the following:

*	[NVDA](https://www.nvaccess.org/) for Mozilla Firefox
*	VoiceOver for Safari
*	Talkback for Android Chrome


## Production Notes

### BEM

Please review the [BEM documentation](http://getbem.com/naming/) in preparation for the hackathon.

### Watch Task

You will need to install a recent version of [**Node**](https://nodejs.org) and [**NPM**](https://www.npmjs.com/).

* The setup here is quite similar to what is described here: https://webdesign.tutsplus.com/tutorials/watch-and-compile-sass-in-five-quick-steps--cms-28275 - but the big difference being the paths: it will automatically convert any `.scss` file in "Components" to the corresponding `.css` file.

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

### Task Ownership

+ Page Assembly - Kristen
+ Build 'Script' - Rene


### Quick Start for Development

1) Open Terminal on your computer (or Terminal equivalent).

2) Navigate to the directory where you want this repository code to be on your local computer using the `cd foldername` command.

3) Enter the following 4 lines in Terminal:

```bash
git clone https://github.com/SapientRazorfish/accessible-ecommerce-demo.git
cd accessible-ecommerce-demo
npm install
npm run scss
```
