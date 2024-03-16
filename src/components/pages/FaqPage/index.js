import React, { useEffect, useState } from "react";
import Header from "../../common/Header";

export default function FaqPage() {

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="container px-1">
                    <h2 id="faq-header">FAQ</h2>
                    <ul className="pb-3">
                        <li>
                            <label>Why Pawn Guild?</label>
                            <p>Rift Crystals (RC) and community. RC is a valuable resource that can be hard to get,
                                and the best way to get them is from having your pawn rented. By listing your pawn here,
                                you expose your pawn to several communities, and can give back by hiring other pawns on Pawn Guild.</p>
                        </li>
                        <li>
                            <label>How do I find pawns listed on Pawn Guild in Dragon’s Dogma?</label>
                            <p>The most common way is to send a friend request to the pawn’s owner. Friend’s pawns are easier to find,
                                and also cost no Rift Crystals. The info on the pawn’s profile should be sufficient to find it,
                                especially if the pawn has been updated recently.</p>
                        </li>
                        <li>
                            <label>What happens when a pawn I rented dies?</label>
                            <p>This is referred to as “body bagging”. The pawn is sent back to the owner with 3 star ratings,
                                and no gift, but they do still get Rift Crystals.</p>
                        </li>
                        <li>
                            <label>What should I do if I body bagged a pawn?</label>
                            <p>Don’t worry too much! It happens. However, rehiring the pawn so you can release it with proper ratings
                                can be nice. This would also allow you to release the pawn with a gift and ratings.</p>
                        </li>
                        <li>
                            <label>Should I send a gift when I release pawns?</label>
                            <p>It’s up to you! You aren’t obligated to send gifts, but it’s a nice way to show appreciation for a great pawn.</p>
                        </li>
                        <li>
                            <label>What are some good gifts to give?</label>
                            <p>Depending on level, some items may be more useful. For late game players, BBI gear is the go to high quality gift.
                                Otherwise items such as Ne’er Do Parts, Wakestones, and periapts are nice to receive. For middle game players, items that sell for lots of gold (wakestones) or high quality consumables are nice to receive, such as Periapts or panaceas. For early game players, an upgrade to a pawn’s gear, ferrystones, nice to have curatives (spring water) are nice.</p>
                        </li>
                        <li>
                            <label>Should I hire someone's pawn if they hired mine?</label>
                            <p>Just like sending a gift, it can be a nice way to thank someone since hiring pawns gives the player Rift Crystals.
                                You are not obligated to return pawn hires.</p>
                        </li>
                    </ul>
                </div>
                <div class="container px-1" id="faq-container">
                    <h2 id="faq-header">Notes from Pawn Guild</h2>
                    <ul class="pb-3">
                        <li>
                            <label>Found an error? Have any feedback? Please reach out!</label>
                            <p> Leave a comment at <a href="https://github.com/KriSWhitch/pawn-guild">https://github.com/KriSWhitch/pawn-guild</a>
                                &nbsp;You can also try <b>kriswhitch</b> on discord, but sometimes I change my username.
                            </p>
                            <label>Want to work on Pawn Guild?</label>
                            <p> Please do! There's always improvements to make. Anyone should be able to open pull requests on the&nbsp; 
                                <a href="https://github.com/KriSWhitch/pawn-guild">Pawn Guild GitHub</a>, 
                                and if you have any questions feel free to reach out on discord. 
                            </p>
                        </li>
                        <li>
                            <label>Pawn Guild will never send you emails</label>
                            <p> With the exceptions being confirmation emails and password resets.</p>
                        </li>
                        <li>
                            <label>Pawn Guild does not share your email with any 3rd parties </label>
                            <p>
                                Only I (the Pawn Guild dev) or people I select to be moderators have access to your emails.
                            </p>
                        </li>
                        <li>
                            <label>Data Privacy</label>
                            <p>
                                Aside from emails to avoid bots, I do not go out of my way to gather any information from my users.
                                The only information that is kept are things that are automatically logged by my webserver nginx,
                                which includes IP address and what URL's you access. I do not do any analysis on this information or
                                share it with anyone. It exists solely for debugging in case of server errors.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>)
}