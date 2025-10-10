// 学科展示データの型定義
export interface DepartmentExhibitionData {
  id: string
  department: string
  title: string
  description: string
}

// 学科展示データ
export const departmentExhibitionsData: DepartmentExhibitionData[] = [
  /*
  {
    id: 'dept-1',
    department: '機械工学科',
    title: 'ロボット技術の進化',
    description: '最新のロボット技術とその応用について展示します。実際に動くロボットのデモンストレーションも開催。'
  }
  */
];
