/* eslint-disable @next/next/no-img-element */
'use client';

import { Tab } from '@headlessui/react';
import SuperMarioMap from '../components/Mario';

const products = [{
    name: 'Resume Management Web App',
    link: 'https://github.com/freda1874/ResumeManagement-dotnet-typescript',
    images: [
        { id: 1, name: 'resume', src: '/images/photos/ResumeApp/DB.png' },
        { id: 2, name: 'resume', src: '/images/photos/ResumeApp/4.png' },
        { id: 4, name: 'resume', src: '/images/photos/ResumeApp/resume1.png' },
        { id: 5, name: 'resume', src: '/images/photos/ResumeApp/darkmode.png' },
        { id: 6, name: 'resume', src: '/images/photos/ResumeApp/8.png' },
        { id: 7, name: 'resume', src: '/images/photos/ResumeApp/9.png' },
    ],
    description: `<p>A full-stack CRUD application using React, ASP.NET Core 7 WebAPI, and TypeScript to manage resumes. The application allows users to create new companies and job listings, upload resumes, apply for positions, and download resumes locally. 
The application supports dark mode for enhanced user experience and is responsive to screen size changes.</p>`,
    details: [{
        name: 'Languages and Tools',
        items: ['React 18', 'ASP.NET', 'Core7 WebAPI', 'TypeScript', 'Entity Framework Core']
    }],
},
{
    name: 'Encrypted Auth Web App',
    link: 'https://user-authentication-app-x2ya.onrender.com/',
    images: [
        { id: 1, name: 'screenshot', src: '/images/photos/AuthApp/Auth1.png' },
        { id: 2, name: 'screenshot', src: '/images/photos/AuthApp/Auth10.png' },
        { id: 4, name: 'screenshot', src: '/images/photos/AuthApp/Auth5.png' },
        { id: 5, name: 'screenshot', src: '/images/photos/AuthApp/Auth4.png' },
        { id: 6, name: 'screenshot', src: '/images/photos/AuthApp/Auth9.png' },
    ],
    description: `<p>A comprehensive solution for secure user registration, login, and password reset. On login, a JWT token is issued with a 1-hour expiry, and passwords are encrypted in the database. The RESTful API handles frontend communication, while Tailwind CSS ensures responsive design across all screen sizes.</p>`,
    details: [{
        name: 'Languages and Tools',
        items: ['Express.js', 'Bcrypt', 'Nodemailer', 'JWT', 'MongoDB', 'ReactJS (Vite)', 'Tailwind CSS']
    }],
}, {
    name: 'E-Commerce Scraping Web App',
    link: 'https://github.com/freda1874/eCommerce-GoogleAPI-WebApp',
    images: [
        { id: 1, name: 'shopful', src: '/images/photos/shopful/eCom2.png' },
        { id: 2, name: 'shopful', src: '/images/photos/shopful/eCom1.png' },
        { id: 4, name: 'shopful', src: '/images/photos/shopful/eCom3.png' },
        { id: 5, name: 'shopful', src: '/images/photos/shopful/eCom4.png' }
    ],
    description: `<p>An intuitive full-stack e-commerce app that uses the Google API to scrape and display real-time product listings from local shops based on user needs. The app updates user geolocation every 5 minutes, combining location data with user preferences to create a personalized shopping experience.</p>`,
    details: [{ name: 'Languages and Tools', items: ['Express.js', 'MongoDB', 'ReactJS', 'Tailwind CSS', 'Google API'] }],
},
{
    name: 'PeerTutor Management App',
    link: 'https://github.com/freda1874/PeerTutor-Management-System',
    images: [
        { id: 1, name: 'PeerTutor', src: '/images/photos/PeerTutor/Java1.png' },
        { id: 2, name: 'PeerTutor', src: '/images/photos/PeerTutor/Java2.png' },
    ],
    description: `<p>A PeerTutor Management Backend System built with Java EE,  offering encrypted user credentials, role-based access control, JPA for object-relational mapping, session beans for business logic, and RESTful services for backend resource exposure. Last but not least, Comprehensive JUnit tests ensure system correctness.</p>`,
    details: [{
        name: 'Languages and Tools', items: ['Java EE', 'JPA', 'JSON Serializer', 'Encryption']
    }],
}, {
    name: 'Musician Search Android App',
    link: 'https://github.com/freda1874/Mobile-Graphical-Interface',
    images: [
        { id: 1, name: 'Musician', src: '/images/photos/Android/Android1.png' },
        { id: 2, name: 'Musician', src: '/images/photos/Android/Android2.png' },
        { id: 3, name: 'Musician', src: '/images/photos/Android/Android3.png' },
        { id: 4, name: 'Musician', src: '/images/photos/Android/Android4.png' },
    ],
    description: `<p>Allows users to search for their favorite musicians' top tracks on mobile, listen to songs, and create personalized collections that can be managed easily.</p>`,
    details: [{
        name: 'Languages and Tools', items: ['Java', 'Android Studio', 'DeerSong API', 'MySQL']
    }],
},
{
    name: 'Super Mario World Around Me',
    link: 'https://freda1874.github.io/MarioStyleGoogleMap/',
    component: <SuperMarioMap className="w-[800px]" />,
    description: `<p>A customized Google Map with interactive markers using JavaScript and Google Maps API.</p>`,
    details: [{ name: 'Languages and Tools', items: ['Google Maps API', 'JavaScript'] }],
},
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SingleProject() {
    return (
        <div className="w-full bg-white">
            {products.map((product, index) => (
                <div key={product.name} className="mx-2 w-full px-4 py-6 sm:px-6 lg:px-8">
                    <div className="lg:-mx-36 lg:grid lg:grid-cols-2 lg:items-between lg:gap-x-8">
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            <div className="mx-auto mt-6 w-full sm:block">
                                {product.component ? (
                                    product.component
                                ) : (
                                    <Tab.List className="flex overflow-x-auto gap-4">
                                        {product.images.map((image) => (
                                            <Tab
                                                key={image.id}
                                                className="relative flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 border border-gray-300"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="absolute inset-0 overflow-hidden rounded-md">
                                                            <img
                                                                src={image.src}
                                                                alt={image.alt}
                                                                className={`h-full w-full object-cover ${selected ? 'scale-100' : 'scale-75'} transition-transform`}
                                                            />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                )}
                            </div>

                            {!product.component && (
                                <Tab.Panels className="w-full ">
                                    {product.images.map((image) => (
                                        <Tab.Panel key={image.id}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-[900px] h-full object-cover sm:rounded-lg"
                                            />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            )}
                        </Tab.Group>

                        <div className="mt-10 w-full px-4 sm:mt-10 sm:px-0 lg:mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                            <div className="mt-6">
                                <div
                                    className="space-y-6 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>

                            <section aria-labelledby="details-heading" className="mt-6">
                                <div className="divide-y divide-gray-200 border-t">
                                    {product.details.map((detail) => (
                                        <div key={detail.name} className="py-2">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {detail.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">
                                                {detail.items.join(', ')}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <form className="mt-6">
                                <div className="mt-6 flex">
                                    <button
                                        type="button"
                                        onClick={() => window.open(product.link, '_blank')}
                                        className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        View Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {index < products.length - 1 && (
                        <hr className="my-8 border-gray-300" />
                    )}
                </div>
            ))}
        </div>
    );
}
