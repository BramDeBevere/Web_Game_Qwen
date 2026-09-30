// ============================================================
// MAP: "Grasveld" — open grass arena, no buildings
// Loaded by index.html via window.GAME_MAP.
// Box: { x, z, w, d, h, color, y (optional base height),
//         collide (default true) }
// Coordinates: arena 140x140, x/z range -70..70.
// ============================================================
window.GAME_MAP = {
  meta: { name: 'Grasveld met straten' },
  arena: 70,
  boxList: { walls: [], floorSlabs: [] }
};

const B = window.GAME_MAP.boxList;
const wall = (x, z, w, d, h, c, o) =>
  B.walls.push(Object.assign({ x, z, w, d, h, color: c, y: 0, collide: true }, o || {}));
const furn = (x, z, w, d, h, c) => B.walls.push({ x, z, w, d, h, color: c, y: 0 });
const slab = (x, z, w, d, h, c, y) =>
  B.floorSlabs.push({ x, z, w, d, h, color: c, y: y || 0, collide: false });

// Wall with a gap (doorway)
function wallGap(x, z, w, d, h, c, gx, gw, y) {
  const a = (w - gw) / 2;
  if (a > 0.05) wall(x - gx - a / 2, z, a, d, h, c, y ? { y } : null);
  if (w - gw - a > 0.05) wall(x + gx + (w - gw - a) / 2, z, w - gw - a, d, h, c, y ? { y } : null);
}

// Stairs along +x, n steps of 0.5 tread, top lands on floorH
function stairs(x0, z, w, floorH, n, c) {
  for (let i = 0; i < n; i++)
    wall(x0 + 0.5 * i + 0.25, z, 0.5, w, floorH / n * (i + 1), c);
}

// ---------- Boundary walls ----------
wall(0, -70, 147, 3.5, 8, 0x8b7d6b);
wall(0,  70, 147, 3.5, 8, 0x8b7d6b);
wall(-70, 0, 3.5, 147, 8, 0x8b7d6b);
wall(70,  0, 3.5, 147, 8, 0x8b7d6b);

// ---------- Roads (asphalt markings on the grass) ----------
const ROAD = 0x55565c;
slab(0, 0,   140, 5, 0.06, ROAD); // main east-west road
slab(0, -35, 140, 4, 0.06, ROAD); // north road
slab(0, 35,  140, 4, 0.06, ROAD); // south road
slab(-35, 0, 4, 140, 0.06, ROAD); // west road
slab(35, 0,  4, 140, 0.06, ROAD); // east road

// ============================================================
// SCHOOL — north-east block (x 25..47, z -61..-47), 2 floors
// ============================================================
{
  const c = 0xc9b896, y2 = 3.4;
  slab(36, -54, 22, 14, 0.12, 0xb0a493);
  wallGap(36, -61, 22, 0.3, 3, c, 0, 3);
  wall(36, -47, 22, 0.3, 3, c);
  wall(25, -54, 0.3, 14, 3, c);
  wall(47, -54, 0.3, 14, 3, c);
  // ground floor: blackboard + desks
  wall(36, -47.9, 8, 0.35, 1.3, 0x2f3b30);
  furn(29.5, -57.5, 3, 1.2, 1.0, 0x8a6d46);
  furn(34, -58.5, 0.8, 0.8, 0.75, 0x6b7a85);
  furn(38.5, -58.5, 0.8, 0.8, 0.75, 0x6b7a85);
  for (let i = 0; i < 5; i++) { furn(28 + i * 3.2, -52.5, 1.8, 1.0, 0.8, 0x8a6d46); furn(28 + i * 3.2, -49.5, 1.8, 1.0, 0.8, 0x8a6d46); }
  // stairs to 2nd floor
  stairs(26.2, -59.3, 2, y2, 8, 0x9a8f7d);
  // 2nd floor
  slab(36, -54, 22, 14, 0.12, 0xb0a493, y2);
  wallGap(36, -61, 22, 0.3, 3, c, 0, 3, y2);
  wallGap(36, -47, 22, 0.3, 3, c, -9, 3, y2);
  wall(25, -54, 0.3, 14, 3, c, { y: y2 });
  wall(47, -54, 0.3, 14, 3, c, { y: y2 });
  for (let i = 0; i < 5; i++) { furn(30 + i * 3, -52.5, 1.6, 0.9, 0.8, 0x8a6d46); }
  furn(40, -49.5, 3, 1.2, 1.0, 0x8a6d46);
  furn(27, -48.5, 1, 1, 1.2, 0x7d8a6b);
}

