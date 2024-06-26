'use client'
import InfoItem from "@/app/components/ContactUS/InfoItem";
/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import HeaderTop from "@/app/components/HeaderTop/HeaderTop"
import Menu from "@/app/components/Menu/Menu"
import Nav from "@/app/components/Navigation/Nav"
import React from 'react';
import ContactUs from "@/app/components/ContactUS/Contact";



export default function Contact() {

    return (
        <div>
            <HeaderTop text='Store Location: Lincoln- 344, Illinois, Chicago, USA'
                icon="/icons/MapPin.svg"
                in='Sign In'
                up='Sign up'
                mode="fill"

            />
            <Nav />
            <Menu />
            <ContactUs/>
            


        </div>
    )
}