import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const BodyText = styled(Typography)`
  blockquote {
    font-style: italic;
  }
`;

const Container = styled.div`
  padding: 16px 0;
`;

type Props = {
  data: Object,
};

export const BlogPost = ({ classes, data }: Props) => {
  return (
    <Container>
      {data.heroImage ? <Img fluid={data.heroImage.fluid} /> : null}
      <Typography variant='h2' color='textPrimary'>
        {data.title}
      </Typography>
      <BodyText
        variant='body1'
        dangerouslySetInnerHTML={{
          __html: data.body.childMarkdownRemark.html,
        }}
      />
      <Typography variant='body2'>{data?.author?.name}</Typography>
      <Typography variant='body2'>
        {new Date(data?.publishDate).toLocaleDateString('sv-SE')}
      </Typography>
    </Container>
  );
};
