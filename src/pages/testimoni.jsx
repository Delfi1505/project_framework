import React, { Component } from "react";
import $ from "jquery";
import Card from "../component/cardTestimoni"
import Navbar from "../component/navbar";
class Testimoni extends Component {
    constructor() {
        super()
        this.state = {
            testimoni: [
                {
                    gambar: "https://drive.google.com/file/d/1T5yHjq5-wXxJx8WyX3OaVir2hOjbyZoc/view?usp=sharing"
                },
                {
                    gambar: "https://drive.google.com/file/d/1PuBRJ6xmth_vYzZv6uvfSPCKhIDhQsEX/view?usp=sharing"
                },
            ],

            action: "",
            gambar: "",
            selectedItem: null,
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        {this.state.testimoni.map((item, index) => (
                            <Card
                                gambar={item.gambar}
                            //nama={item.nama}
                            //deskripsi={item.deskripsi}
                            //telepon={item.telepon}
                            //email={item.email}
                            //gambar={item.gambar}
                            //onEdit={ () => this.Edit(item)}
                            //onDrop={ () => this.Drop(item)}
                            />
                        ))}
                    </div>
                    {/*<button className="btn btn-success" onClick={() => this.Add()} >
                        Tambah Produk
                    </button>*/}

                    {/* component modal sbg control manipulasi data */}
                    <div className="modal" id="modal_testimoni">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* modal header */}
                                <div className="modal-body">
                                    Testimoni
                                </div>
                                {/* modal body */}
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>
                                        Gambar Produk
                                        <input type="url" className="form-control mb-2"
                                            value={this.state.gambar}
                                            onChange={ev => this.setState({ gambar: ev.target.value })}
                                            required />

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
        $("#modal_testimoni").show();
        this.setState({
            gambar: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_testimoni").show();
        this.setState({
            gambar: item.gambar,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state keranjang
        let tempTestimoni = this.state.testimoni
        if (this.state.action === "insert") {
            // menambah data baru
            tempTestimoni.push({
                gambar: this.state.gambar
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempTestimoni.indexOf(this.state.selectedItem)
            tempTestimoni[index].gambar = this.state.gambar
        }
        this.setState({ testimoni: tempTestimoni })
        // menutup komponen modal_keranjang
        $("#modal_testimoni").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempTestimoni = this.state.testimoni
            // posisi index data yg akan dihapus
            let index = tempTestimoni.indexOf(item)
            // hapus data
            tempTestimoni.splice(index, 1)
            this.setState({ testimoni: tempTestimoni })
        }
    }
}
export default Testimoni;