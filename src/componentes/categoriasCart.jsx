import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: '/static/images/buttons/breakfast.jpg',
    title: 'MMSS',
    width: '40%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: 'MMII',
    width: '40%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: 'CRANEO',
    width: '40%',
  },
   {
    url: '/static/images/buttons/breakfast.jpg',
    title: 'TORAX',
    width: '40%',
  },
  {
    url: '/static/images/buttons/burgers.jpg',
    title: 'COLUMNA',
    width: '40%',
  },
  {
    url: '/static/images/buttons/camera.jpg',
    title: 'CINTURA PELVICA',
    width: '40%',
  },
   {
    url: '/static/images/buttons/camera.jpg',
    title: 'CINTURA ESCAPULAR',
    width: '40%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  
  height: 200,
  [theme.breakpoints.down('sm')]: { 
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function CategoriasCart() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          sx={{
            flex: '1 0 30%', // cada tarjeta ocupa ~1/3 del ancho
            height: 200,
            marginBottom: 1,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}

export default CategoriasCart;