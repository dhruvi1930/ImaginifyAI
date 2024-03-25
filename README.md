

---

## Getting Started with ImaginifyAI

![DALL·E 2024-03-25 15 59 56 - Create a sleek, horizontal image in a 16_9 ratio with a dark theme that includes the text 'ImaginifyAI' prominently displayed  The design should embod](https://github.com/dhruvi1930/ImaginifyAI/assets/112989118/0cf81141-4bad-405f-840d-78bd3f603390)


ImaginifyAI utilizes the MERN stack technology, combining MongoDB, Express.js, React, and Node.js to deliver an image generation. Visit website [here](https://dhruvi1930.github.io/ImaginifyAI/). Follow the instructions below to get your development environment set up and running.

### Running the Server

To start the server on your local machine, follow these steps:

1. Open your terminal and navigate to the server directory within your cloned repository.
2. Install the required Node.js packages by running:
   ```
   npm install
   ```
3. Once the installation is complete, start the server with:
   ```
   npm start
   ```

### Running the Frontend

To run the frontend application, carry out the following steps:

1. Open a new terminal window or tab and navigate to the frontend directory in your cloned repository.
2. Install the necessary packages using npm:
   ```
   npm i
   ```
3. After the installation, start the frontend application with:
   ```
   npm start
   ```

### Configuring Environment Variables

For the application to function correctly, you'll need to add a `.env` file to the parent directory of your project. This file should contain all the necessary secret keys and environment-specific variables required by ImaginifyAI, such as API keys for OpenAI, MongoDB, and Cloudinary.

Example `.env` file structure:

```
# Environment Config
# Replace the values with your actual API keys and secrets
OPENAI_API_KEY='your_openai_api_key_here'
MONGODB_URI='your_mongodb_uri_here'
CLOUDINARY_URL='your_cloudinary_url_here'
```

**Important:** Never commit your `.env` file to your repository. Ensure it's listed in your `.gitignore` file to prevent accidental exposure of your secrets.

---


