import React, { useEffect, useState } from 'react';
import Main from '@/layouts/main';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Grid from '@mui/material/Grid';

interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    name: string;
  };
  images: string[];
}

const Products = (): JSX.Element => {

  const [productsData, setProductsData] = useState<product[]>([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.escuelajs.co/api/v1/products',
    })
      .then((res) => {
        setProductsData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Main>
      <Box>
        <Grid container spacing={2}>

          {productsData.map((_product) => (
            <Grid
              key={_product.id}
              item
              xs={4}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 290 }}
                  image={_product.images[0]}
                  title={_product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {_product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {_product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Main>
  );
};

export default Products;
