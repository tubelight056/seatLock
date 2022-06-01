import React, { useState, useEffect } from "react";
import "./slotCard.css";
const SlotCard = (props) => {
  // console.log(props);
  const [slots, setslots] = useState([...props.seat]);
  useEffect(() => {
    let slotss = slots;
    slotss.forEach((seat, i) =>
      seat.seats.forEach((chair) => {
        chair.slot = props.i;
        let currentCount = JSON.parse(localStorage.getItem("current_register"));
        if (currentCount != null) {
          currentCount.forEach((data) => {
            if (
              data.line === chair.line &&
              data.column === chair.column &&
              data.slot === chair.slot
            ) {
              chair.status = "occupied";
              chair.occupiedBy = "me";
            }
          });
        }
      })
    );

    setslots([...slotss]);
  }, []);

  const onClickHandler = (data) => {
    let slotss = slots;
    console.log(data);
    if (data.occupiedBy === "me" || data.occupiedBy === null) {
      slotss.forEach((seat) =>
        seat.seats.forEach((chair) => {
          chair.slot = props.i;
          if (
            data.line === chair.line &&
            data.column === chair.column &&
            data.slot === chair.slot
          ) {
            console.log(data, chair);
            if (chair.status !== "occupied") {
              chair.status = "occupied";
              chair.occupiedBy = "me";
              let currentCount = JSON.parse(
                localStorage.getItem("current_register")
              );
              if (currentCount === null) {
                localStorage.setItem(
                  "current_register",
                  JSON.stringify([chair])
                );
              } else {
                localStorage.setItem(
                  "current_register",
                  JSON.stringify([...currentCount, chair])
                );
              }
            } else {
              chair.status = "not occupied";
              chair.occupiedBy = null;
              let currenCount = [];
              let currentCount = JSON.parse(
                localStorage.getItem("current_register")
              );
              currentCount.forEach((chair) => {
                if (data.line !== chair.line && data.column !== chair.column) {
                  currenCount.push(chair);
                }
              });
              localStorage.setItem(
                "current_register",
                JSON.stringify([...currenCount])
              );
            }
          }
        })
      );
      setslots([...slotss]);
    }
  };
  return (
    <div className="containerslot">
      {slots.map((seat) =>
        seat.seats.map((chair) => (
          <div
            className={
              chair.status === "occupied" ? "PerSeat occupied" : "PerSeat"
            }
            onClick={() => {
              onClickHandler(chair);
            }}
          >
            {`L${chair.line}C${chair.column}`}
          </div>
        ))
      )}
    </div>
  );
};

export default SlotCard;
