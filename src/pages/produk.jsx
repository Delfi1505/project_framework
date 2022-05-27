import React, { Component } from "react";
import Card from "../component/cardProduk";
import $ from "jquery";
import Navbar from "../component/navbar";
class Produk extends Component {
    constructor() {
        super()
        this.state = {
            produk: [
                {
                    //gambar : "",
                    nama: "-",
                    deskripsi: "-",
                    //telepon : "-",
                    //email : ""
                    gambar: ""
                },
                {
                    //gambar : "",
                    nama: "-",
                    dekripsi: "-",
                    //telepon : "-",
                    //email : ""
                    gambar: "https://drive.google.com/file/d/1PuBRJ6xmth_vYzZv6uvfSPCKhIDhQsEX/view?usp=sharing"
                },
                {
                    //gambar: "-",
                    nama: "",
                    deskripsi: "-",
                    //email : ""
                    gambar: "https://drive.google.com/file/d/1Q4ltLzUE0leYQSE3A9lrVl1IjQa-NS9l/view?usp=sharing"
                },
            ],

            action: "",
            gambar: "",
            nama: "",
            deskripsi: "",
            //telepon: "",
            //email : "",
            //gambar: "",
            selectedItem: null,
        }
        this.state.filterProduk = this.state.produk
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.state.produk.map((item, index) => (
                            <Card
                                gambar={item.gambar}
                                nama={item.nama}
                                deskripsi={item.deskripsi}
                                //telepon={item.telepon}
                                //email={item.email}
                                onEdit={() => this.Edit(item)}
                                onDrop={() => this.Drop(item)}
                            />
                        ))}
                    </div>
                    <button className="btn btn-success" onClick={() => this.Add()} >
                        Tambah Produk
                    </button>

                    {/* component modal sbg control manipulasi data */}
                    <div className="modal" id="modal_produk">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* modal header */}
                                <div className="modal-body">
                                    Form Produk
                                </div>
                                {/* modal body */}
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>
                                        Foto Produk :
                                        <input type="text" className="form-control mb-2"
                                            value={this.state.gambar}
                                            onChange={ev => this.setState({ gambar: ev.target.value })} required />
                                        Nama Produk :
                                        <input type="text" className="form-control mb-2"
                                            value={this.state.nama}
                                            onChange={ev => this.setState({ nama: ev.target.value })} required />

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
        $("#modal_produk").show();
        this.setState({
            gambar: "",
            nama: "",
            deskripsi: "",
            //telepon: "",
            //email: "",
            //gambar: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_produk").show();
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
        let tempProduk = this.state.produk
        if (this.state.action === "insert") {
            // menambah data baru
            tempProduk.push({
                gambar: this.state.gambar,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi
                //telepon: this.state.telepon,
                //email: this.state.email
                //gambar: this.state.gambar,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempProduk.indexOf(this.state.selectedItem)
            tempProduk[index].gambar = this.state.gambar
            tempProduk[index].nama = this.state.nama
            tempProduk[index].deskripsi = this.state.deskripsi
            //tempProduk[index].email = this.state.email
            //tempEvent[index].gambar = this.state.gambar
        }
        this.setState({ event: tempProduk })
        // menutup komponen modal_event
        $("#modal_produk").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempProduk = this.state.event
            // posisi index data yg akan dihapus
            let index = tempProduk.indexOf(item)
            // hapus data
            tempProduk.splice(index, 1)
            this.setState({ produk: tempProduk })
        }
    }

}
export default Produk;