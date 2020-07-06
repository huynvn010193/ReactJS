import React, { Fragment } from "react";
import { Card, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import Title from "antd/lib/typography/Title";

// class Cricketer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: props.name,
//       team: props.team,
//     };
//   }

//   getName = () => this.state.name;

//   render() {
//     return (
//       <div>
//         <span> Team: {this.state.team}</span>
//       </div>
//     );
//   }
// }

// export class Bowler extends Cricketer {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...this.state,
//       wickets: props.wickets,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>name: {this.getName()}</span>
//         {super.render()}
//         <span>Wickets: {this.state.wickets}</span>
//       </div>
//     );
//   }
// }

// export class Batsmen extends Cricketer {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...this.state,
//       runs: props.runs,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <span>name: {this.getName()}</span>
//         {super.render()}
//         <span>Runs: {this.state.runs}</span>
//       </div>
//     );
//   }
// }

// class Cricketer {
//   constructor(name, team) {
//     this.name = name;
//     this.team = team;
//   }

//   getName = () => this.name;

//   getTeamName = () => this.team;
// }

// // Subclass
// export class Bowler extends Cricketer {
//   constructor(name, team, wickets) {
//     super(name, team);
//     this.wickets = wickets;
//   }

//   getWickets = () => this.wickets;
// }

// export class Batsmen extends Cricketer {
//   constructor(name, team, runs) {
//     super(name, team);
//     this.runs = runs;
//   }

//   getRuns = () => this.runs;
// }

export const Cricketer = ({ name, team, avatarSrc, children }) => (
  <Card bordered style={{ width: 300, float: "left", margin: 10 }}>
    <Meta avatar={<Avatar src={avatarSrc} />} title={name} />
    <hr></hr>
    Team: {team}
    <br />
    <br />
    {children}
  </Card>
);

export const ODICareer = ({ matches, children }) => (
  <Card.Grid style={{ width: "100%" }}>
    <Title level={4}>ODI Matches: {matches}</Title>
    {children}
  </Card.Grid>
);

export const TestCareer = ({ matches, children }) => (
  <Card.Grid style={{ width: "100%" }}>
    <Title level={4}>ODI Matches: {matches}</Title>
    {children}
  </Card.Grid>
);

export const Batting = ({ runs, score }) => (
  <Fragment>
    Runs : {runs}
    <br />
    <br />
    Top score: {score}
  </Fragment>
);

export const Bowling = ({ wickets, bowlingAvg }) => (
  <Fragment>
    Wickets: {wickets}
    <br />
    <br />
    Bowling Average: {bowlingAvg}
  </Fragment>
);
