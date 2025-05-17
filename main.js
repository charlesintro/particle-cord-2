
function genHelix(offset = 0) {
  return {
    init: () => {},  // required by tsParticles
    update: () => {},  // required by tsParticles
    generate: (p) => {
      const x = p.x + 1.5;
      const y = 25 * Math.sin(0.4 * x + offset) + 5 * Math.cos(1.2 * x + offset) + 35;
      return { x, y };
    }
  };
}

window.addEventListener("DOMContentLoaded", () => {
  tsParticles.addPathGenerator("helix0", genHelix(0));
  tsParticles.addPathGenerator("helix1", genHelix(1.57));
  tsParticles.addPathGenerator("helix2", genHelix(3.14));
  tsParticles.addPathGenerator("helix3", genHelix(4.71));

  tsParticles.load("cord", {
    fullScreen: { enable: true },
    background: { color: "#000" },
    particles: {
      number: { value: 0 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.9 },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 1.2,
        outModes: { default: "destroy" }
      }
    },
    emitters: [0, 1, 2, 3].map(i => ({
      position: { x: 0, y: 50 },
      rate: { quantity: 1, delay: 0.02 },
      particles: {
        move: {
          path: {
            enable: true,
            generator: "helix" + i
          }
        }
      }
    }))
  });
});
