import React from 'react'

const Footer = () => {
    return (
        <div class="bottom-0 w-full bg-blueribbon-800 text-deepblush-500 p-10 text-center">
            <div class="grid grid-flow-col grid-cols-3 gap-4">
                <div>
                    <p class="font-bold">Help</p>
                    <p>FAQ</p>
                    <p>Portfolio FAQs</p>
                    <p>Contact us</p>
                    <p>Site Map</p>
                </div>
                <div>
                    <p class="font-bold">About</p>
                    <p>About us</p>
                    <p>Who we are</p>
                    <p>Policies</p>
                    <p>Partnerships</p>
                    <p>Accreditation</p>
                </div>

                <div>
                    <p class="font-bold">My Account</p>
                    <p>Subscribe</p>
                    <p>Update Details</p>
                    <p>Update Email</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
