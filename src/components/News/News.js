import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const News = (props) => {
    const {title,description,urlToImage,url} = props.article;
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "10px",
    marginLeft: "40%",
  },
  media: {
    height: 140,
  },
});
    const classes = useStyles();
    
    console.log(props.article);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{description}                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    LEARN MORE
                </Button>
            </CardActions>
        </Card>
    );
};

export default News;