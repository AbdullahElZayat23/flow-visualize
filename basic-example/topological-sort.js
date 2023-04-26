function isSafeToVisit(step, visitedSteps, steps) {
    let inDegrees = new Map();
    let queue = [];
  
    // Initialize inDegrees with 0 for all nodes
    steps.forEach(s => inDegrees.set(s.name, 0));
  
    // Compute inDegrees for all nodes
    steps.forEach(s => {
      if (s.next && s.next == step.name) {
        inDegrees.set(step.name, inDegrees.get(step.name) + 1);
      }
      if (s.success && s.success == step.name) {
        inDegrees.set(step.name, inDegrees.get(step.name) + 1);
      }
      if (s.fail && s.fail == step.name) {
        inDegrees.set(step.name, inDegrees.get(step.name) + 1);
      }
      if (s.expiry?.step && s.expiry.step == step.name) {
        inDegrees.set(step.name, inDegrees.get(step.name) + 1);
      }
      if (checkExpected(step.expected, s.name)) {
        inDegrees.set(step.name, inDegrees.get(step.name) + 1);
      }
    });
  
    // Add nodes with inDegree 0 to queue
    steps.forEach(s => {
      if (inDegrees.get(s.name) == 0) {
        queue.push(s.name);
      }
    });
  
    // Process queue using topological sorting
    while (queue.length > 0) {
      let curr = queue.shift();
      visitedSteps.add(curr);
  
      steps.forEach(s => {
        if (s.name == curr) {
          if (s.next || s.success || s.fail || s.expiry?.step) {
            let next = s.next || s.success || s.fail || s.expiry.step;
            inDegrees.set(next, inDegrees.get(next) - 1);
            if (inDegrees.get(next) == 0) {
              queue.push(next);
            }
          }
          if (s.expected) {
            s.expected.forEach(e => {
              if (e.name && visitedSteps.has(e.name)) {
                let next = e.next || e.success || e.fail || e.expiry?.step;
                inDegrees.set(next, inDegrees.get(next) - 1);
                if (inDegrees.get(next) == 0) {
                  queue.push(next);
                }
              }
            });
          }
        }
      });
    }
  
    return visitedSteps.has(step.name);
  }
function topologicalSort(graph) {
    const inDegree = new Map();
    const sorted = [];
  
    // Calculate in-degree of each node
    for (const [node, edges] of Object.entries(graph)) {
      if (!inDegree.has(node)) {
        inDegree.set(node, 0);
      }
      for (const target of edges) {
        if (!inDegree.has(target)) {
          inDegree.set(target, 1);
        } else {
          inDegree.set(target, inDegree.get(target) + 1);
        }
      }
    }
  
    // Find nodes with in-degree 0
    const queue = [];
    for (const [node, degree] of inDegree.entries()) {
      if (degree === 0) {
        queue.push(node);
      }
    }
  
    // Remove nodes with in-degree 0 and update in-degree of targets
    while (queue.length > 0) {
      const node = queue.shift();
      sorted.push(node);
      for (const target of graph[node]) {
        inDegree.set(target, inDegree.get(target) - 1);
        if (inDegree.get(target) === 0) {
          queue.push(target);
        }
      }
    }
  
    // Check if all nodes were visited
    if (sorted.length !== Object.keys(graph).length) {
      throw new Error('Circular dependency detected');
    }
  
    return sorted;
}