import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  card: {
  },
  media: {
    height: 126,
  },
  list:{
      padding:0
  }
  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{margin:'40px 0 0 0',overflow:'hidden'}}>
        <Grid container spacing={2}> 
            <Grid item xs={2}></Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.avito.ma/images/80/8045680283.jpg"
                    title="Dacia duster -2013"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        10 000 DH
                    </Typography>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Année-Modèle: 2013"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="carburant: Diesel"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="km: 100 000 - 109 999"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Marque: Dacia"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Modèle: Duster"/>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.avito.ma/images/80/8098475161.jpg"
                    title="Dacia duster 2×4 diesel -2012"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        85 000 DH
                    </Typography>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Année-Modèle: 2012"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="carburant: Diesel"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="km: 160 000 - 169 999"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Marque: Dacia"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Modèle: Duster"/>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.avito.ma/images/80/8044223309.jpg"
                    title="Duster -2016"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        12 500 DH
                    </Typography>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Année-Modèle: 2016"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="carburant: Diesel"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="km: 0 - 4 999"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Marque: Dacia"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Modèle: Duster"/>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.avito.ma/images/66/6688152518.jpg"
                    title="Dacia Duster Diesel -2018"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        102 000 DH
                    </Typography>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Année-Modèle: 2012"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="carburant: Diesel"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="km: 0 - 4 999"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Marque: Dacia"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Modèle: Duster"/>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
            <Grid item xs={2}></Grid>

            <Grid item xs={2}></Grid>
                <Grid container item xs={2}>
                        <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://www.avito.ma/images/72/7228700272.jpg"
                        title="Dacia duster -2015"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            13 000 DH
                        </Typography>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Année-Modèle: 2015"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="carburant: Diesel"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="km: 90 000 - 94 999"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Marque: Dacia"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Modèle: Duster"/>
                        </ListItem>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid>
                <Grid container item xs={2}>
                        <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://www.avito.ma/images/66/6688152518.jpg"
                        title="Dacia duster -2018"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            10 800 DH
                        </Typography>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Année-Modèle: 2018"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="carburant: Diesel"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="km: 0 - 4 9999"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Marque: Dacia"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Modèle: Duster"/>
                        </ListItem>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid>
                <Grid container item xs={2}>
                        <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://www.avito.ma/images/81/8110445530.jpg"
                        title="Dacia duster -2010"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            75 000 DH
                        </Typography>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Année-Modèle: 2010"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="carburant: Essence"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="km: 10 000 - 14 999"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Marque: Dacia"/>
                        </ListItem>
                        <ListItem className={classes.list}>
                            <ListItemText primary="Modèle: Duster"/>
                        </ListItem>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </Grid>
                <Grid container item xs={2}>
                    <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.avito.ma/images/81/8153403428.jpg"
                    title="Dacia duster -2013"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        107 000 DH
                    </Typography>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Année-Modèle: 2012"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="carburant: Diesel"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="km: 90 000 - 94 999"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Marque: Dacia"/>
                    </ListItem>
                    <ListItem className={classes.list}>
                        <ListItemText primary="Modèle: Duster"/>
                    </ListItem>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
            <Grid item xs={2}></Grid>
        
        </Grid>
    </div>
  );
}
