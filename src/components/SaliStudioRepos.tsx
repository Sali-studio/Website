'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Link as MuiLink, CircularProgress, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import GavelIcon from '@mui/icons-material/Gavel';
import SkeletonLoader from './SkeletonLoader';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Repo {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  license: string;
}

const SaliStudioRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoNames = [
          { owner: 'Sali-studio', repo: 'Luna' },
          { owner: 'Sali-studio', repo: 'Relauncher-Unofficial' },
          { owner: 'Sali-studio', repo: 'Website' },
        ];

        const fetchedRepos = await Promise.all(
          repoNames.map(async ({ owner, repo }) => {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            if (!response.ok) {
              throw new Error(`GitHub API error: ${response.statusText}`);
            }
            const data = await response.json();
            return {
              id: data.id,
              name: data.name,
              description: data.description || 'No description provided.',
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language || 'Unknown',
              url: data.html_url,
              license: data.license ? data.license.spdx_id : 'No license',
            };
          })
        );
        setRepos(fetchedRepos);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Box sx={{ mt: 8, width: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
      >
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Our GitHub Repositories
        </Typography>
      </motion.div>
      {loading && (
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {Array.from(new Array(3)).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <SkeletonLoader type="card" />
            </Grid>
          ))}
        </Grid>
      )}
      {error && <Typography color="error" sx={{ mt: 4 }}>Error: {error}</Typography>}
      {!loading && !error && repos.length === 0 && (
        <Typography sx={{ mt: 4 }}>No repositories found.</Typography>
      )}
      {!loading && !error && repos.length > 0 && (
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
          sx={{ mt: 4 }}
        >
          {repos.map((repo) => (
            <Grid item key={repo.id} xs={12} sm={6} md={6}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Card
                  sx={(theme) => ({
                    maxWidth: 345,
                    minHeight: 180,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #B3E5FC 0%, #90CAF9 100%)',
                    boxShadow: theme.shadows[3],
                    borderRadius: theme.shape.borderRadius * 2,
                    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: theme.shadows[6],
                      transform: 'translateY(-5px)',
                    },
                  })}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <MuiLink href={repo.url} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {repo.name}
                      </Typography>
                    </MuiLink>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 60, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {repo.description}
                    </Typography>
                    <Divider sx={{ my: 1.5 }} />
                    <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, mt: 1.5 })}> 
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <StarIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.warning.main })} /> 
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.stars}</Typography> 
                      </Box>
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <ForkRightIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.success.main })} /> 
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.forks}</Typography> 
                      </Box>
                      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                        <Typography variant="body2" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>{repo.language}</Typography> 
                      </Box>
                      {repo.license && repo.license !== 'No license' && (
                        <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', p: 0.8, borderRadius: '8px', backgroundColor: theme.palette.action.hover })}> 
                          <GavelIcon sx={(theme) => ({ fontSize: 18, mr: 0.5, color: theme.palette.text.secondary })} /> 
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{repo.license}</Typography> 
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SaliStudioRepos;
