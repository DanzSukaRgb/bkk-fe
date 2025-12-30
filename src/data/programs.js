const programs = [
    {
        id: 'p-001',
        title: 'Full-Stack Web Development',
        short: 'HTML, CSS, JS, Node, React',
        description:
            'Comprehensive program covering modern front-end and back-end web development. Build real-world projects and deploy them.',
        level: 'Intermediate',
        durationWeeks: 12,
        lessons: 48,
        price: 1299,
        tags: ['web', 'javascript', 'react', 'node'],
        instructor: { id: 'u-01', name: 'Ayu Santoso' },
        image: '/images/programs/fullstack.jpg',
        published: true,
        createdAt: '2024-01-10'
    },
    {
        id: 'p-002',
        title: 'Frontend Essentials with React',
        short: 'React, hooks, state management',
        description:
            'Focused frontend track to master React, component design, routing, and state management with practical exercises.',
        level: 'Beginner',
        durationWeeks: 8,
        lessons: 32,
        price: 799,
        tags: ['frontend', 'react', 'ui'],
        instructor: { id: 'u-02', name: 'Budi Prasetyo' },
        image: '/images/programs/react.jpg',
        published: true,
        createdAt: '2024-03-05'
    },
    {
        id: 'p-003',
        title: 'Data Structures & Algorithms',
        short: 'Algorithmic thinking and problem solving',
        description:
            'Deep dive into algorithms and data structures with coding challenges, complexity analysis, and interview prep.',
        level: 'Advanced',
        durationWeeks: 10,
        lessons: 40,
        price: 999,
        tags: ['algorithms', 'interview', 'cs'],
        instructor: { id: 'u-03', name: 'Citra Wibowo' },
        image: '/images/programs/algorithms.jpg',
        published: false,
        createdAt: '2024-05-12'
    },
    {
        id: 'p-004',
        title: 'UI/UX Design Fundamentals',
        short: 'Design thinking, Figma, prototyping',
        description:
            'Learn user-centered design, wireframing, and prototyping using industry tools to create polished interfaces.',
        level: 'Beginner',
        durationWeeks: 6,
        lessons: 20,
        price: 499,
        tags: ['design', 'ux', 'figma'],
        instructor: { id: 'u-04', name: 'Dina Rahma' },
        image: '/images/programs/ux.jpg',
        published: true,
        createdAt: '2024-02-18'
    },
    {
        id: 'p-005',
        title: 'Mobile App Development (React Native)',
        short: 'Cross-platform mobile apps',
        description:
            'Build performant iOS and Android apps with React Native, navigation, native modules, and deployment.',
        level: 'Intermediate',
        durationWeeks: 10,
        lessons: 36,
        price: 1099,
        tags: ['mobile', 'react-native', 'cross-platform'],
        instructor: { id: 'u-05', name: 'Eka Putra' },
        image: '/images/programs/react-native.jpg',
        published: true,
        createdAt: '2024-04-01'
    }
];

export default programs;