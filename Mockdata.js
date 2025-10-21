export const roleTypes = [
  {
    id: 'membre',
    code: 'MEMBRE',
    name: 'عضو',
    description: 'أعضاء الكشافة',
    color: '#6B3FA0',
    subcategories: [
      {
        id: 1,
        code: 'Z',
        name: 'براعم',
        description: 'أعضاء البراعم',
        color: '#FFD700'
      },
      {
        id: 2,
        code: 'A',
        name: 'أشبال',
        description: 'أعضاء الأشبال',
        color: '#87CEEB'
      },
      {
        id: 3,
        code: 'B',
        name: 'زهرات',
        description: 'أعضاء الزهرات',
        color: '#87CEEB'
      },
      {
        id: 4,
        code: 'C',
        name: 'كشاف',
        description: 'أعضاء الكشاف',
        color: '#2F4F4F'
      },
      {
        id: 5,
        code: 'D',
        name: 'مرشدات',
        description: 'أعضاء المرشدات',
        color: '#2F4F4F'
      },
      {
        id: 6,
        code: 'E',
        name: 'كشاف متقدم',
        description: 'أعضاء الكشاف المتقدم',
        color: '#FF0000'
      },
      {
        id: 7,
        code: 'F',
        name: 'رائدات',
        description: 'أعضاء الرائدات',
        color: '#FF0000'
      },
      {
        id: 8,
        code: 'G',
        name: 'جوالة',
        description: 'أعضاء الجوالة',
        color: '#F5F5DC'
      },
      {
        id: 9,
        code: 'H',
        name: 'دليلات',
        description: 'أعضاء الدليلات',
        color: '#F5F5DC'
      }
    ]
  },
  {
    id: 'chef',
    code: 'CHEF',
    name: 'قائد',
    description: 'القادة والإداريون',
    color: '#808080',
    subcategories: [
      {
        id: 10,
        code: 'CS',
        name: 'قائد قسم',
        description: 'قائد القسم',
        color: '#4A5568'
      },
      {
        id: 11,
        code: 'CA',
        name: 'هيئة إدارية',
        description: 'الهيئة الإدارية',
        color: '#718096'
      }
    ]
  }
]

export const categories = [
  ...roleTypes[0].subcategories,
  ...roleTypes[1].subcategories
]
