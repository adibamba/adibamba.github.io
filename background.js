class BackgroundAnimation {
    constructor() {
        this.container = document.querySelector('.hero');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.particles = [];
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.zIndex = '-1';

        // Create particles
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });

        for (let i = 0; i < 100; i++) {
            const particle = new THREE.Mesh(geometry, material);
            particle.position.x = (Math.random() - 0.5) * 10;
            particle.position.y = (Math.random() - 0.5) * 10;
            particle.position.z = (Math.random() - 0.5) * 10;
            this.scene.add(particle);
            this.particles.push(particle);
        }

        // Position camera
        this.camera.position.z = 5;

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Start animation
        this.animate();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate particles
        this.particles.forEach(particle => {
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
            particle.position.x += Math.sin(Date.now() * 0.001) * 0.01;
            particle.position.y += Math.cos(Date.now() * 0.001) * 0.01;
        });

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the background animation
new BackgroundAnimation(); 