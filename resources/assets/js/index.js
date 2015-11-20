import FaceTracker from './lib/face-tracker';
import FaceSubstitution from './lib/face-substitution';

var faceTracker = new FaceTracker('camera', 'overlay');
var faceSubstitution = new FaceSubstitution(new clm.tracker(), pModel, faceTracker, faceDeformer, Poisson);

faceSubstitution.setFaceDeformers();
faceSubstitution.setMasks();
faceSubstitution.setImages();
faceSubstitution.setCurrentMask();
faceSubstitution.setAuxCanvases();
faceSubstitution.setExtendedVertices();
faceSubstitution.setImageCanvases();

document.getElementById('start').onclick = faceSubstitution.startVideo;