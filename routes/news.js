import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: '1e7a23b3729f4ad1ba2820360d51a2f1',
        country: 'us', // or any valid country code
        category: 'business',
      },
    });
    const articles = response.data.articles.slice(0, 2);
    console.log('Articles:', articles); // Ensure this logs data in the terminal
    res.render("pages/home", { title: "Welcome to S&M Creative", articles }); // Send the JSON directly to the browser for debugging
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.render("pages/home", { title: "Welcome to S&M Creative", articles: [] });
  }
});


export default router;
