// 깊이우선탐색 : 루트노드에서 시작해서 다음branch로 넘어가기전에 해당분기를 완벽하게 탐색
// 모든노드를 방문하고자할때 이방법을 선택한다
// 스택기반의 구현, 원통막대를 생각.

const dfs = (graph, v, visited) => {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph[v]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
};

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(7).fill(false);

dfs(graph, 0, visited);
