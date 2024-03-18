import "./main.css"
import { GridHelper, AxesHelper } from "three"
import { setupScene } from "./setup-scene"

// Canvas

const canvas = document.createElementNS( "http://www.w3.org/1999/xhtml", "canvas" )
document.body.insertBefore( canvas, document.body.firstElementChild )

// Basic setup

const { scene } = setupScene( { canvas } )

// Helpers

{
	const helper = new GridHelper( 200, 50, 0x808080, 0x404040 )
	scene.add( helper )
}

{
	const helper = new AxesHelper( 2_000 )
	scene.add( helper )
}
