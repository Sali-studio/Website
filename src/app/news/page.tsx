
'use client';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NewsPage = () => {
  const articles = [
    {
      id: 1,
      title: 'Our New Website Launch!',
      date: '2024-07-18',
      summary: 'We are thrilled to announce the launch of our brand new website, designed with a focus on intuitive UI/UX and dynamic experiences.',
    },
    {
      id: 2,
      title: 'Upcoming Event: Design Thinking Workshop',
      date: '2024-07-10',
      summary: 'Join us for an interactive workshop on Design Thinking principles and how they can transform your projects.',
    },
    {
      id: 3,
      title: 'Case Study: Revamping User Engagement',
      date: '2024-06-25',
      summary: 'Discover how our recent project significantly boosted user engagement for a leading e-commerce platform.',
    },
  ];

  return (
    <Container component="main" sx={{ py: 8, background: 'linear-gradient(135deg, #FFFBFE 0%, #E8DEF8 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Latest News
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 8 }}>
          Stay updated with our latest announcements and insights.
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4}>
            <motion.div variants={itemVariants}>
              <CardActionArea component="a" href={`/news/${article.id}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.date}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {article.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} href={`/news/${article.id}`}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </CardActionArea>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsPage;
