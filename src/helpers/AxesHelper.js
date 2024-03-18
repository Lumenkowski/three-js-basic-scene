import {
	Object3D
} from "three"

import { LineMaterial } from "three/addons/lines/LineMaterial"
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry"
import { LineSegments2 } from "three/addons/lines/LineSegments2"

export class AxesHelper extends Object3D {

	constructor( size = 100, thickness = 0.002 ) {

		super()

		const points = [
			0, 0, 0, + size, 0, 0,
			0, 0, 0, 0, + size, 0,
			0, 0, 0, 0, 0, + size,
		]

		const colors = [
			1, 0, 0, 1, 0, 0,
			0, 1, 0, 0, 1, 0,
			0, 0, 1, 0, 0, 1,
		]

		const geometry = new LineSegmentsGeometry()

		geometry.setPositions( points )
		geometry.setColors( colors )

		const material = new LineMaterial( {
			vertexColors: true,
			alphaToCoverage: false,
			linewidth: thickness,
		} )

		const object = new LineSegments2( geometry, material )
		
		this.add( object )
	}
}
