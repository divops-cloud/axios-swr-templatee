gcloud compute ssh --zone "us-west1-a" "web-scripting-trigger"  --project "shell-trigger"

# // CREATE STATIC IP
gcloud compute addresses create divops-reserved-ip --project=shell-trigger --region=us-west1

gcloud compute instances add-access-config web-scripting-trigger --project=shell-trigger --zone=us-west1-a --address=34.83.133.76

gcloud compute ssh --zone "us-west1-a" "admin@divops.cloud"  --project "shell-trigger"