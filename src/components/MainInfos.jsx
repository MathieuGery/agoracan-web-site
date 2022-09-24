import Head from "next/head";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { EnvelopeIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

const metrics = [
  { id: 1, icon: MapPinIcon, emphasis: '12 Rue de Cannes, ', rest: '5900 Lille' },
  { id: 2, icon: PhoneIcon, emphasis: '+33 8 89 76 54 32', rest: '' },
  { id: 3, icon: EnvelopeIcon, emphasis: 'mailtest@agoracan.com', rest: '' }
]

mapboxgl.accessToken =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESSTOKEN;

export default function MainInfos() {
    const [pageIsMounted, setPageIsMounted] = useState(false)

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "my-map",
            center: [3.046226, 50.605985],
            zoom: 16,
            style: "mapbox://styles/mapbox/dark-v10",
            cooperativeGestures: true
        });
        const marker1 = new mapboxgl.Marker({ color: '#CE5D35' })
            .setLngLat([3.046226, 50.605985])
            .addTo(map);
    }, [])

    return (
        <div className=" rounded-xl bg-secondary-900 py-2 mt-8 sm:mx-8 mb-8">
            <div className="relative mb-4 xl:col-start-1 m-6">
                <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                    The Best Location for your business
                </p>
            </div>
            <div className="m-7 shadow-2xl">
                <div id="my-map" style={{ height: 500, width: "100%" }}/>
            </div>
            <div className="mt-12 mx-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-3 mb-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <item.icon className="h-10 w-10 text-primary-600" />
                {/* <span className="block text-2xl font-bold text-primary-600">{item.stat}</span> */}
                <span className="mt-1 block text-base text-secondary-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
    )
}
