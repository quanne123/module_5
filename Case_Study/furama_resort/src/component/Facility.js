import React, {Component} from 'react';

class Facility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: false
        };
    }

    handleMouseOver = () => {
        this.setState({showButtons: true});
    }

    handleMouseOut = () => {
        this.setState({showButtons: false});
    }

    render() {
        const {showButtons} = this.state;

        return (
            <div className=" row">
                <div>
                    <br/>
                    <br/>
                    <div
                        className="card parent"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://motortrip.vn/wp-content/uploads/2022/03/khach-san-17.jpg"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Armani Hotel
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://vcdn1-dulich.vnecdn.net/2022/07/29/hypat-1659069584-1659081355.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=ateHKAAnu32uybgAOx-emA"
                            className="card-img-top imgcard"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Boscolo Exedra
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768"
                            className="card-img-top imgcard"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                OrchidHeaven
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://hoanghaihotel.vn/Data/images/tintuc/10032021170917-gioi-thieu-ve-khach-san-hoang-hai.jpg"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Hotel Areias do Seixo
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <br/> <br/>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/hanoi-hotel17942.jpg"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Motel Magic
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://i.ex-cdn.com/nhadautu.vn/files/content/2020/05/08/kinh-doanh-khach-san-1-2149.jpg"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Hotel Villa Honegg
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>


                        <img
                            src="https://vcdn1-dulich.vnecdn.net/2021/05/14/stunning-sunset-at-the-1620959674-1620963331.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=RAP72v1BULO6wM4YrQx1sg"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Lover's Deep Luxury
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-success"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{width: "18rem", display: "inline-block", marginLeft: 70}}
                        onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}

                    >
                        <img
                            src="https://mixhotel.vn/uploads/images/62abe8ead6a5eb614f4bdc08/khach-san-tinh-yeu-trung-son__6_.webp"
                            className="card-img-top imgcard imgbutton"
                            alt="..."
                        />
                        <div className="card-body">
                            <p className="card-text" style={{fontWeight: "bold", fontSize: 20}}>
                                Trinity Energy
                            </p>
                            <p
                                className="card-text"
                                style={{fontWeight: "lighter", marginTop: "-15px", width: "100%"}}
                            >
                                Room size: 85.2 m<sup>2</sup>{" "}
                                <a
                                    href=""
                                    style={{
                                        position: "absolute",
                                        right: 15,
                                        textDecoration: "none",
                                        color: "darkgreen"
                                    }}
                                >
                                    <i className="fa-sharp fa-solid fa-paper-plane"/> Know more
                                </a>
                            </p>
                            <div className="button-container" style={{display: "none"}}>
                                <button
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                >
                                    Xoá
                                </button>
                            </div>
                        </div>
                    </div>
                    <br/> <br/>
                </div>
                <br/>
                <br/>
                <center>
                    <a className="btn btn-primary" id="preButton">
                        Previous
                    </a>
                    <span className="btn btn-outline-light">1</span>
                    <a className="btn btn-primary" id="nexButton">
                        Next
                    </a>
                </center>
                <br/> <br/>
                <br/>
            </div>


        );
    }
}

export default Facility;