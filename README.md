# originalcottages-testautomation

It is an example Cypress automation for originalcottages.co.uk

![](./media/demo.gif)

## Overview

- This automation is for searching properties in https://www.originalcottages.co.uk/
- The automation selects destination and writes 'sussex'
- Sets the date +5 days from today
- Searches properties
- Gets the results and checks the last page is correct


## Installation

You must have [Node.js](https://nodejs.org/) on your system.

Clone [this repository](https://github.com/ezgittaner/originalcottages-testautomation)

```bash
## install all dependencies from the root directory

cd originalcottages-testautomation

npm install

```

## Opening Cypress GUI

```bash
# Open Cypress GUI
npm run cypress:open

# Or
npx cypress open 
```