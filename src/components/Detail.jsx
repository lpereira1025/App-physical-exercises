import { Typography, Stack, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

export const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography color="#4F4C4C" sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        <Box sx ={{ display:'flex',  flexDirection: { lg: 'row' }, justifyContent:'space-between'}}>
          {extraDetail?.map((item) => (
              <Stack key={item.name} direction="row" gap="24px" p={1} alignItems="center">
                <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                  <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                </Button>
                <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                  {item.name}
                </Typography>
              </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};

Detail.propTypes = {
    exerciseDetail: PropTypes.shape({
      bodyPart: PropTypes.string.isRequired,
      gifUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
    }).isRequired,
  };