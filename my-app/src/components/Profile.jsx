// import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Profile() {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.text)
    console.log(value)

    const click = (e) => {
        // console.log(e.target.value)
        dispatch({type:"changeValue", text: e.target.value})


    }
    return (



        <div className={'Profile'}>
            <form action="#" >
                <input type="radio" id="first" name="checkbox" value="first"  onClick={click}/>
                <label htmlFor="first">First</label>
                <input type="radio" id="second" name="checkbox" value="second" onClick={click}/>
                <label htmlFor="second">Second</label>
            </form>

            {/*<p>You choose {value}</p>*/}

        </div>
    );
}

export default  Profile