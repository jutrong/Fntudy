import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";



interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  console.log(toDo, "has been rendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div`
   border-radius: 5px;
   margin-bottom: 5px;
   padding: 10px 10px;
   background-color: #f0f0f0;

 `;

export default memo(DragabbleCard);