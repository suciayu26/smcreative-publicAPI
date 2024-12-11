import { Router } from 'express';

const router = Router();

const blogs = [
  {
    id: 1,
    title: 'Why Digital Marketing Matters',
    snippet: 'Learn why digital marketing is critical for SMEs.',
    content: `
      <p>In today’s fast-paced, technology-driven world, businesses must adapt to remain competitive. This is especially true for Small and Medium-sized Enterprises (SMEs), which form the backbone of many economies, including Indonesia’s. With over 62 million SMEs contributing significantly to the nation’s economic growth, leveraging digital marketing is no longer optional—it’s a necessity.</p>

      <p>Here’s why digital marketing is critical for SMEs:</p>

      <h3>1. Affordable and Accessible</h3>
      <p>Traditional advertising methods such as print, radio, and television are often beyond the budget of most SMEs. Digital marketing levels the playing field. Platforms like social media, email marketing, and search engine optimization (SEO) allow SMEs to reach a broader audience at a fraction of the cost.</p>
      <p>For instance, an SME can launch a highly targeted Facebook ad for as little as a few dollars, allowing them to focus on their ideal customer base without overspending. This accessibility makes digital marketing a cost-effective solution for businesses with limited resources.</p>

      <h3>2. Increased Visibility</h3>
      <p>In the digital age, your online presence defines your business. A robust digital marketing strategy ensures that your brand stands out in a crowded market. Through SEO, SMEs can rank higher on search engines like Google, making it easier for customers to find them. Social media platforms like Instagram and LinkedIn also enable businesses to showcase their products, services, and unique value proposition to potential customers.</p>
      <p>Imagine a small cafe in a bustling city. With an engaging Instagram profile showcasing daily specials and customer reviews, it can attract foot traffic from locals and tourists alike. Without this visibility, even the best offerings can go unnoticed.</p>

      <h3>3. Enhanced Customer Engagement</h3>
      <p>Digital marketing allows SMEs to interact with their customers in real-time, fostering stronger relationships. Whether it’s through responding to comments on social media, sending personalized emails, or engaging in live chats on a website, these touchpoints create a sense of connection and trust.</p>
      <p>Engaged customers are more likely to become loyal advocates for your brand, driving repeat business and word-of-mouth referrals.</p>

      <h3>4. Data-Driven Decision Making</h3>
      <p>One of the most significant advantages of digital marketing is the ability to track and measure results. SMEs can analyze customer behavior, campaign performance, and website traffic to refine their strategies continuously. Tools like Google Analytics, Facebook Insights, and email marketing platforms provide invaluable data that helps businesses understand what works—and what doesn’t.</p>
      <p>This data-driven approach minimizes guesswork and ensures that every marketing dollar is spent effectively.</p>

      <h3>5. Expanding Beyond Local Boundaries</h3>
      <p>Traditionally, SMEs were limited to local markets, but digital marketing breaks these barriers. With an optimized website, an SME can attract customers from across the globe. E-commerce platforms like Shopify and digital payment solutions make it easy for small businesses to sell their products and services worldwide.</p>
      <p>For example, a local artisan selling handcrafted goods can now reach international buyers through platforms like Etsy, fueled by targeted digital marketing campaigns.</p>

      <h3>6. Staying Competitive</h3>
      <p>Large corporations often dominate traditional marketing channels due to their budgets. Digital marketing offers SMEs an opportunity to compete on a more level playing field. A well-executed digital strategy can position a small business as a strong competitor, even against bigger players.</p>
      <p>For instance, a local fitness studio can use targeted YouTube ads and engaging Instagram content to attract customers, outperforming larger gym chains that rely solely on billboard advertising.</p>

      <h3>7. Adaptability in Changing Markets</h3>
      <p>The COVID-19 pandemic highlighted the importance of adaptability for businesses. SMEs that embraced digital marketing during this period were able to continue engaging with their customers, even during lockdowns. From virtual consultations to online sales, digital marketing offers SMEs the flexibility to adapt to market shifts quickly.</p>
    `,
  },
  {
    id: 2,
    title: 'Start with Content Marketing',
    snippet: 'The key to building your brand!',
    content: `
      <p>In today’s digital-first world, content marketing is no longer a luxury—it’s a necessity for businesses looking to connect with their audience, establish authority, and drive growth.</p>

      <p>Here’s why you need to start with Content Marketing:</p>

      <h3>1. Build Trust and Authority</h3>
      <p>Content marketing allows you to establish your business as a thought leader in your industry. By sharing valuable insights and solutions, you build trust with your audience. Over time, they’ll see your brand as a reliable source of information, increasing their likelihood of choosing your products or services.</p>
      <p>For example, a financial consulting SME could publish blogs about money-saving tips or investment strategies. When readers find these articles helpful, they’re more likely to turn to the business for paid advice.</p>

      <h3>2. Drive Organic Traffic</h3>
      <p>SEO (Search Engine Optimization) and content marketing go hand-in-hand. By creating high-quality content optimized for search engines, your website can rank higher in search results, making it easier for potential customers to find you.</p>
      <p>Imagine you own a small bakery. Writing a blog titled “5 Tips for Baking the Perfect Sourdough Bread” can attract baking enthusiasts searching for this topic on Google, potentially converting them into customers.</p>

      <h3>3. Cost Effective Marketing</h3>
      <p>Unlike traditional advertising, which often requires a significant upfront investment, content marketing delivers long-term value. A well-written blog post or engaging video can continue to generate traffic and leads months or even years after it’s published.</p>

      <h3>4. Engage and Retain Costumer</h3>
      <p>Content marketing doesn’t just attract new customers—it also keeps existing ones engaged. Regularly publishing valuable content reminds your audience of your brand and keeps them coming back for more.</p>
      <p>For example, an online clothing store could send out weekly emails with fashion tips or seasonal outfit ideas. These emails not only add value but also encourage repeat purchases.</p>

      <h3>5. Support Other Marketing Channels</h3>
      <p>Content marketing enhances the effectiveness of other marketing strategies. Social media campaigns, email marketing, and even paid ads perform better when they’re backed by strong content. Sharing an informative blog post or an engaging video on social media, for instance, can increase engagement and drive traffic to your website.</p>
    `,
  },
];

router.get('/', (req, res) => {
    res.render('pages/blog', { title: 'Our Blog', blogs });
  });
  
  // Blog detail route
  router.get('/:id', (req, res) => {
    const blogId = parseInt(req.params.id, 10);
    const blog = blogs.find(b => b.id === blogId);
  
    if (blog) {
      res.render('pages/blog-detail', { blog });
    } else {
      res.status(404).send('Blog not found');
    }
  });
  

export default router;
