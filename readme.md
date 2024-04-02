Demo repo to quickly show an example of taking an express server from code to container to kubernetes. Make sure NPM and Docker is installed and running with kubernetes enabled.
To install and run with nodejs run the following commands:

```
npm install
npm start
```

To build the container and deploy to kubernetes use the following commands:

```
npm run build
kubectl apply -f ./deploy.yml
```

Can run with just docker with the following command:

```
docker run -p 3000:3000 express-app:v1
```
