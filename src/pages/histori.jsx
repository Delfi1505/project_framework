import React, { Component } from "react";
import Card from "../component/cardHistori";
import $ from "jquery";
import Navbar from "../component/navbar";
class Histori extends Component {
    constructor() {
        super()
        this.state = {
            histori: [
                {
                    gambar: "",
                    nama: "-",
                    user: "-",
                    deskripsi: "-"
                    
                    //email : ""
                    //gambar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUJB7Y9CxtpITQOyJDULIBokFbFTLOXpOOw&usqp=CAU"
                },
                {
                    gambar: "",
                    nama: "-",
                    dekripsi: "-"
                    //telepon : "-",
                    //email : ""
                    //gambar : "https://asset.kompas.com/crops/nlsC9WFdZCXyzNs4CiPrfyxL9MM=/0x120:1024x803/750x500/data/photo/2021/09/29/6153fc3317cc0.jpeg"
                },
                {
                    gambar: "-",
                    nama: "-",
                    deskripsi: "-",
                    //email : ""
                    //gambar : "https://koropak.co.id/storage/img/cover/gubernur-jawa-barat-tebar-benih-ikan.jpg"
                },
            ],

            action: "",
            gambar: "",
            nama: "",
            user: "",
            deskripsi: "",
            //telepon: "",
            //email : "",
            //gambar: "",
            selectedItem: null,
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.state.histori.map((item, index) => (
                            <Card
                                gambar={item.gambar}
                                nama={item.nama}
                                user={item.user}
                                deskripsi={item.deskripsi}
                                //telepon={item.telepon}
                                //email={item.email}
                                //gambar={item.gambar}
                                onEdit={() => this.Edit(item)}
                                onDrop={() => this.Drop(item)}
                            />
                        ))}
                    </div>
                    <button className="btn btn-success" onClick={() => this.Add()} >
                        Tambah Produk
                    </button>

                    {/* component modal sbg control manipulasi data */}
                    <div className="modal" id="modal_histori">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* modal header */}
                                <div className="modal-body">
                                    Form Produk
                                </div>
                                {/* modal body */}
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>
                                        Nama Produk :
                                        <input type="text" className="form-control mb-2"
                                            value={this.state.nama}
                                            onChange={ev => this.setState({ nama: ev.target.value })} required />
                                            Username :
                                        <input type="text" className="form-control mb-2"
                                            value={this.state.user}
                                            onChange={ev => this.setState({ user: ev.target.value })} required />

                                        Deskripsi :
                                        <input type="text" className="form-control mb-2"
                                            value={this.state.deskripsi}
                                            onChange={ev => this.setState({ deskripsi: ev.target.value })} required />

                                        <button className="btn btn-info btn-block" type="submit">
                                            Simpan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_histori").show();
        this.setState({
            gambar: "",
            nama: "",
            user: "",
            deskripsi: "",
            //telepon: "",
            //email: "",
            //gambar: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_histori").show();
        this.setState({
            gambar: item.gambar,
            nama: item.nama,
            deskripsi: item.deskripsi,
            //telepon: item.telepon,
            //email: item.email,
            //gambar: item.gambar,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state event
        let tempHistori = this.state.histori
        if (this.state.action === "insert") {
            // menambah data baru
            tempHistori.push({
                gambar: this.state.gambar,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi
                //telepon: this.state.telepon,
                //email: this.state.email
                //gambar: this.state.gambar,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempHistori.indexOf(this.state.selectedItem)
            tempHistori[index].gambar = this.state.gambar
            tempHistori[index].nama = this.state.nama
            tempHistori[index].deskripsi = this.state.deskripsi
            //tempProduk[index].email = this.state.email
            //tempEvent[index].gambar = this.state.gambar
        }
        this.setState({ event: tempHistori })
        // menutup komponen modal_event
        $("#modal_event").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempHistori = this.state.event
            // posisi index data yg akan dihapus
            let index = tempHistori.indexOf(item)
            // hapus data
            tempHistori.splice(index, 1)
            this.setState({ histori: tempHistori })
        }
    }

}
export default Histori;