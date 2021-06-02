### Dockerignore file

Include all the files that you dont need in the app, this includes your node_modules foler

### Commands for building image and running container

when running docker run -p 'port that we would like to open for the outside world to access our host machine at' : 'port on the container that expects traffic'

### Running a container commands

docker build . -t image-name
docker run -d -p 5000:2000 --name node-app image-name
docker exec -it container-name bash

### Running a container with a bind mount volume

docker run -d -p 5000:2000 --name node-app image-name -v pathtoFolderonLocalMachine:pathtoFolderOnContainer

##command shell
docker run -d -p 5000:2000 --name node-app image-name -v %cd%:/app

##powershell
-v ${pwd}

##mac/linux
-v $(pwd)

### stopping a container

docker rmi image-name
docker rm container-name -f
