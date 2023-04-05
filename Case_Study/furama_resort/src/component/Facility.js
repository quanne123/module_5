import React, { Component } from 'react';

class Facility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: false
        };
    }
    handleMouseOver = () => {
        this.setState({ showButtons: true });
    }

    handleMouseOut = () => {
        this.setState({ showButtons: false });
    }

    render() {
        const { showButtons } = this.state;

        return (
            <div>
                <br />
                <br />
                <div className="card parent" style={{ width: "18rem", display: "inline-block", marginLeft: "70px" }}
                     onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <img src="https://motortrip.vn/wp-content/uploads/2022/03/khach-san-17.jpg"
                         className="card-img-top imgcard imgbutton" alt="..." />
                    <div className="card-body">
                        <p className="card-text" style={{ fontWeight: "bold", fontSize: "20px" }}>Armani Hotel</p>
                        <p className="card-text" style={{ fontWeight: "lighter", marginTop: "-15px", width: "100%" }}>
                            Room size: 85.2 m<sup>2</sup>
                            <a href="" style={{ position: "absolute", right: "15px", textDecoration: "none", color: "darkgreen" }}>
                                <i className="fa-sharp fa-solid fa-paper-plane"></i> Know more
                            </a>
                        </p>
                        <div className="button-container" style={{ display: showButtons ? "block" : "none" }}>
                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">
                                Sửa
                            </button>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className="card parent" style={{ width: "18rem", display: "inline-block", marginLeft: "70px" }}
                     onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <img src="https://motortrip.vn/wp-content/uploads/2022/03/khach-san-17.jpg"
                         className="card-img-top imgcard imgbutton" alt="..." />
                    <div className="card-body">
                        <p className="card-text" style={{ fontWeight: "bold", fontSize: "20px" }}>Armani Hotel</p>
                        <p className="card-text" style={{ fontWeight: "lighter", marginTop: "-15px", width: "100%" }}>
                            Room size: 85.2 m<sup>2</sup>
                            <a href="" style={{ position: "absolute", right: "15px", textDecoration: "none", color: "darkgreen" }}>
                                <i className="fa-sharp fa-solid fa-paper-plane"></i> Know more
                            </a>
                        </p>
                        <div className="button-container" style={{ display: showButtons ? "block" : "none" }}>
                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">
                                Sửa
                            </button>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className="card parent" style={{ width: "18rem", display: "inline-block", marginLeft: "70px" }}
                     onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <img src="https://motortrip.vn/wp-content/uploads/2022/03/khach-san-17.jpg"
                         className="card-img-top imgcard imgbutton" alt="..." />
                    <div className="card-body">
                        <p className="card-text" style={{ fontWeight: "bold", fontSize: "20px" }}>Armani Hotel</p>
                        <p className="card-text" style={{ fontWeight: "lighter", marginTop: "-15px", width: "100%" }}>
                            Room size: 85.2 m<sup>2</sup>
                            <a href="" style={{ position: "absolute", right: "15px", textDecoration: "none", color: "darkgreen" }}>
                                <i className="fa-sharp fa-solid fa-paper-plane"></i> Know more
                            </a>
                        </p>
                        <div className="button-container" style={{ display: showButtons ? "block" : "none" }}>
                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#editModal">
                                Sửa
                            </button>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Xoá 
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default Facility;