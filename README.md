# My Set

Like Python, JavaScript gives us access to a built-in Set data structure. However, we are going to rebuild one from scratch to better understand it and to practice our object-oriented programming. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

## Directions
Write a class called `MySet` (since Set is already taken). Like Set, it has `add`, `delete`, and `has` methods. Its constructor creates an empty `MySet` instance, `add` adds a value to the `MySet` instance (but only if it isn’t already a member), `delete` removes its argument from the `MySet` instance (if it was a member), and `has` returns a Boolean value indicating whether its argument is a member of the `MySet` instance.

Use the `===` operator, or something equivalent such as `indexOf`, to determine whether two values are the same.

Give the class a static `from` method that takes an iterable object as argument and creates a `MySet` instance that contains all the values produced by iterating over it.

```javascript
class MySet {
  // Your code here.
}

let myset = MySet.from([10, 20]);
console.log(myset.has(10));
// → true
console.log(myset.has(30));
// → false
myset.add(10);
myset.delete(10);
console.log(myset.has(10));
// → false
```
