

# Intervue

Intervue is a cutting-edge platform designed to revolutionize the job preparation process. By leveraging the power of AI, this platform allows users to input job descriptions (JDs), generates tailored interview and provides personalized feedback to enhance users' readiness for their dream jobs.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Job Description Analysis**: Users can input any job description, and the AI generates relevant interview.
- **Interactive Q&A**: Users can answer questions directly on the platform.
- **Personalized Feedback**: The AI evaluates the responses and provides detailed feedback to help users improve.
- **User Authentication**: Secure user sign-up and login.
- **Database Management**: All user data is securely stored in MongoDB.
- **Responsive Design**: Built using Next.js and Tailwind CSS for a seamless user experience across devices.

## Technologies Used

### Frontend:
- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Next.js

### Backend:
- Node.js (Express.js)
- MongoDB (Atlas)

## Setup and Installation
Clone the repository.
   ```bash
   git clone https://github.com/Sateesh2004/InterVue
   ```

### Frontend Setup

1. Navigate to the frontend folder.
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies.
   ```bash
   npm install
   ```
3. Create a `.env.local` file for environment variables (e.g., database URL).
   ```bash
   NEXT_PUBLIC_GEMINI_API=your-api-key
   ```
4. Run the server.
   ```bash
   npm start
   ```
5. The frontend will run at http://localhost:3000. Make sure port 3000 is available and not in use by any other service.

### Backend Setup

1. Navigate to the backend folder.
   ```bash
   cd backend
   ```
2. Install the necessary dependencies.
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables (e.g., database URL).
   ```bash
   PORT=your-port
   MONGODB_URL=your-mongodb-url
   SECRET_KEY=your-secret-key
   ```
4. Run the server.
   ```bash
   npm start
   ```
5. The backend server will run on `http://localhost:${port}`.

## Usage

1. Sign up or log in using your credentials.
2. Paste the job description into the provided field.
3. Give the AI-generated interview.
4. Review the feedback to refine your responses.

## Screenshot

**Landing Page**

![image](https://github.com/user-attachments/assets/b88e6040-b4b6-4c16-96ac-e1bfbe0cf39d)

**Dashboard**

![image](https://github.com/user-attachments/assets/14a43924-fe63-4138-b514-20dc651f7e9a)

**Fill Job Details**

![image](https://github.com/user-attachments/assets/5107d4b8-442f-49cf-bc31-b2ea09afe8d8)

**Interview:**

![image](https://github.com/user-attachments/assets/add8304c-9d05-4449-b03f-991e56744e74)


## Future Enhancements

Here are some potential future enhancements for the platform:

1. **Advanced Analytics**:
   - Provide users with performance metrics, such as success rates and improvement trends over time.
   - Add a dashboard to visualize user progress.

2. **Real-Time Collaboration**:
   - Allow users to practice interview sessions with peers or mentors in real-time.
   - Integrate video or chat features for mock interviews.

3. **Multi-Language Support**:
   - Expand the platform to support multiple languages for global users.

4. **Interview Templates**:
   - Provide predefined interview templates for various industries and job roles.

5. **Mobile Application**:
   - Develop a mobile app for iOS and Android for on-the-go preparation.

6. **Gamification**:
   - Add rewards, badges, or levels to encourage consistent usage and engagement.

7. **AI-Powered Resume Review**:
   - Offer resume review services alongside interview preparation.

8. **Integration with Job Portals**:
   - Connect the platform with job portals like LinkedIn or Indeed to automatically fetch job descriptions.
