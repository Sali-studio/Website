
'use client';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WorksPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Dynamic Web Applications',
      description: 'Building responsive and high-performance web solutions with cutting-edge technologies.',
      image: 'https://via.placeholder.com/300x200?text=Web+App',
    },
    {
      id: 2,
      title: 'Intuitive Mobile Experiences',
      description: 'Crafting seamless and engaging mobile applications for iOS and Android.',
      image: 'https://via.placeholder.com/300x200?text=Mobile+App',
    },
    {
      id: 3,
      title: 'Interactive UI/UX Design',
      description: 'Designing user interfaces that are not only beautiful but also highly functional and intuitive.',
      image: 'https://via.placeholder.com/300x200?text=UI/UX',
    },
    {
      id: 4,
      title: 'Data Visualization & Analytics',
      description: 'Transforming complex data into clear, actionable insights through interactive dashboards.',
      image: 'https://via.placeholder.com/300x200?text=Data+Viz',
    },
  ];

  return (
    <Container component="main" sx={{ py: 8, background: 'linear-gradient(135deg, #E8DEF8 0%, #FFFBFE 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Our Works
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 8 }}>
          Explore our diverse portfolio of innovative projects.
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
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <motion.div variants={itemVariants}>
              <CardActionArea component="a" href="#" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component={Image}
                  height={200}
                  width={300} // next/image には width も必要
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: 'cover' }} // MUIのsxプロップでスタイルを適用
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorksPage;
