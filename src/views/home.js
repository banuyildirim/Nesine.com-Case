import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import axios from "axios";
import StandardTable from '../components/table';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get(`https://nesine-case-study.onrender.com/bets`)
    .then(res => {
      this.setState({ data:  res.data, count: res.data.length});
    })
  }

  render() {
    let columns = [
      {
        title: `Event Count: ${this.state.count}`,
        key: 'count',
        render: (text, value) => <span>{value.D + ' ' + value.DAY + ' ' + value.LN} <br></br> <b style={{fontWeight:'650'}}>{value.C}</b> { + ' ' + value.T + ' ' + value.N} </span>,
      },
      {
        title: 'Yorumlar',
        key: 'comment',
        render: (text, value) => <span>Yorumlar <br></br> Yorumlar</span>,
      },
      {
        title: ' ',
        key: 'MBS',
        render: (text, value) => <span>{} <br></br> {value.OCG[1].MBS}</span>,
      },
      {
        title: '1',
        key: '1',
        render: (text, value) => <span>1 <br></br></span>,
      },
      {
        title: 'x',
        key: 'x',
        render: (text, value) => <span>x <br></br> {value.OCG[1].OC[1].O}</span>,
      },
      {
        title: '2',
        key: '2',
        render: (text, value) => <span>2 <br></br></span>,
      },
      {
        title: 'Alt',
        key: 'Alt',
        render: (text, value) => <span>Alt <br></br></span>,
      },
      {
        title: 'Üst',
        key: 'Üst',
        render: (text, value) => <span>Üst <br></br> {value.OCG[5].OC[26].O}</span>,
      },
      {
        title: 'H1',
        key: 'H1',
        render: (text, value) => <span>H1 <br></br></span>,
      },
      {
        title: '1',
        key: 'Second 1',
        render: (text, value) => <span>1 <br></br></span>,
      },
      {
        title: 'X',
        key: 'Second',
        render: (text, value) => <span>x <br></br></span>,
      },
      {
        title: '2',
        key: 'Second 2',
        render: (text, value) => <span>2 <br></br></span>,
      },
      {
        title: 'H2',
        key: 'Second H2',
        render: (text, value) => <span>H2 <br></br></span>,
      },
      {
        title: '1-x',
        key: '1-X',
        render: (text, value) => <span>1-X <br></br></span>,
      },
      {
        title: '1-2',
        key: '1-2',
        render: (text, value) => <span>1-2 <br></br></span>,
      },
      {
        title: 'X-2',
        key: 'X-2',
        render: (text, value) => <span>X-2 <br></br></span>,
      },
      {
        title: 'Var',
        key: 'Var',
        render: (text, value) => <span>Var <br></br></span>,
      },
      {
        title: 'Yok',
        key: 'Yok',
        render: (text, value) => <span>Yok <br></br></span>,
      },
      {
        title: '+99',
        key: '+99',
        render: (text, value) => <span>+99 <br></br> {value.TYPE}</span>,
      },
    ];
    return (
      <div>
        <Row className={'content__header'}>
          <a className={'table_title'} href="https://www.nesine.com/" title="nesine.com">NESİNE.COM</a>
        </Row>
        <div className={'content__table'}>
          <Row>
            <StandardTable 
              dataSource={this.state.data} 
              columns={columns} 
              size="middle"/>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
