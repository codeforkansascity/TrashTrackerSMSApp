var idMap = new Map();
var executionMap = new Map();

socket.on("connect", () => {
  console.log("connected");
});

socket.on("message", (data) => {
  let parsedResponse = JSON.parse(data);
  let parsedData = parsedResponse.data;
  let eventType = parsedResponse.type;

  let currentKey = `${parsedResponse.id}-${eventType}`;

  if (!idMap.has(currentKey)) {
    if (executionMap.has(parsedData.execution_sid)) {
      let flowParentDiv = document.querySelector(
        `#event_${parsedData.execution_sid}`
      );
      let flowChildDiv = document.createElement("div");
      flowChildDiv.setAttribute("class", `step_${parsedData.execution_sid}`);
      renderEvent(flowParentDiv, flowChildDiv, eventType, parsedData);
    } else {
      let flowParentDiv = document.createElement("div");
      flowParentDiv.setAttribute("id", `event_${parsedData.execution_sid}`);
      document.body.append(flowParentDiv);
      let flowChildDiv = document.createElement("div");
      flowChildDiv.setAttribute("class", `step_${parsedData.execution_sid}`);
      executionMap.set(parsedData.execution_sid, true);
      renderEvent(flowParentDiv, flowChildDiv, eventType, parsedData);
    }
    idMap.set(currentKey, true);
  }
});

function renderEvent(flowParentDiv, flowChildDiv, eventType, parsedData) {
  let eventName = parsedData.name;
  if (!eventName) {
    eventName = "Flow Start/End";
  }
  const childContent = `Flow: ${parsedData.execution_sid} | Event Created Time: ${parsedData.date_created} | Event Type: ${eventType} | <b>Event Name: ${eventName}</b>`;
  flowChildDiv.innerHTML = childContent;
  flowParentDiv.append(flowChildDiv);
}
