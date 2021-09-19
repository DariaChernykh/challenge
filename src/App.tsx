import React from "react";
// import Stopwatch from "src/tasks/1/Stopwatch";
import StopwatchFC from "src/tasks/1/Stopwatch";
import CommentsList from "src/tasks/2/CommentsList/CommentsList";

function App() {
    return (
        <div className="App">
            {/*<Stopwatch />*/}
            <StopwatchFC />
            <CommentsList />
        </div>
    );
}

export default App;
