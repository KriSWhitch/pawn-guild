import React from "react";
import { routes } from "../../../routing/routeConsts";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-none d-md-flex">
                <div className="navbar-collapse collapse w-100 dual-collapse2">
                    <ul className="navbar-nav mr-auto ml-5">
                        <li className="nav-item">
                            <a className="nav-link" href={routes.addPawn}>Add pawn</a>
                        </li>
                    </ul>
                </div>
                <a href={routes.home}><h2 className="navbar-text text-warning">Pawn Guild</h2></a>
                <div className="navbar-collapse collapse w-100 dual-collapse2">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <a className="nav-link" href={routes.faq}>FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

