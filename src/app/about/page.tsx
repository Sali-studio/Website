
'use client';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const AboutPage = () => {
  return (
    <Container component="main" sx={{ py: 8, background: 'linear-gradient(135deg, #FFFBFE 0%, #E8DEF8 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Our Philosophy
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 8 }}>
          We believe in the power of design to transform ideas into reality.
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <motion.div variants={cardVariants}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Innovation
                </Typography>
                <Typography>
                  We constantly push the boundaries of what's possible, embracing new technologies and creative approaches.
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <motion.div variants={cardVariants}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Clarity
                </Typography>
                <Typography>
                  We strive for simplicity and elegance, ensuring our designs are intuitive and easy to understand.
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <motion.div variants={cardVariants}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Impact
                </Typography>
                <Typography>
                  We create experiences that resonate with users and deliver measurable results for our clients.
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
