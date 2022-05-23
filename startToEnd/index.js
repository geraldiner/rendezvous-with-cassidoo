/**
 * Given an n x m matrix where all of the units are 0s except for an 1 for “start”, a 2 for “end”, and 3s for walls, find the shortest paths that you can take to get from 1 to 2, while working around 3s.
 *
 * Example:
 * let grid = [
 * [1,0,0],
 * [0,0,2]
 * ]
 *
 * let grid2 = [
 * [1,3,0],
 * [0,0,2]
 * ]
 *
 * startToEnd(grid)
 * [['right', 'right', 'down'],
 * ['right', 'down', 'right'],
 * ['down', 'right','right']]
 *
 * startToEnd(grid2)
 * [['down', 'right', 'right']]
 */
