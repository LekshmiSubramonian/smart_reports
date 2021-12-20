import React from 'react'
import { Button,ButtonGroup,Dropdown} from 'react-bootstrap';
import Buttons from './Buttons';
import './Dashboard.css'

function Dashboard() {
    return (
        <div>
            <div className="reports-header">
                <div className="reports-label">
                    Reports
                </div>
                <div className="btns">
                    <div className="success">
                        <Buttons className="success-btn" variantName="success" name="Serverip"/>
                        <Buttons className="success-btn" variantName="success" name="view Reports"/>
                    </div>
                    <div className="dropdown">
                        <Dropdown as={ButtonGroup}>
                            <Button variant="success">Export To</Button>
                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />   
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">PDF</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">XML</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Text</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">CSV</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={ButtonGroup}>
                        <Button variant="danger">Upload</Button>
                        <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />   
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Excel</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Text</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Dashboard
