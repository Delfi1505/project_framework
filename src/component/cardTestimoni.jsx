import React from "react"
    class CardTestimoni extends React.Component{
    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / gambar */}
                        <div className="col-5">
                            <img src={this.props.gambar} className="img" height="300" />
                        </div>
                            {/* button untuk mengedit */}
                            {/*<button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
        </button>*/}
                            {/* button untuk menghapus */}
                            {/*<button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>*/}
                    </div>
                </div>
            </div>
        )
    }

    
}
export default CardTestimoni;