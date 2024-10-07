function GetLayerNumberFromVolume(Volume)
{
	let CurVol = 1
	let StartLayer = 10
	let CurLayer = 0
	for (let i = 1; i < 10; i++) {
		CurLayer = StartLayer + i
		if (Volume < CurVol)
		{
			let LayerName = 'Volume under ' + CurVol
			GO2SInteract.SetLayerName(CurLayer, LayerName);
			return CurLayer

		}
		CurVol *=10
		
	}
	return CurLayer
}



let Solids = GO2SGeometryUtil.GetSolids()

let Vol = 1

Solids.forEach( S=> {
	
	let SolVol = S.GetVolume()

	let LayerNum = GetLayerNumberFromVolume(SolVol)

	S.SetLayer(LayerNum)

})

console.log('Sort Done')