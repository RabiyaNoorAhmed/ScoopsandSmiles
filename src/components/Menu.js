import React from 'react'
import { Stack, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import '../App.css'
import Card1 from './images/card1.jpg'
import Card2 from './images/card2.jpg'
import Card3 from './images/card3.jpg'
import Card4 from './images/card4.jpg'
import Card5 from './images/card5.jpg'
import Card6 from './images/card6.jpg'
import Card7 from './images/card7.jpg'
import Card8 from './images/card8.jpg'
import Card9 from './images/card9.jpg'




const Menu = () => {
    const Icecream = [
        { name: "Vanilla Dream", description: "Smooth and creamy vanilla ice cream, a timeless classic loved by all.", image: Card1 },
        { name: "Chocolate Bliss", description: "Rich and indulgent chocolate ice cream, guaranteed to satisfy your sweet cravings.", image: Card2 },
        { name: "Strawberry Swirl", description: " Delicate strawberry ice cream with swirls of real fruit, bursting with fruity goodness.", image: Card3 },
        { name: "Minty Fresh", description: "Refreshing mint ice cream infused with chocolate chips, a cool treat on a hot day.", image: Card4 },
        { name: "Caramel Crunch", description: " Creamy caramel ice cream with crunchy caramel pieces, a symphony of sweetness and texture.", image: Card5 },
        { name: "Cookies 'n Cream", description: " Velvety vanilla ice cream loaded with chunks of chocolate cookies, a heavenly combination of flavors and textures.", image: Card6 },
        { name: "Rocky Road", description: " Decadent chocolate ice cream packed with marshmallows, nuts, and chocolate chunks, a rocky road to pure bliss.", image: Card7 },
        { name: "Tropical Paradise", description: "Creamy coconut ice cream infused with pineapple and mango chunks, a taste of tropical paradise in every scoop.", image: Card8 },
        { name: "Rainbow Delight", description: "A colorful explosion of fruity flavors, featuring a medley of rainbow sherbet and creamy vanilla swirls. Taste the joy with every spoonful!", image: Card9 },


    ]
    return (
        <>
            <div className='menu'>
                <Typography variant='h3' mt={6} mb={1} textAlign={'center'} fontFamily={"Dancing Script"} color={'#855E42'}>Discover Our Delicious Offerings</Typography>
                <Typography variant='h5' fontFamily={"Dancing Script"} textAlign={'center'} color={'#855E42'}>Every Scoop Tells a Story....</Typography>
                <Stack direction={'row'} justifyContent={'space-evenly'} sx={{ flexWrap: "wrap" }}>
                    {
                        Icecream.map(icecream => {
                            return (
                                <Card sx={{ maxWidth: "300px", margin: '30px' }}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={icecream.image}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h4" fontFamily={"Dancing Script"} color={'#855E42'}>
                                            {icecream.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {icecream.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button sx={{ color: '#855E42', fontFamily: '"Dancing Script", cursive;', border: '1px solid #855E42', borderRadius: '20px', margin: '5px 10px', padding: '5px 90px' }}>
                                            Order Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            )
                        })
                    }


                </Stack>
            </div>
        </>
    )
}

export default Menu
