'use client';
import RainbowBabyYoshi from '../../public/images/photos/RainbowBabyYoshi.png';
import Luigi from '../../public/images/photos/Luigi.png';
import React, { useEffect } from 'react';

function SuperMarioMap() {
    useEffect(() => {
        const initMap = () => {
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 45.34164667207678, lng: -75.7537560933531 },
                zoom: 14,
                mapId: 'e771adac01caa6bd',
            });

            const markers = [
                [
                    "Freda's House!",
                    45.34141289870294,
                    -75.75297288835145,
                    RainbowBabyYoshi.src,
                    50,
                    50,
                ],
                [
                    "Trevor's House!",
                    45.33386055329746,
                    -75.75784226136572,
                    Luigi.src,
                    40,
                    40,
                ],
            ];

            markers.forEach(([title, lat, lng, icon, width, height]) => {
                const marker = new google.maps.Marker({
                    position: { lat, lng },
                    map,
                    title,
                    icon: {
                        url: icon,
                        scaledSize: new google.maps.Size(width, height),
                    },
                    animation: google.maps.Animation.DROP,
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `Welcome to ${title}`,
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });
        };

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC7ynK8kgwE99M3DsJWe_0jLG1vXQ_zFEM&map_ids=e771adac01caa6bd&callback=initMap`;
        script.async = true;
        window.initMap = initMap;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            delete window.initMap;
        };
    }, []);

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
}

export default SuperMarioMap;
