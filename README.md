demo id- a@gmail.com
pass- 123456




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single-build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## About Project


Main.js- I mainly use it for making routes. I use Outlet to make children of the header. The header has a navBar, so making outlet, I made it accessible from all pages.

Header.js- It consists of navBar, accessed from all pages. To navigate these pages, it has three options (Dashboard, Login, Appoint Task). It has a toggle button between sign-out and login sign-in. If you are signed in, it will show a signout button; otherwise, it will show a login and sign-in button.

Login.js & Signup.js- it is for user authentication. I use Firebase email login authentication. If you are a new user, you will navigate to the signup page by clicking the sign-up button. I also use a toast from(react-hot-toast) to give the notification that he/she is logged in or the password is wrong. After logging in, you will automatically navigate to the Dashboard page.

Dashboard.js- It is a protected route. If you are logged in, you can only go to this page. In the dashboard, you can see a table, which is sortable. The table has the task information. Each row has two buttons, View and Mark as Done. You can see the detailed task data on the View.js page by clicking View. Delete or remove the task by clicking the Mark as Done button.
Task.js- It is also a protected route. On this page, you can assign a task to a particular employee. After giving the task information, the form will reset and provide the user a toast.success.

PrivetRoutes.js & Router.js- It is mainly for routing the whole site. Privet routes make for protecting the area.

ProfileInfo.js- Users can see their info after signing up for the site.

AuthProvider.js- In this part, I make context to find data by destructuring the data from desired pages. CreateUser, Login, and Logout methods are also written on this page.

This site is responsive. Users can view this site from any device.
