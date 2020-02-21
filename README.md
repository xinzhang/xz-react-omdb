## XZ React OMDB Demo App

### `set up API key`

Need to set up the API key in your local .env file
Please refer to .env.sample as an example.

### `npm start`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### Docker build

This app also can build in docker mode by different environment.\
You need to have different environment settings file. eg. .env.dev, .env.stg, .env.prod \

`running docker build in pipeline with different environment`

```
export DEPLOY_ENV=dev
docker build --tag "$CONTAINER_REGISTRY/omdb-demo-$DEPLOY_ENV:$CI_BUILD_REF"
```

`running docker in local`

```
docker build -t omdb:latest .
docker run --rm -p 3000:3000 omdb:latest
```
