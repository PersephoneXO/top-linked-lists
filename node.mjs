export const Node=(function(){
    function newNode(thisValue=null,thisNextNode=null){
        const thisNode={
            value:thisValue,
            nextNode:thisNextNode
        }
        return thisNode;
    }
    return{newNode}
})();
