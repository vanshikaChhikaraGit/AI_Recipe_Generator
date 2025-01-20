# AI-Based Recipe Generator

## Project Overview
The AI-Based Recipe Generator is a web application designed to help users discover, create, and share recipes. Leveraging AI, it generates personalized recipe suggestions, assists users in crafting new recipes, and provides a platform for sharing culinary creations. The application also includes OAuth integration for secure and seamless user authentication.
![Screenshot 2025-01-20 235730](https://github.com/user-attachments/assets/a12a4ee6-eec5-40f4-b033-8e063a7c80fa)
![Screenshot 2025-01-20 235825](https://github.com/user-attachments/assets/d2ad883d-60bc-4d22-9334-332899970e80)

---

## Features

### Recipe Suggestions
- Get AI-generated recipe suggestions based on your preferences and available ingredients.

### Recipe Creation
- Create new recipes by specifying ingredients, cooking methods, and desired outcomes.

### Recipe Sharing
- Share your favorite recipes with other users on the platform.

### User Authentication
- Sign in securely using OAuth to access personalized features and save your recipes.

---

## Tech Stack
- **Frontend:** React.js (with Tailwind CSS for styling)
- **Backend:** Node.js with Express.js
- **AI Model:** Gemini API integration
- **Database:** MongoDB
- **Authentication:** OAuth 2.0

---

## Installation and Setup

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn
- MongoDB instance
- OAuth client credentials (e.g., Google, Facebook, or GitHub OAuth)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-recipe-generator.git
   cd ai-recipe-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_uri
   OAUTH_CLIENT_ID=your_oauth_client_id
   OAUTH_CLIENT_SECRET=your_oauth_client_secret
   Gemini_API_KEY=your_ai_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Sign In:** Use the OAuth login to access the app.
2. **Generate Recipes:** Enter ingredients or specify preferences to get recipe suggestions.
3. **Create Recipes:** Use the recipe creation tool to craft and save your recipes.
4. **Share Recipes:** Post recipes to share them with the community.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request with a detailed description of your changes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- [GeminiAI](https://ai.google.dev/gemini-api/docs/models/gemini) for the AI model.
- [OAuth 2.0](https://oauth.net/2/) for authentication.
- [MongoDB](https://www.mongodb.com/) for database support.
- Community feedback and contributions.

