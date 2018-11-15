docker build -t localhost:5000/blog-platform .
docker push localhost:5000/blog-platform
docker service update --image localhost:5000/blog-platform blog-platform
