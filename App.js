const heading = React.createElement("h1",{id: "heading"},"Hello world from React");
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading);
            console.log(heading);



// class Queue{
//     constructor(){
//         this.queue = [];
//     }
//     enqueue(data){
//         this.queue.push(data);
//     }
//     dequeue(){
//         if (this.isEmpty()){
//             return "Queue is Empty";
//         }
//         return this.queue.shift();
//     }
//     peek(){
//         if (this.isEmpty()){
//             return "Queue is Empty";
//         }
//         return this.queue[0];
//     }
//     isEmpty(){
//         return this.queue.length === 0;
//     }
//     size(){
//         return this.queue.length;
//     }
//     clear(){
//         this.queue = [];
//     }
//     // contains(element){
//     //     return this.stack.includes(element);
//     // }
//     // reverse(){
//     //     this.stack.reverse();
//     // }
//     printQueue(){
//         let str = "";
//         for(let i = 0;i<this.queue.length; i++){
//             str += this.queue[i] + "\n";
//         }
//         return str;
//     }
//     //usage Example
//     let myQueue = new Queue();
//     myQueue.enqueue(2);
//     myQueue.enqueue(3);
//     myQueue.enqueue(4);
//     myQueue.dequeue();
//     console.log(myQueue.printQueue());
// }


