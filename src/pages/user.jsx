import React, {Component} from "react";
import Card from "../component/cardUser";
import $ from "jquery";
import Navbar from "../component/navbar";
class User extends Component {
    constructor(){
       super()
       this.state = {
            user: [
                {
                    nama : "-",
                    alamat : "-",
                    telepon : "-",
                    email : ""
                    //gambar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUJB7Y9CxtpITQOyJDULIBokFbFTLOXpOOw&usqp=CAU"
                },
                {
                    nama : "-",
                    alamat : "-",
                    telepon : "-",
                    email : ""
                    //gambar : "https://asset.kompas.com/crops/nlsC9WFdZCXyzNs4CiPrfyxL9MM=/0x120:1024x803/750x500/data/photo/2021/09/29/6153fc3317cc0.jpeg"
                },
                {
                    nama : "-",
                    alamat : "-",
                    telepon : "-",
                    email : ""
                    //gambar : "https://koropak.co.id/storage/img/cover/gubernur-jawa-barat-tebar-benih-ikan.jpg"
                },
           ],

            action: "",
            nama: "",
            alamat: "",
            telepon: "",
            email : "",
            //gambar: "",
            selectedItem: null,
       } 
    }
    render(){
        return (
            <div> 
                <Navbar /> 
            <div className="container">
                <div className="row">
                    {this.state.user.map( (item, index) => (
                        <Card
                        nama={item.nama}
                        alamat={item.alamat}
                        telepon={item.telepon}
                        email={item.email}
                        //gambar={item.gambar}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => this.Add()} >
                        Tambah User
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_user">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-body">
                                Form Tambah User
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                            <form onSubmit={ev => this.Save(ev)}>
                                Nama User :
                                <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ ev => this.setState({nama: ev.target.value}) } required />
                                
                                Alamat :
                                <input type="text" className="form-control mb-2"
                                    value={this.state.alamat}
                                    onChange={ ev => this.setState({alamat : ev.target.value}) } required />

                                Telepon :
                                <input type="text" className="form-control b-2"
                                    value={this.state.telepon}
                                    onChange={ ev => this.setState({telepon: ev.target.value}) } required />
                                
                                Email :
                                <input type="text" className="form-control b-2"
                                    value={this.state.email}
                                    onChange={ ev => this.setState({email: ev.target.value}) } required />

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
        $("#modal_user").show();
        this.setState({
            nama: "",
            alamat: "",
            telepon: "",
            email: "",
            //gambar: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_user").show();
        this.setState({
        nama: item.nama,
        alamat: item.alamat,
        telepon: item.telepon,
        email: item.email,
        //gambar: item.gambar,
        action: "update",
        selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state event
        let tempUser = this.state.user
        if (this.state.action === "insert") {
        // menambah data baru
        tempUser.push({
        nama: this.state.nama,
        alamat: this.state.alamat,
        telepon: this.state.telepon,
        email: this.state.email
        //gambar: this.state.gambar,
        })
    }else if(this.state.action === "update"){
        // menyimpan perubahan data
        let index = tempUser.indexOf(this.state.selectedItem)
        tempUser[index].nama = this.state.nama
        tempUser[index].alamat = this.state.alamat
        tempUser[index].telepon = this.state.telepon
        tempUser[index].email = this.state.email
        //tempEvent[index].gambar = this.state.gambar
    }
    this.setState({user : tempUser})
    // menutup komponen modal_event
    $("#modal_user").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        // menghapus data
        let tempUser = this.state.user
        // posisi index data yg akan dihapus
        let index = tempUser.indexOf(item)
        // hapus data
        tempUser.splice(index, 1)
        this.setState({user: tempUser})
        }
    }

}
export default User;