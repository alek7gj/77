# Cypress task 77diamonds

## Overview
This project contains automated test cases for a sample web application with two key pages:
- `index.html`: Product list
- `upload.html?itemId=X`: Image upload for specific items

## Prerequisites
- Node.js installed
- Cypress installed (`npm install cypress`)

## Configuration
Edit `cypress.config.js` to set your base URL:
```js
baseUrl: 'http://localhost:3000/'
```

## How to Run Tests
```bash
npx cypress open     # to use the GUI
npx cypress run      # to run in headless mode
```

## Test Coverage
### Included Test Cases:
- TC01: Verify table loads with items
- TC02: Verify Edit Images navigation
- TC03: Verify table column headers
- TC05: Verify item details appear
- TC06: Verify color/fabric table loads
