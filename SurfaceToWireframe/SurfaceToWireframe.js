//Pick the reference element
S1 = GO2SInteract.PickReference('Select surface')
//save the surface to find all with the same
Surface = S1.GetGeometry().GetSurface()
console.log(Surface)
//get all bdd elements
AllGeo = GO2SGeometryUtil.GetAll()
console.log(AllGeo)
//for each element of bdd
AllGeo.forEach(Elt => {
console.log(Elt.GetSurface())
	//we check if the surface are the same 
	if (Math.abs( Elt.GetSurface() - Surface) < 0.01){
	console.log(Elt)
		//we extract all edges and convert in wire geometry
		Edges=	Elt.GetEdges()
		Edges.forEach(ed => Elt.ExtractEdge(ed))

		//delete the surface
		Elt.Delete()
	}

})