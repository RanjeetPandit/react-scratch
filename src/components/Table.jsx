import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
class Table extends React.Component {
    render() {
        return (
            <BootstrapTable
                keyField='id'
                data={this.props.records}
                columns={this.props.columns}
                {...this.props}
            />
        );
    }
}

export default Table;