PROJECT_ID=$(gcloud config get-value divopscloud/shell-trigger)
all:
	@echo "build  - Build the docker image"
	@echo "deploy - Deploy the image to Cloud Run"
	@echo "clean  - Clean resoruces created in this test"
	@echo "call   - Call the Cloud Run service"

deploy:
	gcloud run deploy shell-trigger \
		--image gcr.io/$(PROJECT_ID)/shell-trigger \
		--max-instances 1 \
		--platform managed \
		--region us-west1 \
		--no-allow-unauthenticated

build:
	gcloud builds submit --tag gcr.io/$(PROJECT_ID)/shell-trigger

clean:
	-gcloud container images delete gcr.io/$(PROJECT_ID)/shell-trigger --quiet
	-gcloud run services delete shell-trigger \
		--platform managed \
		--region us-west1 \
		--quiet

call:
	@echo "Calling Node-JS Cloud Run service"
	@url=$(gcloud run services describe shell-trigger --format='value(status.url)' --region us-west1 --platform managed); \
	token=$(gcloud auth print-identity-token); \
	curl --request POST \
  		--header "Authorization: Bearer $$token" \
  		--header "Content-Type: text/plain" \
  		$$url/exec \
  		--data-binary "ps -ef"