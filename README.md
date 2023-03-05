# Evaluation task for Wargaming position

## Project structure

### `services`
`services` is a cathalog that contains all services: sub-catalogs
`core` - Node.js backend API  
`web-client`   - React.js SPA  
`proxy` - Traefik proxy

#### `web-client`
React.js + Typescript SPA. File structure:
```
.
├── build
│   ├── local // Local deployment configs
│   └── staging // Staging deployment configs
├── src
│   ├── components // Common and specific components
│   ├── const // String constants, API urls
│   ├── state // Recoil state values and logic
│   └── styles // Common scss files
└── types
```

#### `core`
Node.js caching API between client and WoWSh ship list json API
```
.
├── build
│   ├── local // Local deployment configs
│   └── staging // Staging deployment configs
├── src
│   ├── boot // Boot tasks on server start
│   ├── config // Base configuration variables, configs for rest framework and logger
│   ├── const // String constants and enums
│   ├── rest // Routers, controllers, validation
│   ├── services // Service handlers 
│   └── utils // Helpers
└── types // Declarations
```

### `deploy`
`deploy` contains deploy related configuration: compose files and local compose files

### Local set up
Prerequisites: Node.js 18.14.2+ ([nvm](https://github.com/nvm-sh/nvm) as an option)
```shell
cd services/core
npm i
cd ../web-client
npm i
cd ../../deploy/local
cp docker-compose.local-example.yml docker-compose.local.yml
# Optionally edit local compose file for your requirements
docker-compose -f docker-compose.local.yml
```


### TODO
1. Add error handling modal for failed requests