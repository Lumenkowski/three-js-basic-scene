import "./main.css"
import { setupScene } from "./setup-scene"
import { GridHelper } from "./helpers/GridHelper"
import { AxesHelper } from "./helpers/AxesHelper"

// Canvas

const canvas = document.createElementNS( "http://www.w3.org/1999/xhtml", "canvas" )
document.body.insertBefore( canvas, document.body.firstElementChild )

// Basic setup

const { scene } = setupScene( { canvas } )

// Helpers

{
	// Infinite GridHelper

	const helper = new GridHelper( 10, 100, 0xffffff )
	scene.add( helper )
}

{
	// Thick AxesHelper

	const helper = new AxesHelper( 2_000 )
	scene.add( helper )
}
