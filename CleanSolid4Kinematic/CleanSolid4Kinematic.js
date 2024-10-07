let vol = GO2SDialogUtil.AskDouble('Delete solids', 'Minimum volume', 10, 1000000, 10)

let solids=GO2SGeometryUtil.GetSolids()

let nb = 0
solids.forEach( s=> {
	if(s.GetVolume() <vol) 
	{
		nb++
		s.Delete()
	}	
})

console.log(nb + ' elements removed')