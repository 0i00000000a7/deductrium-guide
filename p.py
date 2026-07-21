#!/usr/bin/env python3
import re
import os
import shutil

def replace_pure_code_blocks(file_path):
    # 备份
    backup = file_path + '.bak'
    shutil.copy2(file_path, backup)
    print(f"已备份至 {backup}")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 找出所有 ``` 的位置
    positions = [m.start() for m in re.finditer(r'```', content)]
    if not positions:
        print("文件中没有 ``` 标记。")
        os.remove(backup)
        return

    # 从后往前处理（避免插入后位置偏移）
    modified = False
    # 注意：位置列表是从0开始，索引0是第1个（开始），索引1是第2个（结束），依此类推
    for idx in range(len(positions) - 1, -1, -1):
        pos = positions[idx]
        # 如果当前是开始标记（索引为偶数，因为0、2、4...）
        if idx % 2 == 0:
            # 检查该开始标记后面是否紧跟语言标识（字母、数字、下划线）
            # 三个反引号之后的位置是 pos+3
            after_pos = pos + 3
            if after_pos < len(content):
                # 检查后面第一个字符
                next_char = content[after_pos]
                # 如果下一个字符是字母、数字或下划线，说明有语言标识，跳过
                if next_char.isalnum() or next_char == '_':
                    continue
            # 否则是纯 ```，在 after_pos 处插入 "a "
            # 由于从后往前处理，前面位置不受影响
            content = content[:after_pos] + 'type' + content[after_pos:]
            modified = True

    if not modified:
        print("没有发现需要修改的纯代码块。")
        os.remove(backup)
        return

    # 写回文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"替换完成。原备份保留为 {backup}")

if __name__ == '__main__':
    target = 'guide/chapter6.md'
    if not os.path.isfile(target):
        print(f"错误：文件 {target} 不存在")
        exit(1)
    replace_pure_code_blocks(target)