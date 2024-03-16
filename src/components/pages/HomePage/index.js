import React, { useEffect, useState } from "react";
import Header from "../../common/Header";

export default function HomePage() {
    const fetchPawns = async () => {
        // get all players pawns
    }

    useEffect(() => {
        fetchPawns();
    }, [])

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="container">
                    <div id="steam-list" className="very-tall-element">
                        <h2> Steam Pawns </h2>
                        <div className="table-responsive">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Steam URL</th>
                                        <th scope="col">Vocation</th>
                                        <th scope="col">Pawn Name</th>
                                        <th scope="col">Activity</th>
                                        <th className="table-level" scope="col">Level</th>
                                        <th scope="col">Inclinations</th>
                                        <th scope="col">Gender</th>
                                        <th className="table-detail" scope="col">Pawn Detail</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
