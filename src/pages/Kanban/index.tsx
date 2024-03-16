import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from '../../recoil/atom/Todo';
import DragabbleCard from '../../components/Kanban/DragableCard';


const Kanban = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on source.index
      toDosCopy.splice(source.index, 1);
      // 2) Put back the item on the destination.index
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}



const Wrapper = styled.div`
display: flex;
max-width: 480px;
width: 100%;
margin: 0 auto;
justify-content: center;
align-items: center;
height: 100vh;
`;

const Boards = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
padding: 20px 10px;
padding-top: 30px;
background-color: white;
border-radius: 5px;
min-height: 200px;
`;



export default Kanban;