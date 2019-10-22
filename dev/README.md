# Go Live Reload
Production ready boilerplate with live-reloading development

Read [this article](https://medium.com/@kdarutkin/how-to-live-reload-code-for-golang-and-docker-without-third-parties-ee90721ef641) first

Read [this article](https://levelup.gitconnected.com/how-to-live-reload-code-for-golang-and-docker-without-third-parties-ee90721ef641) first


## Using with Docker
Start production environment
```console
$ docker-compose up -d production
// View logs
$ docker-compose logs --tail 100 -f production
```

Start development environment 
```console
$ docker-compose up dev
```

Re-building docker
```console
$ docker-compose build --no-cache
```

Attach to bash
```console
$ docker-compose exec <production|development> sh
```

## Example
After running docker-compose open:

development: http://localhost:8080/

production:  http://localhost:8081/ 

## Without docker
```bash
$ make serve
``` 
You may need to execute `go mod download` in `src` folder first

## Configure scripts
#### ./scripts/production.sh
```bash
cd src 
go mod download
go build -o /bin/app && /bin/app
```

#### ./scripts/development.sh`
```bash
cd src
go run main.go
```
