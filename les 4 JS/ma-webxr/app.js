// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-1.08846, 0.16445, -7.46154);
cuberoom.setScale(0.77623, 0.70121, 0.47843);
cuberoom.setRotation(0, -0.8158919002662922, 0);

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-0.88055, 0.9446, -7.83787);
minecraftModel.setScale(0.38027, 0.04865, 0.1);
minecraftModel.setRotation(0, 0.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('blue');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);
testText.setColor('yellow')

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 2.45839, -5);

// create a 360 image
const image360 = new Sky('assets/images/Lisse-049.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));