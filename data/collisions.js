const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 0, 0, 3665, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 0, 3665, 0, 0, 0, 3665, 0, 0, 0, 3665, 0, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 0, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 3665, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 3665, 3665, 0, 3665, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 3665, 0, 3665, 3665, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 3665, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 3665, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 3665, 0, 3665, 3665, 0, 0, 3665, 0, 0, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 3665, 3665, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0,
    0, 3665, 0, 3665, 3665, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 3665, 3665, 3665, 0, 0, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 0, 3665, 3665, 3665, 3665, 0, 0, 0, 3665, 3665, 3665, 0, 3665, 3665, 3665, 3665, 3665, 3665, 0, 0, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 3665, 3665, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 3665, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 3665, 0, 3665, 3665, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3665, 3665, 3665, 3665, 3665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]