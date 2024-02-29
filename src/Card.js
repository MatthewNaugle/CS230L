const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
                <div className="card">
                    <div className="card text-white bg-primary mb-3" >
                        <div className="card-header">
                            <h3>Card 01</h3>
                        </div>
                        <div className="card-body">
                            <p>This is the blue card!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <div className="card text-white bg-danger mb-3" >
                        <div className="card-header">
                            <h3>Card 02</h3>
                        </div>
                        <div className="card-body">
                            <p>This is the red card!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card text-white bg-success mb-3" >
                        <div className="card-header">
                            <h3>Card 03</h3>
                        </div>
                        <div className="card-body">
                            <p>This is the green card!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;