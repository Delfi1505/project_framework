import React from "react"
    class CardHistori extends React.Component{
    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        Foto Produk
                        <div className="col-5">
                            <img src={this.props.gambar} className="img" height="300" />
                        </div> 
                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                Username: { this.props.user }
                            </h5>
                        </div>
                        <div className="col-7">
                            <h5 className="text-info">
                                Nama Produk: { this.props.nama }
                            </h5>

                            <h6 className="text-dark">
                                Deskripsi: { this.props.deskripsi}
                            </h6>

                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    
}
export default CardHistori;