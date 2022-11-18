import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { ChangeEvent, useEffect, useState } from "react"


interface ComponentProps {
	x: number
	y: number
}

let x = 50;
	const y = 50;
  
const YourComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
		p5.ellipse(props.x, props.y, 70, 70);
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default function ExporterTest() {
    return <YourComponent x={5} y={5} />
}