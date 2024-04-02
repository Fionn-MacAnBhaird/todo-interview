This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Todo FE Interview

### Introduction

This is a coding challenge for the ATLAS frontend developer position.

We have a Todo app that has a few errors and poor typescript usage that we want to clean up. The challenge is set up to take up about 30~ minutes of your time and for us to have some code to talk about in the interview.

The application is a Todo tracker setup with Next.js page routing and tailwind for CSS.

### Setup

---

First fork this repository so you can commit and share your code back to us.
Then to run the application install the packages:

```bash
npm install
```

and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**NOTE: the application often errors, this is intentional**

---

### Issues

- Properly type the return types of our api in `/src/pages/api/todos.ts` and `/src/pages/api/todos/[id].ts` so it does not return a any.
- Remove all any types in `/src/components/TodoList.ts`
- update `/src/components/TodoList.ts` to show a error message when the API returns an error
- Prevent refresh on add todo in the `/src/components/TodoForm.ts` and make sure the todo still gets properly added to the code.
- Feel free to refactor any code along the way if you think there could be improvements.

Generally all the relevant code to fix is in the `src/components` folder and the `src/pages/api` folder. You should not need to change any file outside of these four files.

**Good luck!**
