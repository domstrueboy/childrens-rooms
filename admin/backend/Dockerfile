#Dockerfile
#Step 1 Build
FROM golang:1.11-alpine3.8 AS build
RUN apk --no-cache add gcc g++ make
RUN apk add git
WORKDIR /go/src/app
COPY . .
RUN go get github.com/gin-gonic/gin
RUN go get go.mongodb.org/mongo-driver/mongo
RUN GOOS=linux go build -ldflags="-s -w" -o ./bin/admin-backend ./main.go
#Step 2 Final
FROM alpine:3.8
RUN apk --no-cache add ca-certificates
WORKDIR /usr/bin
COPY --from=build /go/src/app/bin /go/bin
EXPOSE 8080
ENTRYPOINT /go/bin/admin-backend --port 8080