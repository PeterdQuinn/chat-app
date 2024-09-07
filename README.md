
# Chat Application

This is a **Next.js** based chat application that supports real-time messaging between users with dynamic chat rooms, profile management, and customizable settings. The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Dynamic Chat Rooms**: Users can join various chat rooms like JavaScript, Python, React, and more.
- **Profile Management**: Users can update their profile settings, including their avatar and personal information.
- **Real-time Communication**: Built-in support for real-time messaging using `Socket.IO`.
- **Responsive Design**: The app is fully responsive and looks great on both mobile and desktop screens.

## Getting Started

To start developing locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/chat-app.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

Here's an overview of the project's folder structure:

```bash
├── components          # Reusable components (ChatRoom, Message, Navbar)
├── pages
│   ├── chat            # Dynamic chat room pages
│   │   └── [room].js   # Dynamic route for each chat room
│   ├── api             # API routes (for backend interaction if needed)
│   ├── dashboard.js    # User dashboard with chat room overview and profile
│   ├── index.js        # Main login/signup page
│   ├── rooms.js        # List of all available rooms
├── public              # Static assets (images, etc.)
├── styles              # Global and component-level styles
├── package.json        # Project dependencies and scripts
```

### Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the production version of the application.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Lints the code for errors.

## API Routes

- You can access the API routes on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). These routes can be edited inside `pages/api/hello.js`.
- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages.

## Real-time Chat

The app supports real-time messaging using `Socket.IO`. To start messaging:

1. Navigate to a chat room from the dashboard or go directly to `/chat/[room]` (e.g., `/chat/javascript`).
2. The messages will appear instantly as they are sent, and users in the same room can chat in real-time.

## Customization

- **Dynamic Routing**: The app uses Next.js dynamic routing to manage chat rooms.
- **Profile Management**: A basic profile page exists where users can update their settings.
  
## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy on Vercel:

1. Push your code to a Git repository.
2. Link your repository to Vercel and deploy it with a single click.

For more details, check out [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---
