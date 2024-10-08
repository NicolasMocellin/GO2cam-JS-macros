GO2SInteract.StartSelection()
let geoms = GO2SGeometryUtil.GetSelected()
let filename = GO2SDialogUtil.AskSaveFileName("", ["*.txt"], "Save a file")
if(filename)
{
	let file = new GO2SAsciiFile(filename, GO2SFileOpen.read_write)
	if(file.IsOpen())
	{
		geoms.forEach( g => {
			if(g.IsPoint())
				file.AppendLast( g.X() + ";" + g.Y() + ";" + g.Z() )
		})
		file.Save()
		file.Close()
	}
}
