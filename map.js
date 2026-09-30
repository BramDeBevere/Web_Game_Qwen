// ============================================================
// MAP: "District 7" — handcrafted arena for the 3D shooter
// Loaded by index.html via window.GAME_MAP.
// Box: { x, z, w, d, h, color, y (optional base height),
//         collide (default true) }
// Coordinates: arena is 80x80, so x/z range is -40..40.
// ============================================================
window.GAME_MAP = {
  meta: { name: 'District 7' },
  arena: 40,
  boxes: [
    // --- Boundary walls ---
    { x: 0, z: -40, w: 84, d: 2, h: 8, color: 0x3a3a55 },
    { x: 0, z: 40,  w: 84, d: 2, h: 8, color: 0x3a3a55 },
    { x: -40, z: 0, w: 2, d: 84, h: 8, color: 0x3a3a55 },
    { x: 40, z: 0,  w: 2, d: 84, h: 8, color: 0x3a3a55 },

    // --- Central plaza: purple pillars ---
    { x: 6,  z: 6,   w: 2, d: 2, h: 9, color: 0x8a63d2 },
    { x: -6, z: 6,   w: 2, d: 2, h: 9, color: 0x8a63d2 },
    { x: -6, z: -6,  w: 2, d: 2, h: 9, color: 0x8a63d2 },
    { x: 6,  z: -6,  w: 2, d: 2, h: 9, color: 0x8a63d2 },

    // --- Plaza corner trims ---
    { x: 14,  z: 14,  w: 3, d: 3, h: 1.5, color: 0x4a4a6a },
    { x: -14, z: 14,  w: 3, d: 3, h: 1.5, color: 0x4a4a6a },
    { x: -14, z: -14, w: 3, d: 3, h: 1.5, color: 0x4a4a6a },
    { x: 14,  z: -14, w: 3, d: 3, h: 1.5, color: 0x4a4a6a },

    // --- NE: warehouse district (steel grey) ---
    { x: 24, z: -30, w: 12, d: 4, h: 5, color: 0x5c6b7a },
    { x: 24, z: -22, w: 12, d: 4, h: 5, color: 0x5c6b7a },
    { x: 15, z: -26, w: 4, d: 12, h: 3.5, color: 0x5c6b7a },
    { x: 33, z: -30, w: 3, d: 3, h: 8, color: 0x5c6b7a },
    { x: 33, z: -14, w: 3, d: 3, h: 10, color: 0x5c6b7a },

    // --- NW: tower district (indigo) ---
    { x: -28, z: -30, w: 4, d: 4, h: 14, color: 0x7a5fb5 },
    { x: -20, z: -28, w: 3, d: 3, h: 10, color: 0x7a5fb5 },
    { x: -28, z: -18, w: 5, d: 5, h: 16, color: 0x7a5fb5 },
    { x: -16, z: -14, w: 2, d: 2, h: 8, color: 0x7a5fb5 },

    // --- SE: brick courtyard (U-shape, open to the south) ---
    { x: 24, z: 14, w: 18, d: 1.5, h: 2.5, color: 0x8a5a3c },
    { x: 15, z: 23, w: 1.5, d: 17, h: 2.5, color: 0x8a5a3c },
    { x: 33, z: 23, w: 1.5, d: 17, h: 2.5, color: 0x8a5a3c },
    // Crates inside the courtyard
    { x: 20, z: 20, w: 1.4, d: 1.4, h: 1.4, color: 0xb0895a },
    { x: 26, z: 21, w: 1.4, d: 1.4, h: 1.4, color: 0xb0895a },
    { x: 23, z: 26, w: 1.4, d: 1.4, h: 1.4, color: 0xb0895a },
    { x: 18, z: 28, w: 1.4, d: 1.4, h: 1.4, color: 0xb0895a },
    { x: 28, z: 28, w: 1.4, d: 1.4, h: 1.4, color: 0xb0895a },

    // --- SW: park (trees = trunk + floating canopy, boulders) ---
    { x: -30, z: 16,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -30, z: 16,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    { x: -24, z: 20,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -24, z: 20,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    { x: -30, z: 28,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -30, z: 28,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    { x: -18, z: 26,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -18, z: 26,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    { x: -14, z: 16,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -14, z: 16,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    { x: -22, z: 32,  w: 1, d: 1, h: 3.5, color: 0x6b4a2f },
    { x: -22, z: 32,  w: 3.2, d: 3.2, h: 1.2, y: 3.5, color: 0x3f7d44, collide: false },
    // Boulders
    { x: -15, z: 30, w: 2, d: 2, h: 2, color: 0x777788 },
    { x: -26, z: 13, w: 2, d: 2, h: 2, color: 0x777788 },
    { x: -18, z: 33, w: 2, d: 2, h: 2, color: 0x777788 }
  ]
};
