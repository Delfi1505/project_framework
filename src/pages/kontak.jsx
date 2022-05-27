import React, { Component } from "react";
import Card from "../component/cardKontak";
import $ from "jquery";
import Navbar from "../component/navbar";
class Kontak extends Component {
    constructor() {
        super()
        this.state = {
            kontak: [
                {
                    outlet: "-",
                    alamat: "-",
                    telepon: "-"

                },
                {

                    outlet: "-",
                    alamat: "-",
                    telepon: "-"
                },
                {
                    outlet: "-",
                    alamat: "-",
                    telepon: "-"

                },
            ],
            action: "",
            outlet: "",
            alamat: "",
            telepon: "",
            selectedItem: null,
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.state.kontak.map((item, index) => (
                            <Card

                                outlet={item.outlet}
                                alamat={item.alamat}
                                telepon={item.telepon}
                                onEdit={() => this.Edit(item)}
                                onDrop={() => this.Drop(item)}
                            />
                        ))}
                    </div>
                    <button className="btn btn-success" onClick={() => this.Add()}>
                        Tambah Data
                    </button>

                    {/* component modal sbg control manipulasi data */}
                    <div className="modal" id="modal_kontak">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* modal header */}
                                <div className="modal-header">
                                    Form Kontak
                                </div>
                                {/* modal body */}
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>
                                        Nama Outlet

                                        <input type="text" className="form-control mb-2"

                                            value={this.state.outlet}
                                            onChange={ev => this.setState({ outlet: ev.target.value })} required />
                                        Alamat

                                        <input type="text" className="form-control mb-2"

                                            value={this.state.alamat}
                                            onChange={ev => this.setState({ alamat: ev.target.value })} required />
                                        Kontak Penjual

                                        <input type="text" className="form-control mb-2"

                                            value={this.state.telepon}
                                            onChange={ev => this.setState({ telepon: ev.target.value })} required />

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
        $("#modal_kontak").show()
        this.setState({
            outlet: "",
            alamat: "",
            telepon: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_kontak").show()
        this.setState({
            outlet: item.outlet,
            alamat: item.alamat,
            telepon: item.telepon,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempKontak = this.state.kontak
        if (this.state.action === "insert") {
            // menambah data baru
            tempKontak.push({
                outlet: this.state.outlet,
                alamat: this.state.alamat,
                telepon: this.state.telepon
            })

        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempKontak.indexOf(this.state.selectedItem)
            tempKontak[index].outlet = this.state.outlet
            tempKontak[index].judul = this.state.alamat
            tempKontak[index].penulis = this.state.telepon
        }
        this.setState({ kontak: tempKontak })
        // menutup komponen modal_buku
        $("#modal_kontak").hide()
    }
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempKontak = this.state.kontak
            // posisi index data yg akan dihapus
            let index = tempKontak.indexOf(item)
            // hapus data
            tempKontak.splice(index, 1)
            this.setState({ kontak: tempKontak })
        }
    }
}
export default Kontak;