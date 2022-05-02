# ItCrowd-API

In this opportunity I built a NodeJs and Express REST API about cars with Firestorage and then I deployed with Firebase Functions.

When I started, It was all right but when I had to deploy it, my first idea was heroku but I realized that heroku wasn't running ok so I research to deploy it with Firebase.
Functions were done without much science. Maybe I could add some restrictions or messages when client do something, but I think it's ok.

To run the API, you will need credentials so you can get them at <a href="https://console.firebase.google.com/">Firebase</a>. You should create a new project and then obtain credentials. Once you have credentials in funtions folder, set your env variable with your .env file or >>> $env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH" <<< this command is just for windows but you can read more about <a href="https://cloud.google.com/docs/authentication/production?hl=es-419#auth-cloud-implicit-nodejs">here</a>.
When you have all ready, use firebase login > firebase init functions and then firebase serve.

If you want to have a look of the API, I leave here the <a href="https://us-central1-cars-api-7abc3.cloudfunctions.net/app/">Link</a>
The possible routes are:
- /brands (GET and POST)
- /products (GET)
- /products/brand/:brand (GET)
- /products/:id (GET)
- /products/create (POST)
- /products/:id (PUT)
- /products/:id (DELETE)

I hope you like it! Bye :)
