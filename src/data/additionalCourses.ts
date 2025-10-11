// 额外课程数据 - 第3-6阶段补充课程
export const additionalLessons = {
  stage3: [
    {
      id: 'lesson3-2',
      title: '列表高级操作',
      objective: '掌握列表的高级方法：排序、过滤、映射等',
      analogy: '列表高级操作像瑞士军刀，一把工具多种功能',
      codeExample: `# 列表高级操作
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
names = ['Alice', 'Bob', 'Charlie']

# 排序
sorted_nums = sorted(numbers)  # 不改变原列表
numbers.sort()  # 改变原列表

# 列表推导式
squares = [x**2 for x in range(5)]
even_nums = [x for x in numbers if x % 2 == 0]

print(f"排序后: {sorted_nums}")
print(f"平方数: {squares}")
print(f"偶数: {even_nums}")`,
      originalExercises: [
        {
          id: 'ex3-2-1',
          title: '成绩排序',
          description: '对学生成绩进行排序和统计',
          template: '# 成绩处理\nscores = [85, 92, 78, 96, 88, 76, 94]\n# 排序成绩\nsorted_scores = sorted(scores)\nprint(f"成绩排序: {sorted_scores}")\n# 计算平均分\naverage = sum(scores) / len(scores)\nprint(f"平均分: {average:.1f}")',
          solution: 'scores = [85, 92, 78, 96, 88, 76, 94]\n\n# 排序成绩\nsorted_scores = sorted(scores, reverse=True)  # 降序\nprint(f"成绩排序(高到低): {sorted_scores}")\n\n# 统计信息\naverage = sum(scores) / len(scores)\nhighest = max(scores)\nlowest = min(scores)\n\nprint(f"平均分: {average:.1f}")\nprint(f"最高分: {highest}")\nprint(f"最低分: {lowest}")\nprint(f"及格人数: {len([s for s in scores if s >= 60])}")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-2-2',
          title: '数据清洗和分析',
          description: '处理包含异常值的数据',
          template: '# 数据清洗\nraw_data = [23, 45, 67, -1, 89, 0, 34, 999, 56]\n# 过滤异常值(0-100范围)\nclean_data = [x for x in raw_data if 0 < x <= 100]\nprint(f"清洗后数据: {clean_data}")',
          solution: 'raw_data = [23, 45, 67, -1, 89, 0, 34, 999, 56, 78, -5, 92, 101, 88]\n\nprint(f"原始数据: {raw_data}")\nprint(f"数据量: {len(raw_data)}个")\n\n# 数据清洗 - 过滤异常值\nvalid_range = (0, 100)\nclean_data = [x for x in raw_data if valid_range[0] < x <= valid_range[1]]\nremoved_data = [x for x in raw_data if not (valid_range[0] < x <= valid_range[1])]\n\nprint(f"\\n清洗后数据: {clean_data}")\nprint(f"有效数据量: {len(clean_data)}个")\nprint(f"移除的异常值: {removed_data}")\n\n# 数据分析\nif clean_data:\n    avg = sum(clean_data) / len(clean_data)\n    sorted_data = sorted(clean_data)\n    median_idx = len(sorted_data) // 2\n    median = sorted_data[median_idx] if len(sorted_data) % 2 == 1 else (sorted_data[median_idx-1] + sorted_data[median_idx]) / 2\n    \n    print(f"\\n📊 数据统计:")\n    print(f"平均值: {avg:.2f}")\n    print(f"中位数: {median}")\n    print(f"最大值: {max(clean_data)}")\n    print(f"最小值: {min(clean_data)}")\n    print(f"数据范围: {max(clean_data) - min(clean_data)}")',
          type: 'advanced'
        }
      ],
      summary: '列表推导式是Python的强大特性，能简洁地处理数据'
    },
    {
      id: 'lesson3-3',
      title: '字典深入应用',
      objective: '掌握字典的高级用法：多层嵌套、字典推导式等',
      analogy: '字典像智能档案柜，可以快速定位任何信息',
      codeExample: `# 字典高级用法
# 嵌套字典
students = {
    'stu001': {'name': '张三', 'age': 18, 'scores': {'math': 95, 'english': 87}},
    'stu002': {'name': '李四', 'age': 19, 'scores': {'math': 78, 'english': 92}}
}

# 字典推导式
squared = {x: x**2 for x in range(5)}
print(f"平方字典: {squared}")

# 访问嵌套数据
print(f"张三的数学成绩: {students['stu001']['scores']['math']}")`,
      originalExercises: [
        {
          id: 'ex3-3-1',
          title: '商品信息管理',
          description: '使用嵌套字典管理商品信息',
          template: '# 商品信息\nproducts = {\n    "P001": {"name": "笔记本电脑", "price": 5999, "stock": 10},\n    "P002": {"name": "手机", "price": 3999, "stock": 25}\n}\n\n# 显示商品信息\nfor pid, info in products.items():\n    print(f"{pid}: {info[\'name\']} - ¥{info[\'price\']} (库存:{info[\'stock\']})")',
          solution: 'products = {\n    "P001": {"name": "笔记本电脑", "price": 5999, "stock": 10, "category": "电子产品"},\n    "P002": {"name": "手机", "price": 3999, "stock": 25, "category": "电子产品"},\n    "P003": {"name": "书籍", "price": 29, "stock": 100, "category": "图书"}\n}\n\nprint("📦 商品库存管理系统")\nprint("="*40)\n\n# 显示所有商品\nfor pid, info in products.items():\n    status = "✅ 有库存" if info[\'stock\'] > 0 else "❌ 缺货"\n    print(f"{pid}: {info[\'name\']:8s} | ¥{info[\'price\']:5d} | 库存:{info[\'stock\']:3d} | {status}")\n\n# 统计信息\ntotal_value = sum(info[\'price\'] * info[\'stock\'] for info in products.values())\ntotal_items = sum(info[\'stock\'] for info in products.values())\nprint(f"\\n📊 库存统计:")\nprint(f"总商品数: {total_items}件")\nprint(f"库存总价值: ¥{total_value:,}元")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-3-2',
          title: '学生成绩管理系统',
          description: '创建完整的学生成绩管理系统',
          template: '# 学生成绩管理\nclass_data = {\n    "class_name": "高一(1)班",\n    "students": {\n        "001": {"name": "张三", "subjects": {"语文": 85, "数学": 92, "英语": 78}},\n        "002": {"name": "李四", "subjects": {"语文": 78, "数学": 88, "英语": 85}}\n    }\n}\n\n# 计算每个学生的平均分\nfor sid, info in class_data["students"].items():\n    scores = info["subjects"].values()\n    avg = sum(scores) / len(scores)\n    print(f"{info[\'name\']}的平均分: {avg:.1f}")',
          solution: 'class_data = {\n    "class_name": "高一(1)班",\n    "teacher": "王老师",\n    "students": {\n        "001": {"name": "张三", "subjects": {"语文": 85, "数学": 92, "英语": 78, "物理": 88, "化学": 90}},\n        "002": {"name": "李四", "subjects": {"语文": 78, "数学": 88, "英语": 85, "物理": 82, "化学": 86}},\n        "003": {"name": "王五", "subjects": {"语文": 92, "数学": 95, "英语": 89, "物理": 91, "化学": 93}},\n        "004": {"name": "赵六", "subjects": {"语文": 88, "数学": 76, "英语": 92, "物理": 85, "化学": 79}}\n    }\n}\n\nprint(f"🏫 {class_data[\'class_name\']} 成绩管理系统")\nprint(f"👨‍🏫 班主任: {class_data[\'teacher\']}")\nprint("="*60)\n\n# 计算每个学生的成绩\nstudent_stats = []\nfor sid, info in class_data["students"].items():\n    name = info["name"]\n    subjects = info["subjects"]\n    scores = list(subjects.values())\n    \n    total = sum(scores)\n    avg = total / len(scores)\n    highest = max(scores)\n    lowest = min(scores)\n    \n    student_stats.append({\n        \'sid\': sid,\n        \'name\': name,\n        \'total\': total,\n        \'average\': avg,\n        \'highest\': highest,\n        \'lowest\': lowest\n    })\n    \n    print(f"📋 {name} (学号:{sid})")\n    for subject, score in subjects.items():\n        print(f"  {subject}: {score:3d}分", end="  ")\n    print(f"\\n  📊 总分:{total:3d} | 平均:{avg:5.1f} | 最高:{highest:3d} | 最低:{lowest:3d}")\n    print()\n\n# 班级统计\nclass_averages = {}\nfor subject in ["语文", "数学", "英语", "物理", "化学"]:\n    subject_scores = [info["subjects"][subject] for info in class_data["students"].values()]\n    class_averages[subject] = sum(subject_scores) / len(subject_scores)\n\nprint("📈 班级各科平均分:")\nfor subject, avg in class_averages.items():\n    print(f"  {subject}: {avg:5.1f}分")\n\n# 排名\nstudent_stats.sort(key=lambda x: x[\'average\'], reverse=True)\nprint("\\n🏆 班级排名 (按平均分):")\nfor i, student in enumerate(student_stats, 1):\n    print(f"  {i:2d}. {student[\'name\']:4s} - 平均分: {student[\'average\']:5.1f}")',
          type: 'advanced'
        }
      ],
      summary: '嵌套字典能表示复杂的数据结构，适合管理层级化信息'
    },
    {
      id: 'lesson3-4',
      title: '集合的妙用',
      objective: '理解集合的特性，掌握集合运算和去重应用',
      analogy: '集合像一个智能筛子，自动去除重复，保留唯一',
      codeExample: `# 集合操作
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# 集合运算
union = set1 | set2        # 并集
intersection = set1 & set2  # 交集
difference = set1 - set2    # 差集

print(f"并集: {union}")
print(f"交集: {intersection}")
print(f"差集: {difference}")

# 去重应用
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_numbers = list(set(numbers))
print(f"去重后: {unique_numbers}")`,
      originalExercises: [
        {
          id: 'ex3-4-1',
          title: '数据去重',
          description: '使用集合去除列表中的重复元素',
          template: '# 数据去重\ndata = [1, 2, 3, 2, 4, 3, 5, 1, 6]\nunique_data = list(set(data))\nprint(f"原数据: {data}")\nprint(f"去重后: {unique_data}")',
          solution: 'data = [1, 2, 3, 2, 4, 3, 5, 1, 6, 4, 7, 2, 8]\nprint(f"原数据: {data} (共{len(data)}个)")\n\n# 去重\nunique_data = list(set(data))\nprint(f"去重后: {sorted(unique_data)} (共{len(unique_data)}个)")\nprint(f"重复元素数量: {len(data) - len(unique_data)}个")\n\n# 找出重复的元素\nfrom collections import Counter\ncounts = Counter(data)\nduplicated = [item for item, count in counts.items() if count > 1]\nprint(f"重复的元素: {sorted(duplicated)}")',
          type: 'basic'
        }
      ],
      extendedExercises: [
        {
          id: 'ex3-4-2',
          title: '学生选课系统',
          description: '使用集合管理学生选课信息',
          template: '# 学生选课\nmath_students = {"张三", "李四", "王五", "赵六"}\nphysics_students = {"李四", "王五", "孙七", "周八"}\nchemistry_students = {"王五", "赵六", "孙七", "吴九"}\n\n# 选了数学和物理的学生\nmath_and_physics = math_students & physics_students\nprint(f"同时选数学和物理: {math_and_physics}")',
          solution: '# 学生选课管理系统\nmath_students = {"张三", "李四", "王五", "赵六", "陈十"}\nphysics_students = {"李四", "王五", "孙七", "周八", "陈十"}\nchemistry_students = {"王五", "赵六", "孙七", "吴九"}\nall_students = {"张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "陈十", "刘一", "钱二"}\n\nprint("🎓 学生选课统计系统")\nprint("="*40)\n\nprint(f"📚 数学课学生: {sorted(math_students)} ({len(math_students)}人)")\nprint(f"🔬 物理课学生: {sorted(physics_students)} ({len(physics_students)}人)")\nprint(f"⚗️  化学课学生: {sorted(chemistry_students)} ({len(chemistry_students)}人)")\nprint()\n\n# 集合运算分析\nprint("📊 选课分析:")\nprint(f"同时选数学和物理: {sorted(math_students & physics_students)}")\nprint(f"同时选物理和化学: {sorted(physics_students & chemistry_students)}")\nprint(f"同时选数学和化学: {sorted(math_students & chemistry_students)}")\n\n# 选了所有三门课的学生\nall_three = math_students & physics_students & chemistry_students\nprint(f"选了全部三门课: {sorted(all_three) if all_three else \'无\'}")\n\n# 只选一门课的学生\nonly_math = math_students - physics_students - chemistry_students\nonly_physics = physics_students - math_students - chemistry_students  \nonly_chemistry = chemistry_students - math_students - physics_students\n\nprint(f"\\n📋 只选一门课的学生:")\nprint(f"  只选数学: {sorted(only_math) if only_math else \'无\'}")\nprint(f"  只选物理: {sorted(only_physics) if only_physics else \'无\'}")\nprint(f"  只选化学: {sorted(only_chemistry) if only_chemistry else \'无\'}")\n\n# 选课统计\ntotal_enrolled = math_students | physics_students | chemistry_students\nnot_enrolled = all_students - total_enrolled\n\nprint(f"\\n📈 总体统计:")\nprint(f"至少选一门课: {len(total_enrolled)}人 - {sorted(total_enrolled)}")\nprint(f"没有选课: {len(not_enrolled)}人 - {sorted(not_enrolled) if not_enrolled else \'无\'}")\nprint(f"选课率: {len(total_enrolled)/len(all_students)*100:.1f}%")',
          type: 'advanced'
        }
      ],
      summary: '集合擅长去重和集合运算，在数据分析中非常有用'
    }
  ]
};