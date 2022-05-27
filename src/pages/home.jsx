import React, { Component } from 'react';

import Navbar from '../component/navbar';

class Home extends Component {

    render() {
        return (
            <div>
            <Navbar />
            <div className="container-xxl py-24 bg-dark hero-header">

                <div class="container my-4 pt-4 pb-4">
                    <h1 className="display-5 text-white animated slideInDown">Halo,</h1>
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Selamat datang di Threefiva!</h1>
                    <h2 className="display text-white mb-3">Website thrift store online</h2>
                    <p className="text-white">Laman admin</p>
                </div>
            </div>
            </div>



        )
    }
}
export default Home;