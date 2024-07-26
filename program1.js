const getTotalIsles = function (grid) {


  // write your code here
  let islands = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "W") {
      return;
    }

    grid[i][j] = "W";

    return dfs(i + 1, j) || dfs(i - 1, j) || dfs(i, j + 1) || dfs(i, j - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        islands += 1;
        dfs(i, j);
      }
    }
  }

  return islands;

};

module.exports = getTotalIsles;