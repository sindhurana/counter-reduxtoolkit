import { useSelector } from "react-redux";

const Counter = () => {
    const counter = useSelector(store => store.counter);

    return (
        <>
            <div className="px-4 py-5 my-5 text-center">

                <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Counter Value:{counter}</p>

                </div>
            </div>
        </>
    )
}

export default Counter;