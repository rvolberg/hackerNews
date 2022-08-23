This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), based on the website [Hacker News](https://hackernews.com/). 

## What For

Create a Next.js application which is, basicly, a clone of Hacker news. 
The application will have two categories of stories: Top stories and New stories. 
These stories can be fetched using [Hacker news API](https://github.com/HackerNews/API).


## Getting Started

First install the app:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

To stop the app :

```bash
ctrl + c
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How does it work

Once launch, you will have access to the home page containing a link to the original website and a navbar with link to the Top Stories and New Stories. There you can click on the different card to have more information, a text, a url or both. If you try an unvalid url path (exemple : http://localhost:3000/nogood) you will be redirected to the home page.


## What would I change 

due to time constraints, I didn't implement the comments of the differents stories, I would have like to add them to the full storie card with the ability to scroll through the comments.

I also would have like to add the top storie and newest storie to the home page.
