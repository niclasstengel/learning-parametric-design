const jscad = require('@jscad/modeling')

const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus, polygon, polyhedron} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {expand, offset} = jscad.expansions;
const {translate, rotate, scale, center, align} = jscad.transforms;





const main = (parameters) => {
  const objects = [];

 
  const obj = polyhedron ({
    points: [
      [-50, -50, 0],
      [50, -50, 0],
      [50, 50, 0],
      [-50, 50, 0],
    ],
    faces: [
      [0, 1, 2], 
      [2, 3, 0],
    
    ]
  });

  objects.push (obj);

  

 



  return objects;
}

module.exports = { main }