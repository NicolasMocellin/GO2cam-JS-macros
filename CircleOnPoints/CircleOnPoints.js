GO2SInteract.StartSelection()
var geom = GO2SGeometryUtil.GetSelected()
var radius = GO2SDialogUtil.AskDouble('Create circles', 'radius')
geom.forEach( g => { if(g.IsPoint()) new GO2SCircle(g.toXYZ(), radius ) })