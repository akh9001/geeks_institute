# Data Structures Reference

A quick guide to core data structures in JavaScript and Python, with their most common methods and example usage.

## JavaScript Data Structures & Methods

| Structure | Iterable | Mutable | Method(s) & Usage                                           |
|-----------|----------|---------|--------------------------------------------------------------|
| **Array** | Yes      | Yes     | `push(x)` → `arr.push(4)`<br>`pop()` → `arr.pop()`<br>`filter(fn)` → `arr.filter(n=>n%2===0)`<br>`map(fn)` → `arr.map(n=>n*2)` :contentReference[oaicite:1]{index=1} |
| **Set**   | Yes      | Yes     | `add(x)` → `s.add(5)`<br>`has(x)` → `s.has(5)`<br>`delete(x)` → `s.delete(5)` :contentReference[oaicite:2]{index=2} |
| **Object**| (keys)   | Yes     | `Object.keys(obj)` → keys array<br>`obj.hasOwnProperty(k)`<br>`delete obj[k]` |
| **Map**   | Yes      | Yes     | `set(k,v)` → `m.set('a',1)` :contentReference[oaicite:3]{index=3}<br>`get(k)` → `m.get('a')`<br>`has(k)` |
| **String**| Yes      | No      | `slice(i,j)` → `"hello".slice(1,3)`<br>`split(sep)` → `"a,b".split(',')` |

## Python Data Structures & Methods

| Structure | Iterable | Mutable | Method(s) & Usage                                           |
|-----------|----------|---------|--------------------------------------------------------------|
| **List**   | Yes      | Yes     | `append(x)` → `lst.append(4)` :contentReference[oaicite:4]{index=4}<br>`extend(it)` → `lst.extend([5,6])`<br>`pop()` → `lst.pop()`<br>`remove(x)` → `lst.remove(2)` |
| **Tuple**  | Yes      | No      | `count(x)` → `tup.count(2)`<br>`index(x)` → `tup.index(3)`     |
| **Set**    | Yes      | Yes     | `add(x)` → `s.add(10)`<br>`remove(x)` → `s.remove(2)`<br>`union(o)` → `s.union({4,5})` |
| **Dict**   | Yes      | Yes     | `get(k,def)` → `d.get('x',0)`<br>`update(d2)` → `d.update({'a':3})`<br>`pop(k)` → `d.pop('a')` |
| **String** | Yes      | No      | `lower()` → `"Hi".lower()`<br>`split(sep)` → `"a b".split(' ')`<br>`replace(a,b)` → `"abc".replace('a','z')` |

> **Note:** All Python structures marked “Yes” under Iterable can be looped over directly (e.g., `for x in ...`) :contentReference[oaicite:5]{index=5}.
