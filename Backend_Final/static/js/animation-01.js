var container;
var camera, controls, scene, renderer;
var sphereTab = [];
var objects = [];
var atom;
var orbitRing;
var wireObj_01, wireObj_02, wireObj_03;
var scrollPos = 0;
var camera_pivot;

// fps monitor
(function () {
    var script = document.createElement('script');
    script.onload = function () {
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = '//mrdoob.github.io/stats.js/build/stats.min.js';
    document.head.appendChild(script);
})();

init();
animate();

function init() {
    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera_pivot = new THREE.Object3D();
    scene.add(camera_pivot);
    camera_pivot.add(camera);
    camera.position.set(0, 0, 70);
    camera.lookAt(camera_pivot.position);
    // camera.position.z = 38;
    // camera.lookAt(scene.position);

    // stars
    for (var i = 0; i < 0; i++) {
        lumiereS = new THREE.MeshPhongMaterial({
            emissive: '#fff'
        });
        sphereTab.push(new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS));
    }

    for (var i = 0; i < sphereTab.length; i++) {
        sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
        scene.add(sphereTab[i]);
    }
    

    // yellow atom material
    var atomMat = new THREE.MeshPhongMaterial({
        color: 0x121212, //yellow
        emissive: 0x111111,
        specular: 0xdddddd,
        shininess: 10,
        shading: THREE.FlatShading,
        transparent: 1,
        opacity: 1
    });

    // yellow atom
    atom = new THREE.Mesh(new THREE.IcosahedronGeometry(8, 1), atomMat);
    scene.add(atom);
    objects.push(atom);

    // wireframe shape
    var geometry_01 = new THREE.IcosahedronGeometry(18, 1);
    var wireMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 1,
    });

    // wireframe 01
    var wireframe_01 = new THREE.WireframeGeometry(geometry_01);
    wireObj_01 = new THREE.LineSegments(wireframe_01, wireMat);
    wireObj_01.material.depthTest = false;
    wireObj_01.material.transparent = true;
    wireObj_01.material.opacity = 0.15;

    // wireObj_01.rotation.x = 1;
    scene.add(wireObj_01);
    objects.push(wireObj_01);

    // white orbit ellipse
    var radius = 12;
    var tubeRadius = 0.03;
    var radialSegments = 8 * 10;
    var tubularSegments = 6 * 15;
    var arc = Math.PI * 3;
    var geometry3 = new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments, arc);
    var material3 = new THREE.MeshLambertMaterial({
        color: 0x151125151125,
        emissive: 0x151125,
        shading: THREE.FlatShading,
    });
    orbitRing = new THREE.Mesh(geometry3, material3);
    scene.add(orbitRing);
    objects.push(orbitRing);

    // lights
    light = new THREE.DirectionalLight(0x4f4f4f);
    light.position.set(4, 4, 4);
    scene.add(light);
    light = new THREE.DirectionalLight(0x4f4f4f);
    light.position.set(-4, -4, -4);
    scene.add(light);

    // render
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.sortObjects = false;
    renderer.autoClear = false;
    //sky color
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    window.addEventListener('scroll', onMouseWheel, false);
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {;
    var timer = 0.00001 * Date.now();
    for (var i = 0, il = sphereTab.length; i < il; i++) {
        var sfere = sphereTab[i];
        sfere.position.x = 400 * Math.sin(timer + i);
        // sfere.position.z= 500 * Math.sin( timer + i * 1.1 );
        sfere.position.z = 400 * Math.sin(timer + i * 1.1);
    }
    atom.rotation.y += 0.008;
    wireObj_01.rotation.x += 0.008;
    // wireObj_02.rotation.y += 0.008;
    // wireObj_03.rotation.z += 0.008;
    // earthPivot.rotation.z += 0.006;
    // earthPivot2.rotation.z += 0.01;
    orbitRing.rotation.x += 0.006;
    orbitRing.rotation.y += 0.007;
    orbitRing.rotation.z += 0.008;
    // earthPivot4.rotation.z += 0.008;
    requestAnimationFrame(animate);
    render();
}

function render() {
    renderer.render(scene, camera)
}

function onMouseWheel(event) {
    event.preventDefault();

    // camera.rotation.x -= event.deltaY * 0.05;

    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        camera_pivot.rotation.y -= 0.004;
    } else {
        camera_pivot.rotation.y += 0.004;
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}