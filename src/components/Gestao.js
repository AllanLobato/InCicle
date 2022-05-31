// import React from "react";
// import management from "./management.json";

// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import ButtonBase from "@material-ui/core/ButtonBase";

// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
// import image4 from "../assets/image4.png";
// import image6 from "../assets/image6.png";
// import image7 from "../assets/image7.png";
// import image8 from "../assets/image8.png";
// import image9 from "../assets/image9.png";
// import image10 from "../assets/image10.png";
// import image6132 from "../assets/image6132.png";

// import "../styles/listCard.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     background: "#121212",
//     marginLeft: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     marginTop: 10,
//     marginLeft: theme.spacing(2),
//     maxHeight: "100%",
//   },
//   widgets: {
//     flexGrow: 1,
//     background: "#121212",
//     marginTop: 40,
//     marginLeft: theme.spacing(2),
//   },
//   widget2: {
//     padding: theme.spacing(2),
//   },
//   widget3: {
//     padding: theme.spacing(2),
//     marginTop: 10,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   img: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
//   gestao: {
//     padding: theme.spacing(2),
//   },
//   img_gestao: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
// }));
// management = management.data[0]
// console.log(management.data[0])
// const Gestao = () => {
//   const classes = useStyles();
//   return(
//         <Paper className={classes.widget3}>
//             <Typography gutterBottom variant="subtitle1">
//               Quadros de Gestão à Vista
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//              item
//             </Typography>
//             {management.map((item) => (
//             <Grid className={classes.gestao} container spacing={3}>
//               <Grid
//                 container
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="flex-start"
//                 item
//                 xs={12}
//               >
//                 <Grid item xs={3}>
//                   <ButtonBase className={classes.image}>
//                     <img
//                       className={classes.img_gestao}
//                       alt="complex"
//                       src={image10}
//                     />
//                   </ButtonBase>
//                 </Grid>
//               </Grid>
//             </Grid>
//             ))}
//           </Paper>   
//         )
// };

// export default Gestao;

//<Grid item xs={3}>
//<ButtonBase className={classes.image}>
// <img
//       className={classes.img_gestao}
//       alt="complex"
//       src={image7}
//     />
//   </ButtonBase>
// </Grid>

// <Grid item xs={3}>
//   <ButtonBase className={classes.image}>
//     <img
//       className={classes.img_gestao}
//       alt="complex"
//       src={image8}
//     />
//   </ButtonBase>
// </Grid>

// <Grid item xs={3}>
//   <ButtonBase className={classes.image}>
//     <img
//       className={classes.img_gestao}
//       alt="complex"
//       src={image9}
//     />
//   </ButtonBase>
// </Grid>
