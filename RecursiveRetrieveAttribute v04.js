/*
	Adam Ip																	2011-11-07
		Recursive function to navigate object and print out their attributes
		function NavigateObjects()
		function NaviObjectProp()
	
	Adam Ip																	2011-11-08
		Recursive function to retrieve an object property based on a given name
		function RetrieveAttribute()
		function RecursiveRetrieveAttribute()
	
	Adam Ip																	2011-11-15
		function implement removeCurlyBrackets()
		
	Adam Ip																	2012-03-06
		function Enhancement alert()
		
	Adam Ip																	2014-04-25
		function RecursiveRetrieveObjectValue( obj )
*/

/* variable used in function NaviObjectProp() only */
var Recursive_mode = true;	/* if false, then only navigate on top level */
var DebugModeReucRetrAttr = false;

/***************************************************************************************/
function RetrieveAttribute( ManyEntities, sName )
{
	var ret = null;
	try
	{		
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RetrieveAttribute\n\tManyEntities = " + ManyEntities + ",\n\tsName = \"" + sName + "\"\n" );
		if( sName != null && sName.length > 0 && ManyEntities != null )
		{
			var iLen = ManyEntities.length;
			for( var i = 0; i < iLen && ret == null; i++ )  
			{
				if( DebugModeReucRetrAttr )
					my_alert( "function RetrieveAttribute\n\ti = " + i + "\n\tsName = " + sName );
				var obj = ManyEntities[i];
				/* must have ret = equal assignment in this statement for recursion purpose */
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
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveAttribute\n\tobj " + obj + ",\n\tsName = \"" + sName + "\"\n\tret = " + ret );
		if( ret == null )	/* must have this statement for recursion purpose */
			if( obj != null )
				for ( var propName in obj )
					if( ret == null )		/* must have this statement for recursion purpose */
					{
						if( DebugModeReucRetrAttr )
							my_alert( "RecursiveRetrieveAttribute\nobj[propName] = " + obj[propName] + "\n\nsName = " + sName + "\npropName = " + propName );
						/* reference: http://www.codeproject.com/Articles/207000/JavaScript-Looping-Through-Object-Properties */
						if( propName == sName )
						{
							if( DebugModeReucRetrAttr ) 
							{
								my_alert( "RecursiveRetrieveAttribute\n\nMATCH found\n\nsName = " + sName + "\nequals to\npropName = " + propName );
							}
							return obj[propName];
						}	
						else if( Object.prototype.toString.call( obj[propName] ) === '[object Object]' || obj[propName] == Object )
							/* if it is an object Object then dive in to deeper level */
							ret = RecursiveRetrieveAttribute( obj[propName], sName, ret );
					}
					else
						break;
	}
	catch( err )
	{
		window.alert( "function RecursiveRetrieveAttribute error code " + err );
	}
	return ret;
}

/***************************************************************************************/
function RecursiveRetrieveObjectValue( obj )
{
	try
	{
		var ret = null;
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveObjectValue\n\tobj = " + obj );
		if( obj != null )
			for( var propName in obj )	
				if( ret == null )
				{
					if( DebugModeReucRetrAttr )
						my_alert( "RecursiveRetrieveObjectValue\n\tobj[propName] = " + obj[propName] + "\n\tpropName = " + propName );
					if( propName == "Value" )
						ret = obj[propName];					
				}	
				else
					break;
	}
	catch( err )
	{
		window.alert( "function RecursiveRetrieveObjectValue error code " + err );
	}
	return ret;
}

/***************************************************************************************/
function NavigateObjects( ManyEntities )
{
	try
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function NavigateObjects( " + ManyEntities + " )" );
		for( var i = 0; i < ManyEntities.length; i++ )  
		{
			var oObject = ManyEntities[i];
			NaviObjectProp( oObject, 1 );
		}
	}
	catch( err )
	{
		window.alert( "function NavigateObjects error code " + err );
	}
	return ret;
}


/***************************************************************************************/
function NaviObjectProp( obj, lvl )
{
	var i = 1;
	try
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveAttribute\n\tobj = " + obj + "\n\tlvl = " + lvl );
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

/*** End of lines **********************************************************************/
