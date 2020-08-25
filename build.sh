export REACT_APP_HOST="http://bmwadforth.com:8080/api/v1"
yarn build
docker build -t whiskey0/front:latest .
docker push whiskey0/front:latest