// ============================================================
// HOSPITAL — middle block (x -10..10, z -22..-10), 2 floors
// ============================================================
{
  const c = 0xe8e4dc, y2 = 3.2;
  slab(0, -16, 20, 12, 0.12, 0xd8d4cc);
  wallGap(0, -22, 20, 0.3, 3, c, 0, 3.2);
  wall(0, -10, 20, 0.3, 3, c);
  wall(-10, -16, 0.3, 12, 3, c);
  wall(10, -16, 0.3, 12, 3, c);
  wall(0, -16, 0.3, 9.8, 3, c); // divider between patient wing and hall
  // ground floor furniture
  furn(-7.2, -19.5, 2.4, 1.2, 0.5, 0xdfe4e8); // bed
  furn(-4.6, -19.5, 2.4, 1.2, 0.5, 0xdfe4e8); // bed
  furn(3, -19, 0.8, 0.8, 0.8, 0x9aa49a);      // chair
  furn(5.5, -19, 0.8, 0.8, 0.8, 0x9aa49a);    // chair
  furn(7.5, -20.5, 2, 1, 1.0, 0x8a94a6);      // reception desk
  // stairs to 2nd floor
  stairs(-7.2, -11.6, 2, y2, 8, 0xb8b4ac);
  // 2nd floor
  slab(0, -16, 20, 12, 0.12, 0xd8d4cc, y2);
  wallGap(0, -22, 20, 0.3, 3, c, 0, 3.2, y2);
  wallGap(0, -10, 20, 0.3, 3, c, -6.2, 3, y2);
  wall(-10, -16, 0.3, 12, 3, c, { y: y2 });
  wall(10, -16, 0.3, 12, 3, c, { y: y2 });
  // 2nd floor furniture
  furn(-5, -19, 3, 1.4, 0.8, 0xcfd6d4); // operating table
  furn(-2, -19, 1, 1, 1.1, 0x9aa49a);   // chair
  furn(6, -18.5, 2.4, 1.2, 0.5, 0xdfe4e8); // recovery bed
}

// ============================================================
// HOUSE A — north-west block (x -18..-6, z -22..-10), 2 floors
// ============================================================
{
  const c = 0xd9c9a8, y2 = 3.0;
  slab(-12, -16, 12, 12, 0.12, 0xcbbfa4);
  wallGap(-12, -22, 12, 0.3, 3, c, 0, 2.6);
  wall(-12, -10, 12, 0.3, 3, c);
  wall(-18, -16, 0.3, 12, 3, c);
  wall(-6, -16, 0.3, 12, 3, c);
  wall(-12, -16, 0.3, 9.8, 3, c); // divider
  // ground floor furniture
  furn(-15, -20, 2.2, 1.1, 0.5, 0xc9a26b); // bed
  furn(-15, -12.5, 1.8, 1.8, 0.7, 0x8a6d46); // table
  furn(-8, -20, 1.6, 0.9, 1.1, 0x6b7a85);  // cabinet
  // stairs to 2nd floor
  stairs(-16.8, -12, 2, y2, 6, 0x9a8f7d);
  // 2nd floor
  slab(-12, -16, 12, 12, 0.12, 0xcbbfa4, y2);
  wallGap(-12, -22, 12, 0.3, 3, c, 0, 2.6, y2);
  wallGap(-12, -10, 12, 0.3, 3, c, -6, 3, y2);
  wall(-18, -16, 0.3, 12, 3, c, { y: y2 });
  wall(-6, -16, 0.3, 12, 3, c, { y: y2 });
  furn(-15, -20, 2.2, 1.1, 0.5, 0xc9a26b); // bed
  furn(-9, -13, 2, 1, 0.8, 0x8a6d46);      // table
  furn(-16, -13, 1.2, 1.2, 1.2, 0x7d8a6b); // cabinet
}

