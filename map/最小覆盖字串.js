var minWindow = function (s, t) {
    // 创建左右指针
    let l = 0;
    let r = 0;
    // 创建一个字典
    const need = new Map();
    // 将t中的字符塞入字典中,并设置默认值为1
    for (let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1 : 1)
    }
    let needType = need.size;
    let res = '';
    // 移动右指针
    while (r < s.length) {
        const c = s[r]
        // 判断如果有字典中的相应字符就让needtype-1
        if (need.has(c)) {
            need.set(c, need.get(c) - 1)
            if (need.get(c) === 0) needType -= 1
        }
        // 如果等于0匹配到了,记录下来佐治,并且向右移动左指针
        while (needType === 0) {
            const newRes = s.substring(l, r + 1)
            if (!res || newRes.length < res.length) res = newRes
            const c2 = s[l]
            // 如果当前的左指针包含匹配字符,让needtype+1 字典当前字符+1
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1)
                if (need.get(c2) === 1) needType += 1
            }
            l += 1
        }
        r += 1
    }
    return res
};
minWindow("ADOBECODEBANC", "ABC")
