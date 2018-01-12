# Vue.js Hello World quickstart

[**Vue.js**](https://vuejs.org) is a progressive framework for building user interfaces. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. This project makes use of vue-cli to scaffold a Vue.js 2.0 app with a webpack template, vuex for store management and vue-router for route management.

## What does this come with?

* **Vue.js** Hello World project
* Served with [*express.js*](https://www.npmjs.com/package/express) package
* Hot-reloading, instantly view the changes upon every save
* Store management with [*vuex*](https://vuex.vuejs.org/en/) and route management with [*vue-router*](https://router.vuejs.org/en/)
* Cloud-ready **Dockerfile** deployment

```
FROM mhart/alpine-node:9.3.0

# Active Working Directory
WORKDIR /src

# Add app source files
ADD src/package.json /src/

#install node modules
RUN npm install

ADD src /src

RUN npm run build

CMD ["npm", "run", "prod"]
```

## Deploy this Vue.js app instantly

* Press the **Clone & Deploy** button and follow the instructions to clone the quickstart.
* Get the cluster name, run the following command:
```
hasura cluster status
```
* Browse to `/microservices/app/src` and edit the package.json file, under 'scripts'-> 'start' and 'build', update the cluster name to point to your cluster name. 

## Deploy an existing Vue.js

If you have an existing Vue.js app which you want to deploy, edit the contents inside `/microservices/app/src/` according to your app.

## Local Development

Open Terminal and `cd` into the `/microservices/app/src/` directory, and run `npm install` to install all the dependencies, and run `npm start` in terminal to build and run it. If you want to build for production, run `npm run build` and execute `npm run prod`

## Architecture of what’s happening

**Backend Architecture**

![BaaS](https://raw.githubusercontent.com/hasura/hello-vuejs/master/assets/baas.gif)

**Deployment - Behind the scenes:**

![Deployment](https://raw.githubusercontent.com/hasura/hello-vuejs/master/assets/deploy.gif)

## Adding Database functionality

Hasura provides ready to use data apis to make powerful data queries on your tables. This means that you have ready-to-use JSON apis on any tables created. The url to be used to make these queries is always of the type: `https://data.cluster-name.hasura-app.io/v1/query`

This quickstart app comes with two pre-created tables `author` and `article`.

**author**

column | type
--- | ---
id | integer NOT NULL *primary key*
name | text NOT NULL

**article**

column | type
--- | ---
id | serial NOT NULL *primary key*
title | text NOT NULL
content | text NOT NULL
rating | numeric NOT NULL
author_id | integer NOT NULL

Alternatively, you can also view the schema for these tables on the api console by heading over to the tab named `data` as shown in the screenshots below.

[data1]: https://raw.githubusercontent.com/hasura/hello-vuejs/master/assets/data-1.png
[data2]: https://raw.githubusercontent.com/hasura/hello-vuejs/master/assets/data-2.png

![alt text][data1]
![alt text][data2]

This means that you can now leverage the hasura data queries to perform CRUD operations on these tables.

The vue.js app uses these data apis to show the respective data, to see it in action check out `https://app.cluster-name.hasura-app.io/hasura` (replace cluster-name with your cluster name) and check out `api.js` at `microservices/app/src/src/store/api.js` to see how the calls are being made. You can also check out all the apis provided by Hasura from the api console by heading over to the `API EXPLORER` tab.

For eg, to fetch a list of all articles from the article table, you have to send the following JSON request to the data api endpoint -> `https://data.cluster-name.hasura-app.io/v1/query` (replace `cluster-name` with your cluster name)

```json
{
    "type": "select",
    "args": {
        "table": "article",
        "columns": [
            "id",
            "title",
            "content",
            "rating",
            "author_id"
        ]
    }
}
```

To learn more about the data apis, head over to our [docs](https://docs.hasura-stg.hasura-app.io/0.15/manual/data/index.html)

## Adding Authentication to the App

![Auth UI](https://raw.githubusercontent.com/hasura/hello-vuejs/master/assets/AuthUIKit.png)

Follow the [Authorization docs](https://docs.hasura.io/0.15/manual/users/uikit.html) to add authentication UI to your app. 
Add the following code under `app` section to your `routes.yaml`.

```
authorizationPolicy:
  restrictToRoles: ["user"]
  noSessionRedirectUrl: https://auth.{{ cluster.name }}.hasura-app.io/ui/
  noAccessRedirectUrl: https://auth.{{ cluster.name }}.hasura-app.io/ui/restricted
```

## Next steps:

* [Change subdomain](https://docs.hasura.io/0.15/manual/gateway/index.html#custom-domains)
* [Adding Microservice](https://docs.hasura.io/0.15/manual/custom-microservices/index.html)
