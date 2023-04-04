import React from 'react';
import classes from './Loader.module.scss';


interface Props {

 }
 
 const Loader: React.FC<Props> = (props) => {

 
	return (
	  <div className={classes.loader}>
		 <div></div>
		 <div></div>
		 <div></div>
		 <div></div>
	  </div>
	);
 };
 
 export default Loader;