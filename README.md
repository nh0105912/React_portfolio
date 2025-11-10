# React + Tailwind Step up (using CMD)
<p> Follow these step create project step up react + Tailwind CSS</p>

1. **Open CMD:** and create new folder 
2. **npm create vite@latest** write this commond for the create the react project with **vite**

3. Project name :
4. package name:

5. select framework : react
6. select varient : javascript

7.  Install dependencies:  **npm i**

## install Tailwind to Vite react project

8. install Tailwind CSS and required packages:
    
    **npm install -D tailwindcss postcss autoprefixer**
    **npx tailwindcss init -p**

9. ## Configure Tailwind:
          /** @type {import('tailwindcss').Config} */
            module.exports = {
                 content: [
                      "./index.html",
                      "./src/**/*.{js,jsx,ts,tsx}",
                     ],
                 theme: {
             extend: {},
     },
     plugins: [],
    }

10. Add Tailwind directives 
      inside **index.css** file 
      <li>@tailwind base;</li>
      <li>@tailwind components;</li>
      <li>@tailwind utilities;</li>

11. install icons libaray :
     **npm i react-icon**
12. install react-router lib :
    **npm i react-router**

13. Start the project :
     **npm run dev** // for localhost
     **npm run dev -- --host** for Start dev server accessible







# MY React Portfolio Assignment 
<p> My first react assignment from  Advance Web Ascend </p>

I created a **fully responsive navigation bar** using **Tailwind CSS**.  
It adapts smoothly to all screen sizes, including mobile and tablet devices.

###  Features
- Built with simple Tailwind utility classes  
- Optimized for **mobile devices**  
- Works perfectly on **tablets and desktops**  
- Includes a **hamburger menu toggle** for small screens