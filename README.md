## XZ React OMDB Demo App

### `set up API key`

Need to set up the API key in your local .env file
Please refer to .env.sample as an example.

### `npm start`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run test`

Test the application. The testing is a mixture of API mocking, Jest snapshot and adoption of the \
latest react-test-libraryto test the hooks component and dom.

## Live address in AWS s3

[https://xz-s3-omdb.s3-ap-southeast-2.amazonaws.com/index.html](Demo)

## Screen shots

![Alt text](/screenshots/default_screen.png 'Default desktop screen')

![Alt text](/screenshots/mobile_scree.png 'Mobile screen')

![Alt text](/screenshots/no_pager_scree.png 'The search result does not need a pager')

![Alt text](/screenshots/paging_screen.png 'A default pager')

## Design and considerationn

- Use hooks to demonstrate the latest React way to write functional component
- Use styled-components to make it easier for component styling
- Use dotenv to load settings to environment. ( API key is saved as CI varialbe so it won't be exposed in Repo)
- Further to do
  - can useContext hooks (feature branch)
  - or can add redux to show movie detail (feature branch)
  - add circle CI/CD to publish to AWS S3 (done) (feature branch)
  -
