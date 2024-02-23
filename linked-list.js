import { Node } from "./node";

export const LinkedList=(function(){

    let headNode=null;
    let tailNode=null;

    //append(value) adds a new node containing value to the end of the list
    function append(value){
        if(headNode==null){
            headNode=Node.newNode(value,null);
            tailNode=Node.newNode(value,null);
        }else{
            let current=headNode;
            while(current.nextNode!=null){
                current=current.nextNode;
            }
            tailNode=Node.newNode(value,null);
            current.nextNode=tailNode;
        }
    }

    //prepend(value) adds a new node containing value to the start of the list
    function prepend(value){
        if(headNode==null){
            headNode=Node.newNode(value,null);
            tailNode=Node.newNode(value,null);
        }else{
            let previousHeadNode=headNode;
            headNode=Node.newNode(value,previousHeadNode);
        }
    }

    //size returns the total number of nodes in the list
    function size(){
        if(headNode==null){
            return 0;
        }else{
            let current=headNode;
            let length=1;
            while(current.nextNode!=null){
                length++;
                let nextInList=current.nextNode;
                current=nextInList;
            }
            return length;
        }
    }

    //head returns the first node in the list
    function head(){
        return headNode;
    }

    //tail returns the last node in the list
    function tail(){
        return tailNode;
    }

    //at(index) returns the node at the given index
    function at(index){
        if(index==0){
            return headNode;
        }else{
        let current=headNode;
        let currentIndex=0;
        while(currentIndex<index && current.nextNode!=null){
            current=current.nextNode;
            currentIndex++;
        }
        if(currentIndex==index){
            return current;
        }else{
            console.log("index is not present in the linked list");
        }

        }

    }

    //pop removes the last element from the list
    function pop(){
        if(headNode==tailNode){
            headNode=null;
            tailNode=null;
        }else{
            current=headNode;
            while(current.nextNode!=tailNode){
                current=current.nextNode;
            }
            current.nextNode=null;
            tailNode=current;
        }
    }

    //contains(value) returns true if the passed in value is in the list and otherwise returns false.
    function contains(value){
        let flag=false;
        if(headNode==null){
            return flag;
        }
        if(headNode.value==value){
            flag=true;
            return flag;
        }else{
            let current=headNode;
            while(current.nextNode!=null){
                let current=current.nextNode;
                if(current.value==value){
                    flag=true;
                }
            }
            return flag;
        }
    }

    //find(value) returns the index of the node containing value, or null if not found.
    function find(value){
        let flag=contains(value);
        if(flag==false){
            return null;
        }else{
            let valueIndex;
            if(headNode.value==value){
                valueIndex=0;
                return valueIndex;
            }else{
                let current=headNode;
                let currentIndex=0;
                while(current.nextNode!=null){
                    current=current.nextNode;
                    currentIndex++;
                    if(current.value==value){
                        valueIndex=currentIndex;
                    }
                }
                return valueIndex;
            }
        }
    }

    //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    //make a function to create each individual value block and append them through a while loop


    return{
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,

    }
})();
