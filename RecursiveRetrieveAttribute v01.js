/*
	Adam Ip																	2011-11-07
		Recursive function to navigate object and print out their attributes
		NavigateObjects()
		NaviObjectProp()
	
	Adam Ip																	2011-11-08
		Recursive function to retrieve an object property based on a given name
		RetrieveAttribute()
		RecursiveRetrieveAttribute()
	
*/

/* variable used in function NaviObjectProp() only */
var Recursive_mode = true;	/* if false, then only navigate on top level */
var DebugMode = false;

/***************************************************************************************/
function RetrieveAttribute( ManyEntities, sName )
{
	var ret = null;
	try
	{		
		if( sName != null && sName.length > 0 && ManyEntities != null )
		{
			var iLen = ManyEntities.length;
			for( var i = 0; i < iLen && ret == null; i++ )  
			{
				if( DebugMode )
					my_alert( "RetrieveAttribute i = " + i + " sName = " + sName );
				var obj = ManyEntities[i];
				/* must have ret = equal asignment in this statement for recursion purpose */
				ret = RecursiveRetrieveAttribute( obj, sName, ret );	
			}
		}
	}
	catch( err )
	{
		window.alert( "function RetrieveAttribute error code " + err );
	}
	return ret;
}

/***************************************************************************************/
function RecursiveRetrieveAttribute( obj, sName, ret )
{
	try
	{
		if( ret == null )	/* must have this statement for recursion purpose */
			if( obj != null )
				for ( var propName in obj )
					if( ret == null )		/* must have this statement for recursion purpose */
					{
					if( DebugMode )
						my_alert( "RecursiveRetrieveAttribute\nsName = " + sName + "\npropName = " + propName + "\nobj[propName] = " + obj[propName] );
					/* reference: http://www.codeproject.com/Articles/207000/JavaScript-Looping-Through-Object-Properties */
					if( propName == sName )
						return obj[propName];
					else if( Object.prototype.toString.call( obj[propName] ) === '[object Object]' || obj[propName] == Object )
						/* if it is an object Object then dive in to deeper level */
						ret = RecursiveRetrieveAttribute( obj[propName], sName, ret );
					}		
	}
	catch( err )
	{
		window.alert( "function RecursiveRetrieveAttribute error code " + err );
	}
	return ret;
}

/***************************************************************************************/
function NavigateObjects( ManyEntities )
{
	for( var i = 0; i < ManyEntities.length; i++ )  
	{
		var oObject = ManyEntities[i];
		NaviObjectProp( oObject, 1 );
	}
}


/***************************************************************************************/
function NaviObjectProp( obj, lvl )
{
	var i = 1;
	try
	{
		if( obj != null )
			/* http://www.codeproject.com/Articles/207000/JavaScript-Looping-Through-Object-Properties */
			for ( var propName in obj )
			{
				my_alert( "Level : " + lvl + "\nIteration : " + i++ + "\n" + propName + " : " + obj[propName] );
				/* reference: http://stackoverflow.com/questions/4320767/check-that-value-is-object-literal */
				if( Recursive_mode == true ) 
					/* if it is an object Object then dive in to deeper level */
					if( Object.prototype.toString.call( obj[propName] ) === '[object Object]' || obj[propName] == Object )
						NaviObjectProp( obj[propName], lvl + 1 );
			}	
	}
	catch( err )
	{
		window.alert( "function NaviObjectProp error code " + err );
	}
}

/***************************************************************************************/
function my_alert( msg )
{
	if( !confirm( msg ))
		my_exit();
}

/***************************************************************************************/
function my_exit()
{
	throw( 'Script Exit' );
}

/*** End of lines **********************************************************************/
