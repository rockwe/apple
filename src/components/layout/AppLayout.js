import React, {Component} from 'react';
import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar";

class AppLayout extends Component {


    render() {
        return (
            <div id="app">
                <div className="main-wrapper main-wrapper-1">
                    <Header />
                    <SideBar/>
                    <div className="main-content" id='main-content'>
                        <section className="section">
                            {this.props.children}
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="footer-left">
                            Copyright &copy; { (new Date()).getUTCFullYear() } <div className="bullet"> </div> Design By <a
                            href="https://nauval.in/">Apple</a>
                        </div>
                        <div className="footer-right">
                            1.0.0
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default AppLayout;