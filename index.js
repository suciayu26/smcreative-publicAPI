import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import blogRoutes from './routes/blog.js'; // Import blog routes
import newsRoutes from './routes/news.js'; // import news routes

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('./public'))); // Use path.resolve for ES Modules
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views')); // Adjust views path


// Routes
app.use('/news', newsRoutes);
app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
  res.redirect('/news')
});

// Route for "How We Partner"
app.get('/how-we-partner', (req, res) => {
  res.render('pages/how-we-partner', { title: 'How We Partner' });
});

// Route for "Package and Pricelist"
app.get('/package-and-pricelist', (req, res) => {
  res.render('pages/package-and-pricelist', { title: 'Package and Pricelist' });
});

// GET route to serve the contact form
app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us' });
});

// POST route to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Submission:', { name, email, message });

// Handle the form submission (e.g., save to database, send email)
  res.send('Thank you for contacting us! We will get back to you shortly.');
});

// GET route to serve the get-started form
app.get('/get-started', (req, res) => {
  res.render('pages/get-started', { title: 'Get Started' });
});

app.post('/get-started', (req, res) => {
  const { name, email, whatsapp, message } = req.body;

  // Log or process the data
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`WhatsApp: ${whatsapp}`);
  console.log(`Message: ${message}`);

  // Send a response to the user
  res.send('Thank you for getting started! We will contact you shortly.');
});


app.get('/learn-more', (req, res) => {
  res.render('pages/learn-more', { title: 'Learn More' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
