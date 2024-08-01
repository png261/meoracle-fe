import type { NextPage } from "next";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Home: NextPage = () => {
    return (
        <div>
            <div className="flex gap-3">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Du doan bang lua chon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Mo ta 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Home;
