import React from 'react';
import Table from '../components/Table';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: []
        };
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    };
    tableColumn = () => {
        return [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'User Name'
        }, {
            dataField: 'email',
            text: 'Email'
        }, {
            dataField: 'phone',
            text: 'Phone'
        }, {
            dataField: 'username',
            text: 'User Name'
        }, {
            dataField: 'website',
            text: 'Website'
        }];
    }
    render() {
        return (
            <div className="container">
                <Table 
                data ={this.state.records} 
                columns ={this.tableColumn()}
                bordered 
                striped 
                />
            </div>
        );
    }
}

export default User;
