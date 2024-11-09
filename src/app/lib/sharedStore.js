let sharedData = {
  tickets: [
    {
      assignee: "Mike Johnson",
      created: "2024-11-08",
      dueDate: "2024-11-15",
      id: "T001",
      labels: ["Bug", "Urgent"],
      name: "Fix login issue",
      priority: "High",
      status: "Open",
    },
    {
      assignee: "Jane Smith",
      created: "2024-11-08",
      dueDate: "2024-11-20",
      id: "T002",
      labels: ["Enhancement"],
      name: "Improve dashboard UI",
      priority: "Medium",
      status: "In Progress",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-07",
      dueDate: "2024-11-10",
      id: "T003",
      labels: ["Documentation"],
      name: "Update API docs",
      priority: "Low",
      status: "Closed",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-05",
      dueDate: "2024-12-01",
      id: "T004",
      labels: ["Feature", "Critical"],
      name: "Implement user authentication",
      priority: "High",
      status: "Open",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-08",
      dueDate: "2024-11-18",
      id: "T005",
      labels: ["Bug"],
      name: "Resolve payment gateway issue",
      priority: "Medium",
      status: "In Progress",
    },
    {
      assignee: "David Lee",
      created: "2024-11-06",
      dueDate: "2024-11-12",
      id: "T006",
      labels: ["Refactor"],
      name: "Refactor API integration",
      priority: "Low",
      status: "Closed",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-09",
      dueDate: "2024-11-25",
      id: "T007",
      labels: ["Security", "Urgent"],
      name: "Patch vulnerability in login module",
      priority: "High",
      status: "Open",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-08",
      dueDate: "2024-11-22",
      id: "T008",
      labels: ["UI", "Enhancement"],
      name: "Add dark mode feature",
      priority: "Medium",
      status: "In Progress",
    },
    {
      assignee: "Emma Thompson",
      created: "2024-11-07",
      dueDate: "2024-11-13",
      id: "T009",
      labels: ["Optimization"],
      name: "Optimize image loading on homepage",
      priority: "Low",
      status: "Closed",
    },
    {
      assignee: "Noah White",
      created: "2024-11-08",
      dueDate: "2024-11-28",
      id: "T010",
      labels: ["Database", "Bug"],
      name: "Resolve data inconsistency issue",
      priority: "Medium",
      status: "Open",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-10",
      dueDate: "2024-11-30",
      id: "T011",
      labels: ["Bug"],
      name: "Fix registration bug",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Jane Smith",
      created: "2024-11-05",
      dueDate: "2024-11-25",
      id: "T012",
      labels: ["Enhancement"],
      name: "Improve search functionality",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "David Lee",
      created: "2024-11-12",
      dueDate: "2024-11-15",
      id: "T013",
      labels: ["Security"],
      name: "Update SSL certificate",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-06",
      dueDate: "2024-11-22",
      id: "T014",
      labels: ["Critical"],
      name: "Fix payment gateway crash",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-08",
      dueDate: "2024-11-10",
      id: "T015",
      labels: ["Bug"],
      name: "Resolve server timeout",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-09",
      dueDate: "2024-11-18",
      id: "T016",
      labels: ["Refactor"],
      name: "Refactor database queries",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-05",
      dueDate: "2024-11-22",
      id: "T017",
      labels: ["UI"],
      name: "Redesign homepage layout",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Emma Thompson",
      created: "2024-11-06",
      dueDate: "2024-11-12",
      id: "T018",
      labels: ["Security"],
      name: "Enhance password policies",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Mike Johnson",
      created: "2024-11-09",
      dueDate: "2024-11-15",
      id: "T019",
      labels: ["Optimization"],
      name: "Improve image compression",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Noah White",
      created: "2024-11-11",
      dueDate: "2024-11-20",
      id: "T020",
      labels: ["Database"],
      name: "Optimize database queries",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-12",
      dueDate: "2024-11-30",
      id: "T021",
      labels: ["Feature"],
      name: "Implement user profile page",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-13",
      dueDate: "2024-11-18",
      id: "T022",
      labels: ["Enhancement"],
      name: "Improve user onboarding",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-08",
      dueDate: "2024-11-22",
      id: "T023",
      labels: ["Security"],
      name: "Update user permissions",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-10",
      dueDate: "2024-11-15",
      id: "T024",
      labels: ["Refactor"],
      name: "Refactor backend code",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Jane Smith",
      created: "2024-11-09",
      dueDate: "2024-11-25",
      id: "T025",
      labels: ["Bug"],
      name: "Fix UI glitch",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-13",
      dueDate: "2024-11-20",
      id: "T026",
      labels: ["Enhancement"],
      name: "Add new feature X",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-05",
      dueDate: "2024-11-18",
      id: "T027",
      labels: ["Optimization"],
      name: "Optimize video streaming",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "David Lee",
      created: "2024-11-10",
      dueDate: "2024-11-30",
      id: "T028",
      labels: ["Feature"],
      name: "Integrate payment system",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Noah White",
      created: "2024-11-07",
      dueDate: "2024-11-23",
      id: "T029",
      labels: ["Bug"],
      name: "Fix mobile responsiveness",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-12",
      dueDate: "2024-11-25",
      id: "T030",
      labels: ["Documentation"],
      name: "Update user guide",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-08",
      dueDate: "2024-11-20",
      id: "T031",
      labels: ["Enhancement"],
      name: "Improve user experience",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Mike Johnson",
      created: "2024-11-12",
      dueDate: "2024-11-30",
      id: "T032",
      labels: ["Feature"],
      name: "Add new reporting module",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-10",
      dueDate: "2024-11-15",
      id: "T033",
      labels: ["Security"],
      name: "Patch security vulnerability",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "David Lee",
      created: "2024-11-06",
      dueDate: "2024-11-22",
      id: "T034",
      labels: ["Bug"],
      name: "Fix login screen issue",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-05",
      dueDate: "2024-12-01",
      id: "T035",
      labels: ["Enhancement"],
      name: "Improve search algorithm",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-09",
      dueDate: "2024-11-18",
      id: "T036",
      labels: ["UI"],
      name: "Update mobile UI",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Emma Thompson",
      created: "2024-11-13",
      dueDate: "2024-11-25",
      id: "T037",
      labels: ["Refactor"],
      name: "Refactor authentication system",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-07",
      dueDate: "2024-11-20",
      id: "T038",
      labels: ["Feature"],
      name: "Create admin dashboard",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Jane Smith",
      created: "2024-11-10",
      dueDate: "2024-11-12",
      id: "T039",
      labels: ["Bug"],
      name: "Resolve data sync issue",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "David Lee",
      created: "2024-11-09",
      dueDate: "2024-11-25",
      id: "T040",
      labels: ["Enhancement"],
      name: "Optimize website speed",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-08",
      dueDate: "2024-11-22",
      id: "T041",
      labels: ["Critical"],
      name: "Fix database connection issue",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-10",
      dueDate: "2024-11-15",
      id: "T042",
      labels: ["Bug"],
      name: "Fix broken API endpoint",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-14",
      dueDate: "2024-12-01",
      id: "T043",
      labels: ["Feature"],
      name: "Implement feature Y",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Mike Johnson",
      created: "2024-11-11",
      dueDate: "2024-11-30",
      id: "T044",
      labels: ["Security"],
      name: "Update OAuth2 implementation",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "David Lee",
      created: "2024-11-13",
      dueDate: "2024-11-17",
      id: "T045",
      labels: ["Refactor"],
      name: "Refactor legacy codebase",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-08",
      dueDate: "2024-11-23",
      id: "T046",
      labels: ["Optimization"],
      name: "Optimize database indexing",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Emma Thompson",
      created: "2024-11-05",
      dueDate: "2024-11-20",
      id: "T047",
      labels: ["Security"],
      name: "Fix SSL certificate error",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-09",
      dueDate: "2024-11-18",
      id: "T048",
      labels: ["Bug"],
      name: "Fix broken image links",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Noah White",
      created: "2024-11-10",
      dueDate: "2024-11-28",
      id: "T049",
      labels: ["Enhancement"],
      name: "Enhance video player",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-08",
      dueDate: "2024-11-29",
      id: "T050",
      labels: ["Feature"],
      name: "Create new admin panel",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-12",
      dueDate: "2024-11-14",
      id: "T051",
      labels: ["Optimization"],
      name: "Optimize query performance",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-11",
      dueDate: "2024-11-23",
      id: "T052",
      labels: ["Refactor"],
      name: "Refactor database schema",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-05",
      dueDate: "2024-11-27",
      id: "T053",
      labels: ["Bug"],
      name: "Fix broken login API",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "David Lee",
      created: "2024-11-13",
      dueDate: "2024-11-30",
      id: "T054",
      labels: ["Enhancement"],
      name: "Improve profile page UI",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-08",
      dueDate: "2024-11-25",
      id: "T055",
      labels: ["UI"],
      name: "Update landing page",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-09",
      dueDate: "2024-11-26",
      id: "T056",
      labels: ["Security"],
      name: "Update server configurations",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Alice Johnson",
      created: "2024-11-06",
      dueDate: "2024-11-22",
      id: "T057",
      labels: ["Feature"],
      name: "Add new chat feature",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-14",
      dueDate: "2024-11-15",
      id: "T058",
      labels: ["Bug"],
      name: "Fix broken contact form",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Noah White",
      created: "2024-11-12",
      dueDate: "2024-11-30",
      id: "T059",
      labels: ["UI"],
      name: "Revamp homepage UI",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "David Lee",
      created: "2024-11-05",
      dueDate: "2024-11-27",
      id: "T060",
      labels: ["Refactor"],
      name: "Refactor codebase",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Emma Thompson",
      created: "2024-11-11",
      dueDate: "2024-11-30",
      id: "T061",
      labels: ["Security"],
      name: "Patch data leaks",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Olivia Martinez",
      created: "2024-11-14",
      dueDate: "2024-11-28",
      id: "T062",
      labels: ["UI"],
      name: "Implement search bar",
      priority: "High",
      status: "In Progress",
    },
    {
      assignee: "Chris Green",
      created: "2024-11-07",
      dueDate: "2024-11-18",
      id: "T063",
      labels: ["Enhancement"],
      name: "Enhance accessibility features",
      priority: "Medium",
      status: "Closed",
    },
    {
      assignee: "Liam Wilson",
      created: "2024-11-08",
      dueDate: "2024-11-26",
      id: "T064",
      labels: ["Bug"],
      name: "Fix typo in help section",
      priority: "Low",
      status: "Open",
    },
    {
      assignee: "Sophia Brown",
      created: "2024-11-06",
      dueDate: "2024-12-01",
      id: "T065",
      labels: ["Feature"],
      name: "Add real-time notifications",
      priority: "High",
      status: "In Progress",
    },
  ],
  comments: [
    {
      id: 1,
      content: "Great work on the task, keep it up!",
      name_of_sender: "Alice",
      created_at: "2024-11-09T08:45:00Z",
    },
    {
      id: 2,
      content: "I agree with the suggestions in the meeting notes.",
      name_of_sender: "Bob",
      created_at: "2024-11-09T08:50:00Z",
    },
    {
      id: 3,
      content:
        "Has anyone started the new feature? We should discuss it in the next call.",
      name_of_sender: "Charlie",
      created_at: "2024-11-09T09:00:00Z",
    },
    {
      id: 4,
      content: "I reviewed the pull request. Everything looks good to me.",
      name_of_sender: "David",
      created_at: "2024-11-09T09:05:00Z",
    },
    {
      id: 5,
      content: "Let's sync up tomorrow to finalize the UI design.",
      name_of_sender: "Eve",
      created_at: "2024-11-09T09:15:00Z",
    },
    {
      id: 6,
      content: "Can someone share the latest version of the specs document?",
      name_of_sender: "Frank",
      created_at: "2024-11-09T09:25:00Z",
    },
    {
      id: 7,
      content: "The server logs are clean now. All issues are fixed.",
      name_of_sender: "Grace",
      created_at: "2024-11-09T09:30:00Z",
    },
    {
      id: 8,
      content:
        "I pushed a new commit to the repo. Please review when you get a chance.",
      name_of_sender: "Hannah",
      created_at: "2024-11-09T09:35:00Z",
    },
    {
      id: 9,
      content:
        "We should prioritize the critical bugs first, and then move to enhancements.",
      name_of_sender: "Ivy",
      created_at: "2024-11-09T09:40:00Z",
    },
    {
      id: 10,
      content:
        "I will be offline for the rest of the day, please ping me if urgent.",
      name_of_sender: "Jack",
      created_at: "2024-11-09T09:50:00Z",
    },
    {
      id: 11,
      content:
        "The feedback from the client was positive. They are happy with the progress.",
      name_of_sender: "Kim",
      created_at: "2024-11-09T10:00:00Z",
    },
    {
      id: 12,
      content:
        "Does anyone have suggestions for improving performance? Let's discuss it in the next sprint planning.",
      name_of_sender: "Liam",
      created_at: "2024-11-09T10:10:00Z",
    },
  ],
};

export const setSharedData = (key, value) => {
  sharedData[key] = value;
};

export const getSharedData = (key) => {
  return sharedData[key];
};
