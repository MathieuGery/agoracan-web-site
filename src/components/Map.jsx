import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";


mapboxgl.accessToken =
    "pk.eyJ1IjoibWluZWdlZWtiYXJiYXJpYW4iLCJhIjoiY2t5ZWphN3c0MTllcjJ2bjBjdjVpam1reiJ9.ItIVG9NwKtvKVWAuvvMlyQ";

export default function Map() {
    const [pageIsMounted, setPageIsMounted] = useState(false)

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "my-map",
            center: [3.046226, 50.605985],
            zoom: 18,
            style: "mapbox://styles/mapbox/dark-v10",
        });
        const marker1 = new mapboxgl.Marker({ color: '#CE5D35' })
            .setLngLat([3.046226, 50.605985])
            .addTo(map);
    }, [])

    return (
        <div className=" rounded-xl bg-secondary-900 py-2 mt-8 mx-12">
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            <div id="my-map" style={{ height: 500, width: "100%" }} />
        </div>
    )
}
