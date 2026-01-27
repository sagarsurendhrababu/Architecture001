import {Box, Skeleton} from '@mui/material';

function SkeletonArea() {
  return (
    <Box width="100%" minHeight="90vh" my={3}>
        {[...Array(5)].map((_,index) => (
          <Skeleton key={index} variant="rectangular" width="100%" height={60} sx={{mb:2, borderRadius:2}}/>
        ))}
    </Box>
  )
}

export default SkeletonArea;