//Copyright © 2024  - GO2cam International - LL

//script to place origin on the center of two arcs
//all the geometry will move only in plane no move in Z direction
//Ask for two arcs by clicking edges on solid

var p1 = GO2SInteract.PickXYZ("Select first arc or edge")
var p2 = GO2SInteract.PickXYZ("Select second arc or edge")

if(p1 == null)
	GO2SDialogUtil.CreateMessageBox("Exit : No Origin change ! ")
else
{
	var deleteC1 = false
	var deleteC2 = false
	
	//GetGeometry arc1
	var C1 = p1.GetGeometry()  	//from 2D

	if (C1.IsSolid())			//from solid
	{
		deleteC1 = true
		E1 = C1.FindEdgeNear(p1,0.1) //thank edge extract 1
		C1 = C1.ExtractEdge(E1)

	}
	//GetGeometry arc2
	C2 = p2.GetGeometry() 		//from 2D
	if (C2.IsSolid())			//from solid
	{
	   	deleteC2 = true
		E2 = C2.FindEdgeNear(p2,0.1)  //thank edge extract 2
		C2 = C2.ExtractEdge(E2)
	}	

	//Check if recovered elements are arcs
	if(C1.IsCircular() && C2.IsCircular())
		{
			var NewX = (C1.GetPosition().X() + C2.GetPosition().X()) * 0.5;
			var NewY = (C1.GetPosition().Y() + C2.GetPosition().Y()) * 0.5;
			var NewOrigin = new GO2SXYZ(-NewX,-NewY,0);
			var Matrix = new GO2SMatrix
			Matrix.DefineTranslation(NewOrigin);
		
			//var Geom = GO2SGeometryUtil.GetByNameLike("");
			var Geom = GO2SGeometryUtil.GetAll();
			Geom.forEach(g=>g.Transform(Matrix));
		}	
	
	//clean the geometry if Edge from solid used
	if (deleteC1)
		C1.Delete()
	
	if (deleteC2)
		C2.Delete()	
	
	//Zoom all 
	GO2SInteract.Redraw(true)
	
}






