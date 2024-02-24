import { LinkedList } from "./linked-list.mjs";

//each test will also test toString()
//test append(value)
LinkedList.append('a');
LinkedList.append('b');
LinkedList.toString();

//test prepend(value)
LinkedList.prepend('c');
LinkedList.toString();

//test size()
console.log(LinkedList.size());

//test head()
console.log(LinkedList.head());

//test tail()
console.log(LinkedList.tail());

//test at(index)
console.log(LinkedList.at(0));
console.log(LinkedList.at(2));
console.log(LinkedList.at(5));

//test pop()
LinkedList.pop()
LinkedList.toString();

//test contains(value)
console.log(LinkedList.contains('a'));
console.log(LinkedList.contains('no'));

//test find()
console.log(LinkedList.find('a'));
console.log(LinkedList.find('c'));
console.log(LinkedList.find('no'));
