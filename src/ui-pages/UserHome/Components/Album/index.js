import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin:'auto',
  },
  // gridList: {
  //   width: 1000,
  //   height: 1000,
  // },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Toolbar>
        <Typography varient="h2" margin-top= "200px"> photos list</Typography>
      </Toolbar> */}
      <GridList cellHeight={100} spacing={50} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}






// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function Album() {
//   const classes = useStyles();

//   function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper className={classes.paper}>item</Paper>
//         </Grid>
//       </React.Fragment>
//     );
//   }

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//         <Grid container item xs={12} spacing={3}>
//           <FormRow />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
