var pacificAtlantic = function (matrix) {
    // 判断空或者是一维矩阵
    if (!matrix || !matrix[0]) {
        return []
    }
    // 获取行和列数
    const m = matrix.length
    const n = matrix[0].length
    // 流到太平洋和大西洋
    const flow1 = Array.from({length: m}, () => new Array(n).fill(false))
    const flow2 = Array.from({length: m}, () => new Array(n).fill(false))
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
            if (
                // 保持在矩阵中
                nr >= 0 && nr < m &&
                nc >= 0 && nc <= n &&
                // 防止死循环
                !flow[nr][nc] &&
                // 保证逆流而上
                matrix[nr][nc] >= matrix[r][c]

            ) {
                dfs(nr, nc, flow)
            }
        })
    }
    // 沿着海岸线逆流而上
    for (let r = 0; r < m; r += 1) {
        dfs(r, 0, flow1)
        dfs(r, n - 1, flow2)
    }
    for (let c = 0; c < n; c += 1) {
        dfs(0, c, flow1)
        dfs(m - 1, c, flow2)
    }
    // 收集能留到两个大洋的坐标
    const res = []
    for (let r = 0; r < m; r += 1) {
        for (let c = 0; c < n; c += 1) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res
};

pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])
