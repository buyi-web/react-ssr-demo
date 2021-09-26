import React from "react";
import "./style.less"
import imgUrl from '@/assets/images/xidada.jpg'
import { increase, decrease } from "../../store/actions/counter";
import { connect } from "react-redux";

function Counter(props) {
    console.log(props);
    const { number, onIncrease, onDecrease } = props
    return (
        <div>
            <img src={imgUrl} alt="" width="200" />
            <p>
                <button onClick={onDecrease}>减</button>
                <strong>{number}</strong>
                <button onClick={onIncrease}>加</button>
            </p>
        </div>
    )
}

function mapStateToProps(state) {
    return { number: state.counter }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease() {
            dispatch(increase())
        },
        onDecrease() {
            dispatch(decrease())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)