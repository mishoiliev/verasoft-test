import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import { FiUser, FiSmartphone } from 'react-icons/fi';
import { HiOutlineAtSymbol, HiOutlineOfficeBuilding } from 'react-icons/hi'
import { VscHome } from 'react-icons/vsc'
import './header.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { sagaSetHeaderData, setOverlayVisible } from '../../actions';
import '../../app.css';

class Header extends React.Component {

    componentDidMount = () => {
        console.log('comp did mount');
        this.props.sagaSetHeaderData();
    }

    getAge(date) {
        var today = new Date();
        var birth_date = new Date(date);
        var age = today.getFullYear() - birth_date.getFullYear();
        var m = today.getMonth() - birth_date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth_date.getDate())) age--;

        return age;
    }

    getSince(date) {
        let sinceDate = new Date(date);
        return sinceDate.toString().substr(4, 6).toUpperCase() + ', ' + sinceDate.getFullYear().toString();
    }

    render() {
        const {
            header
        } = this.props

        console.log('header', header);
        return (
            header.birth_date ?
                <div className='header-wrapper'>
                    <div className='upperHeader'>
                        <AiOutlineStar
                            className='star-icon'
                            strokeWidth='1em'
                        />
                        <span className='username'>{header.first_name} {header.last_name}</span>
                        <button
                            className='new-order-button'
                            onClick={() => this.props.setOverlayVisible(true)}
                        >
                            <span>New Order</span>
                        </button>
                    </div>
                    <div className='user-info-wrapper'>
                        <div className='user-profile'>
                            <FiUser size='70px' color='#FFFFFF' className='user-icon' />
                            <span className='user-text'>{header.gender.toUpperCase()} - {this.getAge(header.birth_date)}</span>
                        </div>
                        <div className='user-details'>
                            <div className='user-details-padding'>
                                <div>
                                    <FiUser size='1.0em' color='#B0C6D8' className='user-details-icon' />
                                    <p>#{header.id}</p>
                                </div>
                                <div>
                                    <FiSmartphone
                                        size='1.0em'
                                        color='#B0C6D8'
                                        id='mobile-phone-number'
                                        className='user-details-icon' />
                                    <p>{header.mobile_phone}</p>
                                </div>
                                <div>
                                    <HiOutlineOfficeBuilding size='1.0em' color='#B0C6D8' className='user-details-icon' />
                                    <p>{header.work_phone}</p>
                                </div>
                                <div>
                                    <VscHome size='1.0em' color='#B0C6D8' className='user-details-icon' />
                                    <p>{header.home_phone}</p>
                                </div>
                                <div>
                                    <HiOutlineAtSymbol size='1.0em' color='#B0C6D8' className='user-details-icon' />
                                    <p>{header.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className='communication-info'>
                            <div className='communication-tooltip'><span>90-DAY COMMUNICATION ACTIVITY</span></div>
                            <div className='communication-details'>
                                <div className='communication-tab'>
                                    <span>
                                        {header.activity.sms}
                                    </span>
                                    <div className='activity-name'><div>SMS</div></div>
                                </div>
                                <div
                                    className='communication-tab'
                                    style={{ marginLeft: '2px', marginRight: '2px' }}
                                >

                                    <span>
                                        {header.activity.email}
                                    </span>
                                    <div className='activity-name'><div>EMAIL</div></div>
                                </div>
                                <div className='communication-tab'>
                                    <span>
                                        {header.activity.orders}
                                    </span>
                                    <div className='activity-name'><div>ORDERS</div></div>
                                </div>

                            </div>
                        </div>
                        <div className='sms-status'>
                            <div className='communication-tooltip'>SMS CARRIER STATUS</div>
                            <div className='communication-tab'><span>{header.carrier_status.status}</span></div>
                            <div className='activity-name'><div>SINCE {this.getSince(header.carrier_status.since)}</div></div>
                            {/* <div className='communication-tooltip'><p>90-DAY COMMUNICATION ACTIVITY</p></div> */}
                        </div>
                    </div>
                </div>
                : <Loader type="ThreeDots" color="#333333" height={80} width={80} />
        )
    }
}

const mapStateToProps = state => {
    return {
        header: state.header,
        overlay: state.overlay
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sagaSetHeaderData: (data) => dispatch(sagaSetHeaderData(data)),
        setOverlayVisible: (bool) => dispatch(setOverlayVisible(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);