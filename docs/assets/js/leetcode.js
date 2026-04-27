const leetcodeEntries = [
  { category: "Arrays & Hashing", name: "Contains Duplicate", difficulty: "Easy", solved: true },
  { category: "Arrays & Hashing", name: "2 Sum", difficulty: "Easy", solved: true },
  { category: "Arrays & Hashing", name: "Valid Anagram", difficulty: "Easy", solved: true },
  { category: "Arrays & Hashing", name: "Longest Consecutive Sequence", difficulty: "Medium", solved: true },
  { category: "Arrays & Hashing", name: "Group Anagrams", difficulty: "Medium", solved: true },
  { category: "Arrays & Hashing", name: "Encode and Decode Strings", difficulty: "Medium", solved: true },
  { category: "Arrays & Hashing", name: "Product of Array Except Self", difficulty: "Medium", solved: true },
  { category: "Arrays & Hashing", name: "Top K Frequent Elements", difficulty: "Medium", solved: true },
  { category: "Two Pointers", name: "Valid Palindrome", difficulty: "Easy", solved: true },
  { category: "Two Pointers", name: "3Sum", difficulty: "Medium", solved: true },
  { category: "Two Pointers", name: "Container With Most Water", difficulty: "Medium", solved: true },
  { category: "Stack", name: "Valid Parentheses", difficulty: "Easy", solved: true },
  { category: "Binary Search", name: "Koko Eating Bananas", difficulty: "Medium", solved: true },
  { category: "Binary Search", name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", solved: true },
  { category: "Binary Search", name: "Search in Rotated Sorted Array", difficulty: "Medium", solved: true },
  { category: "Sliding Window", name: "Best Time to Buy and Sell Stock", difficulty: "Easy", solved: true },
  { category: "Sliding Window", name: "Longest Substring Without Repeating Characters", difficulty: "Medium", solved: true },
  { category: "Linked List", name: "Reverse Linked List", difficulty: "Easy", solved: true },
  { category: "Linked List", name: "Merged Two Linked Lists", difficulty: "Easy", solved: true },
  { category: "Linked List", name: "Linked List Cycle Detection", difficulty: "Easy", solved: true },
  { category: "Linked List", name: "Reorder Linked List", difficulty: "Medium", solved: true },
  { category: "Linked List", name: "Remove Node From End of Linked List", difficulty: "Medium", solved: true },
  { category: "Trees", name: "Invert Binary Tree", difficulty: "Easy", solved: true },
  { category: "Trees", name: "Maximum Depth of Binary Tree", difficulty: "Easy", solved: true },
  { category: "Trees", name: "Same Tree", difficulty: "Easy", solved: true },
  { category: "Trees", name: "Subtree of Another Tree", difficulty: "Easy", solved: true },
  { category: "Trees", name: "Lowest Common Ancestor in Binary Search Tree", difficulty: "Medium", solved: true },
  { category: "Trees", name: "Binary Tree Level Order Traversal", difficulty: "Medium", solved: true },
  { category: "Trees", name: "Valid Binary Search Tree", difficulty: "Medium", solved: true },
  { category: "Trees", name: "Kth Smallest Integer in BST", difficulty: "Medium", solved: true },
  { category: "Trees", name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", solved: true },
  { category: "Backtracking", name: "Combination Sum", difficulty: "Medium", solved: true },
  { category: "Backtracking", name: "Word Search", difficulty: "Medium", solved: true },
  { category: "Backtracking", name: "Subsets", difficulty: "Medium", solved: true },
  { category: "Backtracking", name: "Combination Sum II", difficulty: "Medium", solved: true },
  { category: "Heap / Priority Queue", name: "Kth Largest Element in a Stream", difficulty: "Easy", solved: true },
  { category: "Greedy", name: "Maximum Subarray", difficulty: "Medium", solved: true },
  { category: "Graphs", name: "Number of Islands", difficulty: "Medium", solved: true },
  { category: "Graphs", name: "Clone Graph", difficulty: "Medium", solved: true },
  { category: "Graphs", name: "Pacific Atlantic Water Flow", difficulty: "Medium", solved: true },
  { category: "Graphs", name: "Course Schedule", difficulty: "Medium", solved: true },
  { category: "1-D DP", name: "Climbing Stairs", difficulty: "Easy", solved: true },
  { category: "1-D DP", name: "Min Cost Climbing Stairs", difficulty: "Easy", solved: true },
  { category: "1-D DP", name: "Decode Ways", difficulty: "Medium", solved: false },
  { category: "1-D DP", name: "Coin Change", difficulty: "Medium", solved: true },
  { category: "1-D DP", name: "House Robber", difficulty: "Medium", solved: true },
  { category: "1-D DP", name: "House Robber II", difficulty: "Medium", solved: true },
  { category: "1-D DP", name: "Longest Palindromic Substring", difficulty: "Medium", solved: true },
  { category: "1-D DP", name: "Palindromic Substrings", difficulty: "Medium", solved: true },
];

const emptyCategories = [
  "Tries",
  "Intervals",
  "Advanced Graphs",
  "2-D DP",
  "Bit Manipulation",
  "Math & Geometry",
];

document.addEventListener("DOMContentLoaded", () => {
  const solvedEntries = leetcodeEntries.filter((entry) => entry.solved);
  const pendingEntries = leetcodeEntries.filter((entry) => !entry.solved);

  const difficultyCounts = solvedEntries.reduce(
    (accumulator, entry) => {
      accumulator[entry.difficulty] += 1;
      return accumulator;
    },
    { Easy: 0, Medium: 0 }
  );

  const categoryCounts = solvedEntries.reduce((accumulator, entry) => {
    accumulator[entry.category] = (accumulator[entry.category] || 0) + 1;
    return accumulator;
  }, {});

  const groupedEntries = solvedEntries.reduce((accumulator, entry) => {
    if (!accumulator[entry.category]) {
      accumulator[entry.category] = [];
    }
    accumulator[entry.category].push(entry);
    return accumulator;
  }, {});

  document.getElementById("total-solved").textContent = String(solvedEntries.length);
  document.getElementById("easy-count").textContent = String(difficultyCounts.Easy);
  document.getElementById("medium-count").textContent = String(difficultyCounts.Medium);
  document.getElementById("pending-count").textContent = String(pendingEntries.length);

  renderCharts(difficultyCounts, categoryCounts);
  renderGroups(groupedEntries, categoryCounts);
  renderPending(pendingEntries);
  renderEmptyCategories(emptyCategories);
});

function renderCharts(difficultyCounts, categoryCounts) {
  const difficultyChart = document.getElementById("difficultyChart");
  const categoryChart = document.getElementById("categoryChart");

  if (!difficultyChart || !categoryChart || typeof Chart === "undefined") {
    return;
  }

  new Chart(difficultyChart, {
    type: "doughnut",
    data: {
      labels: ["Easy", "Medium"],
      datasets: [
        {
          data: [difficultyCounts.Easy, difficultyCounts.Medium],
          backgroundColor: ["#2bb673", "#e66a3f"],
          borderColor: ["#ffffff", "#ffffff"],
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
            font: {
              family: "Manrope",
              weight: "700",
            },
          },
        },
      },
    },
  });

  const sortedCategories = Object.entries(categoryCounts).sort((left, right) => right[1] - left[1]);
  const palette = ["#113847", "#1d5364", "#286f83", "#3291a4", "#58baa8", "#79cdbc", "#a1e2d4"];
  const categoryColors = sortedCategories.map((_, index) => palette[index % palette.length]);

  new Chart(categoryChart, {
    type: "bar",
    data: {
      labels: sortedCategories.map(([category]) => category),
      datasets: [
        {
          label: "Solved",
          data: sortedCategories.map(([, value]) => value),
          backgroundColor: categoryColors,
          borderRadius: 12,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            precision: 0,
            font: {
              family: "Manrope",
              weight: "700",
            },
          },
          grid: {
            color: "rgba(148, 163, 184, 0.14)",
          },
        },
        y: {
          ticks: {
            font: {
              family: "Manrope",
              weight: "700",
            },
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
}

function renderGroups(groupedEntries, categoryCounts) {
  const groupsRoot = document.getElementById("leetcode-groups");
  if (!groupsRoot) {
    return;
  }

  Object.entries(groupedEntries)
    .sort((left, right) => categoryCounts[right[0]] - categoryCounts[left[0]])
    .forEach(([category, entries]) => {
      const section = document.createElement("section");
      section.className = "leetcode-group";

      const header = document.createElement("div");
      header.className = "leetcode-group-header";

      const title = document.createElement("h4");
      title.textContent = category;

      const total = document.createElement("span");
      total.className = "cert-status bg-slate-100 text-slate-500";
      total.textContent = `${entries.length} solved`;

      header.appendChild(title);
      header.appendChild(total);
      section.appendChild(header);

      const list = document.createElement("div");
      list.className = "leetcode-list";

      entries.forEach((entry) => {
        const item = document.createElement("div");
        item.className = "leetcode-item";

        const label = document.createElement("span");
        label.className = "leetcode-item-name";
        label.textContent = entry.name;

        const badge = document.createElement("span");
        badge.className = `difficulty-badge ${entry.difficulty === "Easy" ? "difficulty-easy" : "difficulty-medium"}`;
        badge.textContent = entry.difficulty;

        item.appendChild(label);
        item.appendChild(badge);
        list.appendChild(item);
      });

      section.appendChild(list);
      groupsRoot.appendChild(section);
    });
}

function renderPending(entries) {
  const pendingRoot = document.getElementById("pending-list");
  if (!pendingRoot) {
    return;
  }

  if (!entries.length) {
    const done = document.createElement("p");
    done.className = "text-sm leading-6 text-slate-600";
    done.textContent = "No pending entries in the tracked list.";
    pendingRoot.appendChild(done);
    return;
  }

  entries.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "rounded-[22px] border border-slate-200 bg-slate-50 p-4";

    const title = document.createElement("h4");
    title.className = "font-display text-xl text-slate-900";
    title.textContent = entry.name;

    const meta = document.createElement("p");
    meta.className = "mt-2 text-sm leading-6 text-slate-600";
    meta.textContent = `${entry.category} • ${entry.difficulty}`;

    card.appendChild(title);
    card.appendChild(meta);
    pendingRoot.appendChild(card);
  });
}

function renderEmptyCategories(categories) {
  const root = document.getElementById("empty-categories");
  if (!root) {
    return;
  }

  categories.forEach((category) => {
    const chip = document.createElement("span");
    chip.className = "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500";
    chip.textContent = category;
    root.appendChild(chip);
  });
}
