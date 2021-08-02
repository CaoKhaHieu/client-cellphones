import React from 'react';
import './Alert.css'
import { useHistory} from 'react-router-dom'
import { CheckCircleOutlined  } from '@ant-design/icons';

function Alert(props) {
    const history = useHistory()
    const backHome = () => {
        history.push('/')
    }
    return (
        <div className="alert">
            <div className="alert-content">
                    <div className="alert-content-icon">
                        <CheckCircleOutlined />
                    </div>
                    <h2>Đặt hàng thành công</h2>
                    <button className="alert-content-button" onClick={() => backHome()}>OK</button>
            </div>
        </div>
    );
}

export default Alert;