// ============================================================
// HOUSE B — middle-east block (x 41..53, z 2..14), 2 floors
// ============================================================
{
  const c = 0xcdb9a5, y2 = 3.0;
  slab(47, 8, 12, 12, 0.12, 0xc2ae99);
  wallGap(47, 2, 12, 0.3, 3, c, 0, 2.6);
  wall(47, 14, 12, 0.3, 3, c);
  wall(41, 8, 0.3, 12, 3, c);
  wall(53, 8, 0.3, 12, 3, c);
  wall(47, 8, 0.3, 9.8, 3, c); // divider
  // ground floor furniture
  furn(43.5, 11, 2.2, 1.1, 0.5, 0xc9a26b); // bed
  furn(43.5, 4, 1.6, 0.9, 1.1, 0x6b7a85);  // cabinet
  furn(49.5, 10, 1.8, 1.8, 0.7, 0x8a6d46); // table
  // stairs to 2nd floor
  stairs(49.8, 3, 2, y2, 6, 0x9a8f7d);
  // 2nd floor
  slab(47, 8, 12, 12, 0.12, 0xc2ae99, y2);
  wallGap(47, 2, 12, 0.3, 3, c, 0, 2.6, y2);
  wallGap(47, 14, 12, 0.3, 3, c, 6, 3, y2);
  wall(41, 8, 0.3, 12, 3, c, { y: y2 });
  wall(53, 8, 0.3, 12, 3, c, { y: y2 });
  furn(43.5, 5, 2.2, 1.1, 0.5, 0xc9a26b);  // bed
  furn(50, 11, 1.8, 1.8, 0.7, 0x8a6d46);   // table
}

// ============================================================
// ANNEX — middle-west block (x -50..-42, z 8..16), 2 floors.
// Bridge connects House A 2nd floor (z -10) <-> Annex 2nd floor (z 8).
// ============================================================
{
  const c = 0xcfc4ae, y2 = 4.0;
  slab(-46, 12, 8, 8, 0.12, 0xc2b8a4);
  wallGap(-46, 8, 8, 0.3, 3, c, 0, 2.4);
  wall(-46, 16, 8, 0.3, 3, c);
  wall(-50, 12, 0.3, 8, 3, c);
  wall(-42, 12, 0.3, 8, 3, c);
  furn(-44, 14.5, 1.6, 0.9, 1.0, 0x6b7a85); // cabinet
  // stairs to 2nd floor (against west wall, opening on 2F at x -48)
  stairs(-49.8, 12, 2, y2, 8, 0x9a8f7d);
  // 2nd floor
  slab(-46, 12, 8, 8, 0.12, 0xc2b8a4, y2);
  wallGap(-46, 8, 8, 0.3, 3, c, 0, 2.4, y2);
  wallGap(-46, 16, 8, 0.3, 3, c, -4, 3, y2);
  wall(-50, 12, 0.3, 8, 3, c, { y: y2 });
  wall(-42, 12, 0.3, 8, 3, c, { y: y2 });
  furn(-44, 10, 2.2, 1.1, 0.5, 0xc9a26b); // bed
}

// ---------- BRIDGE: House A 2F (z -10) <-> Annex 2F (z 8), at h 4.2 ----------
slab(-34, 2.3, 8, 1.6, 0.12, 0x8a6d46, 4.04);
