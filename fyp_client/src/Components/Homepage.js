import { Box, Button, Typography } from '@mui/material';
import chatbot from '../Assets/Images/chatbot.png'
import vase from '../Assets/Images/vase2.png'
import laptop from '../Assets/Images/Laptop.png'
import painting from '../Assets/Images/painting.png'
import clothes from '../Assets/Images/clothes.png'
import furniture from '../Assets/Images/furniture.png'
import antique_vase from '../Assets/Images/antique_vase.png'
import tv from '../Assets/Images/TV.png'
import rolex from '../Assets/Images/rolex.png'

const Homepage = () => {


    return (
        <>
            <Box sx={{ display: "flex", paddingTop: '2%', justifyContent: 'center' }} >
                <Box>
                    <img src={chatbot} alt='ChatBot_Image' style={{ width: '200px', height: '150px' }} />
                </Box>
                <Box sx={{ background: '#d9d9d9', width: '80%', borderRadius: '15px', paddingBottom: '1%', boxShadow: '0px 1px 4px 2px darkslategray' }} >
                    <Typography style={{ textAlign: 'center' }} variant='h6' className='chat_bot_text'> If you're looking for some fun and competitive bidding then </Typography>
                    <Typography style={{ textAlign: 'center' }} variant='h6' className='chat_bot_text' > you are at the right place! </Typography>
                    <Typography style={{ textAlign: 'center' }} variant='h6' mt={2} className='chat_bot_text' > Join Auctioneer Today and participate in Live </Typography>
                    <Typography style={{ textAlign: 'center' }} variant='h6' className='chat_bot_text' > Auction Events </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button sx={{ background: '#6ac0c5', borderRadius: '15px', color: 'white', width: '100px', "&:hover": { background: '#6ac0c5' } }} > Join </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ paddingLeft: '2%' }} mt={7}>
                <Typography variant='body2' sx={{ fontWeight: 'bold' }}> Popular Categories </Typography>
                <Box gap={1} sx={{ display: 'flex', justifyContent: 'space-around' }} >
                    <Box>
                        <img src={vase} style={{ height: '15vh', width: '15vh' }} alt='vase_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Antiques </Typography>
                    </Box>
                    <Box>
                        <img src={laptop} style={{ height: '15vh' }} alt='laptop_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Electronics </Typography>
                    </Box>

                    <Box>
                        <img src={painting} style={{ height: '15vh', }} alt='painting_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Arts </Typography>
                    </Box>

                    <Box>
                        <img src={clothes} style={{ height: '15vh', }} alt='cloth_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Fashion </Typography>
                    </Box>

                    <Box>
                        <img src={furniture} style={{ height: '15vh' }} alt='furniture_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Furniture </Typography>
                    </Box>

                </Box>
            </Box>
            <Box mt={10} sx={{ paddingLeft: '2%' }} >
                <Typography variant='body2' sx={{ fontWeight: 'bold' }}> New Arrivals </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box sx={{ "&:hover":{ cursor: 'pointer' } }} >
                        <img src={antique_vase} style={{ height: '20vh' }} alt='bed_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Antique Italian Vase </Typography>
                    </Box>

                    <Box sx={{ "&:hover":{ cursor: 'pointer' } }} >
                        <img src={tv} style={{ height: '20vh' }} alt='tv_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Sony Bravia XR 65 Inch </Typography>
                    </Box>

                    <Box sx={{ "&:hover":{ cursor: 'pointer' } }} >
                        <img src={rolex} style={{ height: '20vh' }} alt='rolex_image' />
                        <Typography variant='body2' sx={{ fontWeight: 'bold', textAlign: 'center' }} > Rolex 729 </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Homepage;