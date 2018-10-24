import React from "react";
import "./TimeTracker.css";

class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      sec: "00",
      min: "00",
      hour: "00",
      fire: ""
    };
  }
  add = () => {
    let seconds = parseInt(this.state.sec);
    let minutes = parseInt(this.state.min);
    let hours = parseInt(this.state.hour);

    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
        if (hours >= 60) {
          hours = 0;
          hours++;
        }
      }
    }
    let s = "000000000" + seconds;
    this.setState({ sec: s.substr(s.length - 2) });
    let m = "000000000" + minutes;
    this.setState({ min: m.substr(m.length - 2) });
    let h = "000000000" + hours;
    this.setState({ hour: h.substr(h.length - 2) });
  };

  /* Start button */
  start = () => {
    this.setState({ fire: setInterval(this.add, 1000) });
  };
  /* Stop button */

  stop = () => {
    clearInterval(this.state.fire);
  };

  /* Clear button */
  clear = () => {
    clearInterval(this.state.fire);
    this.setState({ sec: (this.state.sec = "00") });
    this.setState({ min: (this.state.min = "00") });
    this.setState({ hour: (this.state.hour = "00") });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h3>Time Tracker</h3>
        </div>
        <div className="main">
          {this.state.hour}:{this.state.min}:{this.state.sec}
          <div className="buttons">
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => this.start()}
            >
              Start
            </button>
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => this.stop()}
            >
              ||
            </button>
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => this.clear()}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="main2">
          <div className="align">
            <div>Projects:</div>
            <select className="browser-default dropdown" name="Task">
              <option>Task 1</option>
              <option>Task 2</option>
              <option>Task 3</option>
              <option>Task 4</option>
            </select>
          </div>
          <div className="align2">
            <div>Tasks:</div>
            <select className="browser-default dropdown" name="Task">
              <option>Task 1</option>
              <option>Task 2</option>
              <option>Task 3</option>
              <option>Task 4</option>
            </select>
          </div>
        </div>

        <div className="footer">
          <div className="input-field">
            <input id="input_text" type="text" />
            <label for="input_text">Comments</label>
          </div>

          <button className="waves-effect waves-light btn-small prefix">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default TimeTracker;