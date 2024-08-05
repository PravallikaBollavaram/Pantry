#PANTRY APPLICATION  

A pantry management application that allows users to perform CRUD operations on pantry items. 

##TECHNOLOGY STACK

**Frontend**
1. Next.js
2. React
3. Material-UI
   
**Backend**
1. Firebase

   
**Deployement**
1. Vercel

##FEATURES
1. CRUD Operations:
    -> Add, edit, and delete pantry items.
    -> Update item quantities with add and remove buttons.

2. Search Functionality:
    ->Search for items in the pantry list.

##INSTALLATION
1. Clone the repository
   git clone https://github.com/PravallikaBollavaram/Pantry
2. Navigate to the project directory
   cd your_repository_directory
3. Install dependencies
   -> npm install
   -> npm install @mui/material @emotion/react @emotion/styled firebase
   ->npm install firebase
4. Set up firebase configuration.
   Create a .env file in the root directory and add your firebase configurations.
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
5. Run locally
   npm run dev
