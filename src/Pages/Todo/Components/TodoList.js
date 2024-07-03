
const TodoList = ({task , className}) => {
    const style={
        marginBottom : '10px'
    }
    const ondragstart = (e,id) => {
        console.log(id);
        e.dataTransfer.setData("text/id", id)

    }
    const todo = task.map(t => {
        return (
            <div draggable onDragStart={(e) => ondragstart(e,t.id)} style={style} className={className} 
            key={t.id}>{t.title}</div>
        );
    });

 return (
    <div>{todo}</div>
 );

};

export default TodoList;