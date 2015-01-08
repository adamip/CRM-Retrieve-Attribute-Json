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
		
	Adam Ip																	2014-10-07		
		function myInspectObject( obj )
		function objectInspector( object, ReturnText )
*/

/* variable used in function NaviObjectProp() only */
var Recursive_mode = true;	/* if false, then only navigate on top level */
var DebugModeReucRetrAttr = false;
/* var DebugModeReucRetrAttr2 = false; */

/***************************************************************************************
	Model Entry Point
*/
function RetrieveAttribute( Entity, sName )
{
	DebugModeReucRetrAttr = DebugModeReucRetrAttr && AmISoftwareDeveloper();
	var ret = null;
	try
	{		
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RetrieveAttribute( Entity, sName )" );
		if( sName != null && sName.length > 0 && Entity != null )
		{
			var iLen = Entity.length;
			if( DebugModeReucRetrAttr ) 
				window.alert( "function RetrieveAttribute( Entity, sName )\n\tEntity = " + Entity + "\n\tEntity.length = " + iLen + "\n\tsName = \"" + sName + "\"\n" );			
			for( var i = 0; i < iLen && ret == null; i++ )  
			{
				if( DebugModeReucRetrAttr )
					window.alert( "function RetrieveAttribute()\n\ti = " + i + "\n\tsName = " + sName );
				var obj = Entity[i];
				/* must have ret = equal assignment in this statement for recursion purpose */
				ret = RecursiveRetrieveAttribute( obj, sName, ret );	
			}
		}
		return ret;
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RetrieveAttribute()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/***************************************************************************************/
function RecursiveRetrieveAttribute( obj, sName, ret )
{
	try
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveAttribute( obj, sName, ret )\n\tobj = " + obj + ",\n\tsName = \"" + sName + "\"\n\tret = " + ret );
		if( ret == null )	/* must have this statement for recursion purpose */
			if( obj != null )
				for( var propName in obj )
					if( ret == null )		/* must have this statement for recursion purpose */
					{
						if( DebugModeReucRetrAttr )
							window.alert( "RecursiveRetrieveAttribute()\nobj[propName] = " + obj[propName] + "\n\nsName = " + sName + "\npropName = " + propName );
						/* reference: http://www.codeproject.com/Articles/207000/JavaScript-Looping-Through-Object-Properties */
						if( propName == sName )
						{
							if( DebugModeReucRetrAttr ) 
							{
								window.alert( "RecursiveRetrieveAttribute()\n\nMATCH found\nobj[propName] returns " + obj[propName] + "\n\nsName = " + sName + "\nequals to\npropName = " + propName );
							}
							return obj[propName];
						}	
						else if( Object.prototype.toString.call( obj[propName] ) === '[object Object]' || obj[propName] == Object )
							/* if it is an object Object then dive in to deeper level */
							ret = RecursiveRetrieveAttribute( obj[propName], sName, ret );
					}
					else
						break;
			return ret;
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveAttribute()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/***************************************************************************************
	Model Entry Point
*/
function RecursiveRetrieveObjectValue( obj )
{
	try
	{
		DebugModeReucRetrAttr = DebugModeReucRetrAttr && AmISoftwareDeveloper();
		var ret = null;
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveObjectValue()\n\tobj = " + obj );
		if( obj != null )
			for( var propName in obj )	
				if( ret == null )
				{
					if( DebugModeReucRetrAttr )
						window.alert( "RecursiveRetrieveObjectValue()\n\tpropName = " + propName + "\n\tobj[propName] = " + obj[propName] );
					if( propName == "Value" )
						ret = obj[propName];					
				}	
				else
					break;
		return ret;
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function RecursiveRetrieveObjectValue()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/***************************************************************************************
	Model Entry Point
*/
function NavigateObjects( Entity )
{
	try
	{
		DebugModeReucRetrAttr = DebugModeReucRetrAttr && AmISoftwareDeveloper();
		if( DebugModeReucRetrAttr ) 
			window.alert( "function NavigateObjects( Entity )" + "\nEntity\t" + Entity + "\nEntity.length\t" + Entity.length );
		for( var i = 0; i < Entity.length; i++ )  
		{
			var oObject = Entity[i];
			NaviObjectProp( oObject, 1 );
		}
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function NavigateObjects()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
	return;
}


/***************************************************************************************/
function NaviObjectProp( obj, lvl )
{
	var i = 1;
	try
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function NaviObjectProp()\n\tobj = " + obj + "\n\tlvl = " + lvl );
		if( obj != null )
			/* http://www.codeproject.com/Articles/207000/JavaScript-Looping-Through-Object-Properties */
			for ( var propName in obj )
			{
				window.alert( "Level : " + lvl + "\nIteration : " + i++ + "\n" + propName + " : " + obj[propName] );
				/* reference: http://stackoverflow.com/questions/4320767/check-that-value-is-object-literal */
				if( Recursive_mode == true ) 
					/* if it is an object Object then dive in to deeper level */
					if( Object.prototype.toString.call( obj[propName] ) === '[object Object]' || obj[propName] == Object )
						NaviObjectProp( obj[propName], lvl + 1 );
			}	
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function NaviObjectProp()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/***************************************************************************************
	Model Entry Point
*/
function myInspectObject( obj )
{
	try
	{
		DebugModeReucRetrAttr = DebugModeReucRetrAttr && AmISoftwareDeveloper();
		if( DebugModeReucRetrAttr ) 
			window.alert( "function myInspectObject( obj )" + "\nobj\t" + obj );

		var ReturnText = new String();
		ReturnText = objectInspector( obj, 0, ReturnText );
		if( DebugModeReucRetrAttr ) 
			window.alert( "function myInspectObject( obj )" + "\nReturnText\t" + ReturnText );
		return ReturnText;	
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function myInspectObject()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/***************************************************************************************
	Reference: http://stackoverflow.com/questions/5357442/how-to-inspect-javascript-objects
 **
 * objectInspector digs through a Javascript object
 * to display all its properties
 *
 * @param object - a Javascript object to inspect
 * @param ReturnText - a string of properties with datatypes
 *
 * @return ReturnText - the concatenated description of all object properties
 */
function objectInspector( obj, lvl, ReturnText )
{
	try
	{
		var rows = [];
		if( DebugModeReucRetrAttr ) 
			window.alert( "function objectInspector( obj, lvl, ReturnText )" + "\nobj\t" + obj + "\nlvl\t" + lvl + "\nReturnText\t" + ReturnText );

		if( typeof obj != "object" )
			return "Invalid object";
		else if( typeof ReturnText == "undefined" )
			ReturnText = '';
		else 
		{
			if( ReturnText.length > 50 )
				return "[RECURSION TOO DEEP. ABORTING.]";
			
			for( var property in obj )
			{
				var datatype = typeof obj[property];
				var tempDescription = ReturnText + '"' + property + '"';
				tempDescription += ' (' + datatype + ') => ';
				if( datatype == "object" )
					tempDescription += '\n' + lvl + '\tobject: ' + objectInspector( obj[property], lvl + 1, ReturnText );
				else
					tempDescription += obj[property];

				rows.push( tempDescription + "\n" );
			} 
		}
		return rows.join( ReturnText );
	}
	catch( err )
	{
		if( DebugModeReucRetrAttr ) 
			window.alert( "function objectInspector()\nerror code\t" + err + "\nerror name\t" + err.name + "\nerror message\t" + err.message );
	}
}

/*** End of lines **********************************************************************/
