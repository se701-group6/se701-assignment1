import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';

import styles from './Post.module.css';

const Post = ({ title, content }) => {
  return (
    <Card className={styles.root}>
      <div className={styles['post-box']}>
        <div className={styles['post-leftbar']}>
          <SentimentSatisfiedAltIcon
            fontSize="large"
            className={styles['post-icon']}
            onClick={() => {
              console.log('test1');
            }}
          />
          <SentimentSatisfiedAltIcon fontSize="large" className={styles['post-icon']} />
          <SentimentSatisfiedAltIcon fontSize="large" className={styles['post-icon']} />
        </div>
        <CardContent>
          <div className={styles['post-content']}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {content}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
export default Post;
