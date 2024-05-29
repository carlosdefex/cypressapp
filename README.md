# Blankfactor Cypress Template

## About
This project is created using Cypress to serve as a template for creating new projects at Blankfactor.

## Installation and Running Tests

Follow these steps to set up and run the tests in this project:

1. **Install Cypress**:
Install Cypress as a development dependency using npm:

## Installation and Running Tests

Follow these steps to set up and run the tests in this project:

1. Clone the repo
    ```sh
    git clone https://github.com/cypress-io/cypress-realworld-app.git
    ```
2. Once cloned, change into the cypress-realworld-app directory and install all of the npm dependencies using Yarn.
    ```sh
    yarn install
    ```
3. Run the application with
    ```sh
    yarn dev
    ```
4. Once the application is up and running, a browser window should open a new tab to http://localhost:3000
5. Install Cypress as a development dependency using npm:
   ```sh
   cd /your/project/path
   ```
   ```sh
   npm install cypress --save-dev
   ```
6. Run Cypress:
If this is your first time running Cypress, follow the on-screen instructions to get started:
    ```sh
    npx cypress open
    ```
7. Project Setup:
- **Create or Select a Project**: Use the Launchpad to either set up a new project or select an existing one.
- **Configure Testing Type**: Choose the type of testing you need (e.g., E2E, Component Testing).
- **Select a Browser**: Choose a browser in which to run your tests.
8. Write Tests
After setting up your project, you can begin writing tests. Create `.spec.js` files in the `cypress/integration` directory.
9. Run Tests
To run your tests, use the Cypress Test Runner, which can be accessed via the Launchpad or by running the following command:
    ```sh
    npx cypress run
    ```

For detailed documentation on how to write tests using Cypress, visit [Cypress Documentation](https://docs.cypress.io).

