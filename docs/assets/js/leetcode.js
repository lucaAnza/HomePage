const roadmapCategories = [
  "Arrays & Hashing",
  "Two Pointers",
  "Stack",
  "Binary Search",
  "Sliding Window",
  "Linked List",
  "Trees",
  "Tries",
  "Backtracking",
  "Heap / Priority Queue",
  "Intervals",
  "Greedy",
  "Graphs",
  "Advanced Graphs",
  "1-D DP",
  "2-D DP",
  "Bit Manipulation",
  "Math & Geometry",
  "Class Design",
];

const solvedProblems = [
  { category: "Arrays & Hashing", name: "Contains Duplicate", difficulty: "Easy" },
  { category: "Arrays & Hashing", name: "2 Sum", difficulty: "Easy" },
  { category: "Arrays & Hashing", name: "Valid Anagram", difficulty: "Easy" },
  { category: "Arrays & Hashing", name: "Longest Consecutive Sequence", difficulty: "Medium" },
  { category: "Arrays & Hashing", name: "Group Anagrams", difficulty: "Medium" },
  { category: "Arrays & Hashing", name: "Encode and Decode Strings", difficulty: "Medium" },
  { category: "Arrays & Hashing", name: "Product of Array Except Self", difficulty: "Medium" },
  { category: "Arrays & Hashing", name: "Top K Frequent Elements", difficulty: "Medium" },
  { category: "Two Pointers", name: "Valid Palindrome", difficulty: "Easy" },
  { category: "Two Pointers", name: "3Sum", difficulty: "Medium" },
  { category: "Two Pointers", name: "Container With Most Water", difficulty: "Medium" },
  { category: "Two Pointers", name: "Two Integer Sum II", difficulty: "Medium" },
  { category: "Two Pointers", name: "String Compression", difficulty: "Medium" },
  { category: "Two Pointers", name: "Trapping Rain Water", difficulty: "Hard" },
  { category: "Stack", name: "Valid Parentheses", difficulty: "Easy" },
  { category: "Stack", name: "Min Stack", difficulty: "Medium" },
  { category: "Stack", name: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
  { category: "Stack", name: "Daily Temperatures", difficulty: "Medium" },
  { category: "Stack", name: "Car Fleet", difficulty: "Medium" },
  { category: "Binary Search", name: "Koko Eating Bananas", difficulty: "Medium" },
  { category: "Binary Search", name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium" },
  { category: "Binary Search", name: "Search in Rotated Sorted Array", difficulty: "Medium" },
  { category: "Sliding Window", name: "Best Time to Buy and Sell Stock", difficulty: "Easy" },
  { category: "Sliding Window", name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
  { category: "Sliding Window", name: "Longest Repeating Character Replacement", difficulty: "Medium" },
  { category: "Sliding Window", name: "Permutation in String", difficulty: "Medium" },
  { category: "Linked List", name: "Reverse Linked List", difficulty: "Easy" },
  { category: "Linked List", name: "Merge Two Sorted Lists", difficulty: "Easy" },
  { category: "Linked List", name: "Linked List Cycle Detection", difficulty: "Easy" },
  { category: "Linked List", name: "Reorder Linked List", difficulty: "Medium" },
  { category: "Linked List", name: "Remove Node From End of Linked List", difficulty: "Medium" },
  { category: "Linked List", name: "Copy List with Random Pointer", difficulty: "Medium" },
  { category: "Linked List", name: "Add Two Numbers", difficulty: "Medium" },
  { category: "Linked List", name: "Find the Duplicate Number", difficulty: "Medium" },
  { category: "Trees", name: "Invert Binary Tree", difficulty: "Easy" },
  { category: "Trees", name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
  { category: "Trees", name: "Same Tree", difficulty: "Easy" },
  { category: "Trees", name: "Subtree of Another Tree", difficulty: "Easy" },
  { category: "Trees", name: "Balanced Binary Tree", difficulty: "Easy" },
  { category: "Trees", name: "Lowest Common Ancestor in Binary Search Tree", difficulty: "Medium" },
  { category: "Trees", name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
  { category: "Trees", name: "Valid Binary Search Tree", difficulty: "Medium" },
  { category: "Trees", name: "Kth Smallest Integer in BST", difficulty: "Medium" },
  { category: "Trees", name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium" },
  { category: "Tries", name: "Implement Trie (Prefix Tree)", difficulty: "Medium" },
  { category: "Backtracking", name: "Combination Sum", difficulty: "Medium" },
  { category: "Backtracking", name: "Word Search", difficulty: "Medium" },
  { category: "Backtracking", name: "Subsets", difficulty: "Medium" },
  { category: "Backtracking", name: "Combination Sum II", difficulty: "Medium" },
  { category: "Heap / Priority Queue", name: "Kth Largest Element in a Stream", difficulty: "Easy" },
  { category: "Heap / Priority Queue", name: "Last Stone Weight", difficulty: "Easy" },
  { category: "Heap / Priority Queue", name: "K Closest Points to Origin", difficulty: "Medium" },
  { category: "Heap / Priority Queue", name: "Kth Largest Element in an Array", difficulty: "Medium" },
  { category: "Heap / Priority Queue", name: "Task Scheduler", difficulty: "Medium" },
  { category: "Heap / Priority Queue", name: "Design Twitter", difficulty: "Medium" },
  { category: "Heap / Priority Queue", name: "Reorganize String", difficulty: "Medium" },
  { category: "Intervals", name: "Meeting Rooms", difficulty: "Easy" },
  { category: "Intervals", name: "Insert Interval", difficulty: "Medium" },
  { category: "Intervals", name: "Merge Intervals", difficulty: "Medium" },
  { category: "Intervals", name: "Non-overlapping Intervals", difficulty: "Medium" },
  { category: "Greedy", name: "Maximum Subarray", difficulty: "Medium" },
  { category: "Greedy", name: "Hand of Straights", difficulty: "Medium" },
  { category: "Greedy", name: "Gas Station", difficulty: "Medium" },
  { category: "Greedy", name: "Jump Game II", difficulty: "Medium" },
  { category: "Greedy", name: "Jump Game", difficulty: "Medium" },
  { category: "Greedy", name: "Merge Triplets to Form Target Triplet", difficulty: "Medium" },
  { category: "Greedy", name: "Partition Labels", difficulty: "Medium" },
  { category: "Greedy", name: "Valid Parenthesis String", difficulty: "Medium" },
  { category: "Graphs", name: "Number of Islands", difficulty: "Medium" },
  { category: "Graphs", name: "Clone Graph", difficulty: "Medium" },
  { category: "Graphs", name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
  { category: "Graphs", name: "Course Schedule", difficulty: "Medium" },
  { category: "1-D DP", name: "Climbing Stairs", difficulty: "Easy" },
  { category: "1-D DP", name: "Min Cost Climbing Stairs", difficulty: "Easy" },
  { category: "1-D DP", name: "Coin Change", difficulty: "Medium" },
  { category: "1-D DP", name: "House Robber", difficulty: "Medium" },
  { category: "1-D DP", name: "House Robber II", difficulty: "Medium" },
  { category: "1-D DP", name: "Longest Palindromic Substring", difficulty: "Medium" },
  { category: "1-D DP", name: "Palindromic Substrings", difficulty: "Medium" },
  { category: "Bit Manipulation", name: "Number of 1 Bits", difficulty: "Easy" },
  { category: "Bit Manipulation", name: "Counting Bits", difficulty: "Easy" },
  { category: "Bit Manipulation", name: "Reverse Bits", difficulty: "Easy" },
  { category: "Bit Manipulation", name: "Missing Number", difficulty: "Easy" },
  { category: "Bit Manipulation", name: "Sum of Two Integers", difficulty: "Medium" },
  { category: "Math & Geometry", name: "Rotate Image", difficulty: "Medium" },
  { category: "Class Design", name: "LRU Cache", difficulty: "Medium" },
  { category: "Class Design", name: "Design Circular Queue", difficulty: "Medium" },
];

const helperReference = [
  {
    name: "List / Array",
    rows: [
      ["Create", "items = []", "int[] items = {};"],
      ["Dynamic", "items = []", "List<Integer> items = new ArrayList<>();"],
      ["Add", "items.append(x)", "items.add(x);"],
      ["Read", "items[i]", "items.get(i);"],
      ["Remove", "items.pop(i)", "items.remove(i);"],
      ["Length", "len(items)", "items.size();"],
      ["Sort", "items.sort()", "Collections.sort(items);"],
    ],
  },
  {
    name: "HashMap",
    rows: [
      ["Create", "values = {}", "Map<K, V> values = new HashMap<>();"],
      ["Set", "values[key] = value", "values.put(key, value);"],
      ["Get", "values.get(key)", "values.get(key);"],
      ["Contains", "key in values", "values.containsKey(key);"],
      ["Remove", "values.pop(key)", "values.remove(key);"],
      ["Iterate", "for key, value in values.items():", "for (var entry : values.entrySet()) { }"],
    ],
  },
  {
    name: "Set",
    rows: [
      ["Create", "seen = set()", "Set<Integer> seen = new HashSet<>();"],
      ["Add", "seen.add(x)", "seen.add(x);"],
      ["Contains", "x in seen", "seen.contains(x);"],
      ["Remove", "seen.discard(x)", "seen.remove(x);"],
      ["Length", "len(seen)", "seen.size();"],
    ],
  },
  {
    name: "Stack",
    rows: [
      ["Create", "stack = []", "Deque<Integer> stack = new ArrayDeque<>();"],
      ["Push", "stack.append(x)", "stack.push(x);"],
      ["Pop", "stack.pop()", "stack.pop();"],
      ["Peek", "stack[-1]", "stack.peek();"],
    ],
  },
  {
    name: "Queue / Deque",
    rows: [
      ["Create", "queue = deque()", "Queue<Integer> queue = new ArrayDeque<>();"],
      ["Enqueue", "queue.append(x)", "queue.offer(x);"],
      ["Dequeue", "queue.popleft()", "queue.poll();"],
      ["Front", "queue[0]", "queue.peek();"],
    ],
  },
  {
    name: "Min Heap",
    rows: [
      ["Create", "heap = []", "PriorityQueue<Integer> heap = new PriorityQueue<>();"],
      ["Push", "heapq.heappush(heap, x)", "heap.offer(x);"],
      ["Pop", "heapq.heappop(heap)", "heap.poll();"],
      ["Peek", "heap[0]", "heap.peek();"],
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const difficultyCounts = countDifficulties(solvedProblems);
  const categoryCounts = Object.fromEntries(roadmapCategories.map((category) => [category, 0]));

  solvedProblems.forEach((problem) => {
    categoryCounts[problem.category] += 1;
  });

  document.getElementById("total-solved").textContent = String(solvedProblems.length);
  document.getElementById("easy-count").textContent = String(difficultyCounts.Easy);
  document.getElementById("medium-count").textContent = String(difficultyCounts.Medium);
  document.getElementById("hard-count").textContent = String(difficultyCounts.Hard);

  renderCharts(difficultyCounts, categoryCounts);
  renderGroups();
  renderHelper();
});

function countDifficulties(problems) {
  return problems.reduce(
    (counts, problem) => {
      counts[problem.difficulty] += 1;
      return counts;
    },
    { Easy: 0, Medium: 0, Hard: 0 }
  );
}

function renderCharts(difficultyCounts, categoryCounts) {
  const difficultyChart = document.getElementById("difficultyChart");
  const categoryChart = document.getElementById("categoryChart");

  if (!difficultyChart || !categoryChart || typeof Chart === "undefined") {
    return;
  }

  new Chart(difficultyChart, {
    type: "doughnut",
    data: {
      labels: ["Easy", "Medium", "Hard"],
      datasets: [
        {
          data: [difficultyCounts.Easy, difficultyCounts.Medium, difficultyCounts.Hard],
          backgroundColor: ["#22c55e", "#eab308", "#ef4444"],
          borderColor: ["#ffffff", "#ffffff", "#ffffff"],
          borderWidth: 6,
          hoverOffset: 8,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            boxWidth: 10,
            padding: 18,
            font: { family: "Manrope", weight: "700" },
          },
        },
      },
    },
  });

  const displayedCategories = roadmapCategories;
  const palette = ["#113847", "#1d5364", "#286f83", "#3291a4", "#58baa8", "#79cdbc", "#a1e2d4"];

  new Chart(categoryChart, {
    type: "bar",
    data: {
      labels: displayedCategories,
      datasets: [
        {
          label: "Solved",
          data: displayedCategories.map((category) => categoryCounts[category]),
          backgroundColor: displayedCategories.map((_, index) => palette[index % palette.length]),
          borderRadius: 12,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          ticks: { precision: 0, font: { family: "Manrope", weight: "700" } },
          grid: { color: "rgba(148, 163, 184, 0.14)" },
        },
        y: {
          ticks: { autoSkip: false, font: { family: "Manrope", weight: "700" } },
          grid: { display: false },
        },
      },
    },
  });
}

function renderGroups() {
  const groupsRoot = document.getElementById("leetcode-groups");
  if (!groupsRoot) {
    return;
  }

  roadmapCategories.forEach((category) => {
    const problems = solvedProblems.filter((problem) => problem.category === category);
    const difficultyCounts = countDifficulties(problems);
    const group = document.createElement("details");
    group.className = "leetcode-group";

    const header = document.createElement("summary");
    header.className = "leetcode-group-header";

    const title = document.createElement("h4");
    title.textContent = category;

    const countSummary = document.createElement("span");
    countSummary.className = "leetcode-group-summary";
    ["Easy", "Medium", "Hard"].forEach((difficulty) => {
      countSummary.appendChild(createDifficultyCount(difficulty, difficultyCounts[difficulty]));
    });

    const arrow = document.createElement("span");
    arrow.className = "leetcode-group-arrow";
    arrow.setAttribute("aria-hidden", "true");

    header.append(title, countSummary, arrow);
    group.appendChild(header);

    const list = document.createElement("div");
    list.className = "leetcode-list";

    if (!problems.length) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "leetcode-empty";
      emptyMessage.textContent = "No solved problems in this section yet.";
      list.appendChild(emptyMessage);
    } else {
      problems.forEach((problem) => list.appendChild(createProblemItem(problem)));
    }

    group.appendChild(list);
    groupsRoot.appendChild(group);
  });
}

function createDifficultyCount(difficulty, count) {
  const item = document.createElement("span");
  item.className = "difficulty-count";
  item.title = `${difficulty}: ${count}`;

  const dot = document.createElement("span");
  dot.className = `difficulty-dot difficulty-dot-${difficulty.toLowerCase()}`;
  dot.setAttribute("aria-hidden", "true");

  const value = document.createElement("span");
  value.textContent = String(count);

  const label = document.createElement("span");
  label.className = "sr-only";
  label.textContent = ` ${difficulty.toLowerCase()}`;

  item.append(dot, value, label);
  return item;
}

function createProblemItem(problem) {
  const item = document.createElement("div");
  item.className = "leetcode-item";

  const label = document.createElement("span");
  label.className = "leetcode-item-name";
  label.textContent = problem.name;

  const badge = document.createElement("span");
  badge.className = `difficulty-badge difficulty-${problem.difficulty.toLowerCase()}`;
  badge.textContent = problem.difficulty;

  item.append(label, badge);
  return item;
}

function renderHelper() {
  const helperRoot = document.getElementById("leetcode-helper");
  if (!helperRoot) {
    return;
  }

  helperReference.forEach((section) => {
    const card = document.createElement("section");
    card.className = "helper-card";

    const title = document.createElement("h4");
    title.textContent = section.name;

    const tableWrap = document.createElement("div");
    tableWrap.className = "helper-table-wrap";

    const table = document.createElement("table");
    table.className = "helper-table";
    table.appendChild(createHelperTableHead());

    const body = document.createElement("tbody");
    section.rows.forEach(([action, python, java]) => {
      const row = document.createElement("tr");
      const actionCell = document.createElement("th");
      actionCell.scope = "row";
      actionCell.textContent = action;
      row.append(actionCell, createCodeCell(python), createCodeCell(java));
      body.appendChild(row);
    });

    table.appendChild(body);
    tableWrap.appendChild(table);
    card.append(title, tableWrap);
    helperRoot.appendChild(card);
  });
}

function createHelperTableHead() {
  const head = document.createElement("thead");
  const row = document.createElement("tr");

  const actionHeader = document.createElement("th");
  actionHeader.scope = "col";
  actionHeader.textContent = "Action";

  row.append(
    actionHeader,
    createLanguageHeader(
      "Python · Primary",
      "https://img.shields.io/badge/Python-Primary-3776AB?style=flat&logo=python&logoColor=white"
    ),
    createLanguageHeader(
      "Java · Secondary",
      "https://img.shields.io/badge/Java-Secondary-ED8B00?style=flat&logo=openjdk&logoColor=white"
    )
  );

  head.appendChild(row);
  return head;
}

function createLanguageHeader(label, badgeUrl) {
  const cell = document.createElement("th");
  cell.scope = "col";

  const badge = document.createElement("img");
  badge.className = "helper-language-badge";
  badge.src = badgeUrl;
  badge.alt = label;
  badge.loading = "lazy";
  badge.referrerPolicy = "no-referrer";

  cell.appendChild(badge);
  return cell;
}

function createCodeCell(value) {
  const cell = document.createElement("td");
  const code = document.createElement("code");
  code.textContent = value;
  cell.appendChild(code);
  return cell;
}
