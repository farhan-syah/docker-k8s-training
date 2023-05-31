When you want to deploy a completed application to kubernetes, there are a couple of steps you need to follow.

1. Test each application locally

2. Try to build and run the images locally, either using `docker run` or using `docker-compose`

3. Build a staging/production image and push the application images to the image repository

4. Deploy the deployment. Run `kubectl get pods` to see whether the pods are running correctly. The major issues that we usually face at this stage:

- Error getting the image from the repository. In this case, make sure you have provided a credential secret properly so the kubernetes cluster have the correct permission to download the image
- Error when running the container. In this case, your app might depends on certain environment values that are missing. You can fix this, buy providing the proper env values directly inside the deployment manifest, or buy getting the environment from a secret that you've created (recommended).

5. If everything works correctly, now you have running pods.

6. If your pods are listening to certain ports, you can test the deployment by port forwarding your deployment ports to your local machine ports, by using `kubectl port-forward ...`

7. Now, you have your deployment ready. To expose the deployments to outside world, you can use, either load balancer or ingress controller.
