const Container = ({ children }) => {
    return (
        <>
            <center>

                <div className="card" style={{ width: "80%" }} >

                    <div className="card-body">
                        {children}
                    </div>
                </div >
            </center>
        </>
    )
}

export default Container;