import React, { Component } from "react";
import Boxes from "./Boxes";
import Clues from "./Clues";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

//棋盘组件，并添加线索的名称
class Crosswords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: false,
      warningFinish: false,
      passLevel: false,
      time: new Date().getTime(),
      elapsedTime: 0,
      level: 0,
      totalCorrect: 0,
      clues: {
        across: [],
        down: []
      },
      grid: [],
      info: true,
      score: 0
    };
    this.postMap = this.postMap.bind(this);
    this.changeMap = this.changeMap.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleWarningFinish = this.toggleWarningFinish.bind(this);
    this.finishAndNextLevel = this.finishAndNextLevel.bind(this);
    this.handleScore = this.handleScore.bind(this);
    this.confirmNextLevel = this.confirmNextLevel.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.togglePassLevel = this.togglePassLevel.bind(this);
  }

  togglePassLevel() {
    this.setState({
      passLevel: !this.state.passLevel
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  //设置warning开关 ture或者false，调用这个方法来启动warning弹出框
  toggleWarning() {
    this.setState({
      warning: !this.state.warning
    });
  }

  //设置warningFinish开关 ture或者false，调用这个方法来启动warningFinish弹出框
  toggleWarningFinish() {
    this.setState({
      warningFinish: !this.state.warningFinish
    });
  }
  handleScore() {
    this.setState({
      score: this.state.score + 10
    });
  }
  //从数据库得到数据并放入state中
  componentDidMount() {
    this.getMapFromServer(1);
  }

  //向数据库里存地图
  postMap() {
    axios.post("/api/crosswords/post").then(res => {
      alert("post succesful");
    });
  }

  //更新地图,进入到下一关
  changeMap() {
    this.getMapFromServer(this.state.level + 1);
  }

  //从服务器获取地图
  getMapFromServer(levelTemp) {
    axios
      .get("/api/crosswords/get", {
        params: {
          level: levelTemp
        }
      })
      .then(response => {
        //在浏览器console打印
        //console.log(response.data);
        this.setState({
          time: new Date().getTime(),
          totalCorrect: response.data.totalCorrect,
          level: response.data.level,
          clues: response.data.clues,
          grid: response.data.grid
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //确认进入下一关
  confirmNextLevel() {
    this.setState({
      warning: false,
      warningFinish: false
    });
    this.changeMap();
  }

  //完成本关进入下一关
  finishAndNextLevel() {
    let finish = new Date().getTime();
    let t = finish - this.state.time;
    this.setState({ elapsedTime: t / 1000 });
    this.handleScore();
    if (this.state.level === 10) {
      this.togglePassLevel();
    } else {
      this.toggleWarningFinish();
    }
  }

  //以下为JSX语法，在JSX中用{}来包含JS语句
  render() {
    //console.log(this.state);

    return (
      //设置key来作为唯一id，如果key 不同则所有子控件都会不同
      <div className="crossword" key={this.state.level}>
        <h1>LEVEL {this.state.level}</h1>
        <h4>Score: {this.state.score}</h4>
        <div>
          {/*<button onClick={this.postMap}>post map</button>*/}
          <button
            type="button"
            className={"btn btn-success"}
            onClick={this.toggleWarning}
          >
            Skip level
          </button>
        </div>

        <div className="clue-lists">
          <div>
            <h3>Across</h3>
            {/*属性小写，把clues属性传到下一个组件，在Clues组件中用this.props.clues来调用传入的参数*/}
            <Clues clues={this.state.clues.across} />
          </div>
          <div>
            <h3>Down</h3>
            {/*复用Clues组件，把要传入的参数放到clues中*/}
            <Clues clues={this.state.clues.down} />
          </div>
        </div>

        <Boxes
          level={this.state.level}
          grid={this.state.grid}
          clues={this.state.clues}
          totalCorrect={this.state.totalCorrect}
          handleScore={this.handleScore}
          finishAndNextLevel={this.finishAndNextLevel}
        />
        {/*跳到下一关dialog*/}
        <Modal
          isOpen={this.state.warning}
          toggle={this.toggleWarning}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleWarning}>Warning!</ModalHeader>
          <ModalBody>
            If you skip this level, you will not get full score of this level.
            <br />
            Do you want to skip this level?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.confirmNextLevel}>
              Confirm
            </Button>
            <Button color="secondary" onClick={this.toggleWarning}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/*完成本关dialog*/}
        <Modal
          isOpen={this.state.warningFinish}
          toggle={this.toggleWarningFinish}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleWarningFinish}>
            Congratulations!
          </ModalHeader>
          <ModalBody>
            You have finished this level! Time taken : {this.state.elapsedTime}{" "}
            seconds.
            <br />
            Confirm to go to the next level.
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.confirmNextLevel}>
              Confirm
            </Button>
            <Button color="secondary" onClick={this.toggleWarningFinish}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/*欢迎界面dialog*/}
        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>
            Welcome to the Crosswords game!
          </ModalHeader>
          <ModalBody>
            There are 10 levels with different clues of words in each level.
            <br />
            You should guess the words and put them into the blank. If your
            input is right, the blank will turn green.
            <br />
            For each word, there is a hint after it. It may help you when you
            are stucked.
            <br />
            Good luck!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              I am ready!
            </Button>{" "}
          </ModalFooter>
        </Modal>
        {/*通关dialog*/}
        <Modal
          isOpen={this.state.passLevel}
          toggle={this.togglePassLevel}
          className={"modal-warning " + this.props.className}
        >
          <ModalHeader toggle={this.togglePassLevel}>
            Congratulations!!!!!
          </ModalHeader>
          <ModalBody>
            You have passed all the levels!!! Excellent!!!
            <br />
            <img src="https://media.giphy.com/media/fnYUD6bWKufGDjRAYC/giphy.gif" />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.togglePassLevel}>
              confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Crosswords;
